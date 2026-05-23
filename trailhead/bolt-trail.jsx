// Lightning bolt cursor trail + ambient particles on canvas.
// Optimised: RAF only runs while bolts are alive; particles use a slow timer
// instead of a per-frame loop so the canvas stays idle most of the time.
function BoltTrail({ enabled = true, showCursor = true }) {
  const canvasRef = React.useRef(null);
  const dotRef    = React.useRef(null);
  const stateRef  = React.useRef({
    mouse: { x: -200, y: -200 },
    bolts: [],
    particles: [],
    raf: 0,
    lastSpawn: 0,
    running: false,
  });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width  = innerWidth  * dpr;
      canvas.height = innerHeight * dpr;
      canvas.style.width  = innerWidth  + "px";
      canvas.style.height = innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Fewer ambient particles (18 → was 28)
    const N = 18;
    for (let i = 0; i < N; i++) {
      stateRef.current.particles.push({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        vx: (Math.random() - .5) * .18,
        vy: -.04 - Math.random() * .12,
        r:  Math.random() * 1.4 + .4,
        a:  Math.random() * .4 + .15,
        hue: 200 + Math.random() * 30,
      });
    }

    // Build lightning bolt path once
    const boltPath = new Path2D("M3 -8 L-3 1 L0 1 L-2 8 L4 -1 L1 -1 Z");

    // ── RAF loop — only active while bolts exist ──────────
    const tick = () => {
      const s = stateRef.current;
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      // Ambient particles — always draw so they stay alive during bolt animation
      for (const p of s.particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.y < -10) { p.y = innerHeight + 10; p.x = Math.random() * innerWidth; }
        if (p.x < -10)              p.x = innerWidth  + 10;
        if (p.x > innerWidth  + 10) p.x = -10;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue},90%,60%,${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Bolts
      for (let i = s.bolts.length - 1; i >= 0; i--) {
        const b = s.bolts[i];
        b.life++;
        const t = b.life / b.ttl;
        if (t >= 1) { s.bolts.splice(i, 1); continue; }
        const alpha = 1 - t;
        ctx.save();
        ctx.translate(b.x, b.y + t * 16);
        ctx.rotate(b.rot);
        ctx.scale(b.size / 8 * (1 - t * .3), b.size / 8 * (1 - t * .3));
        ctx.shadowBlur    = 14 * alpha;
        ctx.shadowColor   = `rgba(0,161,224,${alpha})`;
        ctx.fillStyle     = `rgba(0,161,224,${alpha * .95})`;
        ctx.fill(boltPath);
        ctx.shadowBlur    = 0;
        ctx.fillStyle     = `rgba(255,255,255,${alpha * .8})`;
        ctx.scale(.5, .5);
        ctx.fill(boltPath);
        ctx.restore();
      }

      // Keep looping only while bolts remain; otherwise cancel
      if (s.bolts.length > 0) {
        s.raf = requestAnimationFrame(tick);
      } else {
        s.running = false;
        s.raf = 0;
        // Clear canvas so the stale particle frame doesn't linger
        ctx.clearRect(0, 0, innerWidth, innerHeight);
      }
    };

    // Slow particle-only ticker (runs at ~15fps, invisible cost)
    const particleTick = () => {
      const s = stateRef.current;
      if (s.running) return; // bolt loop is handling it
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (const p of s.particles) {
        p.x += p.vx * 2; p.y += p.vy * 2;
        if (p.y < -10) { p.y = innerHeight + 10; p.x = Math.random() * innerWidth; }
        if (p.x < -10)              p.x = innerWidth  + 10;
        if (p.x > innerWidth  + 10) p.x = -10;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue},90%,60%,${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    const slowTimer = setInterval(particleTick, 66); // ~15fps

    // ── Pointer handler ───────────────────────────────────
    const onMove = (e) => {
      const s = stateRef.current;
      s.mouse.x = e.clientX;
      s.mouse.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
        const isInteractive = e.target?.closest("a,button,.hoverable,input,textarea,[data-cursor='hover']");
        dotRef.current.classList.toggle("hover", !!isInteractive);
      }

      if (!enabled) return;
      const now = performance.now();
      if (now - s.lastSpawn < 30) return; // throttle spawning to ~33fps
      s.lastSpawn = now;
      s.bolts.push({
        x:    e.clientX + (Math.random() - .5) * 8,
        y:    e.clientY + (Math.random() - .5) * 8,
        life: 0,
        ttl:  32 + Math.random() * 18,
        size: 7 + Math.random() * 5,
        rot:  (Math.random() - .5) * .6,
      });
      if (s.bolts.length > 60) s.bolts.shift(); // cap bolt count

      // Kick off RAF only if not already running
      if (!s.running) {
        s.running = true;
        s.raf = requestAnimationFrame(tick);
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(stateRef.current.raf);
      clearInterval(slowTimer);
      window.removeEventListener("resize",       resize);
      window.removeEventListener("pointermove",  onMove);
    };
  }, [enabled]);

  return (
    <>
      <canvas id="bolt-canvas" ref={canvasRef}></canvas>
      {showCursor && (
        <div className="cursor-trail-badge" ref={dotRef}>
          <img src="assets/Cursor.svg" alt="" style={{ width:"100%", height:"100%", display:"block", pointerEvents:"none" }} />
        </div>
      )}
    </>
  );
}

Object.assign(window, { BoltTrail });

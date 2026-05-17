// Lightning bolt cursor trail + ambient particles on canvas.
function BoltTrail({ enabled = true, showCursor = true }) {
  const canvasRef = React.useRef(null);
  const dotRef = React.useRef(null);
  const stateRef = React.useRef({
    mouse: { x: -200, y: -200, prev: { x: -200, y: -200 } },
    bolts: [],
    particles: [],
    raf: 0,
    lastSpawn: 0,
  });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      canvas.style.width = innerWidth + "px";
      canvas.style.height = innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", () => { ctx.setTransform(1,0,0,1,0,0); resize(); });

    // Ambient drifting particles
    const N = 28;
    for (let i = 0; i < N; i++) {
      stateRef.current.particles.push({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        vx: (Math.random() - .5) * .2,
        vy: -.05 - Math.random() * .15,
        r: Math.random() * 1.6 + .4,
        a: Math.random() * .5 + .2,
        hue: 200 + Math.random() * 30,
      });
    }

    const onMove = (e) => {
      const s = stateRef.current;
      s.mouse.prev = { ...s.mouse };
      s.mouse.x = e.clientX;
      s.mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
      // detect hover for cursor enlarge
      const t = e.target;
      const isInteractive = t && (t.closest("a,button,.hoverable,input,textarea,[data-cursor='hover']"));
      if (dotRef.current) dotRef.current.classList.toggle("hover", !!isInteractive);

      // spawn bolt trail (throttled)
      if (enabled) {
        const now = performance.now();
        if (now - s.lastSpawn > 24) {
          s.lastSpawn = now;
          s.bolts.push({
            x: e.clientX + (Math.random() - .5) * 8,
            y: e.clientY + (Math.random() - .5) * 8,
            life: 0,
            ttl: 36 + Math.random() * 20,
            size: 8 + Math.random() * 6,
            rot: (Math.random() - .5) * .6,
          });
          if (s.bolts.length > 80) s.bolts.shift();
        }
      }
    };
    window.addEventListener("pointermove", onMove);

    // Build lightning bolt path once
    const boltPath = new Path2D("M3 -8 L-3 1 L0 1 L-2 8 L4 -1 L1 -1 Z");

    const tick = () => {
      const s = stateRef.current;
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      // particles
      for (const p of s.particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.y < -10) { p.y = innerHeight + 10; p.x = Math.random() * innerWidth; }
        if (p.x < -10) p.x = innerWidth + 10;
        if (p.x > innerWidth + 10) p.x = -10;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 60%, ${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // bolts
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
        // glow
        ctx.shadowBlur = 14 * alpha;
        ctx.shadowColor = `rgba(0,161,224,${alpha})`;
        ctx.fillStyle = `rgba(0,161,224,${alpha * .95})`;
        ctx.fill(boltPath);
        // hot core
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(255,255,255,${alpha * .8})`;
        ctx.scale(.5, .5);
        ctx.fill(boltPath);
        ctx.restore();
      }

      stateRef.current.raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(stateRef.current.raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, [enabled]);

  return (
    <>
      <canvas id="bolt-canvas" ref={canvasRef}></canvas>
      {showCursor && (
        <div className="cursor-trail-badge" ref={dotRef}>
          <img src="assets/Cursor.svg" alt="Cursor" style={{ width: '100%', height: '100%', display: 'block', pointerEvents: 'none' }} />
        </div>
      )}
    </>
  );
}

Object.assign(window, { BoltTrail });

// FadingStars — Interactive Blue Cosmic Fading Stars background
// Inspired by /Users/yusufkhan/Downloads/fading-stars-react (http://localhost:5173)
// Features upward streaming starlight, velocity-based cursor bending & thrust, click supernovas, and nebula haze.

const { useEffect, useRef, forwardRef, useImperativeHandle } = React;

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const rand = (a, b) => a + Math.random() * (b - a);

function hexToRgb(hex) {
  const h = (hex || "#020817").replace("#", "");
  const full = h.length === 3 ? h.split("").map(x => x + x).join("") : h;
  const n = parseInt(full, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function rgba(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r},${g},${b},${clamp(alpha, 0, 1)})`;
}

const FadingStars = forwardRef(function FadingStars({
  enabled = true,
  colors = ["#1677FF", "#C8F2FF"],
  backgroundColor = "transparent", // transparent allows theme gradient through, or '#020817'
  mode = "auto",
  direction = "up",
  spread = 150,
  focus = 0.35,
  originOffset = 0.18,
  originShift = 0,
  count = 620,
  speed = 0.18,
  speedVariance = 0.72,
  acceleration = 1.15,
  trailLength = 0.52,
  trailFade = 1.55,
  lineWidth = 1,
  starSize = 2.4,
  twinkle = 0.42,
  fadeIn = 0.06,
  fadeOut = 0.3,
  depth = 0.62,
  glow = 0.8,
  intensity = 1.15,
  grain = 0.3,
  interactive = true,
  thrust = 1.35,
  burst = 88,
  paused = false,
  quality = 1,
  className = "",
  style = {},
  children = null
}, ref) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const apiRef = useRef({ burst: () => {} });
  const settingsRef = useRef({});
  settingsRef.current = {
    enabled, colors, backgroundColor, mode, direction, spread, focus,
    originOffset, originShift, count, speed, speedVariance, acceleration,
    trailLength, trailFade, lineWidth, starSize, twinkle, fadeIn, fadeOut,
    depth, glow, intensity, grain, interactive, thrust, burst, paused, quality
  };

  useImperativeHandle(ref, () => ({
    burst: (x, y) => apiRef.current.burst(x, y)
  }), []);

  useEffect(() => {
    // Expose global starburst trigger so any button can invoke it
    window.burstStars = (x, y) => apiRef.current.burst(x, y);
    return () => {
      if (window.burstStars === apiRef.current.burst) {
        delete window.burstStars;
      }
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0, height = 0, dpr = 1, raf = 0, last = 0, elapsed = 0;
    let stars = [], bursts = [];
    let pointer = { x: 0, y: 0, lastX: 0, lastY: 0, velocity: 0, active: false };
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const getOrigin = () => {
      const s = settingsRef.current;
      const off = Math.min(width, height) * s.originOffset;
      if (s.direction === "up") return { x: width * (0.5 + s.originShift * 0.5), y: height + off };
      if (s.direction === "down") return { x: width * (0.5 + s.originShift * 0.5), y: -off };
      if (s.direction === "left") return { x: width + off, y: height * (0.5 + s.originShift * 0.5) };
      if (s.direction === "right") return { x: -off, y: height * (0.5 + s.originShift * 0.5) };
      return { x: width * (0.5 + s.originShift * 0.5), y: height * 0.5 };
    };

    const angleFor = () => {
      const s = settingsRef.current;
      if (s.direction === "out") return rand(0, Math.PI * 2);
      const base = ({ up: -Math.PI / 2, down: Math.PI / 2, left: Math.PI, right: 0 })[s.direction] ?? -Math.PI / 2;
      const fan = (s.spread * Math.PI / 180) / 2;
      const bias = (Math.random() * 2 - 1) * fan * (1 - s.focus * 0.75);
      return base + bias;
    };

    const makeStar = (initial = false) => {
      const s = settingsRef.current;
      const angle = angleFor();
      const origin = getOrigin();
      const maxDistance = Math.hypot(width, height) * 1.25;
      const distance = initial ? rand(0, maxDistance) : rand(-maxDistance * 0.12, 0);
      const far = Math.random() < s.depth;
      return {
        x: origin.x + Math.cos(angle) * distance,
        y: origin.y + Math.sin(angle) * distance,
        angle,
        distance,
        maxDistance,
        baseSpeed: s.speed * rand(1 - s.speedVariance, 1 + s.speedVariance),
        depthScale: far ? rand(0.25, 0.62) : rand(0.72, 1.25),
        size: rand(0.45, 1.35),
        phase: rand(0, Math.PI * 2),
        age: initial ? rand(0.1, 1) : 0,
      };
    };

    const resetStars = () => {
      const s = settingsRef.current;
      const target = Math.round(s.count * (width * height / (1280 * 720)) * s.quality);
      stars = Array.from({ length: clamp(target, 40, 2500) }, () => makeStar(true));
    };

    const resize = () => {
      width = Math.max(1, window.innerWidth || root.clientWidth || 300);
      height = Math.max(1, window.innerHeight || root.clientHeight || 300);
      dpr = Math.min(window.devicePixelRatio || 1, 2) * clamp(settingsRef.current.quality, 0.25, 1);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      resetStars();
      draw(0, true);
    };

    const launchBurst = (x, y) => {
      const amount = Math.max(0, settingsRef.current.burst);
      if (!amount) return;
      const bx = x !== undefined ? x : width / 2;
      const by = y !== undefined ? y : height * 0.5;
      const shell = [];
      for (let i = 0; i < amount; i++) {
        const a = (i / amount) * Math.PI * 2 + rand(-0.045, 0.045);
        const v = rand(80, 280);
        shell.push({
          x: bx,
          y: by,
          vx: Math.cos(a) * v,
          vy: Math.sin(a) * v,
          life: 0,
          maxLife: rand(0.8, 1.6),
          size: rand(0.7, 2.0),
          phase: rand(0, 6)
        });
      }
      bursts.push(...shell);
    };
    apiRef.current.burst = launchBurst;

    const onPointerMove = e => {
      const x = e.clientX, y = e.clientY;
      const dx = x - pointer.lastX, dy = y - pointer.lastY;
      pointer.velocity = clamp(Math.hypot(dx, dy) / 32, 0, 2.8);
      pointer.x = x; pointer.y = y; pointer.lastX = x; pointer.lastY = y; pointer.active = true;
    };

    const onPointerLeave = () => { pointer.active = false; };

    const onClick = e => {
      if (!settingsRef.current.interactive) return;
      launchBurst(e.clientX, e.clientY);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("click", onClick, { passive: true });

    const draw = (dt, still = false) => {
      const s = settingsRef.current;
      if (s.backgroundColor && s.backgroundColor !== "transparent") {
        const bg = hexToRgb(s.backgroundColor);
        ctx.fillStyle = `rgb(${bg.r},${bg.g},${bg.b})`;
        ctx.fillRect(0, 0, width, height);
      } else {
        ctx.clearRect(0, 0, width, height);
      }

      const dark = true;
      const glowMode = s.mode === "glow" || (s.mode === "auto" && dark);
      const trailColor = s.colors[0] || "#1677FF";
      const headColor = s.colors[1] || "#C8F2FF";
      const origin = getOrigin();
      const diagonal = Math.hypot(width, height);
      const thrustBoost = s.interactive && pointer.active ? pointer.velocity * s.thrust : 0;
      pointer.velocity *= Math.exp(-dt * 2.8);

      for (const star of stars) {
        const progress = clamp(star.distance / star.maxDistance, 0, 1);
        const velocity = star.baseSpeed * star.depthScale * (1 + s.acceleration * progress) * (1 + thrustBoost);
        const travel = velocity * diagonal * dt;
        if (!still) {
          star.distance += travel;
          star.x += Math.cos(star.angle) * travel;
          star.y += Math.sin(star.angle) * travel;
          star.age += dt;
        }
        const p = clamp(star.distance / star.maxDistance, 0, 1);
        const inAlpha = s.fadeIn <= 0 ? 1 : clamp(p / s.fadeIn, 0, 1);
        const outAlpha = s.fadeOut <= 0 ? 1 : clamp((1 - p) / s.fadeOut, 0, 1);
        const shimmer = 1 - s.twinkle * 0.5 + Math.sin(elapsed * 4 + star.phase) * s.twinkle * 0.5;
        const alpha = clamp(inAlpha * outAlpha * star.depthScale * shimmer * s.intensity, 0, 1);
        const tail = Math.max(5, diagonal * s.trailLength * (velocity / Math.max(0.01, s.speed)) * 0.08);
        const tx = star.x - Math.cos(star.angle) * tail;
        const ty = star.y - Math.sin(star.angle) * tail;
        const grad = ctx.createLinearGradient(tx, ty, star.x, star.y);
        grad.addColorStop(0, rgba(trailColor, 0));
        grad.addColorStop(clamp(1 - 0.58 / Math.max(0.35, s.trailFade), 0.18, 0.82), rgba(trailColor, alpha * 0.38));
        grad.addColorStop(1, rgba(headColor, alpha));
        ctx.lineCap = "round";
        ctx.lineWidth = Math.max(0.35, s.lineWidth * star.depthScale);
        ctx.strokeStyle = grad;
        ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(star.x, star.y); ctx.stroke();
        const radius = s.starSize * star.size * (0.5 + star.depthScale * 0.5);
        if (radius > 0.1 && alpha > 0.02) {
          if (glowMode && s.glow > 0) {
            ctx.shadowBlur = radius * 5 * s.glow;
            ctx.shadowColor = rgba(headColor, alpha * 0.8);
          }
          ctx.fillStyle = rgba(headColor, alpha);
          ctx.beginPath(); ctx.arc(star.x, star.y, radius, 0, Math.PI * 2); ctx.fill();
          ctx.shadowBlur = 0;
        }
        if (!still && (star.distance > star.maxDistance * 1.15 || (alpha < 0.001 && star.distance > star.maxDistance))) {
          Object.assign(star, makeStar(false));
        }
      }

      if (!still) {
        bursts = bursts.filter(p => p.life < p.maxLife);
        for (const p of bursts) {
          p.life += dt;
          p.x += p.vx * dt; p.y += p.vy * dt;
          p.vx *= Math.pow(0.35, dt); p.vy *= Math.pow(0.35, dt);
          const a = clamp(1 - p.life / p.maxLife, 0, 1);
          ctx.strokeStyle = rgba(headColor, a * 0.8);
          ctx.lineWidth = p.size;
          ctx.beginPath(); ctx.moveTo(p.x - p.vx * 0.018, p.y - p.vy * 0.018); ctx.lineTo(p.x, p.y); ctx.stroke();
          if (glowMode && s.glow > 0) { ctx.shadowBlur = 8 * s.glow; ctx.shadowColor = headColor; }
          ctx.fillStyle = rgba("#FFFFFF", a);
          ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 0.8, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
        }
      }

      // Subtle blue nebula haze and fine grain keep the background from feeling flat.
      if (s.grain > 0) {
        const speckles = Math.round(90 * s.grain * s.quality);
        for (let i = 0; i < speckles; i++) {
          const gx = Math.random() * width, gy = Math.random() * height;
          ctx.fillStyle = `rgba(180,220,255,${Math.random() * 0.12 * s.grain})`;
          ctx.fillRect(gx, gy, 1, 1);
        }
      }
      if (glowMode) {
        const haze = ctx.createRadialGradient(width * 0.52, height * 0.48, 0, width * 0.52, height * 0.48, diagonal * 0.72);
        haze.addColorStop(0, "rgba(12,65,150,0.12)");
        haze.addColorStop(0.55, "rgba(5,30,80,0.055)");
        haze.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = haze; ctx.fillRect(0, 0, width, height);
      }
    };

    const frame = now => {
      raf = requestAnimationFrame(frame);
      if (!last) last = now;
      const dt = Math.min(0.04, (now - last) / 1000);
      last = now;
      if (settingsRef.current.paused || reducedMotion) { draw(0, true); return; }
      elapsed += dt;
      draw(dt);
    };

    window.addEventListener("resize", resize);
    resize();
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("click", onClick);
    };
  }, [enabled, interactive]);

  if (!enabled) return null;

  return (
    <div
      ref={rootRef}
      className={`fading-stars-layer ${className}`}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
        ...style
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block"
        }}
        aria-hidden="true"
      />
      {children && (
        <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
          {children}
        </div>
      )}
    </div>
  );
});

Object.assign(window, { FadingStars });


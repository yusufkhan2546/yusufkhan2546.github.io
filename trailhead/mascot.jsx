// Trail companion mascot — original character: a little cloud-and-bolt critter.
// Interactions: eyes track cursor, waves on idle, speech bubble tips per page,
// click to bounce + change expression, peeks from corner on page change.

function Mascot({ route, setTweak, enabled = true }) {
  const [pose, setPose] = useState("idle"); // idle | wave | wink | bounce | thinking
  const [bubble, setBubble] = useState(null);
  const [eyes, setEyes] = useState({ x: 0, y: 0 });
  const [exited, setExited] = useState(!enabled);
  const wrapRef = useRef(null);

  // contextual tips per route
  useEffect(() => {
    if (!enabled) return;
    const tipsByRoute = {
      home: "Hai....",
      certs: "Hover any badge to read it. Hit 'Spin all' for the full cabinet show.",
      projects: "Click 'Walk the flow' — each project animates its automation diagram.",
      experience: "Scroll the Trailblazer stats — those counters are live.",
      contact: "Pick an engagement type and tell me what you're building.",
    };
    const tip = tipsByRoute[route];
    if (tip) {
      setBubble(tip);
      setPose("wave");
      const t1 = setTimeout(() => setPose("idle"), 1400);
      const t2 = setTimeout(() => setBubble(null), 6500);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [route, enabled]);

  // Eyes follow cursor
  useEffect(() => {
    if (!enabled) return;
    const onMove = (e) => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const d = Math.hypot(dx, dy) || 1;
      const max = 3;
      setEyes({ x: (dx / d) * max, y: (dy / d) * max });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled]);

  // Idle wave every now and then
  useEffect(() => {
    if (!enabled) return;
    const i = setInterval(() => {
      setPose("wave");
      setTimeout(() => setPose("idle"), 1200);
    }, 12000);
    return () => clearInterval(i);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={wrapRef} style={{
      position: "fixed", bottom: 24, right: 24, zIndex: 200,
      display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10,
      pointerEvents: "none",
    }}>
      {bubble && (
        <div className="mascot-bubble" style={{
          background: "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.45)",
          borderRadius: 16,
          padding: "10px 14px",
          maxWidth: 240,
          fontSize: 12.5,
          lineHeight: 1.45,
          color: "black",
          boxShadow: "var(--shadow-2), 0 4px 20px rgba(255, 255, 255, 0.05)",
          position: "relative",
          marginRight: 12,
          fontWeight: 500,
          pointerEvents: "auto",
          fontFamily: "var(--font-body)",
          animation: "bubblePop .4s cubic-bezier(.2,1.4,.4,1) both",
        }}>
          {bubble}
          <button onClick={() => setBubble(null)} className="hoverable"
            style={{ position: "absolute", top: 4, right: 6, background: "transparent", border: "none", color: "rgba(0, 0, 0, 0.45)", fontSize: 14, cursor: "none", padding: 0, width: 18, height: 18 }}>×</button>
          <span style={{
            position: "absolute", bottom: -7, right: 28,
            width: 0, height: 0,
            borderLeft: "8px solid transparent", borderRight: "8px solid transparent",
            borderTop: "8px solid rgba(255, 255, 255, 0.88)",
            filter: "drop-shadow(0 1px 0 rgba(255, 255, 255, 0.2))",
          }}></span>
        </div>
      )}

      <button
        className="hoverable"
        data-cursor="hover"
        onClick={() => {
          setPose("bounce");
          const phrases = [
            "I'm a fan of well-named methods. 💻",
            "Apex test coverage 91%? Chef's kiss. 🧑‍🍳✨",
            "Did you know Yusuf has 12 certs? 🏆",
            "Try clicking 'Walk the flow' on Projects. 🗺️",
            "Toggle tweaks (top-right) to recolor everything. 🎨",
            "Hover the trail markers on Home — they bounce. 🏔️",
            "Here is the little secret 🤫 Data Cloud Identity ☁️ was not wrong before. Wait I am messed up again 😵. Dr. Strange 🧙‍♂️, do you have the spell ready..? 🪄🔮"
          ];
          setBubble(phrases[Math.floor(Math.random() * phrases.length)]);
          setTimeout(() => setPose("idle"), 700);
        }}
        title="Trail companion · click me"
        style={{
          width: 84, height: 92, padding: 0, border: "none",
          background: "transparent",
          cursor: "none",
          pointerEvents: "auto",
          filter: "drop-shadow(0 14px 22px rgba(8,30,69,.28))",
          transformOrigin: "50% 90%",
          animation: pose === "bounce" ? "mascotBounce .55s cubic-bezier(.3,1.5,.4,1)" : "mascotFloat 4.5s ease-in-out infinite",
        }}
      >
        <MascotSVG pose={pose} eyes={eyes} />
      </button>

      <style>{`
        @keyframes bubblePop { 0% { opacity: 0; transform: translateY(8px) scale(.9); } 100% { opacity: 1; transform: none; } }
        @keyframes mascotFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes mascotBounce { 0% { transform: scale(1); } 40% { transform: scale(1.15, .9) translateY(-6px); } 100% { transform: scale(1); } }
        @keyframes wave { 0%,100% { transform: rotate(0deg); } 30% { transform: rotate(-22deg); } 60% { transform: rotate(18deg); } }
      `}</style>
    </div>
  );
}

function MascotSVG({ pose, eyes }) {
  const waving = pose === "wave";
  return (
    <svg viewBox="0 0 120 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="m-body" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D6EAFB" />
        </linearGradient>
        <linearGradient id="m-bolt" x1="0" x2="1">
          <stop offset="0%" stopColor="#FFD479" />
          <stop offset="100%" stopColor="#FF8A4C" />
        </linearGradient>
        <radialGradient id="m-cheek" cx=".5" cy=".5" r=".5">
          <stop offset="0%" stopColor="#FFB3D1" />
          <stop offset="100%" stopColor="#FFB3D1" stopOpacity="0" />
        </radialGradient>
        <filter id="m-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* shadow on ground */}
      <ellipse cx="60" cy="120" rx="28" ry="4" fill="rgba(8,30,69,.18)" />

      {/* feet */}
      <ellipse cx="48" cy="112" rx="10" ry="6" fill="var(--accent-deep)" />
      <ellipse cx="72" cy="112" rx="10" ry="6" fill="var(--accent-deep)" />

      {/* body — cloud shape */}
      <g>
        <path
          d="M30 70 Q18 70 18 56 Q18 44 32 42 Q34 26 52 26 Q60 18 72 22 Q90 22 92 40 Q104 42 104 56 Q104 70 92 72 L92 100 Q92 110 80 110 L40 110 Q28 110 28 100 Z"
          fill="url(#m-body)" stroke="var(--accent-deep)" strokeWidth="2.5" strokeLinejoin="round"
        />
        {/* belly bolt patch */}
        <circle cx="60" cy="86" r="13" fill="var(--accent)" opacity=".15" />
        <path d="M62 78 L54 90 L60 90 L58 96 L66 84 L60 84 Z" fill="url(#m-bolt)" stroke="var(--accent-deep)" strokeWidth="1.5" strokeLinejoin="round" />
      </g>

      {/* cheeks */}
      <circle cx="42" cy="62" r="6" fill="url(#m-cheek)" />
      <circle cx="78" cy="62" r="6" fill="url(#m-cheek)" />

      {/* eyes */}
      <g>
        <ellipse cx="48" cy="54" rx="6" ry="7" fill="white" stroke="var(--accent-deep)" strokeWidth="1.6" />
        <ellipse cx="72" cy="54" rx="6" ry="7" fill="white" stroke="var(--accent-deep)" strokeWidth="1.6" />
        {/* pupils — follow cursor */}
        <circle cx={48 + eyes.x} cy={54 + eyes.y} r="2.4" fill="var(--accent-deep)" />
        <circle cx={72 + eyes.x} cy={54 + eyes.y} r="2.4" fill="var(--accent-deep)" />
        {/* sparkle in eye */}
        <circle cx={48 + eyes.x + 1} cy={54 + eyes.y - 1} r=".8" fill="white" />
        <circle cx={72 + eyes.x + 1} cy={54 + eyes.y - 1} r=".8" fill="white" />
      </g>

      {/* mouth — small smile */}
      <path d={pose === "thinking" ? "M54 68 Q60 70 66 68" : "M54 66 Q60 73 66 66"}
        stroke="var(--accent-deep)" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* arms — left arm waves */}
      <g style={{ transformOrigin: "26px 70px", animation: waving ? "wave 1.2s ease infinite" : "none" }}>
        <path d="M28 70 Q14 64 14 50" stroke="var(--accent-deep)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="12" cy="48" r="5.5" fill="white" stroke="var(--accent-deep)" strokeWidth="2" />
      </g>
      <g>
        <path d="M92 70 Q104 76 100 92" stroke="var(--accent-deep)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="102" cy="94" r="5.5" fill="white" stroke="var(--accent-deep)" strokeWidth="2" />
      </g>

      {/* antenna bolt on head */}
      <g>
        <path d="M60 26 L60 14" stroke="var(--accent-deep)" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M58 6 L54 12 L58 12 L56 18 L62 10 L58 10 Z" fill="url(#m-bolt)" stroke="var(--accent-deep)" strokeWidth="1.3" strokeLinejoin="round">
          <animateTransform attributeName="transform" type="rotate" values="0 60 12; 5 60 12; -5 60 12; 0 60 12" dur="2.4s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  );
}

Object.assign(window, { Mascot });

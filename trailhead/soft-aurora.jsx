// SoftAurora — WebGL procedural aurora borealis component inspired by ReactBits (reactbits.dev/backgrounds/soft-aurora)
// Features 3D Simplex noise and dynamic cosine gradient color palettes.
// Smoothly responds to active state (fades in when AI Agent is processing/talking back, fades out when idle).

function SoftAurora({
  active = true,
  speed = 1.0,
  blend = 1.0,
  colorPalette = "salesforce", // "salesforce" (blue/cyan/teal/violet) or "classic" (emerald/cyan/magenta)
  style = {},
  className = "",
  children = null
}) {
  const canvasRef = useRef(null);
  const animRef = useRef(0);
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize WebGL context
    let gl = null;
    try {
      gl = canvas.getContext("webgl", { alpha: true, antialias: false, depth: false }) ||
           canvas.getContext("experimental-webgl", { alpha: true, antialias: false, depth: false });
    } catch (e) {
      console.warn("WebGL not supported for SoftAurora, falling back");
    }

    if (!gl) {
      // Fallback for non-WebGL devices: smooth CSS animated gradient
      canvas.style.display = "none";
      return;
    }

    // Vertex shader: Full-screen quad
    const vsSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader: 3D Simplex Noise + Cosine Palette Aurora
    const fsSource = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform float uIntensity;
      uniform float uPaletteMode;
      varying vec2 vUv;

      // 3D Simplex noise implementation
      vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
      vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v){
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);

        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

        i = mod(i, 289.0);
        vec4 p = permute(permute(permute(
                   i.z + vec4(0.0, i1.z, i2.z, 1.0))
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0));

        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);

        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);

        vec4 s0 = floor(b0) * 2.0 + 1.0;
        vec4 s1 = floor(b1) * 2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      // Cosine Gradient Generator: color = a + b * cos(2*pi*(c*t + d))
      vec3 cosinePalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
        return a + b * cos(6.2831853 * (c * t + d));
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        float t = uTime * 0.35;

        // Flowing noise ribbons
        float n1 = snoise(vec3(uv.x * 2.8, uv.y * 2.0 - t * 0.18, t * 0.12));
        float n2 = snoise(vec3(uv.x * 4.2 + n1 * 0.7, uv.y * 3.2 + t * 0.14, t * 0.22));

        // Soft curtain wave with dynamic ripple
        float wave = smoothstep(-0.55, 0.85, n2 * 0.55 + n1 * 0.45 + sin(uv.x * 3.1415 + t * 0.25) * 0.3);

        // Palette modes
        vec3 a, b, c, d;
        if (uPaletteMode > 0.5) {
          // Classic Aurora (Emerald Green, Cyan, Magenta)
          a = vec3(0.15, 0.50, 0.40);
          b = vec3(0.40, 0.50, 0.35);
          c = vec3(1.00, 1.00, 1.00);
          d = vec3(0.00, 0.33, 0.67);
        } else {
          // Salesforce Cosmic Aurora (Electric Cyan, Royal Blue, Violet, Magenta)
          a = vec3(0.12, 0.38, 0.72);
          b = vec3(0.38, 0.52, 0.50);
          c = vec3(1.00, 1.00, 0.85);
          d = vec3(0.08, 0.38, 0.70);
        }

        vec3 auroraColor = cosinePalette(wave + t * 0.08, a, b, c, d);

        // Core glow highlight on ribbons
        float ribbonGlow = pow(clamp(wave, 0.0, 1.0), 2.4);
        auroraColor += vec3(0.18, 0.72, 1.0) * ribbonGlow * 0.65;

        // Alpha transparency driven by wave and active intensity
        float alpha = clamp(wave * 0.85 + ribbonGlow * 0.35, 0.0, 0.95) * uIntensity;

        gl_FragColor = vec4(auroraColor, alpha);
      }
    `;

    // Compile helper
    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Quad geometry (-1 to 1)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const posAttrLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posAttrLoc);
    gl.vertexAttribPointer(posAttrLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uTimeLoc = gl.getUniformLocation(program, "uTime");
    const uResolutionLoc = gl.getUniformLocation(program, "uResolution");
    const uIntensityLoc = gl.getUniformLocation(program, "uIntensity");
    const uPaletteModeLoc = gl.getUniformLocation(program, "uPaletteMode");

    gl.uniform1f(uPaletteModeLoc, colorPalette === "classic" ? 1.0 : 0.0);

    // Resize handler
    let width = 0;
    let height = 0;
    const resize = () => {
      const parent = canvas.parentElement || canvas;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const newW = Math.max(rect.width || 300, 50);
      const newH = Math.max(rect.height || 150, 50);

      if (width !== newW || height !== newH) {
        width = newW;
        height = newH;
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };
    resize();

    let ro = null;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(resize);
      if (canvas.parentElement) ro.observe(canvas.parentElement);
    }
    window.addEventListener("resize", resize);

    // Animation state
    let startTime = performance.now();
    let currentIntensity = activeRef.current ? 1.0 : 0.0;

    const render = (now) => {
      const targetIntensity = activeRef.current ? 1.0 : 0.0;
      // Smooth lerp transition for active / idle states
      currentIntensity += (targetIntensity - currentIntensity) * 0.06;

      if (currentIntensity > 0.005) {
        const elapsed = (now - startTime) * 0.001 * speed;
        gl.useProgram(program);
        gl.uniform1f(uTimeLoc, elapsed);
        gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
        gl.uniform1f(uIntensityLoc, currentIntensity);

        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      } else {
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
      }

      animRef.current = requestAnimationFrame(render);
    };

    animRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animRef.current);
      if (ro) ro.disconnect();
      window.removeEventListener("resize", resize);
      try {
        gl.deleteBuffer(positionBuffer);
        gl.deleteProgram(program);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
      } catch (e) { }
    };
  }, [speed, colorPalette]);

  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: "none",
      ...style
    }} className={`soft-aurora-wrap ${className}`}>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "none",
        }}
      />
      {children && (
        <div style={{ position: "relative", zIndex: 2, pointerEvents: "auto" }}>
          {children}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { SoftAurora });

// Three.js Customer 360 — a draggable orbit of Salesforce-cloud nodes around a central core,
// with floating lightning bolts striking between nodes. Pure vanilla three.js.

function ThreeOrb({ height = 440, bare = false }) {
  const wrapRef = React.useRef(null);
  const stateRef = React.useRef({});

  React.useEffect(() => {
    // Skip entirely on mobile — too expensive
    if (window.__IS_MOBILE) return;
    if (!window.THREE) return;
    const THREE = window.THREE;
    const wrap = wrapRef.current;
    if (!wrap) return;

    const width = wrap.clientWidth;
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5)); // cap at 1.5x
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    wrap.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 15);

    // lights
    const amb = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(amb);
    const key = new THREE.DirectionalLight(0xffffff, 0.9);
    key.position.set(5, 6, 8);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x6ec3ff, 1.0);
    rim.position.set(-6, -4, -6);
    scene.add(rim);
    const pt = new THREE.PointLight(0x00a1e0, 1.6, 12);
    pt.position.set(0, 0, 0);
    scene.add(pt);

    // root group (for drag rotation)
    const root = new THREE.Group();
    scene.add(root);

    // central core — icosahedron with wireframe overlay
    const coreGeo = new THREE.IcosahedronGeometry(1.0, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x00a1e0, emissive: 0x004273, emissiveIntensity: .9,
      metalness: .35, roughness: .25, transparent: true, opacity: .35,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    root.add(core);

    // wire over core
    const wireGeo = new THREE.IcosahedronGeometry(1.55, 2);
    const wireMat = new THREE.MeshBasicMaterial({ color: 0xb6e6ff, wireframe: true, transparent: true, opacity: .35 });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    root.add(wire);

    // === Centerpiece: original "YK · Lead Dev" hex badge (canvas-texture sprite) ===
    const badgeCanvas = document.createElement("canvas");
    badgeCanvas.width = 1024; badgeCanvas.height = 1024;
    const bctx = badgeCanvas.getContext("2d");
    (function drawBadge() {
      const cx2 = 512, cy2 = 512;
      // shadow
      bctx.save();
      bctx.shadowColor = "rgba(0,160,255,.55)";
      bctx.shadowBlur = 60;
      // hex path
      const R = 380;
      bctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 2;
        const x = cx2 + Math.cos(a) * R;
        const y = cy2 + Math.sin(a) * R;
        if (i === 0) bctx.moveTo(x, y); else bctx.lineTo(x, y);
      }
      bctx.closePath();
      // gradient fill
      const grad = bctx.createLinearGradient(cx2 - R, cy2 - R, cx2 + R, cy2 + R);
      grad.addColorStop(0, "#0A1B3C");
      grad.addColorStop(1, "#1A2D5C");
      bctx.fillStyle = grad;
      bctx.fill();
      bctx.restore();

      // inner ring (subtle highlight)
      bctx.lineWidth = 5;
      bctx.strokeStyle = "rgba(180,230,255,.9)";
      bctx.beginPath();
      const R2 = R - 22;
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 2;
        const x = cx2 + Math.cos(a) * R2;
        const y = cy2 + Math.sin(a) * R2;
        if (i === 0) bctx.moveTo(x, y); else bctx.lineTo(x, y);
      }
      bctx.closePath();
      bctx.stroke();

      // dotted hex frame
      bctx.lineWidth = 2;
      bctx.strokeStyle = "rgba(255,255,255,.18)";
      bctx.setLineDash([4, 8]);
      bctx.beginPath();
      const R3 = R - 50;
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 2;
        const x = cx2 + Math.cos(a) * R3;
        const y = cy2 + Math.sin(a) * R3;
        if (i === 0) bctx.moveTo(x, y); else bctx.lineTo(x, y);
      }
      bctx.closePath();
      bctx.stroke();
      bctx.setLineDash([]);

      // top arc text "12× CERTIFIED · LEAD DEVELOPER"
      bctx.save();
      bctx.translate(cx2, cy2);
      bctx.fillStyle = "rgba(180,230,255,.85)";
      bctx.font = "700 38px 'JetBrains Mono', monospace";
      bctx.textAlign = "center";
      bctx.textBaseline = "middle";
      const text = "★  12 × CERTIFIED  ★  SALESFORCE LEAD DEV  ★  ";
      const radius = 305;
      const total = text.length;
      const start = -Math.PI / 2 - .9;
      for (let i = 0; i < total; i++) {
        const a = start + (1.8 * i / (total - 1));
        bctx.save();
        bctx.rotate(a);
        bctx.translate(0, -radius);
        bctx.fillText(text[i], 0, 0);
        bctx.restore();
      }
      bctx.restore();

      // central YK monogram — bold
      bctx.fillStyle = "white";
      bctx.font = "800 280px 'Bricolage Grotesque', system-ui, sans-serif";
      bctx.textAlign = "center";
      bctx.textBaseline = "middle";
      bctx.fillText("YK", cx2, cy2 - 6);

      // dot/bolt accent after the K
      // measure approx
      const bgrad = bctx.createLinearGradient(cx2 + 120, cy2 + 40, cx2 + 200, cy2 + 120);
      bgrad.addColorStop(0, "#FFD479");
      bgrad.addColorStop(1, "#FF6F00");
      bctx.fillStyle = bgrad;
      // lightning bolt as the period
      bctx.beginPath();
      const bx = cx2 + 175, by = cy2 + 70;
      bctx.moveTo(bx, by - 35);
      bctx.lineTo(bx - 18, by);
      bctx.lineTo(bx - 5, by);
      bctx.lineTo(bx - 12, by + 30);
      bctx.lineTo(bx + 18, by - 6);
      bctx.lineTo(bx + 4, by - 6);
      bctx.lineTo(bx + 12, by - 35);
      bctx.closePath();
      bctx.shadowColor = "rgba(255,140,40,.8)";
      bctx.shadowBlur = 30;
      bctx.fill();
      bctx.shadowBlur = 0;

      // bottom: divider + sublabel
      bctx.strokeStyle = "rgba(255,255,255,.45)";
      bctx.lineWidth = 2;
      bctx.beginPath();
      bctx.moveTo(cx2 - 80, cy2 + 188);
      bctx.lineTo(cx2 + 80, cy2 + 188);
      bctx.stroke();

      bctx.fillStyle = "rgba(180,230,255,.95)";
      bctx.font = "700 30px 'JetBrains Mono', monospace";
      bctx.fillText("/ TRAILBLAZING SINCE 2018 /", cx2, cy2 + 215);

      bctx.fillStyle = "rgba(255,183,93,.95)";
      bctx.font = "600 22px 'JetBrains Mono', monospace";
      bctx.fillText("est. India · global", cx2, cy2 + 252);
    })();

    const badgeTex = new THREE.CanvasTexture(badgeCanvas);
    badgeTex.anisotropy = renderer.capabilities.getMaxAnisotropy ? renderer.capabilities.getMaxAnisotropy() : 1;
    const badgeMat = new THREE.SpriteMaterial({ map: badgeTex, transparent: true, depthWrite: false });
    const badge = new THREE.Sprite(badgeMat);
    badge.scale.set(2.6, 2.6, 1);
    badge.position.z = 0;
    // Add badge OUTSIDE root so it always faces the camera and doesn't rotate with the orbit
    scene.add(badge);

    // soft glow disc behind the badge
    const haloDisc = new THREE.Mesh(
      new THREE.CircleGeometry(1.7, 64),
      new THREE.MeshBasicMaterial({
        color: 0x00a1e0, transparent: true, opacity: .25,
        blending: THREE.AdditiveBlending,
      })
    );
    haloDisc.position.z = -.05;
    scene.add(haloDisc);

    // halo
    const haloGeo = new THREE.RingGeometry(1.85, 1.88, 96);
    const haloMat = new THREE.MeshBasicMaterial({ color: 0x00a1e0, transparent: true, opacity: .30, side: THREE.DoubleSide });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    halo.rotation.x = Math.PI / 2.2;
    root.add(halo);

    const halo2 = halo.clone();
    halo2.scale.set(1.3, 1.3, 1.3);
    halo2.material = halo.material.clone();
    halo2.material.opacity = .14;
    root.add(halo2);

    // Certification badges orbit — uses all 12 user-uploaded badge PNGs as textures.
    const NODES = [
      { name: "Administrator", img: "assets/badges/2025-03_Platform-Admin_500x490.png", tilt: 0.1 },
      { name: "Platform Developer I", img: "assets/badges/2025-04_Badge_SF-Certified_Plat-Dev_500x490px.png", tilt: -0.1 },
      { name: "Platform Developer II", img: "assets/badges/2021-03_Badge_SF-Certified_Platform-Developer-II_500x490px.png", tilt: 0.2 },
      { name: "JavaScript Developer I", img: "assets/badges/2025-03_JavaScript-Dev_500x490.png", tilt: -0.2 },
      { name: "Service Cloud Consultant", img: "assets/badges/2021-03_Badge_SF-Certified_Service-Cloud-Consultant_500x490px.png", tilt: 0.1 },
      { name: "OmniStudio Developer", img: "assets/badges/omnistudio-developer.png", tilt: -0.1 },
      { name: "Financial Services Cloud", img: "assets/badges/fsc.png", tilt: 0.2 },
      { name: "Agentforce Specialist", img: "assets/badges/agentforce-specialist.png", tilt: -0.2 },
      { name: "Data Cloud Consultant", img: "assets/badges/data-cloud.png", tilt: 0.1 },
      { name: "AI Associate", img: "assets/badges/2026-01_Badge_SF-Certified_AI-Associate_500x490px_RETIRED.png", tilt: -0.1 },
      { name: "Lifecycle & Deployment", img: "assets/badges/2025-04_Badge_SF-Certified_Plat-Dev-LC-Dep-Arch_500x490px.png", tilt: 0.2 },
      { name: "Salesforce Associate", img: "assets/badges/2025-03_Badge_SF-Certified_Platform-Foundations_500x490px.png", tilt: -0.2 },
    ];
    
    // Stagger orbits slightly so 12 nodes aren't too crowded
    NODES.forEach((n, i) => { 
      n.ang = (Math.PI * 2 * i) / NODES.length; 
      n.r = i % 2 === 0 ? 4.2 : 5.2; 
    });

    const texLoader = new THREE.TextureLoader();

    const nodes = [];
    NODES.forEach((n, i) => {
      const g = new THREE.Group();

      // Soft glow disc behind the badge (additive blending for a halo)
      const glowGeo = new THREE.CircleGeometry(.6, 48);
      const glowMat = new THREE.MeshBasicMaterial({
        color: 0x00a1e0, transparent: true, opacity: .10,
        blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const glow = new THREE.Mesh(glowGeo, glowMat);
      glow.position.z = -.05;
      g.add(glow);

      // Badge sprite — always faces camera, scaled to look ~uniform
      const tex = texLoader.load(n.img, (t) => {
        t.colorSpace = THREE.SRGBColorSpace || THREE.sRGBEncoding;
        t.anisotropy = renderer.capabilities.getMaxAnisotropy ? renderer.capabilities.getMaxAnisotropy() : 1;
      });
      const spriteMat = new THREE.SpriteMaterial({
        map: tex, transparent: true, depthWrite: false,
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(1.0, 1.0, 1);
      g.add(sprite);
      g.userData = { sprite, glow };

      // position on orbit
      const base = new THREE.Group();
      base.rotation.z = n.tilt;
      const px = Math.cos(n.ang) * n.r;
      const pz = Math.sin(n.ang) * n.r;
      g.position.set(px, 0, pz);
      base.add(g);
      root.add(base);

      nodes.push({ group: g, base, data: n, idx: i, sprite });
    });

    // Orbit lines
    const orbitGeo = new THREE.RingGeometry(4.18, 4.22, 128);
    const orbitMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .08, side: THREE.DoubleSide });
    const orbit1 = new THREE.Mesh(orbitGeo, orbitMat);
    orbit1.rotation.x = Math.PI / 2;
    root.add(orbit1);

    // Lightning lines — periodic strikes between random nodes & core
    const bolts = [];
    function spawnBolt() {
      const a = nodes[Math.floor(Math.random() * nodes.length)].group;
      const target = Math.random() < .5 ? new THREE.Vector3(0, 0, 0) : nodes[Math.floor(Math.random() * nodes.length)].group.position.clone();
      const start = new THREE.Vector3();
      a.getWorldPosition(start);
      // local-space (root) start
      const startLocal = root.worldToLocal(start.clone());
      const endLocal = target instanceof THREE.Vector3 ? target : root.worldToLocal(a.getWorldPosition(new THREE.Vector3()));
      const points = [];
      const steps = 8;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const x = startLocal.x + (endLocal.x - startLocal.x) * t + (Math.random() - .5) * .25 * (1 - Math.abs(t - .5) * 2);
        const y = startLocal.y + (endLocal.y - startLocal.y) * t + (Math.random() - .5) * .25 * (1 - Math.abs(t - .5) * 2);
        const z = startLocal.z + (endLocal.z - startLocal.z) * t + (Math.random() - .5) * .25 * (1 - Math.abs(t - .5) * 2);
        points.push(new THREE.Vector3(x, y, z));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({ color: 0xb6e6ff, transparent: true, opacity: 1 });
      const line = new THREE.Line(geo, mat);
      root.add(line);
      bolts.push({ line, life: 0, ttl: 22 });
    }

    // Stars
    const starGeo = new THREE.BufferGeometry();
    const starCount = 220;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 12 + Math.random() * 8;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(p) * Math.cos(t);
      positions[i * 3 + 1] = r * Math.cos(p) * 0.5;
      positions[i * 3 + 2] = r * Math.sin(p) * Math.sin(t);
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0x9bc7f0, size: .035, transparent: true, opacity: .75 });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // Drag-rotate
    let isDragging = false;
    let lastX = 0, lastY = 0;
    let rotVx = 0, rotVy = 0;
    let targetRotY = 0, targetRotX = 0.15;
    const onDown = (e) => {
      isDragging = true;
      lastX = e.clientX; lastY = e.clientY;
      renderer.domElement.style.cursor = "grabbing";
    };
    const onMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX; lastY = e.clientY;
      targetRotY += dx * 0.005;
      targetRotX = Math.max(-1.0, Math.min(1.0, targetRotX + dy * 0.005));
      rotVx = dy * .002; rotVy = dx * .002;
    };
    const onUp = () => { isDragging = false; renderer.domElement.style.cursor = "grab"; };
    renderer.domElement.style.cursor = "grab";
    renderer.domElement.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    // Hover to highlight node (label updates via state)
    const ray = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-2, -2);
    const onMouseMove = (e) => {
      const r = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    };
    renderer.domElement.addEventListener("pointermove", onMouseMove);

    let activeLabel = null;
    const labelEl = document.createElement("div");
    labelEl.style.cssText = `
      position: absolute; top: 0; left: 0; pointer-events: none;
      padding: 6px 12px; background: white; border: 1px solid var(--line-2);
      border-radius: 999px; font-size: 12px; font-weight: 700;
      color: black; box-shadow: var(--shadow-2);
      transform: translate(-50%, -130%); opacity: 0; transition: opacity .15s;
      font-family: var(--font-body);
      white-space: nowrap;
    `;
    wrap.style.position = "relative";
    wrap.appendChild(labelEl);

    // Resize
    const onResize = () => {
      const w = wrap.clientWidth;
      renderer.setSize(w, height);
      camera.aspect = w / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    // Animate
    let raf = 0;
    let t = 0;
    let lastSpawn = 0;
    const animate = () => {
      t += .016;

      // Auto rotate
      if (!isDragging) {
        targetRotY += .003;
      }
      root.rotation.y += (targetRotY - root.rotation.y) * 0.06;
      root.rotation.x += (targetRotX - root.rotation.x) * 0.06;

      // Core pulsing
      const s = 1 + Math.sin(t * 1.6) * .04;
      core.scale.set(s, s, s);
      wire.rotation.y += .004;
      wire.rotation.x += .002;

      // Badge gentle breathe
      const bs = 2.6 + Math.sin(t * 1.4) * .05;
      badge.scale.set(bs, bs, 1);
      // halo disc pulse
      const hs = 1.7 + Math.sin(t * 1.4) * .06;
      haloDisc.scale.set(hs / 1.7, hs / 1.7, 1);
      haloDisc.material.opacity = .22 + Math.sin(t * 1.4) * .08;

      // Nodes — gentle bobbing; sprites always face the camera so no extra rotation needed
      nodes.forEach((n, i) => {
        n.group.position.y = Math.sin(t * 1.2 + i) * .15;
        // pulse the halo glow
        if (n.group.userData.glow) {
          const op = .10 + Math.sin(t * 1.6 + i) * .05;
          n.group.userData.glow.material.opacity = op;
        }
      });

      // Halo
      halo.rotation.z = t * .1;
      halo2.rotation.z = -t * .07;

      // Stars rotate slowly
      stars.rotation.y = t * .02;

      // Bolts
      if (t - lastSpawn > 1.8) { spawnBolt(); lastSpawn = t; }
      for (let i = bolts.length - 1; i >= 0; i--) {
        const b = bolts[i];
        b.life++;
        b.line.material.opacity = Math.max(0, 1 - b.life / b.ttl);
        if (b.life >= b.ttl) { root.remove(b.line); b.line.geometry.dispose(); b.line.material.dispose(); bolts.splice(i, 1); }
      }

      // Raycast for hover — badges are Sprites, raycast handles them automatically
      ray.setFromCamera(mouse, camera);
      const sprites = nodes.map(n => n.sprite);
      const hits = ray.intersectObjects(sprites, false);
      if (hits.length) {
        const targetMesh = hits[0].object;
        const owner = nodes.find(n => n.sprite === targetMesh);
        if (owner) {
          if (activeLabel !== owner.idx) {
            activeLabel = owner.idx;
            labelEl.textContent = owner.data.name;
          }
          // Slightly enlarge the badge on hover
          owner.sprite.scale.x = owner.sprite.scale.y = 1.0 + Math.sin(t * 6) * .05 + .25;
          const v = new THREE.Vector3();
          owner.group.getWorldPosition(v);
          v.project(camera);
          const r2 = renderer.domElement.getBoundingClientRect();
          const x = (v.x * .5 + .5) * r2.width;
          const y = (-v.y * .5 + .5) * r2.height;
          labelEl.style.left = x + "px";
          labelEl.style.top = y + "px";
          labelEl.style.opacity = "1";
        }
      } else {
        nodes.forEach(n => { n.sprite.scale.x = n.sprite.scale.y = 1.0; });
        activeLabel = null;
        labelEl.style.opacity = "0";
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    // Pause RAF when the canvas is scrolled off-screen
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (!raf) raf = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }, { threshold: 0.05 });
    io.observe(wrap);

    stateRef.current = { renderer, scene };

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      renderer.domElement.removeEventListener("pointerdown", onDown);
      renderer.domElement.removeEventListener("pointermove", onMouseMove);
      renderer.dispose();
      wrap.removeChild(renderer.domElement);
      try { wrap.removeChild(labelEl); } catch (e) { }
    };
  }, [height]);

  const bareStyle = { width: "100%", height, position: "relative" };
  const fullStyle = { ...bareStyle, borderRadius: 18, overflow: "hidden", background: "linear-gradient(180deg, #061331, #0A1B3C 60%, #112858)", border: "1px solid rgba(255,255,255,.08)", boxShadow: "0 30px 60px -20px rgba(0,30,80,.45)" };
  return (
    <div ref={wrapRef} style={bare ? bareStyle : fullStyle}>
      {!bare && <>
        <div style={{ position: "absolute", top: 14, left: 14, display: "flex", alignItems: "center", gap: 10, zIndex: 2, pointerEvents: "none" }}>
          <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--sf-blue)", boxShadow: "0 0 10px var(--sf-blue)" }}></span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.7)", fontWeight: 700 }}>Customer 360 · live orbit</span>
        </div>
        <div style={{ position: "absolute", bottom: 14, right: 14, color: "rgba(255,255,255,.4)", fontSize: 10.5, fontFamily: "var(--font-mono)", letterSpacing: ".08em", pointerEvents: "none" }}>
          drag to rotate · hover for label
        </div>
      </>}
    </div>
  );
}

Object.assign(window, { ThreeOrb });

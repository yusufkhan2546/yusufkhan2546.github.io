// Three.js 3D cert cabinet — 12 medallions floating, with lighting and continuous rotation.
function ThreeCertCabinet({ certs, height = 460 }) {
  const wrapRef = React.useRef(null);

  React.useEffect(() => {
    if (!window.THREE) return;
    const THREE = window.THREE;
    const wrap = wrapRef.current;
    if (!wrap) return;

    const width = wrap.clientWidth;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    wrap.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.6, 14);

    // lights
    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const key = new THREE.DirectionalLight(0xffffff, 1.2);
    key.position.set(4, 8, 6); scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 1.0);
    fill.position.set(-5, 2, 4); scene.add(fill);

    const textureLoader = new THREE.TextureLoader();

    // Image tile prefab
    function makeImageTile(cert) {
      const group = new THREE.Group();
      
      const geo = new THREE.PlaneGeometry(1.9, 1.9);
      const mat = new THREE.MeshPhysicalMaterial({
        transparent: true,
        side: THREE.DoubleSide,
        roughness: 0.1,
        metalness: 0.1,
        alphaTest: 0.05
      });

      if (cert.img) {
        textureLoader.load(cert.img, (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          mat.map = tex;
          mat.needsUpdate = true;
        });
      }

      const tile = new THREE.Mesh(geo, mat);
      group.add(tile);

      return { group, tile };
    }

    // Layout: 4 cols x 3 rows
    const cols = 4, rows = 3;
    const dx = 2.6, dy = 2.5;
    const startX = -(cols - 1) * dx / 2;
    const startY = (rows - 1) * dy / 2;

    const tiles = [];
    const safeCerts = (certs && certs.length) ? certs : [];
    for (let i = 0; i < 12; i++) {
      const c = safeCerts[i % safeCerts.length] || {};
      const t = makeImageTile(c);
      const col = i % cols, row = Math.floor(i / cols);
      const x = startX + col * dx + (row % 2 === 1 ? dx * .5 : 0);
      const y = startY - row * dy;
      t.group.position.set(x, y, 0);
      t.group.rotation.x = -.18;
      t.baseY = y;
      t.col = col; t.row = row;
      t.idx = i;
      t.phase = Math.random() * Math.PI * 2;
      scene.add(t.group);
      tiles.push(t);
    }

    // Drag rotate
    let isDragging = false, lastX = 0, lastY = 0;
    let targetRotY = 0, targetRotX = 0;
    let groupRotY = 0, groupRotX = 0;
    const onDown = (e) => { isDragging = true; lastX = e.clientX; lastY = e.clientY; renderer.domElement.style.cursor = "grabbing"; };
    const onMove = (e) => {
      if (!isDragging) return;
      const dx2 = e.clientX - lastX; const dy2 = e.clientY - lastY;
      lastX = e.clientX; lastY = e.clientY;
      targetRotY += dx2 * 0.005;
      targetRotX = Math.max(-.5, Math.min(.5, targetRotX + dy2 * .003));
    };
    const onUp = () => { isDragging = false; renderer.domElement.style.cursor = "grab"; };
    renderer.domElement.style.cursor = "grab";
    renderer.domElement.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    // Hover
    const ray = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-2, -2);
    const onMouseMove = (e) => {
      const r = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    };
    renderer.domElement.addEventListener("pointermove", onMouseMove);

    const onResize = () => {
      const w = wrap.clientWidth;
      renderer.setSize(w, height);
      camera.aspect = w / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    let t = 0, raf = 0;
    const tickFn = () => {
      t += .016;

      if (!isDragging) targetRotY += .002;
      groupRotY += (targetRotY - groupRotY) * .07;
      groupRotX += (targetRotX - groupRotX) * .07;

      // raycast for hover
      ray.setFromCamera(mouse, camera);
      const hits = ray.intersectObjects(tiles.map(x => x.tile), false);
      const hoverIdx = hits.length ? tiles.findIndex(x => x.tile === hits[0].object) : -1;

      tiles.forEach((t2, i) => {
        // each tile rotates around its own Y
        const baseRot = t * .9 + t2.phase * .2;
        t2.group.rotation.y = baseRot + groupRotY;
        t2.group.rotation.x = -.18 + Math.sin(t * .8 + t2.phase) * .08 + groupRotX;
        // bob
        t2.group.position.y = t2.baseY + Math.sin(t * 1.1 + t2.phase) * .12;

        // hover effect — scale + spin faster
        const isHover = i === hoverIdx;
        const targetScale = isHover ? 1.4 : 1;
        t2.group.scale.x += (targetScale - t2.group.scale.x) * .15;
        t2.group.scale.y += (targetScale - t2.group.scale.y) * .15;
        t2.group.scale.z += (targetScale - t2.group.scale.z) * .15;
      });

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tickFn);
    };
    tickFn();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      renderer.domElement.removeEventListener("pointerdown", onDown);
      renderer.domElement.removeEventListener("pointermove", onMouseMove);
      renderer.dispose();
      wrap.removeChild(renderer.domElement);
    };
  }, [certs, height]);

  return (
    <div ref={wrapRef} style={{
      position: "relative", width: "100%", height,
      borderRadius: 22, overflow: "hidden",
      background: "radial-gradient(ellipse at 30% 20%, #1A0A3C 0%, #0A1B3C 50%, #060B22 100%)",
      border: "1px solid rgba(255,255,255,.10)",
      boxShadow: "0 40px 80px -30px rgba(20,5,60,.6), inset 0 1px 0 rgba(255,255,255,.07)",
    }}>
      <div style={{ position: "absolute", top: 14, left: 14, display: "flex", alignItems: "center", gap: 10, zIndex: 2, pointerEvents: "none" }}>
        <span style={{ width: 8, height: 8, borderRadius: 99, background: "#00D4FF", boxShadow: "0 0 10px #00D4FF" }}></span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.7)", fontWeight: 700 }}>cabinet · 12 medallions · 3D</span>
      </div>
      <div style={{ position: "absolute", bottom: 14, right: 14, color: "rgba(255,255,255,.4)", fontSize: 10.5, fontFamily: "var(--font-mono)", letterSpacing: ".08em", pointerEvents: "none" }}>
        drag to rotate · hover to spin
      </div>
    </div>
  );
}

Object.assign(window, { ThreeCertCabinet });

import { useEffect, useRef } from "react";

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    renderer: { dispose: () => void; domElement: HTMLCanvasElement };
    animationId: number;
    geometry: { dispose: () => void };
    material: { dispose: () => void };
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let isMounted = true;

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.05;
        float lineWidth = 0.0024;

        vec3 color = vec3(0.0);
        for (int j = 0; j < 3; j++) {
          for (int i = 0; i < 5; i++) {
            color[j] += lineWidth * float(i * i) / abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 5.0 - length(uv) + mod(uv.x + uv.y, 0.2));
          }
        }

        vec3 orange = vec3(0.988, 0.255, 0.012);
        vec3 violet = vec3(0.212, 0.145, 0.361);
        vec3 paper = vec3(0.969, 0.961, 0.949);
        vec3 mapped = color.r * orange + color.g * violet * 1.8 + color.b * paper * 0.55;
        gl_FragColor = vec4(mapped, 1.0);
      }
    `;

    const createScene = async () => {
      const THREE = await import("three");

      if (!isMounted || !container.isConnected) return;

      const camera = new THREE.Camera();
      camera.position.z = 1;

      const scene = new THREE.Scene();
      const geometry = new THREE.PlaneGeometry(2, 2);
      const uniforms = {
        time: { value: 1.0 },
        resolution: { value: new THREE.Vector2() },
      };

      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const onWindowResize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height, false);
        uniforms.resolution.value.set(renderer.domElement.width, renderer.domElement.height);
      };

      onWindowResize();
      window.addEventListener("resize", onWindowResize, false);

      const animate = () => {
        const animationId = requestAnimationFrame(animate);
        uniforms.time.value += 0.05;
        renderer.render(scene, camera);

        if (sceneRef.current) {
          sceneRef.current.animationId = animationId;
        }
      };

      sceneRef.current = {
        renderer,
        animationId: 0,
        geometry,
        material,
      };

      animate();

      return () => {
        window.removeEventListener("resize", onWindowResize);
      };
    };

    let cleanupResize: (() => void) | undefined;
    let idleId: number | null = null;
    let timeoutId: number | null = null;
    const startScene = () => {
      void createScene().then((cleanup) => {
        cleanupResize = cleanup;
      });
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(startScene, { timeout: 1200 });
    } else {
      timeoutId = globalThis.setTimeout(startScene, 350);
    }

    return () => {
      isMounted = false;
      if (idleId !== null) window.cancelIdleCallback(idleId);
      if (timeoutId !== null) window.clearTimeout(timeoutId);
      cleanupResize?.();

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        sceneRef.current.renderer.dispose();
        sceneRef.current.geometry.dispose();
        sceneRef.current.material.dispose();

        if (sceneRef.current.renderer.domElement.parentNode === container) {
          container.removeChild(sceneRef.current.renderer.domElement);
        }
      }
    };
  }, []);

  return <div ref={containerRef} className="shader-animation" />;
}

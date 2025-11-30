import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;

    // 1. Configuración de la Escena
    const scene = new THREE.Scene();
    // Color de fondo exacto de tu web para que se funda perfecto
    scene.background = new THREE.Color("#000000");

    // 2. Cámara
    const camera = new THREE.PerspectiveCamera(
      75,
      currentRef.clientWidth / currentRef.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3; // Alejamos la cámara un poco

    // 3. Renderizador
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Para que se vea nítido en retina/móviles
    currentRef.appendChild(renderer.domElement);

    // 4. Crear las Partículas
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1200; // Cantidad de puntos (no consume nada)

    const posArray = new Float32Array(particlesCount * 3); // x, y, z por cada punto

    for (let i = 0; i < particlesCount * 3; i++) {
      // Posicionamos los puntos aleatoriamente en un espacio grande
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    // Material de los puntos (Tu color verde neón)
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015, // Puntos muy finos y elegantes
      color: "#b3e11f",
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending, // Hace que brillen si se superponen
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // 5. Animación
    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Rotación suave de toda la nube
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0002;

      // Movimiento sutil tipo "respiración"
      // particlesMesh.position.y = Math.sin(Date.now() * 0.001) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Manejo del Resize (Responsive real)
    const handleResize = () => {
      if (!currentRef) return;
      camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // 7. Limpieza (Cleanup) para evitar fugas de memoria
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      if (currentRef && currentRef.contains(renderer.domElement)) {
        currentRef.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1, // Detrás del contenido
        overflow: "hidden",
      }}
    />
  );
};

export default ThreeBackground;

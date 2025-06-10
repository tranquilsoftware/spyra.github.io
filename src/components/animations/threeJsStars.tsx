// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// interface ThreeJsStarsProps {
//   className?: string;
//   starCount?: number;
//   children?: React.ReactNode;
//   coilPoints?: number;
//   coilRadius?: number;
//   coilHeight?: number;
//   rotationSpeed?: number;
// }

// const ThreeJsStars: React.FC<ThreeJsStarsProps> = ({ 
//   className = '', 
//   starCount = 1000,
//   children,
//   coilPoints = 100,
//   coilRadius = 2,
//   coilHeight = 5,
//   rotationSpeed = 1
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const animationRef = useRef<number>();
//   const sceneRef = useRef<THREE.Scene>();
//   const cameraRef = useRef<THREE.PerspectiveCamera>();
//   const rendererRef = useRef<THREE.WebGLRenderer>();
//   const coilRef = useRef<THREE.Line>();
//   const timeRef = useRef(0);

//   // Create coil geometry
//   const createCoil = () => {
//     const points = [];
    
//     for (let i = 0; i < coilPoints; i++) {
//       const t = (i / coilPoints) * Math.PI * 8; // 4 full rotations
//       const x = Math.cos(t) * coilRadius;
//       const y = (i / coilPoints - 0.5) * coilHeight;
//       const z = Math.sin(t) * coilRadius;
//       points.push(new THREE.Vector3(x, y, z));
//     }
    
//     const geometry = new THREE.BufferGeometry().setFromPoints(points);
//     const material = new THREE.LineBasicMaterial({ 
//       color: 0x00ffff, 
//       transparent: true,
//       opacity: 0.8,
//       linewidth: 2 
//     });
    
//     return new THREE.Line(geometry, material);
//   };

//   useEffect(() => {
//     if (!containerRef.current) return;

//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     containerRef.current.appendChild(renderer.domElement);

//     // Store references
//     sceneRef.current = scene;
//     cameraRef.current = camera;
//     rendererRef.current = renderer;

//     // Create stars
//     const starsGeometry = new THREE.BufferGeometry();
//     const starsMaterial = new THREE.PointsMaterial({
//       color: 0xffffff,
//       size: 0.1,
//     });

//     const starsVertices = [];
//     for (let i = 0; i < starCount; i++) {
//       const x = (Math.random() - 0.5) * 2000;
//       const y = (Math.random() - 0.5) * 2000;
//       const z = (Math.random() - 0.5) * 2000;
//       starsVertices.push(x, y, z);
//     }

//     starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
//     const stars = new THREE.Points(starsGeometry, starsMaterial);
//     scene.add(stars);

//     // Create coil
//     const coil = createCoil();
//     scene.add(coil);
//     coilRef.current = coil;

//     // Add ambient light to make the coil more visible
//     const ambientLight = new THREE.AmbientLight(0x404040);
//     scene.add(ambientLight);

//     // Add point light to highlight the coil
//     const pointLight = new THREE.PointLight(0x00ffff, 1, 100);
//     pointLight.position.set(0, 0, 5);
//     scene.add(pointLight);

//     // Camera position
//     camera.position.z = 15;

//     // Animation
//     const animate = () => {
//       animationRef.current = requestAnimationFrame(animate);
//       timeRef.current += 0.01;
      
//       // Rotate the stars
//       stars.rotation.x += 0.0005;
//       stars.rotation.y += 0.0005;
      
//       // Rotate the coil
//       if (coilRef.current) {
//         coilRef.current.rotation.y = timeRef.current * rotationSpeed * 0.1;
//       }
      
//       // Pulsing effect for stars
//       starsMaterial.size = 0.1 + Math.sin(Date.now() * 0.001) * 0.05;
      
//       renderer.render(scene, camera);
//     };

//     // Handle window resize
//     const handleResize = () => {
//       if (cameraRef.current && rendererRef.current) {
//         cameraRef.current.aspect = window.innerWidth / window.innerHeight;
//         cameraRef.current.updateProjectionMatrix();
//         rendererRef.current.setSize(window.innerWidth, window.innerHeight);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     animate();

//     // Cleanup
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       window.removeEventListener('resize', handleResize);
//       if (containerRef.current && rendererRef.current?.domElement) {
//         containerRef.current.removeChild(rendererRef.current.domElement);
//       }
//       // Clean up geometry and materials
//       if (coilRef.current?.geometry) coilRef.current.geometry.dispose();
//       if (coilRef.current?.material) {
//         const material = coilRef.current.material as THREE.Material;
//         material.dispose();
//       }
//       starsGeometry.dispose();
//       starsMaterial.dispose();
//     };
//   }, [starCount, coilPoints, coilRadius, coilHeight, rotationSpeed]);

//   return (
//     <div 
//       ref={containerRef} 
//       className={`fixed inset-0 ${className}`}
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//         zIndex: -99
//       }}
//     >
//       {children && (
//         <div className="relative z-10">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ThreeJsStars;
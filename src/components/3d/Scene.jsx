import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SpotLight } from '@react-three/drei';
import FloatingGeometry from './FloatingGeometry';

const Scene = () => {
  // Camera settings memoized for better performance
  const cameraSettings = useMemo(() => ({
    position: [0, 0, 5],
    fov: 75,
  }), []);

  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-r from-blue-400 via-purple-600 to-pink-500">
      <Canvas
        camera={cameraSettings}
        dpr={[1, 2]}
        shadows
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} castShadow />
        
        {/* Add Spot Light for highlighting the geometry */}
        <SpotLight
          position={[2, 5, 2]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
          target-position={[0, 0, 0]}
        />

        {/* Floating Geometry */}
        <FloatingGeometry />
        
        {/* OrbitControls to allow interactive view */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          autoRotate
          autoRotateSpeed={0.5}
          minDistance={3}  // Prevent zooming too close
          maxDistance={10} // Prevent zooming too far
        />
        
        {/* Preload the assets for smoother rendering */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Scene;

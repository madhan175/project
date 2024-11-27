import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

const FloatingCube = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Floating animation on Y-axis
  const [springProps, setSpring] = useSpring(() => ({
    position: [0, 0, -5],
    config: { tension: 200, friction: 10 },
  }));

  // Cube Rotation and Movement logic
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
    setSpring({
      position: [0, Math.sin(state.clock.getElapsedTime()) * 1.5, -5],
    });
  });

  // Handle hover and click effects
  const handleHover = (state) => {
    setHovered(state);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      
      <animated.mesh
        ref={meshRef}
        {...springProps}
        scale={hovered ? 1.5 : 1}
        onPointerOver={() => handleHover(true)}
        onPointerOut={() => handleHover(false)}
        onClick={handleClick}
      >
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial
          color={clicked ? 'hotpink' : hovered ? 'orange' : 'white'}
          wireframe={true}
          emissive={hovered ? 'yellow' : 'black'}
        />
      </animated.mesh>
    </>
  );
};

export default FloatingCube;

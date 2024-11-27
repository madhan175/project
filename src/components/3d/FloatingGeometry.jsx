import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

const FloatingGeometry = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Animated scale for smooth interaction
  const [springProps, setSpring] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { tension: 200, friction: 15 },
  }));

  // Rotation and position animation logic
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.1;
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.2;

    // Animation for scaling
    setSpring({
      scale: [1 + Math.sin(time * 0.5) * 0.1, 1 + Math.sin(time * 0.5) * 0.1, 1 + Math.sin(time * 0.5) * 0.1],
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
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      
      <animated.mesh
        ref={meshRef}
        {...springProps}
        onPointerOver={() => handleHover(true)}
        onPointerOut={() => handleHover(false)}
        onClick={handleClick}
        castShadow
        receiveShadow
      >
        <Icosahedron args={[1, 1]}>
          <meshStandardMaterial
            color={clicked ? 'hotpink' : hovered ? 'orange' : '#ffffff'}
            wireframe
            transparent
            opacity={0.5}
            emissive={hovered ? 'yellow' : 'black'}
            roughness={0.5}
            metalness={0.7}
          />
        </Icosahedron>
      </animated.mesh>
    </>
  );
};

export default FloatingGeometry;

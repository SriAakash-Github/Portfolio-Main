import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const CodeLines: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<THREE.Group>(null);

  const codeSnippets = useMemo(() => [
    'const portfolio = {',
    '  name: "Sri Aakash",',
    '  role: "Developer",',
    '  skills: [...],',
    '  passion: "code"',
    '};'
  ], []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {codeSnippets.map((line, index) => (
        <Text
          key={index}
          position={[0, 1.5 - index * 0.3, 0]}
          fontSize={0.15}
          color="#00ffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/JetBrainsMono-Regular.woff"
        >
          {line}
        </Text>
      ))}
      
      {/* Wireframe cube around the code */}
      <mesh>
        <boxGeometry args={[3, 2.5, 0.5]} />
        <meshBasicMaterial 
          color="#00ff00" 
          wireframe={true}
          transparent={true}
          opacity={0.3}
        />
      </mesh>
    </group>
  );
};

const FloatingElements: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating geometric shapes */}
      <mesh position={[2, 1, 1]}>
        <octahedronGeometry args={[0.3]} />
        <meshBasicMaterial color="#ff8800" wireframe transparent opacity={0.6} />
      </mesh>
      
      <mesh position={[-2, -1, 0.5]}>
        <tetrahedronGeometry args={[0.4]} />
        <meshBasicMaterial color="#ff00ff" wireframe transparent opacity={0.5} />
      </mesh>
      
      <mesh position={[0, -2, -1]}>
        <dodecahedronGeometry args={[0.35]} />
        <meshBasicMaterial color="#00ffff" wireframe transparent opacity={0.4} />
      </mesh>
    </group>
  );
};

export const CodeCube3D: React.FC = () => {
  return (
    <div className="w-full h-64 md:h-80">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} />
        
        <CodeLines position={[0, 0, 0]} />
        <FloatingElements />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};
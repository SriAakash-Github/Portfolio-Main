import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Black Hole Event Horizon Component
const EventHorizon: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle pulsing effect for the event horizon
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]}>
      <meshBasicMaterial 
        color="#000000" 
        transparent={true}
        opacity={0.95}
      />
    </Sphere>
  );
};

// Accretion Disk Component
const AccretionDisk: React.FC = () => {
  const diskRef = useRef<THREE.Mesh>(null);
  const innerDiskRef = useRef<THREE.Mesh>(null);

  // Create custom shader material for the accretion disk
  const diskMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        innerRadius: { value: 1.5 },
        outerRadius: { value: 4.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform float innerRadius;
        uniform float outerRadius;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          vec2 center = vec2(0.5, 0.5);
          float dist = distance(vUv, center) * 8.0;
          
          // Create spiral pattern
          float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
          float spiral = sin(angle * 3.0 + dist * 2.0 - time * 2.0);
          
          // Distance-based opacity and color
          float alpha = smoothstep(outerRadius, innerRadius, dist) * 
                       smoothstep(innerRadius * 0.8, innerRadius, dist);
          
          // Color gradient from orange to yellow to white
          vec3 color1 = vec3(1.0, 0.3, 0.0); // Orange
          vec3 color2 = vec3(1.0, 0.8, 0.0); // Yellow
          vec3 color3 = vec3(1.0, 1.0, 1.0); // White
          
          float colorMix = (spiral + 1.0) * 0.5;
          vec3 finalColor = mix(color1, color2, colorMix);
          finalColor = mix(finalColor, color3, colorMix * 0.3);
          
          // Add brightness variation
          float brightness = 0.8 + 0.4 * sin(time * 3.0 + dist);
          finalColor *= brightness;
          
          gl_FragColor = vec4(finalColor, alpha * 0.8);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
  }, []);

  useFrame((state) => {
    if (diskRef.current && innerDiskRef.current) {
      // Rotate the accretion disk
      diskRef.current.rotation.z += 0.005;
      innerDiskRef.current.rotation.z -= 0.008;
      
      // Update shader time uniform
      diskMaterial.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <group>
      {/* Outer disk */}
      <mesh ref={diskRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.5, 4, 64, 64]} />
        <primitive object={diskMaterial} />
      </mesh>
      
      {/* Inner bright disk */}
      <mesh ref={innerDiskRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 2, 32, 32]} />
        <meshBasicMaterial 
          color="#ffaa00"
          transparent={true}
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

// Particle System for Energy Streams
const ParticleSystem: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const { positions, colors } = useMemo(() => {
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Create particles in a toroidal distribution around the black hole
      const radius = 2 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * 0.5;
      
      positions[i3] = radius * Math.cos(theta) * Math.cos(phi);
      positions[i3 + 1] = radius * Math.sin(phi);
      positions[i3 + 2] = radius * Math.sin(theta) * Math.cos(phi);
      
      // Color particles with orange/yellow gradient
      const colorIntensity = Math.random();
      colors[i3] = 1.0; // Red
      colors[i3 + 1] = 0.3 + colorIntensity * 0.7; // Green
      colors[i3 + 2] = colorIntensity * 0.2; // Blue
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        
        // Rotate particles around the black hole
        const angle = Math.atan2(z, x) + 0.01;
        const radius = Math.sqrt(x * x + z * z);
        
        positions[i] = radius * Math.cos(angle);
        positions[i + 2] = radius * Math.sin(angle);
        
        // Add some vertical movement
        positions[i + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors={true}
        transparent={true}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Gravitational Lensing Effect (Light Rings)
const LensingRings: React.FC = () => {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ring1Ref.current && ring2Ref.current) {
      // Animate the lensing rings
      ring1Ref.current.rotation.z = state.clock.elapsedTime * 0.5;
      ring2Ref.current.rotation.z = -state.clock.elapsedTime * 0.3;
      
      // Pulsing effect
      const scale1 = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      const scale2 = 1 + Math.cos(state.clock.elapsedTime * 1.5) * 0.08;
      
      ring1Ref.current.scale.setScalar(scale1);
      ring2Ref.current.scale.setScalar(scale2);
    }
  });

  return (
    <group>
      {/* Photon sphere ring */}
      <mesh ref={ring1Ref}>
        <ringGeometry args={[1.45, 1.55, 64]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Secondary lensing ring */}
      <mesh ref={ring2Ref}>
        <ringGeometry args={[1.8, 1.85, 64]} />
        <meshBasicMaterial
          color="#ffddaa"
          transparent={true}
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

// Main Gargantua Black Hole Component
export const GargantuaBlackHole: React.FC = () => {
  return (
    <div className="w-full h-64 md:h-80 lg:h-96 relative">
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-yellow-500/10 to-transparent rounded-full blur-3xl" />
      
      <Canvas 
        camera={{ position: [0, 2, 8], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#ffaa00" />
        
        {/* Black Hole Components */}
        <EventHorizon />
        <AccretionDisk />
        <ParticleSystem />
        <LensingRings />
        
        {/* Controls */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
      
      {/* Additional glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-orange-400/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-32 md:h-32 bg-yellow-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};
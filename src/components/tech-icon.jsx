import {
  Canvas,
  useLoader,
  useFrame,
  useThree,
  extend,
} from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function Controls() {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.enableDamping = true;
      controlsRef.current.enablePan = false;
      controlsRef.current.enableZoom = false;
    }
  }, []);

  useFrame(() => {
    controlsRef.current?.update();
  });

  return <orbitControlsImpl ref={controlsRef} args={[camera, gl.domElement]} />;
}

// Register OrbitControls with R3F
extend({ OrbitControlsImpl: OrbitControls });

// 3D scene only
function TechIconScene({ icon, index }) {
  const gltf = useLoader(GLTFLoader, icon);
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() - index;
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 2) * 0.1;
      groupRef.current.position.x = Math.sin((t * +Math.PI) / 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} />
    </group>
  );
}

// Canvas wrapper
function TechIcon({ icon, index }) {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight intensity={4} position={[5, 2, 6]} />
      <TechIconScene icon={icon} index={index} />
      <Controls />
    </Canvas>
  );
}

export default TechIcon;

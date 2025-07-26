import { Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { ContactBoy } from "./ContactBoy";

const ContactExperience = () => {
  return (
    <Canvas camera={{
        position:[0,0,5]
    }}>
      <ambientLight intensity={2} />
      <directionalLight position={[-5,5,5]} intensity={5} color={'#1c34ff'} />
      <group>
        <Text3D
          curveSegments={32}
          position={[-3, -3 - 2]}
          bevelEnabled
          bevelThickness={0.1}
          height={0.5}
          lineHeight={-0.06}
          size={1.5}
          font={"/fonts/Inter_Bold.json"}
        >
          {`hero`}
          <meshNormalMaterial />
        </Text3D>

        <ContactBoy scale={2.5} position={[0, -3, 0]} />
      </group>
    </Canvas>
  );
};

export default ContactExperience;

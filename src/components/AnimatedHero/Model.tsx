// @ts-expect-error public path
import GLB from "/3d/laptop.glb";

import * as THREE from "three";
import { FC, useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Interpolation, a as three } from "@react-spring/three";

type ModelProps = {
  isOpen: boolean;
  hinge: Interpolation<number, number | number>;
};

export const Model: FC<ModelProps> = ({ isOpen, hinge, ...rest }) => {
  const { nodes, materials } = useGLTF(GLB);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const group = useRef<any>(null);

  const [hovered, setHovered] = useState(false);

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      isOpen ? Math.cos(t / 10) / 10 + 0.25 : 0,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      isOpen ? Math.sin(t / 10) / 4 : 0,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      isOpen ? Math.sin(t / 10) / 10 : 0,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      isOpen ? (-2 + Math.sin(t)) / 3 : -4.3,
      0.1
    );
  });

  return (
    <group
      ref={group}
      {...rest}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={() => setHovered(false)}
      dispose={null}
    >
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh
            material={materials["screen.001"]}
            geometry={nodes["Cube008_2"].geometry}
          />
        </group>
      </three.group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
};

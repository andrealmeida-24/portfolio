import * as THREE from "three";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, ThreeEvent, useFrame } from "@react-three/fiber";
import { Environment, useGLTF, ContactShadows } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { a as web } from "@react-spring/web";

import { useAppInteraction } from "../../contexts";
import { HeroText } from "./HeroText";
import { SquaredBg } from "../UI";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Model({ open, hinge, ...props }: any) {
  const { nodes, materials } = useGLTF("/3d/mac-draco.glb");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const group = useRef<any>();

  const [hovered, setHovered] = useState(false);

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  // Make it float in the air when it's opened
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      open ? Math.cos(t / 10) / 10 + 0.25 : 0,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      open ? Math.sin(t / 10) / 4 : 0,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      open ? Math.sin(t / 10) / 10 : 0,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      open ? (-2 + Math.sin(t)) / 3 : -4.3,
      0.1
    );
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={() => setHovered(false)}
      dispose={null}
    >
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            // @ts-expect-error the following exists
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            // @ts-expect-error the following exists
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh
            material={materials["screen.001"]}
            // @ts-expect-error the following exists
            geometry={nodes["Cube008_2"].geometry}
          />
        </group>
      </three.group>
      <mesh
        material={materials.keys}
        // @ts-expect-error the following exists
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          // @ts-expect-error the following exists
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          // @ts-expect-error the following exists
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        // @ts-expect-error the following exists
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}

export const AnimatedHero = () => {
  const { toggleIsAppReadyForInteraction } = useAppInteraction();
  const [open, setOpen] = useState<boolean>(false);
  const props = useSpring({ open: Number(open) });

  const openAnimationModelHandler = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setOpen(!open);
    toggleIsAppReadyForInteraction();
  };

  return (
    <>
      <SquaredBg />
      <web.main
        id="hero"
        style={{
          background: props.open.to([0, 1], ["#FAF9F6", "transparent"]),
        }}
        className="relative z-10 h-dvh w-full overflow-hidden text-center"
      >
        <HeroText />
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, -30], fov: 35 }}
          className="-z-10 mt-8"
        >
          <three.pointLight
            position={[10, 10, 10]}
            intensity={1.5}
            color={props.open.to([0, 1], ["#f0f0f0", "#202020"])}
          />
          <Suspense fallback={null}>
            <group
              rotation={[0, Math.PI, 0]}
              onClick={openAnimationModelHandler}
            >
              <Model
                open={open}
                hinge={props.open.to([0, 1], [1.575, -0.425])}
              />
            </group>
            <Environment preset="city" />
          </Suspense>
          <ContactShadows
            position={[0, -4.5, 0]}
            opacity={0.4}
            scale={20}
            blur={1.75}
            far={4.5}
          />
        </Canvas>
      </web.main>
    </>
  );
};

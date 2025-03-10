import { Suspense, useState } from "react";
import { Canvas, ThreeEvent } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { a as web } from "@react-spring/web";

import { useAppInteraction } from "../../contexts";
import { HeroText } from "./HeroText";
import { AnimatedSquaresBackground } from "../UI";
import { Model } from "./Model";
import { COLOR_PRIMARY_DARK, COLOR_PRIMARY_LIGHT } from "../../utils";

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
      <AnimatedSquaresBackground />
      <web.main
        id="hero"
        className="relative z-10 h-dvh w-full overflow-hidden text-center"
        style={{
          background: props.open.to(
            [0, 1],
            [COLOR_PRIMARY_LIGHT, "transparent"]
          ),
        }}
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
            color={props.open.to(
              [0, 1],
              [COLOR_PRIMARY_LIGHT, COLOR_PRIMARY_DARK]
            )}
          />
          <Suspense fallback={null}>
            <group
              rotation={[0, Math.PI, 0]}
              onClick={openAnimationModelHandler}
            >
              <Model
                isOpen={open}
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

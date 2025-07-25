import React from "react";
import GradientSphere from "../components/GradientSphere";
import TitleHeader from "../components/TitleHeader";
import { Alien } from "../../public/models/Alien";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const About = () => {
  return (
    <section
      id="about"
      className="flex-center relative md:p-0 px-5 border border-red-500"
    >
      <GradientSphere
        sphere1Class={"about-gradient-sphere sphere-1"}
        sphere2Class={"about-gradient-sphere sphere-2"}
      />

      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title={"About me"}
          text={"Passionate Creator, Lifelong Learer"}
          number={"01"}
        />
        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            <div className="md:col-span-7 col-span-12 row-span-5">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div>
                  <img
                    src="/images/flower.svg"
                    className="md:w-32 w-16 flower"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-blue-50 md:text-5xl text-3xl">Aalekh</h1>
                  <p className="md:text-2xl mt-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dicta, culpa. Lorem ipsum dolor sit. Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
            </div>

            {/* 3d cute alien  */}

            <div className="md:col-span-5 col-span-12 row-span-5">
              <div className="bg-[#c8d751] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                <div className="w-full h-full">
                  <Canvas>
                    <OrbitControls enableZoom={false} />
                    <Alien
                      scale={2}
                      position={[0, -5.5, 0]}
                      rotation={[0, -0.5, 0]}
                    />
                  </Canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

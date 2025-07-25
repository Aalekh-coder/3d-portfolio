import React from "react";
import GradientSphere from "../components/GradientSphere";
import TitleHeader from "../components/TitleHeader";
import { Alien } from "../../public/models/Alien";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { bentoSocialLinks } from "../constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.from("#card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
      },
    });

    // staggered text animations
    gsap.from(".animated-text",{
      opacity:0,
      y:20,
      stagger:0.15,
      duration:0.5,
      ease:"power3.inOut",
      scrollTrigger:{
        trigger:"#about",
        start:"top top",
      }
    })
  }, []);

  return (
    <section
      id="about"
      className="flex-center relative md:p-0 px-5"
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

            {/* web design  */}

            <div id="card" className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">
                    Web Design & Dev
                  </h1>
                  <p className="md:text-2xl max-w-96 animated-text">
                    Cleanly Designed, conversion-focused build for easy updates.
                  </p>
                </div>
              </div>
            </div>

            {/* ui ui design card */}
            <div id="card" className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">
                    UX UI Design
                  </h1>
                  <p className="md:text-2xl max-w-96 animated-text">
                    Seamless web or mobile app design to wow you users.
                  </p>
                </div>
              </div>
            </div>

            {/* moti card */}
            <div id="card" className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  {["BE YOURSELF!", "BE DIFFERENT!", "BUILD DEFFERENT!"].map(
                    (text, index) => (
                      <h1
                        key={index}
                        className="gradient-title md:text-5xl text-3xl font-bold animated-text"
                      >
                        {text}
                      </h1>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* bento social links  */}

            {bentoSocialLinks.map((item, index) => {
              return (
                <div
                  key={index}
                  className="md:col-span-4 col-span-12 row-span-2"
                >
                  <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                    <div className="flex justify-between items-center h-full group cursor-pointer">
                      <div className="flex items-center md:gap-5">
                        <img src={item?.icon} alt="" />
                        <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">
                          {item?.name}
                        </h1>
                      </div>

                      <div className="lg:block md:hidden group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                        <img
                          className="lg:scale-100 scale-50"
                          src={"/images/arrowupright.svg"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

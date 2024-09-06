import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useLayoutEffect, useRef } from "react";

const Hero = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);
  const heroText = useRef(null);
  const button = useRef(null);

  useLayoutEffect(() => {
    const contextHero = gsap.context(() => {
      const tlHero = gsap.timeline();

      tlHero.to(
        heroText.current,
        {
          scale: 0,
          opacity: 0,
          duration: 0.7,
          delay: 1,
          scrollTrigger: {
            pin: true,
            trigger: container.current,
            start: "top top",
            end: "bottom 60%",
            scrub: 1,
            // markers: true,
          },
        },
        0
      );

      tlHero.to(
        button.current,
        {
          opacity: 0,
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom 60%",
            scrub: 1,
          },
        },
        0
      );
    });

    return () => contextHero.revert();
  }, []);

  return (
    <>
      <section
        ref={container}
        id="heroContainer"
        className="relative flex flex-col justify-center w-full h-screen text-center scr-sec "
      >
        <div className="flex items-center justify-center w-full ">
          <p
            id="heroText"
            ref={heroText}
            className=" bg-slate-500 font-viaoda text-6xl lg:text-[155px] xl:text-[172px]"
          >
            Knots & Curls
          </p>
        </div>
        <button
          id="btn"
          ref={button}
          className="absolute text-2xl right-20 bottom-24 font-dmsans"
        >
          Let's Talk
        </button>
      </section>
    </>
  );
};

export default Hero;

"use client";
import Lenis from "lenis";
import GalleryParallex from "@components/GalleryParallex";
import Introduction from "@components/Introduction";
import Motto from "@components/Motto";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import BusinessDescription from "@components/BusinessDescription";

const Home = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useGSAP(() => {
    gsap.to("#heroText", {
      scale: 0,
      opacity: 0,
      duration: 0.7,
      delay: 1,
      scrollTrigger: {
        pin: true,
        trigger: "#heroContainer",
        start: "top top",
        end: "bottom 50%",
        // markers: true,
        scrub: 1,
      },
      markers: true,
    });
    gsap.to("#btn", {
      // scale: 0,
      opacity: 0,
      scrollTrigger: {
        // pin: true,
        trigger: "#heroContainer",
        start: "top top",
        end: "bottom 50%",
        // markers: true,
        scrub: 1,
      },
      // markers: true,
    });
  });

  return (
    <>
      <Hero />
      <Motto />
      <BusinessDescription />
      {/* <GalleryParallex />
      <Introduction /> */}
    </>
  );
};

export default Home;

const Hero = () => {
  return (
    <>
      <section
        id="heroContainer"
        className="relative flex flex-col justify-center w-full h-screen text-center scr-sec "
      >
        <div className="flex items-center justify-center w-full ">
          <p
            id="heroText"
            className=" font-viaoda text-6xl lg:text-[155px] xl:text-[172px]"
          >
            Knots & Curls
          </p>
        </div>
        <button
          id="btn"
          className="absolute text-2xl right-20 bottom-24 font-dmsans"
        >
          Let's Talk
        </button>
      </section>
    </>
  );
};

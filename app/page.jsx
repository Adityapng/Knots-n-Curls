"use client";
import Lenis from "lenis";
import GalleryParallex from "@components/GalleryParallex";
import Introduction from "@components/Introduction";
import Motto from "@components/Motto";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

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
        markers: true,
        scrub: 1,
      },
      markers: true,
    });
  });

  return (
    <>
      <Hero />
      <Motto />

      {/* <GalleryParallex />
      <Introduction /> */}
    </>
  );
};

export default Home;

const Hero = () => {
  return (
    <section
      id="heroContainer"
      className="relative flex flex-col justify-center w-full h-screen text-center scr-sec "
    >
      <svg
        viewBox="0 0 1125 1252"
        className="absolute top-[20%] lg:-top-[150px] max-[1023px]:left-0 lg:right-0 -z-50 blur-[100px] lg:blur-[250px] h-[376px] w-[338px] lg:h-[1252px] lg:w-[1125px]"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M487.902 0C467.898 64.9924 440.329 132.948 403.166 203.773C371.082 274.386 297.4 342.076 221.679 411.638C6.95586 608.897 -224.164 821.219 430.377 1158C653.926 1259.57 890.572 1308.03 1124.63 1146.62V0L487.902 0Z"
          fill="#4D00FF"
        />
      </svg>

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
  );
};

const temp = () => {
  return <div></div>;
};

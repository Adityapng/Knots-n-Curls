"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Motto = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".motto", {
      y: 70,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        markers: false,
      },
      markers: true,
    });
  });

  return (
    <section
      id="container"
      className="z-50 flex items-center justify-center w-full border border-red-500 scr-sec box h-dvh"
    >
      <p
        id="motto"
        className="text-2xl text-center lg:text-4xl motto font-dmsans"
      >
        Designed for You, Styled by Us.
      </p>
    </section>
  );
};

export default Motto;

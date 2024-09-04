"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Motto = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#motto", {
      y: 70,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#mottoContainer",
        start: "50% 1%",
        markers: true,
        // scrub: 1,
      },
    });
  });

  return (
    <section
      id="mottoContainer"
      className="relative z-50 flex items-center justify-center w-full overflow-hidden h-dvh"
    >
      <p
        id="motto"
        className="text-2xl text-center lg:text-4xl motto font-dmsans"
      >
        Designed for You, Styled by Us.
      </p>
      <div>
        <Image />
      </div>
    </section>
  );
};

export default Motto;

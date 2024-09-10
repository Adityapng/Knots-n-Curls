"use client";
import { useGSAP } from "@gsap/react";
// import useMousePosition from "@utils/useMousePosition";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const Footer = () => {
  const cursor = useRef(null);
  useEffect(() => {
    const mouseChange = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX - 56,
        y: e.clientY - 56,
      });
    };
    document.addEventListener("mousemove", mouseChange);
    return () => {
      document.removeEventListener("mousemove", mouseChange);
    };
  }, []);

  return (
    <section className="w-screen h-screen select-none ">
      <div className="relative w-full h-full ">
        <div
          ref={cursor}
          id="cursor"
          className="  absolute z-50 w-28 h-28 bg-[#d9d9d9] rounded-full "
          style={{
            mixBlendMode: "difference",
          }}
        />
        <div className="w-full  h-[45%] flex justify-center items-center">
          <Link href="/contact">
            <p className=" letsTalk md:text-[160px] font-dmsans max-[400px]:text-6xl min-[500px]:text-9xl text-8xl ">
              Let’s Talk
            </p>
          </Link>
        </div>
        <div className="w-full  h-[55%] bg-[#242424] relative overflow-hidden">
          <div className="absolute overflow-hidden -bottom-4 min-[500px]:bottom-0 md:-bottom-[40px] lg:-bottom-[50px] xl:-bottom-[65px] min-[1500px]:-bottom-[80px] min-[1850px]:-bottom-[100px] flex justify-center w-full">
            <p className=" text-[55px] min-[500px]:text-7xl md:text-[119px] lg:text-[159px] xl:text-[195px] min-[1500px]:text-[230px] min-[1850px]:text-[288px]  font-dmsans font-bold tracking-[0.03em] ">
              Knots & Curls
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

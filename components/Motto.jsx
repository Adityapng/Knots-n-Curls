// "use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";
import React, { useLayoutEffect, useRef } from "react";

const Motto = () => {
  const items = [
    { img: "/assets/image/skincare.png", parallexSpeed: 0.04, orientation: 0 },
    { img: "/assets/image/skincare.png", parallexSpeed: 0.1, orientation: 1 },
    { img: "/assets/image/skincare.png", parallexSpeed: 0.05, orientation: 0 },
    { img: "/assets/image/skincare.png", parallexSpeed: 0.07, orientation: 1 },
    { img: "/assets/image/skincare.png", parallexSpeed: 0.2, orientation: 0 },
    { img: "/assets/image/skincare.png", parallexSpeed: 0.065, orientation: 1 },
    { img: "/assets/image/skincare.png", parallexSpeed: 0.042, orientation: 0 },
    { img: "/assets/image/skincare.png", parallexSpeed: 0.042, orientation: 1 },
    { img: "/assets/image/skincare.png", parallexSpeed: 0.15, orientation: 0 },
    { img: "/assets/image/skincare.png", parallexSpeed: 0.06, orientation: 1 },
  ];
  const mottoContainer = useRef(null);
  const motto = useRef(null);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const contextMotto = gsap.context(() => {
      const tlMotto = gsap.timeline({
        scrollTrigger: {
          trigger: mottoContainer.current,
          start: "top top",
          end: "bottom 60%",
          pin: true,
        },
      });

      tlMotto.from(
        motto.current,
        {
          y: 100,
          opacity: 0,
          duration: 1,
        },
        0
      );

      tlMotto.from(
        "#img",
        {
          opacity: 0,
          duration: 3,
        },
        0
      );
    });

    return () => contextMotto.revert();
  }, []);

  const itemPositions = [
    { top: "-5%", left: "5%" },
    { top: "25%", left: "20%" },
    { top: "40%", left: "-5%" },
    { top: "70%", left: "10%" },
    { top: "60%", left: "40%" },
    { top: "-10%", left: "65%" },
    { top: "10%", left: "85%" },
    { top: "80%", left: "70%" },
    { top: "40%", left: "60%" },
    { top: "50%", left: "95%" },
  ];

  useLayoutEffect(() => {
    const handleMouseMove = (e) => {
      const gallery = document.querySelector(".gallery");

      gallery.querySelectorAll(".item").forEach((item, index) => {
        const animationFactor = items[index].parallexSpeed;

        const deltaX = (e.clientX - window.innerWidth / 2) * animationFactor;
        const deltaY = (e.clientY - window.innerHeight / 2) * animationFactor;
        // console.log(deltaX, deltaY);
        gsap.to(item, { x: deltaX, y: deltaY, duration: 0.75 });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="mottoContainer"
      ref={mottoContainer}
      className="relative z-50 flex items-center justify-center w-full h-screen overflow-hidden"
    >
      <p
        id="motto"
        ref={motto}
        className="absolute z-50 text-2xl text-center lg:text-4xl motto font-dmsans"
      >
        Designed for You, Styled by Us.
      </p>
      <div className="w-full h-full gallery">
        {items.map((itemData, index) => (
          <div
            key={index} // Add key for better React performance
            className={`item ${
              itemData.orientation === 0 ? "itemPortrait" : "itemLandscape"
            } ${index % 2 === 0 ? "hidden md:flex" : "flex"}`}
            style={{
              top: itemPositions[index].top,
              left: itemPositions[index].left,
            }}
          >
            <img
              id="img"
              className="object-cover w-full h-full opacity-50"
              src={itemData.img}
              alt="parallax image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Motto;

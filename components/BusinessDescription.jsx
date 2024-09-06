"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useLayoutEffect, useRef } from "react";

const BusinessDescription = () => {
  const text =
    "We offer personalized hairstyling and makeup services, blending modern trends with individual style. Specializing in everything from everyday looks to bridal and event makeup, we ensure every client leaves feeling confident and radiant.";

  const effectContainer = useRef(null);
  const bookButton = useRef(null);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const contextDescription = gsap.context(() => {
      const tlDescrip = gsap.timeline({
        scrollTrigger: {
          trigger: effectContainer.current,
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1,
          markers: true,
          // pin: "#effect",
        },
      });

      tlDescrip.from(".staggerEffect", {
        opacity: 0.1,
        stagger: 0.5,
      });

      tlDescrip.from(bookButton.current, {
        opacity: 0,
        duration: 1.5,
      });
    });

    return () => contextDescription.revert();
  }, []);

  return (
    <section
      id="businessDescription"
      className="flex items-center w-full h-screen p-6 bg-slate-500 "
    >
      <div
        id="effect"
        ref={effectContainer}
        className="flex flex-col lg:pl-[25%] gap-10 "
      >
        <div>
          <p className=" font-dmsans text-3xl lg:text-[64px] leading-10 lg:leading-[90px]">
            <CharacterList text={text} />
          </p>
        </div>
        <div>
          <button
            ref={bookButton}
            className="px-6 py-4 text-white rounded-full bg-zinc-800 active:bg-zinc-900"
          >
            Book an appointment
          </button>
        </div>
      </div>
    </section>
  );
};

const CharacterList = ({ text }) => {
  const characters = text.split(""); // Split the string into individual characters

  return (
    <>
      {characters.map((char, index) => (
        <span className="staggerEffect" key={index}>
          {char}
        </span>
      ))}
    </>
  );
};

export default BusinessDescription;

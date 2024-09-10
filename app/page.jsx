"use client";
import Lenis from "lenis";
import GalleryParallex from "@components/GalleryParallex";
import Introduction from "@components/Introduction";
import Motto from "@components/Motto";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useRef } from "react";
import BusinessDescription from "@components/BusinessDescription";
import Services from "@components/Services";
import WhatWeDo from "@components/WhatWeDo";
import Hero from "@components/Hero";
import Footer from "@components/Footer";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <main className="">
        <Hero />
        <Motto />
        <BusinessDescription />
        <Services />
        <WhatWeDo />
        <GalleryParallex />
        <Introduction />
        <Footer />
      </main>
    </>
  );
};

export default Home;

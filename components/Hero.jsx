import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { signIn, useSession, getProviders } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

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
          },
        },
        0
      );

      tlHero.to(
        "#button",
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

  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
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
            className="  font-viaoda text-6xl lg:text-[155px] xl:text-[172px]"
          >
            Knots & Curls
          </p>
        </div>
        <div className="absolute bottom-7 right-7 lg:right-20 lg:bottom-24">
          {session?.user ? (
            <>
              <Link href="/book-appointment">
                <button id="button" className="text-2xl font-dmsans">
                  Book an appointment
                </button>
              </Link>
            </>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    className="text-2xl cursor-pointer font-dmsans "
                    type="button"
                    id="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                  >
                    Book an appointment
                  </button>
                ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Hero;

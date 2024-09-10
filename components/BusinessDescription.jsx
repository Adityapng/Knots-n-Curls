"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";
import Link from "next/link";

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
    <section
      id="businessDescription"
      className="flex items-center w-full h-screen p-6 "
    >
      <div
        id="effect"
        ref={effectContainer}
        className="flex flex-col lg:pl-[25%] gap-10 "
      >
        <div>
          <p className=" font-dmsans text-3xl md:text-5xl xl:text-[64px] leading-10 md:leading-[64px] xl:leading-[90px]">
            <CharacterList text={text} />
          </p>
        </div>
        <div>
          {session?.user ? (
            <>
              <button
                ref={bookButton}
                className="px-6 py-4 text-white rounded-full bg-zinc-800 font-poppins active:bg-zinc-900"
              >
                Book an appointment
              </button>
            </>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <Link href="/book-appointment">
                    <button
                      className="px-6 py-4 text-white rounded-full cursor-pointer bg-zinc-800 font-poppins active:bg-zinc-900"
                      type="button"
                      id="button"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                    >
                      Book an appointment
                    </button>
                  </Link>
                ))}
            </>
          )}
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

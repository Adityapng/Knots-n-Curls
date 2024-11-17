import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const GalleryParallex = () => {
  const parallaxContainer = useRef(null);
  const move0 = useRef(null);
  const move1 = useRef(null);
  const move2 = useRef(null);
  const move3 = useRef(null);
  const move4 = useRef(null);
  const parallaxColumns = [
    {
      col1: [
        { img: "/assets/image/hair.png" },
        { img: "/assets/image/1.jpeg" },
        { img: "/assets/image/2.jpeg" },
        { img: "/assets/image/3.jpeg" },
        { img: "/assets/image/4.jpeg" },
        { img: "/assets/image/5.jpeg" },
        { img: "/assets/image/6.jpeg" },
      ],
    },
    {
      col2: [
        { img: "/assets/image/7.jpeg" },
        { img: "/assets/image/8.jpeg" },
        { img: "/assets/image/9.jpeg" },
        { img: "/assets/image/10.jpeg" },
        { img: "/assets/image/28.jpeg" },
        { img: "/assets/image/12.jpeg" },
        { img: "/assets/image/hair.png" },
      ],
    },
    {
      col3: [
        { img: "/assets/image/hair.png" },
        { img: "/assets/image/29.jpeg" },
        { img: "/assets/image/15.jpeg" },
        { img: "/assets/image/13.jpeg" },
        { img: "/assets/image/14.jpeg" },
        { img: "/assets/image/17.jpeg" },
        { img: "/assets/image/18.jpeg" },
      ],
    },
    {
      col4: [
        { img: "/assets/image/19.jpeg" },
        { img: "/assets/image/20.jpeg" },
        { img: "/assets/image/30.jpeg" },
        { img: "/assets/image/22.jpeg" },
        { img: "/assets/image/23.jpeg" },
        { img: "/assets/image/24.jpeg" },
        { img: "/assets/image/hair.png" },
      ],
    },
    {
      col5: [
        { img: "/assets/image/hair.png" },
        { img: "/assets/image/25.jpeg" },
        { img: "/assets/image/26.jpg" },
        { img: "/assets/image/27.jpeg" },
        { img: "/assets/image/11.jpeg" },
        { img: "/assets/image/16.jpeg" },
        { img: "/assets/image/21.jpeg" },
      ],
    },
  ];

  useLayoutEffect(() => {
    const contextParallaxScroll = gsap.context(() => {
      const tlParallax = gsap.timeline({
        scrollTrigger: {
          trigger: parallaxContainer.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tlParallax.to(
        "#move0",
        {
          y: -100,
        },
        0
      );

      tlParallax.to(
        "#move1",
        {
          y: 300,
        },
        0
      );

      tlParallax.to(
        "#move2",
        {
          y: -500,
        },
        0
      );

      tlParallax.to(
        "#move3",
        {
          y: 200,
        },
        0
      );

      tlParallax.to(
        "#move4",
        {
          y: -400,
        },
        0
      );
    });

    return () => {
      contextParallaxScroll.revert();
    };
  }, []);

  return (
    <section
      ref={parallaxContainer}
      className="justify-center hidden w-full overflow-hidden md:flex h-dvh"
    >
      <div className="flex justify-start gap-7">
        {parallaxColumns.map((column, index) => (
          <div
            key={index}
            id={`move${index}`}
            className={`column column-${index} gap-7 flex flex-col ${
              index % 2 === 0 ? "self-start" : "self-end"
            } ${index === 4 ? "min-[768px]:max-[1023px]:hidden" : "flex"}`}
          >
            {Object.values(column)[0].map((item, imgIndex) => (
              <img
                key={imgIndex}
                src={item.img}
                alt={`Parallax Image ${imgIndex + 1}`}
                className={`w-[272px] opacity-80 `}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryParallex;

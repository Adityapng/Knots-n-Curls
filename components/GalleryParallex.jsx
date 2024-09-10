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
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
      ],
    },
    {
      col2: [
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/hair.png" },
      ],
    },
    {
      col3: [
        { img: "/assets/image/hair.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
      ],
    },
    {
      col4: [
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/hair.png" },
      ],
    },
    {
      col5: [
        { img: "/assets/image/hair.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
        { img: "/assets/image/parallaxTestImage.png" },
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
                className={`w-[272px] min `}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryParallex;

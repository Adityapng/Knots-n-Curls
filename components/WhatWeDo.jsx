import React from "react";
import Image from "next/image";

const skinCare = "/assets/image/skincare.png";
const hair = "/assets/image/hair.png";
const makeUp = "/assets/image/makeup.png";

const WhatWeDo = () => {
  return (
    <section className="flex items-center justify-center h-screen ">
      <div className="flex flex-col gap-10 xl:gap-24">
        <div className="flex justify-center text-5xl font-viaoda">
          <p className="">What we do...</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-7 xl:gap-14 ">
          <div className="relative rounded-xl overflow-hidden  h-[150px] w-[300px]  lg:h-[288px] lg:w-[200px] xl:h-[432px] xl:w-[300px] md:h-[200px] md:w-[500px]">
            <Image
              src={skinCare}
              className="object-cover w-full h-full transition-all duration-300 hover:scale-110 "
              width={350}
              height={505}
              alt="bridal"
            />
            <p className="absolute bottom-0 left-0 px-5 py-3 text-3xl font-dmsans">
              Bridal<span className="text-red-600 ">.</span>
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden  h-[150px] w-[300px]  lg:h-[288px] lg:w-[200px] xl:h-[432px] xl:w-[300px] md:h-[200px] md:w-[500px]">
            <Image
              src={hair}
              className="object-cover w-full h-full transition-all duration-300 hover:scale-110 "
              width={350}
              height={505}
              alt="special events"
            />
            <p className="absolute bottom-0 left-0 px-5 py-3 text-3xl font-dmsans">
              Special Events<span className="text-red-600 ">.</span>
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden h-[150px] w-[300px]  lg:h-[288px] lg:w-[200px] xl:h-[432px] xl:w-[300px] md:h-[200px] md:w-[500px]">
            <Image
              src={makeUp}
              className="object-cover w-full h-full transition-all duration-300 hover:scale-110 "
              width={350}
              height={505}
              alt="commercial"
            />
            <p className="absolute bottom-0 left-0 px-5 py-3 text-3xl font-dmsans">
              Commercial<span className="text-red-600 ">.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

import React from "react";
import Image from "next/image";

const skinCare = "/assets/image/skincare.png";
const hair = "/assets/image/hair.png";
const makeUp = "/assets/image/makeup.png";

const Services = () => {
  return (
    <section className="flex items-center justify-center h-screen ">
      <div className="flex flex-col gap-24">
        <div className="flex justify-center text-5xl font-viaoda">
          <p className="">Services</p>
        </div>
        <div className="flex gap-14 ">
          <div className="  relative rounded-xl overflow-hidden  h-[432px] w-[300px]">
            <Image
              src={skinCare}
              className="object-cover w-full h-full transition-all duration-200 hover:scale-110 "
              width={350}
              height={505}
              alt="skin care"
            />
            <p className="absolute bottom-0 left-0 px-5 py-3 text-3xl font-dmsans">
              Skin Care<span className="text-red-600 ">.</span>
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden  h-[432px] w-[300px]">
            <Image
              src={hair}
              className="object-cover w-full h-full transition-all duration-200 hover:scale-110 "
              width={350}
              height={505}
              alt="hair dressing"
            />
            <p className="absolute bottom-0 left-0 px-5 py-3 text-3xl font-dmsans">
              Hair Dressing<span className="text-red-600 ">.</span>
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden  h-[432px] w-[300px]">
            <Image
              src={makeUp}
              className="object-cover w-full h-full transition-all duration-200 hover:scale-110 "
              width={350}
              height={505}
              alt="makeup"
            />
            <p className="absolute bottom-0 left-0 px-5 py-3 text-3xl font-dmsans">
              Makeup<span className="text-red-600 ">.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

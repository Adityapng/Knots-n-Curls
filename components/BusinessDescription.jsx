import React from "react";

const BusinessDescription = () => {
  return (
    <section className="flex flex-col w-full h-dvh bg-slate-500 ">
      <div>
        <div>
          <p className=" font-dmsans text-[64px] leading-[90px]">
            We offer personalized hairstyling and makeup services, blending
            modern trends with individual style. Specializing in everything from
            everyday looks to bridal and event makeup, we ensure every client
            leaves feeling confident and radiant.
          </p>
        </div>
        <button className="px-5 py-4 text-white rounded-lg bg-zinc-800">
          Book an appointment
        </button>
      </div>
    </section>
  );
};

export default BusinessDescription;

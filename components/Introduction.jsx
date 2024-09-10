import React from "react";

const Introduction = () => {
  return (
    <section className="w-full p-6 h-dvh ">
      <div className="flex items-center justify-center w-full h-full ">
        <div className="flex flex-col gap-6 md:flex-row ">
          <div className=" w-[85dvw] h-[55dvw] md:h-[26dvw] md:w-[26dvw]  border border-[#B1B1B1] border-opacity-50 rounded-lg"></div>
          <div className=" w-[85dvw] h-[110dvw] md:h-[74dvh] md:w-[52dvw]  rounded-lg border border-[#B1B1B1] border-opacity-50 flex justify-center items-center">
            <div className="flex flex-col items-start justify-between w-2/3 h-2/3">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                omnis?
              </p>
              <button className="px-5 py-3 rounded-full bg-zinc-800 font-poppins">
                Hop on a call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

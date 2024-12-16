import React from "react";

const profile = "/assets/profile/image.jpg";

const Introduction = () => {
  return (
    <section className="w-full p-6 h-dvh ">
      <div className="flex items-center justify-center w-full h-full ">
        <div className="flex flex-col gap-6 md:flex-row ">
          <div className=" w-[85dvw] h-[120dvw] md:h-[74dvh] md:w-[52dvw]  rounded-lg border border-[#B1B1B1] border-opacity-50 flex justify-center items-center">
            <div className="flex flex-col items-start justify-between w-3/4 gap-6 h-3/4">
              <div className="overflow-auto">
                <p className="text-lg font-bold">Rohit Gupta</p>
                <i>Professional Hair, Makeup & Beauty Trainer</i>
                <br />
                <br />
                <p>
                  Rohit Gupta is a celebrated hair and makeup artist with
                  extensive experience in the beauty industry. As a Celebrity
                  Hair & Makeup Artist, he has worked with contestants from over
                  5 reality shows, including Big Boss, Roadies, and Splitsvilla,
                  creating flawless looks that captivate on screen. Rohit’s
                  talent extends globally, having collaborated with models from
                  60+ countries.
                </p>
                <br />
                <p>
                  {" "}
                  His expertise has graced prestigious platforms such as Miss &
                  Mrs India 2020 and 2021, as well as Miss Diva International
                  Delhi & Uttarakhand 2022. With a collection of 15+
                  certificates and trophies, Rohit stands out as a top artist in
                  his field.
                </p>
                <br />{" "}
                <p>
                  A certified trainer under SS Bollywood Academy, Lakme Academy,
                  and Daedal Government Training Institute, Rohit is not only a
                  master of his craft but also a dedicated mentor, shaping the
                  next generation of beauty professionals.
                </p>
              </div>
              <a
                href="tel:8368855275"
                className="px-5 py-3 rounded-full bg-zinc-800 font-poppins"
              >
                Hop on a call
              </a>
            </div>
          </div>
          <div className=" w-[85dvw] h-[60dvw] md:h-[26dvw] md:w-[26dvw]  border border-[#B1B1B1] border-opacity-50 rounded-lg">
            <img src={profile} alt="Profile image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

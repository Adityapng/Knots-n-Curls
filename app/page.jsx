import Feed from "@components/Feed";

const Home = () => {
  return (
    <>
      <section className="relative flex flex-col justify-center w-full text-center h-dvh">
        {/* <svg
          width="1275"
          height="1428"
          viewBox="0 0 1275 1428"
          className="absolute -top-[150px] -right-[150px] -z-50 blur-[250px]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M522.772 0C506.197 108.276 470.391 226.384 403.549 353.772C371.465 424.385 297.783 492.074 222.062 561.637C7.33837 758.896 -223.781 971.219 430.759 1308C648.137 1406.76 971.292 1487.19 1275 1367.33V0L522.772 0Z"
            fill="#4D00FF"
          />
        </svg> */}

        <svg
          width="1125"
          height="1252"
          viewBox="0 0 1125 1252"
          className="absolute -top-[150px] right-0 -z-50 blur-[250px]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M487.902 0C467.898 64.9924 440.329 132.948 403.166 203.773C371.082 274.386 297.4 342.076 221.679 411.638C6.95586 608.897 -224.164 821.219 430.377 1158C653.926 1259.57 890.572 1308.03 1124.63 1146.62V0L487.902 0Z"
            fill="#4D00FF"
          />
        </svg>

        <p
          id="heroText"
          className=" font-viaoda text-6xl lg:text-[155px] xl:text-[172px]"
        >
          Knots & Curls
        </p>
      </section>
      <section>
        <Feed />
      </section>
    </>
  );
};

export default Home;

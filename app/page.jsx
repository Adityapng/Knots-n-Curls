import Feed from "@components/Feed";

const Home = () => {
  return (
    <>
      <section className="flex flex-col justify-center w-full text-center h-dvh">
        <div className=" absolute h-[300px] w-[300px] bg-blue-500  -z-50 -right-[150px] -top-[150px] rounded-full blur-3xl" />
        <p className=" font-viaoda text-6xl lg:text-[155px] xl:text-[172px]">
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

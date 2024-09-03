import "@styles/globals.css";
import React from "react";

const page = () => {
  return (
    <div className="scr-contain">
      <Qwer />
      <Poiu />
    </div>
  );
};

export default page;

const Qwer = () => {
  return <section className="scr-sec bg-slate-400 h-dvh">asdf</section>;
};
const Poiu = () => {
  return <section className="scr-sec bg-slate-500 h-dvh">lkhg</section>;
};

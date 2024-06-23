import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slidenav from "./slidenav";
export default function Header() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {" "}
      <div className="bg-pink-400  ">
        <Slidenav/>
        <div className="flex justify-center  align-center items-center px-[15%]  lx:px-[5%]">
          <div className="pt-[38%] ">
            <p className="text-center text-white">WE ARE #1 ON THE MARKET</p>
            <h1 className="text-7xl text-white font-semibold  sd:text-4xl text-center py-4 pm:text-2xl ">We're Here To Help You Navigate While Traveling</h1>
            <p className="text-center text-white text-lg font-medium py-6">You'll get comprehensive results based on the provided location.</p>
<div className="flex flex-wrap justify-center h-24 rounded-[40px] align-center items-center px-[15%] my-8 bg-white">
<div>fudfheji</div>
<div>fudfheji</div>

<div>fudfheji</div></div>

          </div>
        </div>
      </div>
    </>
  );
}

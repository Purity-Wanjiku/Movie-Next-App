import React, { useState } from "react";
import Search from "./search";


const Navigation = () => {



  return (
    <div className="navbar-lg py-6 bg-slate-900 px-20">
      <nav>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white ml-10"> M<span className="text-yellow-500 ">oo</span>vie</h1>
            </div>
            <div className="">
             {/* <input className="text-left pl-2 py-1 px-80 rounded-full border border-white text-white bg-black text-lg focus:outline-none focus:ring focus:border-white-300"  */}
             {/* type="text" placeholder="Search" /> */}
              <Search movies={[]} genres={[]} />
            </div>

    <div className="flex items-center mr-10">
        <span className="text-white font-medium text-lg space-x-10 ">
            <a className="text-lg" href="">Home</a>
            <a className="text-lg" href="">My List</a>
             <button className="bg-yellow-400 text-white px-4 py-1 rounded-xl hover:bg-yellow-400 focus:outline-none focus:ring focus:bg-yellow-300 text-lg mr-20" type="button">
            <p className=" text-white text-xl"> Sign In</p>
             </button>
       </span>
    </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

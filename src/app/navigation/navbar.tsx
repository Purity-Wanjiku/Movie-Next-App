'use client'
import React, { useState } from "react";
import MovieSearch from "./search";


const Navigation = () => {
  return (
    <div className="navbar-lg py-6 bg-slate-900 px-20  ">
      <nav className="">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center mt-3 mb-3">
              <h1 className="text-2xl font-bold text-white ml-10"> M<span className="text-yellow-500 ">oo</span>vie</h1>
            </div>
            
       <div className="flex items-center mr-10 mt-3 mb-3">
        <span className="text-white font-medium text-xl space-x-10 ">
            <a className="text-lg" href="/">Home</a>
            {/* <a className="text-lg" href="">My List</a> */}
             <button className="bg-yellow-400 text-white px-4 py-1 rounded-xl hover:bg-yellow-400 focus:outline-none focus:ring focus:bg-yellow-300 text-lg mr-20" type="button">
            <p className=" text-white text-md"> Sign In</p>
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

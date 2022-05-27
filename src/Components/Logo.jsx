import React from "react";

function Logo() {
  return (
    <div className="grid grid-cols-12 mt-10 justify-center bg-yellow-200 rounded-3xl">
      <div className="col-span-7 px-12 py-10 ml-10">
        <img className="rounded-lg w-40 h-20" src="images/logo.jpg" />

        <p className="text-6xl mt-16 font-bold text-purple-700">Book is a</p>
        <p className="text-6xl font-bold text-purple-700">
          Window to the World
        </p>
        <p className="text-gray-500 font-bold text-lg mt-2">
          Wake up your dream by reading book everyday
        </p>
        <button className="mt-10 bg-green-300 px-8 py-4 rounded-3xl hover:bg-green-400 hover:shadow-lg duration-300">
          <span className="text-white font-bold">Read Now</span>
        </button>
      </div>
      <div className="col-span-5">
        <img className="rounded-lg px-8 py-2" src="images/09.png" />
      </div>
    </div>
  );
}

export default Logo;

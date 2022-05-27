import React from "react";

function Feedback() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 bg-yellow-200 w-11/12 rounded-3xl">
        <div className="col-span-8  px-24 py-24">
          <h1 className="text-purple-700 text-6xl font-bold">
            Recommended books
          </h1>
          <h1 className="text-purple-700 text-6xl font-bold">
            from you to review
          </h1>
          <div className="flex mt-10">
            <input
              className="w-3/6 bg-slate-200 outline-none px-8 py-4 rounded-xl"
              placeholder="Write your recommendations"
            />
            <button className="bg-green-300 rounded-3xl px-8 py-2 ml-10 hover:bg-green-400 hover:shadow-xl duration-500">
              <span className="text-gray-100 font-bold ">Submit</span>
            </button>
          </div>
        </div>
        <div className="col-span-4">
          <img className="h-80" src="images/cat.png" />
        </div>
      </div>
    </div>
  );
}

export default Feedback;

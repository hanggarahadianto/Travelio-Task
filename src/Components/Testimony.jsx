import React from "react";

function Testimony() {
  return (
    <div className="flex justify-center w-full">
      <div className="px-24 py-24 flex gap-8">
        <div className="rounded-xl w-2/5 h-40 border-4 border-green-400">
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <img
                className="ml-2 h-32 w-32 object-cover rounded-full mt-3"
                src="images/person1.jpg"
              />
            </div>
            <div className="col-span-8 mt-5">
              <div className=" ml-3">
                <h1 className="mb-2 font-bold text-xl">Eka Ardilah</h1>
                <p>
                  I feel it is very helpful with books provided, so i do my job
                  easily
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl w-2/5 h-40 border-4 border-green-400">
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <img
                className="ml-2 h-32 w-32 object-cover rounded-full mt-3"
                src="images/person2.jpg"
              />
            </div>
            <div className="col-span-8 mt-5">
              <div className=" ml-3">
                <h1 className="mb-2 font-bold text-xl">Eka Ardilah</h1>
                <p>
                  I feel it is very helpful with books provided, so i do my job
                  easily
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl w-2/5 h-40 border-4 border-green-400">
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <img
                className="ml-2 h-32 w-32 object-cover rounded-full mt-3"
                src="images/person3.jpg"
              />
            </div>
            <div className="col-span-8 mt-5">
              <div className=" ml-3">
                <h1 className="mb-2 font-bold text-xl">Eka Ardilah</h1>
                <p>
                  I feel it is very helpful with books provided, so i do my job
                  easily
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;

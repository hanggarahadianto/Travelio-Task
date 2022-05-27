import React from "react";

function Navigation() {
  return (
    <div className="space-x-8 text-xl mt-10">
      <span className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300">
        Home
      </span>
      <span className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300">
        Best Seller
      </span>
      <span className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300">
        Category
      </span>
      <span className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300">
        Community
      </span>
      <span className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300">
        Blog
      </span>
    </div>
  );
}

export default Navigation;

import React from "react";
import { Instagram, Twitter, Facebook } from "react-bootstrap-icons";

function Footer() {
  return (
    <div className="grid grid-cols-12 bg-yellow-200">
      <div className="col-span-4 px-24 py-20">
        <h1 className="text-purple-600 font-bold text-3xl">Book</h1>
        <h2 className="text-slate-400 font-bold text-lg">
          Is the best place to read book
        </h2>
      </div>
      <div className="col-span-5 ml-20 mt-5">
        <div className="text-lg space-y-2 ">
          <p className="font-bold cursor-pointer">Navigation</p>
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Best Seller</p>
          <p className="cursor-pointer">Category</p>
          <p className="cursor-pointer">Community</p>
          <p className="cursor-pointer">Blog</p>
        </div>
      </div>
      <div className="col-span-3 mt-5">
        <h1 className="font-bold text-lg">Company</h1>
        <p>adminbookreview@gmail.com</p>
        <p>Jl. Setia Budi Jakarta Barat Indonesia</p>
        <div className="flex gap-8 mt-10">
          <Instagram className="h-10 w-10" />
          <Twitter className="h-10 w-10" />
          <Facebook className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
}

export default Footer;

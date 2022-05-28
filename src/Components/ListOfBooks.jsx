import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function ListOfBooks() {
  const [bookData, setData] = useState([]);
  const [search, setSearch] = useState("");

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          // "https://www.googleapis.com/books/v1/volumes?q='+search+'%7Bkeyword" +
          //   "&maxResults=40"
          "https://www.googleapis.com/books/v1/volumes?q=%7Bkeyword" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className=" mt-20 px-8 py-4">
      <div className="grid grid-cols-12 ml-20">
        <div className="col-span-3">
          <span className="text-purple-800 font-semibold text-3xl">
            Search Now
          </span>
        </div>
        <div className="col-span-6">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchBook}
            type="text"
            className="w-11/12 px-8 py-3 outline-none bg-transparent bg-slate-200 rounded-lg"
            placeholder="Find the book you are looking for"
          />
        </div>
        <div className="col-span-3 ml-20">
          <span className="text-gray-400 font-semibold text-lg">View More</span>
        </div>
      </div>
      <div className="px-8 py-4 flex gap-12 w-full">
        <Card book={bookData} />; ;
      </div>
    </div>
  );
}

export default ListOfBooks;

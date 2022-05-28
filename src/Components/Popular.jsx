import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";

function Popular() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=%7Bkeyword")
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <Carousel breakPoints={breakPoints}>
        {books.map((item) => {
          return (
            <div className="mr-7">
              <div className="bg-slate-200 h-96 px-8 py-4 rounded-xl overflow-hidden max-w-sm mt-10 transition ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-slate-300 duration-300">
                <div className="flex">
                  <img
                    className=" h-40 rounded-xl "
                    src={item.volumeInfo.imageLinks.smallThumbnail}
                  />
                  <a className="ml-20" href={item.volumeInfo.previewLink}>
                    <button className="bg-purple-400 rounded-lg px-4 py-2">
                      <span className="text-slate-100">Read</span>
                    </button>
                  </a>
                </div>
                <div className="">
                  <h1 className="text-gray-700 font-bold text-2xl mt-5">
                    {item.volumeInfo.title}
                  </h1>
                  <p className="mt-3">{item.volumeInfo.authors}</p>
                  {/* <p>{item.volumeInfo.publisher}</p> */}
                  {/* <p>{item.volumeInfo.publishedDate}</p> */}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Popular;

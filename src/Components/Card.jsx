import React from "react";
import Carousel from "react-elastic-carousel";

const Card = ({ book }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  console.log(book);

  return (
    <>
      <Carousel breakPoints={breakPoints}>
        {book.map((item) => {
          let thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;

          let amount =
            item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

          if (thumbnail != undefined && amount != undefined) {
            return (
              <>
                <div className="bg-slate-200 h-96 px-8 py-4 rounded-xl overflow-hidden max-w-sm mt-10 transition ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-slate-300 duration-300">
                  <div className="flex">
                    <img className=" h-40 rounded-xl " src={thumbnail} />
                    <a className="ml-40" href={item.volumeInfo.previewLink}>
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
              </>
            );
          }
        })}
      </Carousel>
    </>
  );
};

export default Card;

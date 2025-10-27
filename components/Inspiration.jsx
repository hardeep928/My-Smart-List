import React, { useState } from "react";
import { fetchRandomQuote } from "../src/hooks/quoteAPI";
import mountainImg from "../src/assets/mountains.jpg";

const Inspiration = () => {
  const [quote, setQuote] = useState("Discipline beats motivation.");
  const [author, setAuthor] = useState("Jocko Willink");

  const getNewInspiration = async () => {
    const newQuote = await fetchRandomQuote();
    setQuote(newQuote.quote);
    setAuthor(newQuote.author || "Anonymous");
  };

  return (
    <div className="bg-white min-h-min pb-5">
      <h1 className="font-bold md:text-4xl text-2xl md:p-10 p-5 md:ml-[5em] ">
        Today's Inspiration
      </h1>
      <div className="pb-3 bg-gray-300 mx-4 md:max-w-4xl rounded-2xl mb-2 md:mx-auto text-center md:flex md:justify-center md:gap-10">
        <img
          className="max-w-full md:max-w-6/12 rounded-2xl mt-3 md:ml-3"
          src={mountainImg}
          alt="mountains"
        />
        <div className="details mx-auto px-4 py-3 md:flex md:flex-col justify-center text-center">
          <h2 className="text-xl font-semibold">{quote}</h2>
          <h3 className="text-md text-gray-600">{author}</h3>
          <button
            onClick={getNewInspiration}
            className="bg-[#f65562] text-white py-2 px-6 rounded-lg font-medium cursor-pointer mt-2 hover:bg-red-600 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            New Inspiration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;

import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag() {

  const [tag, setTag] = useState("Cute cat");
  const { gif, loading, fetchData } = useGif(tag);

  function changeHandler(e) {
    if (e.target.value === '') {
      alert('Please enter a tag');
    }
    setTag(e.target.value);
  }

  return (
    <div className="bg-green-400 w-[50%] mx-auto flex flex-col justify-center space-y-4 items-center rounded-lg border border-black">
      <h3 className="text-center font-bold text-2xl capitalize mt-4">RANDOM GIF</h3>
      <div className="border-[1.7px] border-black w-[180px] mx-auto"></div>

      {
      loading ? <Spinner /> : <img src= {gif} alt="Random Gif" width="450" />
      }

      <input
        type="text"
        value={tag}
        onChange={changeHandler}
        className="bg-white w-[80%] py-2 rounded-lg my-2 text-center focus:outline-none focus:border-none"
      />

      <button
        onClick={() => fetchData(tag)} // Fixed onClick handler
        className="bg-white/70 uppercase w-[80%] py-2 rounded-lg my-2 hover:bg-white transition-all font-semibold text-center"
      >
        GENERATE
      </button>
    </div>
  );
}

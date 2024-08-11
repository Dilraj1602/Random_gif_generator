import { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

export default function Random(props) {

  const { gif, loading, fetchData } = useGif();

  return (
    <div className="bg-green-400 w-[50%] mx-auto flex flex-col justify-center items-center rounded-lg border border-black">
      <h3 className="text-center font-bold text-2xl capitalize mt-4">A RANDOM GIF</h3>
      <div className="border-[1.7px] border-black w-[180px] mx-auto"></div>

      {loading ? (<Spinner />) : (<img src={gif} alt="Random Gif" width="450" />)}

      <button
        onClick={() => fetchData()}
        className="bg-white/70 uppercase w-[80%] py-2 rounded-lg my-2 hover:bg-white transition-all font-semibold text-center"
      >
        GENERATE
      </button>
    </div>
  );
}

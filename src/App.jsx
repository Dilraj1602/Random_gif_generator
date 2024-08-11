import Random from "./components/Random";
import Tag from "./components/Tag";
import { useState } from "react";
import url from "./hooks/useGif";

export default function App() {
  return (
    <div className="background w-[100vw] h-[100vh] relative flex flex-col">
      <h1 className="bg-white w-[90%] mx-auto py-3 text-center font-bold text-3xl rounded-md absolute top-8 left-[06rem]">
        RANDOM GIFS
      </h1>

      <div className="mt-32 flex flex-col space-y-11">
        <Random url={url} />
        <Tag />
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "./Spinner";
import { useGif } from "./useGif";


const API_KEY = "3HfGrJ3reTmw1fnK220JNVnOCoBTNBG3";

export const Tags = () => {
    const [tag, settag]=useState("");
  //   const [gif, setGif] = useState("");
  //   const [loading, setLoading]=useState("false");
  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data} = await axios.get(url);
  //   const imageSource=data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // },[]);
  const {gif,loading,fetchData}=useGif(tag);
  function clickHandler() {
    fetchData(tag);
  }
  function changehandler(event){
    settag(event.target.value)
  }
  return (
    <div
      className="w-1/2  bg-blue-500 rounded-lg border border-black 
    flex flex-col items-center gap-y-5 mt-[15px] "
    >
      <h1 className="mt-[15px] text-3xl underline uppercase font-bold ">Random Gif</h1>
      {
        loading? (<Spinner/>): (<img src={gif} width="450"></img>)
      }
      

      <input
        className="w-10/12 mb-[3px] text-lg py-2 rounded-lg text-center"
        onChange={changehandler}
        value={tag}
      />
      <button
        onClick={clickHandler}
        className="mb-[20px] w-10/12 bg-yellow-500 text-lg py-2 rounded-lg "
      >
        Generate
      </button>
    </div>
  );
};

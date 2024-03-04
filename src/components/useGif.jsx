import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "./Spinner";

const API_KEY = "3HfGrJ3reTmw1fnK220JNVnOCoBTNBG3";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState("false");
  async function fetchData(tag) {
    setLoading(true);

    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData("car ");
  }, []);
  return { gif, loading, fetchData };
};

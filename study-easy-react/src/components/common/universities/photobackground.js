import React, { useState, useEffect, Suspense, lazy } from "react";
import { unsplash } from "./api.js";
import Spinner from "./img.js";
import "./university.css";
import BackgroundSlider from 'react-background-slider'

const Photos = lazy(() => import("./photos"));

export const Photobackground = () => {

  //IMAGE SEARCH
const [query, setQuery] = useState("canada");
const [photos, setPhotos] = useState([]);
const [isLoading, setLoading] = useState(true);
const [page, setPage] = useState(1);
const [total, setTotal] = useState("");
const perPage = 10;

const getMorePhotos = async (page) => {
  try {
    await unsplash.search
      .getPhotos({
        query: query,
        page: page,
        per_page: perPage
      })
      .then((result) => {
        setTotal(result.response.total);
        setPage(page);
        photos.length ? 
        setPhotos([...photos, ...result.response.results]) : setPhotos(result.response.results)
      });
  } catch (err) {
    console.log("Unable to retrieve photos. Reason: " + err);
  }
};

useEffect(() => {
  setPage(1);
  getMorePhotos(1);
}, [query]); 

const slideimages=
[

      <Photos photos={photos.slice(1,2)}/>
      ,
      <Photos photos={photos.slice(2,3)}/>
      ,
      <Photos photos={photos.slice(3,4)}/>
      ,
      <Photos photos={photos.slice(5,6)}/>
      ,
      <Photos photos={photos.slice(7,8)}/>
      ,
      <Photos photos={photos.slice(9,10)}/>
];
//   const AutoplaySlider = withAutoplay(AwesomeSlider);

return (
  <div>
 <BackgroundSlider images = {slideimages} duration={5} transition={3}/>
 </div>
)
}


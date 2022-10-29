
import React, { useState, useEffect, Suspense, lazy } from "react";
import { unsplash } from "./api.js";
import Spinner from "./img.js";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { useLocation, useNavigate } from "react-router";
import './styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


const Photos = lazy(() => import("./photos"));

export const Slider = ({country}) => {

  const [query, setQuery] = useState(country.toLowerCase());
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState("");
  const perPage = 20;

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

  
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const slider= (
    <div className="container universitybg">
    <br/>
    <br/>
    <br/>
    <br/>
    <AutoplaySlider play={true} animation = "cubeAnimation"
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={2000}>
    <div><Photos photos={photos.slice(0,1)}/></div>
    <div><Photos photos={photos.slice(2,3)}/></div>
    <div><Photos photos={photos.slice(3,4)}/></div>
    <div><Photos photos={photos.slice(4,5)}/></div>
    <div><Photos photos={photos.slice(7,8)}/></div>
    <div><Photos photos={photos.slice(9,10)}/></div>
    <div><Photos photos={photos.slice(11,12)}/></div>
    <div><Photos photos={photos.slice(13,14)}/></div>
    <div><Photos photos={photos.slice(14,15)}/></div>
    <div><Photos photos={photos.slice(15,16)}/></div>
    <div><Photos photos={photos.slice(17,18)}/></div>
    </AutoplaySlider>
    </div>
  );
  
  return (
    <div>
        {slider}
    </div>
  )
}

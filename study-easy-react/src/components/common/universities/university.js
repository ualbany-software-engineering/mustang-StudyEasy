
import React, { useState, useEffect, Suspense, lazy } from "react";
import { unsplash } from "./api.js";
import Spinner from "./img.js";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import "./university.css";

const Photos = lazy(() => import("./photos"));
export const University = () => {
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
        {
           image:  <Photos photos={photos.slice(1,2)}/>

        },
        
        {
            image:  <Photos photos={photos.slice(2,3)}/>
         },
         
        {
            image:  <Photos photos={photos.slice(3,4)}/>
         },
         
        {
            image:  <Photos photos={photos.slice(5,6)}/>
         },
         
        {
            image:  <Photos photos={photos.slice(7,8)}/>
         },
         {
            image:  <Photos photos={photos.slice(9,10)}/>
         },
  ];
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
              <div className="slide">
                <AutoplaySlider className="slideshow" play={true} cancelonInteraction={false} interval={2000}>
                <div><Photos photos={photos.slice(1,2)}/></div>
                <div><Photos photos={photos.slice(2,3)}/></div>
                <div><Photos photos={photos.slice(3,4)}/></div>
                <div><Photos photos={photos.slice(4,5)}/></div>
                <div><Photos photos={photos.slice(9,10)}/></div>
              </AutoplaySlider>
              </div>
      </Suspense>
    </div>
  )
}

import React from "react";
import Masonry from "react-masonry-css";
import "./photos.css"
import BackgroundImage from 'react-background-image';

const breakpointColumnsObj = {
  default: 3,
  1000: 2,
  600: 1
};



const Photos = ({ photos }) => {
  const gallery =
    photos &&
    !!photos.length &&
    photos.map((photo, index) => {
      return (
        <div key={index} className="gallery__item">
          <img src={photo.urls.regular}/>
          <div className="item-details">
          </div>
        </div>
      );
    });

  let content = gallery.length && gallery;

  return (
    <div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="gallery__row"
          columnClassName="gallery__column"
        >
          {content}
        </Masonry>
 
    </div>
  );
};

export default Photos;
import React, { useState } from 'react'
import ShowMoreText from "react-show-more-text";
import "./scraper.css";

const executeOnClick = (isExpanded)=>{
  console.log(isExpanded);
}

export const Scraper = ({wikiData}) => {


  const [data, setData] = useState();
  const links = [];
  const givenquery = wikiData;
  const wiki = require("wikipedia");

    (async () => {
    
    try {
      const page = await wiki.page(givenquery);
      console.log(wikiData.toString());
      //Response of type @Page object
      const summary = await page.intro();
      // console.log(summary);
      setData(summary);
      //Response of type @wikiSummary - contains the intro and the main image
    } catch (error) {
      console.log(error);
      //=> Typeof wikiError
    }
    })();

    
  return (
    <div>
             <ShowMoreText
                /* Default options */
                lines={10}
                more="Show more"
                less="Show less"
                className='description'
                anchorClass="show-more-less-clickable"
                onClick={executeOnClick}
                expanded={false}
                truncatedEndingComponent={" ... "}
            >
               <p>{data}</p>
            </ShowMoreText>
   </div>
  )
}

import React, { useState } from 'react'

export const Scraper = ({wikiData}) => {
  const [data, setData] = useState();
  const links = [];
  const givenquery = wikiData;
const wiki = require("wikipedia");

    (async () => {
    
    try {
      const page = await wiki.page(givenquery);
      // console.log(wikiData.toString());
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
      <p>
        {data}
      </p>
      
    </div>
  )
}

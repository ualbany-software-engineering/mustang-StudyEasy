import React, { useState } from 'react'

export const Visadata = (wikicountry) => {

    const [data, setData] = useState();
  const links = [];
//   const givenquery = wikiData;
  const wiki = require("wikipedia");

(async () => {
  try {
    const page = await wiki.page(
      "Visa requirements for United States citizens"
    );
    console.log(page);
    //Response of type @Page object
    const summary = await page.intro();
    // const pdf = await page.pdf();
    console.log(summary);
    setData(summary);
    //Response of type @wikiSummary - contains the intro and the main image
  } catch (error) {
    console.log(error);
    //=> Typeof wikiError
  }
})();
  return (
    <div>
        {data}
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import translate from "translate";

export const Collegedetails =() => {
  
    translate.engine = "deepl";// Or "google", "yandex", "libre"
    translate.key = process.env.DEEPL_KEY;
    const location = useLocation();
    const [data, setData] = useState([]);
    const [image, setImage1] = useState([]);
    const [image1, setImage2] = useState([]);
    const [image2, setImage3] = useState([]);
    const wiki = require("wikipedia");
    var uni = location.state.collegename.toString();

    //string manipulation for a irrgularity in information.
    if(uni == "42 FR")
    {
        uni = "42 School";
    }


    const returner = async () => {
    try {
      const text = await translate(uni, "en");
      console.log(text);
      const given = await wiki.search(text);
    //   console.log(given.results[0].title);
      const page = await wiki.page(given.results[0].title);
      const page1 = await wiki.page(given.results[1].title);

      //Response of type @Page object
      const summary = await page.intro();
      const total = await page.summary();
      const total1 = await page1.summary();

        setData(summary);  
         console.log(total1);
        console.log(summary);
        if(total.originalimage.source !== null)
        {
          setImage1(total.originalimage.source);
        }
        if(total1.originalimage.source !== null)
        {
          setImage2(total1.originalimage.source);
        }
      return;
      //Response of type @wikiSummary - contains the intro and the main image
    } catch (error) {
      console.log(error);
      //=> Typeof wikiError
    }
    }

    useEffect(()=>{
        returner()
      },[])
    

  return (
    <div>
      <div className='collegedetailbg'> 
      <h2>Home/Details</h2>
      <h1>College details of <br/>{location.state.collegename}</h1>
      </div>
      <div className='container details'>
        <h1>Description: </h1>
           <p>{data}</p>
           <img src ={image}/>
           <img src ={image1}/>
      </div>

      
      
    </div>
  )
}

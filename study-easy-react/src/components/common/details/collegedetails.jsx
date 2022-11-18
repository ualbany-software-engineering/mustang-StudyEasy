import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import translate from "translate";

export const Collegedetails =() => {
  
    translate.engine = "deepl";// Or "google", "yandex", "libre"
    translate.key = process.env.DEEPL_KEY;
    const [requirements, setRequirements] = useState([]);
    const location = useLocation();
    const [data, setData] = useState([]);
    const [image, setImage1] = useState([]);
    const [image1, setImage2] = useState([]);
    const [image2, setImage3] = useState([]);
    const wiki = require("wikipedia");
    var uni = location.state.collegename.toString();
    var requirement_index1 = Number(location.state.num1);
    var index2 = Number(requirement_index1-1);
    console.log(requirement_index1);
    console.log(index2);

    //string manipulation for a irrgularity in information.
    if(uni == "42 FR")
    {
        uni = "42 School";
    }

    const getData= async ()=>{
      fetch("https://raw.githubusercontent.com/DheerajKumarT/visadata/main/Adm.json")
        .then(function(response){
        //   console.log(response)
          return response.json();
        })
        .then(function(myJson) {
        //   console.log(myJson);
        //due to json  issues had to manipulate data a bit
            setRequirements(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])


   // console.log(given);

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
        <h1>Require Scores:</h1>
            {
              requirements.slice(index2,requirement_index1).map((item) => {
                return <><p>{item.Required[0]}</p><p>{item.Required[1]}</p></>
              })
            }
          <h1>Tution:</h1>
          {
            requirements.slice(index2,requirement_index1).map((item) => {
              return <p>{item.Fees}</p>
            } )
          }

           <h1>Scholarship offered:</h1>
          {
            requirements.slice(index2,requirement_index1).map((item) => {
              return <p>{item.Scholarship}</p>
            } )
          }
      </div>

    </div>
  )
}

import { Majors } from "../components/Majors";
import {useState} from "react";
import Datacard from "./DatacardCollege";
import '../styling/College.css'
import Button from '@mui/material/Button';

const College = (props) =>{
    const [majors,showMajors]= useState(false)
    const [button_text,updateButton_text]= useState(false)
  
    const getMajor =()=>{
      showMajors(!majors);
      updateButton_text(!button_text)
      // render()
      // return(
      //   // <div>
      //   //   <p>Hello</p>
      //   //   <Majors/>
      //   // </div>
      //   <Majors/>
        // )
    }
   
    
    
    var buttonText =button_text ? "hide majors": "Show majors"
    
      return (
        
        <div className="college">
          <Datacard title = {props.collegeName} logo ={props.Logo} />
          {/* <h4><a href={props.url}>Click for {props.collegeName}</a></h4> */}
          {majors ? <Majors major={props?.number}/>: null}
          <Button onClick ={getMajor} variant = "contained" color="success">Checkout</Button>
          {/* <button onClick ={getMajor} >{buttonText}</button> */}
        </div>
        )
    
        
  }

  export default College
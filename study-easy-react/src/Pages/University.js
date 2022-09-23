import { Majors } from "../components/Majors";
import {useState} from "react";
//https://stackoverflow.com/questions/49649767/reactjs-how-do-you-switch-between-pages-in-react
import '../styling/Universities.css';
import { USA } from "../countrypages/USA";
import { INDIA } from "../countrypages/INDIA";

export const University = (data) =>{
  const country = data
    if (country ==='USA'){
      return(
        <USA/>
      );
    }
    if(country==='IND'){
     return( <INDIA/>)
    }
    if(country ==='CHI'){
      return( <INDIA/>)
    }
    if(country === 'None'){
      return( <INDIA/>)
    }
    
    return(
        <div>
          <h4>{data.country}</h4>
            
        </div>);
};



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
      
      <div>
        <h2>{props.collegeName}</h2>
        <h3>{props.city}, {props.zipCode}</h3>
        <h4><a href={props.url}>Click for {props.collegeName}</a></h4>
        {majors ? <Majors major={props?.number}/>: null}
        <button onClick ={getMajor} >{buttonText}</button>
       
        
        
      </div>
      )
      
      
}


// export default class university extends Component {
  //   render() {
  //     return (
  //       <div>university
  //         <College collegeName="UAblany" city="Albany" zipCode={12345} url= "https://albany.edu/"/>
  //         <College collegeName= "ULosAngles" city = "Los Angles" zipCode={99993} url ="https://www.programiz.com/python-programming/time/sleep"/>
  //       </div>
        
  //     )
  //   }
  // }
  
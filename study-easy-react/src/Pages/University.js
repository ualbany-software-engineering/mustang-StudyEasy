import { Majors } from "../components/Majors";
import {useState} from "react";
//https://stackoverflow.com/questions/49649767/reactjs-how-do-you-switch-between-pages-in-react
export const University = (data) =>{
  const country = data.country
    if (country==='USA'){
      return(
        <div>
          <h1>Welcome to USA </h1>
          <College collegeName="UAblany" city="Albany" zipCode={12345} url= "https://albany.edu/" number={1}/>
          <College collegeName= "ULosAngles" city = "Los Angles" zipCode={99993} url ="https://www.programiz.com/python-programming/time/sleep" number={2}/>
        </div>
      );
    }
    if(country==='IND'){
     return( 
     <div>
        <h1>Welcome to India</h1>
        <College collegeName="H.Tech Ashoka" city ="New Delhi" zipCode={9091321} url= "https://fastapi.io" number={1}/>
        <College collegeName="Darius" city ="Pune" zipCode={19123321} url= "https://www.robinwieruch.de/react-dropdown/" number={2}/>
    </div>)
    }
    if(country==='CHI'){
      return(
        <div>
          <h1>Welcome to China</h1>
          <College collegeName="Peking University" city ="Beijing" zipCode={443211} url= "https://reactjs.org/docs/conditional-rendering.html"number={2}/>
          <College collegeName="Ming vu university " city ="Beijing" zipCode={443200} url= "https://reactjs.org/docs/conditional-rendering.html"number={1}/>

        </div>)
    }
    if(country==='None'){
      return(<div>
        <h4>Please Pick a Country</h4>
      </div>)
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
  
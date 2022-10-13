import { Majors } from "../components/Majors";
import {useState, useEffect} from "react";
import Datacard from "./DatacardD";
import '../styling/College.css'
// import Nav from '../designpages/Nav'
import Button from '@mui/material/Button';
import {db} from "../firbase-config";
import {collection, Firestore, getDocs} from "firebase/firestore";

// import {Button as Bb} from 'react-bootstrap';
// import MyCss from 'bootstrap/dist/css/bootstrap.min.css';



const College = (props) =>{
    const [majors,showMajors]= useState(false)
    const [button_text,updateButton_text]= useState(false)
  
    const getMajor =()=>{
      showMajors(!majors);
      updateButton_text(!button_text)
     
    }
    const majorCollectionsRef = collection(db,"college")
    // const majorCollectionsRef = db.collection('college').doc(mjaor)
    const [majorsData,setmajorsData]=useState([
      {major:{name:'', grad:[''], undergrad:['']}}
    ]);
    useEffect(()=>{
      const getMajors=async () =>{
        const data = await getDocs(majorCollectionsRef)
        console.log(data, "end");
        // console.log
        setmajorsData(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
        console.log(majorsData, "HAHHAHA")
      
      }
      getMajors()
    },[])

    const [addmajor,setaddmajor]=useState([])
    var buttonText =button_text ? "hide majors": "Show majors"

    
      return (
         <div className="college">
          <Datacard title={props.collegeName} logo={props.Logo} name={props.name} />
          {/* <h4><a href={props.url}>Click for {props.collegeName}</a></h4> */}
          {majors ? <Majors major={props?.number} /> : null}
          <Button onClick={getMajor}  variant="contained" color="success">{buttonText}</Button>
          {/* <p></p> */}
          {/* <Bb variant="primary">Hello</Bb> */}
          <p> Hellp</p>
          {majorsData.map((mj) => {
            return( <div> 
              
              <h2>id : {mj.id}</h2>
              <h2 >major : {mj.major.name}</h2>
              <h2 >undergrad : </h2>
              {mj.major.undergrad.map(e => <p>{e}</p>)}
              <h2 >Grad : </h2>
              {mj.major.grad.map(e => <p>{e}</p>)} 

            </div>
          )})}
          <span>Update to create data</span>
          {majorsData.map((majorsData, index)=> (
            <div key={index}> 
              <input placeholder="Please enter the major name" 
                // (e) =>{
                //   const majorName = e.target.value;
                //   setmajorsData(

                //     (currentMajor) => currentMajor.map(x =>x.name ===majorsData.name ? {...x, majorName} :x)
                //   )
                // }
                />
              {/* {majorsData.undergrad.map((e,ind)=>(
                <div> 
                  <input placeholder="add crouse number for undergrad "  />
                </div>
              )
                
              )} */}
            </div>
          ))}          
        </div>
        )
    
        
  }

  export default College
  // <div>
  //           {/* {majorsData.map((mj)=> {
  //            return (
  //             <div> <h2>hell</h2></div>
  //             <div> 
  //               {mj.map((dmj) =>{
  //                 return(
  //                   <div> 
  //                     <h2>Hi : {dmj.name}</h2>
  //                   </div>
  //                 )
  //               })}
  //             </div>
  //            )
             
  //           })} */}
  //         </div>
   // render()
      // return(
      //   // <div>
      //   //   <p>Hello</p>
      //   //   <Majors/>
      //   // </div>
      //   <Majors/>
        // )
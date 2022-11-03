// stonyBrookAdmi
import { Majors } from "../components/Majors";
import React, { useState, useEffect } from "react";
import Datacard from "./DatacardD";
import "../styling/College.css";
import Nav from "../designpages/Nav";
import Button from "@mui/material/Button";
import { db } from "../firbase-config";
import { collection, Firestore, getDocs } from "firebase/firestore";
// import {Form, Formik, Field, FieldArray} from 'formik';
// // import { Grid,Card } from "@material-ui/core";
// import Grid from '@mui/material/Grid';
// import {object, number, string} from 'yup'
// import { async } from "@firebase/util";
// import { Typography } from "@mui/material";

// import {Button as Bb} from 'react-bootstrap';
// import MyCss from 'bootstrap/dist/css/bootstrap.min.css';

const College = (props) => {
  const [majors, showMajors] = useState(false);
  const [button_text, updateButton_text] = useState(false);

  const getMajor = () => {
    showMajors(!majors);
    updateButton_text(!button_text);
  };
  const majorCollectionsRef = collection(db, "stonyBrookAdmi");
  // const majorCollectionsRef = db.collection('college').doc(mjaor)
  const [majorsData, setmajorsData] = useState([]);

  useEffect(() => {
    const getMajors = async () => {
      const data = await getDocs(majorCollectionsRef);
      console.log(data, "end");
      // console.log
      setmajorsData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(majorsData, "HAHHAHA");
    };
    getMajors();
  }, []);

  // const [addmajor,setaddmajor]=useState([ {name:'', grad:{str:''}, undergrad:['']}])
  var buttonText = button_text ? "hide majors" : "Show majors";

  return (
    <div className="college">
      <Datacard title={props.collegeName} logo={props.Logo} name={props.name} />
      <Button variant="contained" color="success" href={props.link} target='_blank'>apply to college</Button>
      
      {/* <h4><a href={props.url}>Click for {props.collegeName}</a></h4> */}
      {majors ? <Majors major={props?.number} /> : null}
      <Button onClick={getMajor} variant="contained" color="success">
        {buttonText}
      </Button>
      {/* <p></p> */}
      {/* <Bb variant="primary">Hello</Bb> */}
      <p> Hellp</p>
      {majorsData?.map((mj) => {
        return (
          <div style={{ backgroundColor: "white" }}>
            <h2>id : {mj?.id}</h2>
            <h2>major : {mj?.values?.majorName}</h2>
            <h2>undergrad : </h2>
            {mj?.values?.undergrad?.map((e) => (
              <p>
                course Name: {e.courseName} & course dispersion: {e.dispersion}
              </p>
            ))}
            <h2>Grad : </h2>
            {mj?.values?.grad?.map((e) => (
              <p>
                course Name: {e.courseName} & course dispersion: {e.dispersion}
              </p>
            ))}
          </div>
        );
      })}
      <span>Update to create data</span>
    </div>
  );
};

export default College;
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

// (e) =>{
//   const majorName = e.target.value;
//   setmajorsData(

//     (currentMajor) => currentMajor.map(x =>x.name ===majorsData.name ? {...x, majorName} :x)
//   )
// }
//  {/* {majorsData.undergrad.map((e,ind)=>(
// <div>
//   <input placeholder="add crouse number for undergrad "  />
// </div>
// )

// )} */}\

// {/* {mjd.major.map((list) => (
//               <div> </div>
//             ))} */}
//               {/* <input placeholder="Please enter the major name" type="text" value={mjd.major.name}
//                    onChange={e=> {
//                     let current = [...addmajor]
//                     current[index][e.target.name] = e.target.value
//                     console.log("ah ",e.target.value, "  = ", e.target.name)
//                     setaddmajor(current)
//                     console.log("### ",e.target.value, "  = ", e.target.name)

//                   }}
//                 /> */}
//                 {/* {mjd.major.map((list,ind)=> {
//                   <div key={ind}>
//                   <label>Flide of study</label>
//                   <input
//                   type="text" name="name" value={list.name} onChange ={e => {

//                   }}
//                   />
//                   </div>
//                 })} */}
// let mjName = ""
// const underGradArr =[]
// console.log("Mj name ", mjName)
//   return(
//     <div>
//         <label> Please Enter major name </label>
//         <input placeholder="Major name ex Math..."  type ="text" onChange={e =>{mjName=e.target.value
//         console.log("Mj name ", mjName)}} />
//         <br/>
//         <label> Please Enter undergrad class </label>
//         <input  placeholder = "101 math, ,," type="text"   />

//  </div>
// )
// {/* <form>
//           {addmajor.map((mjd, index)=> {return (
//            <div key={index}>
//             <label> Please Enter major name </label>
//            <input placeholder="Major name ex Math..."  type ="text" value={mjd.name} />

//             </div>
//           )

//           })}
//           </form> */}
{
  /* <Formik initialValues={{name:'',
              undergrad:[],
              grad:[]}}
              validationSchema={object({
                name:string("Please enter the study Flied").required().min(2)
            })}
              onSubmit={()=> {async (values =>{
                console.log('My Values from Colleges .js ', values)
                return new Promise (res => setTimeout(res, 3000))
              })}
              }>
              {({values,errors, isSubmitting})=>(
                <Form autoComplete="off">
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Field name="name" />
                  </Grid>
                  <Grid>
                    <FieldArray name="undergrad">
                    {({push,remove}) => (
                      <React.Fragment>
                        <Grid item> 
                          <Typography variant="body2"></Typography>
                        </Grid>

                        {value}
                      </React.Fragment>
                    )}
                  </FieldArray>
                  </Grid>

                  <Grid>
                    <FieldArray name="grad">

                    </FieldArray>
                  </Grid>

                  <Grid>
                    <Button 
                      disabled={isSubmitting}
                      type="submit" 
                      variant="contained" 
                      color="primary">
                      
                      {isSubmitting? 'Submitting':'Submit'}
                      </Button>
                  </Grid>
                </Grid>
                <pre>{JSON.stringify({values,errors},null,4)}</pre>
                 </Form>
              )}
          </Formik> */
}

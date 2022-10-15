import React, {useState, useEffect} from 'react'
import {db} from "../firbase-config";
import {collection, getDocs,updateDoc,doc, deleteDoc} from "firebase/firestore";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
// import {Form, Formik, Field, FieldArray} from 'formik';
import { async } from '@firebase/util';
export default function UpdateDeleteMajor() {
    const majorCollectionsRef = collection(db,"college")
    const [majorsData,setmajorsData]=useState([
     
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
    return (
   <div>
        
        {majorsData.map((mj,index) => {
            return( <div style={{backgroundColor:"white"}}
            key={index}> 
              <div > 
              <h2>id : {mj.id}</h2>
              <h2 >major : {mj.values.majorName}</h2>
              <h2 >undergrad : </h2>
              {mj.values.undergrad.map((e,ind) => {
                let c = ""
                let d = ""
                return (
                <div><p>course Name: {e.courseName} & course dispersion: {e.dispersion}</p>
                    
                    <Grid container  spacing={4}>
                           <Grid item>
                                <TextField label={e.courseName+" update"}  onChange={(e)=> {c =e.target.value; console.log(c," = c") }} />
                            </Grid > 
                            <Grid item>
                                <TextField placeholder={"change dispersion"} onChange={(e)=> {d =e.target.value; console.log(d," = c") }}  />
                            </Grid >
                            <Grid item>
                                <Button variant="contained" color="secondary" onClick={ async ()=>{
                                    const updatecoruse = doc(db,"college",mj.id)
                                    const updateFildes = {undergrad:{courseName: c,dispersion:d }}
                                    await updateDoc(updatecoruse,updateFildes)
                                    alert("AN Update has been made",ind,"caused remove of all other objects new courseName: ",c," and new dispersion",d )
                                }}>Update </Button>
                            </Grid>
                        
                    </Grid>
                </div>)})}
              <h2 >Grad : </h2>
              {mj.values.grad.map(e => <p>course Name: {e.courseName} & course dispersion: {e.dispersion}</p>)}
              <React.Fragment>
              <Button color="error" 
              variant="contained"
              onClick={ async()=>{
                alert("About Delete Whole Major ")
                const deleteMajor = doc(db,"college",mj.id)
                await deleteDoc(deleteMajor)
              } }
              >Delete</Button>
              </React.Fragment>
                </div>
                
            </div>
            
          )})}
          
   </div>
  )
}

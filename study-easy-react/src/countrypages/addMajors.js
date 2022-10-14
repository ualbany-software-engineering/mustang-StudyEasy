import React from 'react'
import {Form, Formik, Field, FieldArray} from 'formik';
import Grid from '@mui/material/Grid';
import {object, number, string} from 'yup'
import { async } from "@firebase/util";
import { TextField, Typography } from "@mui/material";
import {db} from "../firbase-config";
import {collection, Firestore, getDocs} from "firebase/firestore";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


export default function AddMajors () {
  return (
    <Container variant="contained" backgroundColor="white" > 
        <Formik initialValues={{name:'',
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

                        {values.undergrad.map((_val, ind) => (
                            <Grid container item>
                                <Grid item>
                                <Field name={`undergrad.${ind}`}
                                    componenet={TextField}
                                />

                            
                                </Grid>
                            </Grid>
                            
                        ))}
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
          </Formik>
    </Container>
  )
}

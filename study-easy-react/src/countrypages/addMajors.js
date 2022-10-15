import React from 'react'
import {Form, Formik, Field, FieldArray} from 'formik';
import Grid from '@mui/material/Grid';
import {object, number, string} from 'yup'
import { async } from "@firebase/util";
import {Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
// import { TextField } from 'formik-material-ui';

import {db} from "../firbase-config";
import {collection, addDoc} from "firebase/firestore";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


export default function AddMajors () {
  return (
    <Container variant="contained"  > 
        <Formik initialValues={{majorName:'',
              undergrad:[{courseName:'',dispersion:""}],
              grad:[{courseName:'',dispersion:""}]}}
              validationSchema={object({
                majorName:string("Please enter the study Flied").required().min(2)
            })}
              onSubmit={async (values) => {
                console.log('My Values from addMajors .js ', values)
                return new Promise ((res) => setTimeout(res, 3000))
              }
              }>
              {({values,errors, isSubmitting})=>(
                <Form autoComplete="off">
                <Grid container direction="column" spacing={4}>
                  <Grid item>
                    <Field  name="majorName" label="Field of Study" placeholder="Math" fullWidth />
                    {/* <TextField id="majorName" name="majorName" label="Field of Study" fullWidth  onChange={values.majorName}/> */}
                  </Grid>
                   
                    <FieldArray name="undergrad">
                    {({push,remove,}) => (
                      <React.Fragment>
                        <Grid item> 
                          <Typography variant="body2">Add Class For UnderGrad</Typography>
                        </Grid>

                        {values.undergrad.map((_val, ind) => (
                            <Grid container item spacing={2}>
                                <Grid item >
                                <Field name={`undergrad.${ind}.courseName`}
                                    placeholder="mat 101"
                                />
                                </Grid>

                                <Grid item xs={12}>
                                    <Field name={`undergrad.${ind}.dispersion`}
                                    placeholder="In this class student will learn How to add numbers"
                                    width={10}
                                />
                               
                                </Grid>
                                {ind>0 &&
                                    <Grid item>
                                        <Button onClick={() => remove(ind)}
                                            variant="contained"  color="error"
                                        >remove</Button>
                                    
                                    </Grid>
                                }   

                                <Grid item>
                                    <Button 
                                    variant="contained" color="success"
                                    onClick={() => push({courseName:'',dispersion:''})}>
                                        ADD
                                    </Button>
                                </Grid>
                            </Grid>
                            
                        ))}
                      </React.Fragment>
                    )}
                  </FieldArray>

                  <FieldArray name="grad">
                    {({push,remove,}) => (
                      <React.Fragment>
                        <Grid item> 
                          <Typography variant="body2">Add Class For Grad</Typography>
                        </Grid>

                        {values.grad.map((_val, ind) => (
                            <Grid container item spacing={2}>
                                <Grid item>
                                <Field name={`grad.${ind}.courseName`}
                                    placeholder="mat 518"
                                />
                                </Grid>

                                <Grid item>
                                    <Field name={`grad.${ind}.dispersion`}
                                    placeholder="In this class student will expiring DIp"
                                    width={10}
                                />
                               
                                </Grid>
                                {ind>0 &&
                                    <Grid item>
                                        <Button onClick={() => remove(ind)}
                                            variant="contained"  color="error"
                                        >remove</Button>
                                    
                                    </Grid>
                                }   

                                <Grid item>
                                    <Button 
                                    variant="contained" color="success"
                                    onClick={() => push({courseName:'',dispersion:''})}>
                                        ADD
                                    </Button>
                                </Grid>
                            </Grid>
                            
                        ))}
                      </React.Fragment>
                    )}
                  </FieldArray>
                  


                            <br/>
                  <Grid item xs={12}>
                    <Button 
                      disabled={isSubmitting}
                      type="submit" 
                      variant="contained" 
                      color="primary">
                      
                      {isSubmitting? 'Submitting':'Submit'}
                      </Button>
                  </Grid>
                  <br/>
                </Grid>
                <pre>{JSON.stringify({values,errors},null,4)}</pre>
                 </Form>
              )}
          </Formik>
    </Container>
  )
}

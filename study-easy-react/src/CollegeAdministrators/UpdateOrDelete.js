import React, { useState, useEffect } from "react";
import { db } from "../firbase-config";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
// import { palette } from "@mui/system";
// import { checkTargetForNewValues } from "framer-motion";
// import {Form, Formik, Field, FieldArray} from 'formik';
// import { async } from '@firebase/util';
export default function UpdateDeleteMajor() {
  const majorCollectionsRef = collection(db, "college");
  const [majorsData, setmajorsData] = useState([]);
  const [run, setrun] = useState(0);

  useEffect(() => {
    const getMajors = async () => {
      const data = await getDocs(majorCollectionsRef);
      console.log(data, "end");
      // console.log
      setmajorsData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(majorsData, "HAHHAHA");
    };
    getMajors();
  }, [run]);

  return (
    <div>
      {majorsData.map((mj, index) => {
        return (
          <div key={index} style={{ backgroundColor: "white" }}>
            <Grid container spacing={2} align="center" sx={{ width: "auto" }}>
              <Grid item>
                <Box
                  sx={{
                    border: 2,
                    borderColor: "secondary.main",
                    color: "secondary",
                    spacing: 2,
                    boxShadow: 2,
                  }}
                >
                  <h2>id : {mj.id}</h2>
                  <h2>major : {mj.values.majorName}</h2>
                  <h2>undergrad : </h2>

                  <Grid item></Grid>

                  {mj.values.undergrad.map((e, ind) => {
                    let c = ""; // course name
                    let d = "";
                    let nc = ""; // course  new name value
                    let nd = "";
                    return (
                      <Grid container spacing={1}>
                        <Grid item>
                          <p>
                            course Name: {e.courseName} & course dispersion:{" "}
                            {e.dispersion}
                          </p>
                        </Grid>

                        <Grid
                          item
                          container
                          // spacing={4}
                          sx={{ border: 2, borderTop: 0 }}
                          // xs={12}
                        >
                          <Grid item>
                            <TextField
                              label={e.courseName + " update"}
                              onChange={(e) => {
                                c = e.target.value;
                                console.log(c, " = c");
                              }}
                            />
                          </Grid>
                          <Grid item>
                            <TextField
                              placeholder={"change dispersion"}
                              onChange={(e) => {
                                d = e.target.value;
                                console.log(d, " = d");
                              }}
                            />
                          </Grid>
                          <Grid item>
                            <Button
                              variant="contained"
                              color="secondary"
                              onClick={async () => {
                                console.log("My Indx is ", ind);
                                const updatecoruse = doc(db, "college", mj.id);
                                // const updateFildes = {
                                //   values:{undergrad: { courseName: c, dispersion: d },}
                                // };
                                function updateArray() {
                                  var newUpdateArray = mj.values.undergrad;
                                  newUpdateArray[ind] = {
                                    courseName: c,
                                    dispersion: d,
                                  };
                                  console.log(
                                    mj.values.undergrad,
                                    "Hello ----"
                                  );

                                  console.log(
                                    "Hey My new arrya",
                                    newUpdateArray
                                  );
                                  return newUpdateArray;
                                }
                                const updateFildes = {
                                  values: {
                                    undergrad: updateArray(),
                                    grad: mj.values.grad,
                                    majorName: mj.values.majorName,
                                  },
                                };
                                console.log("My newrrr Upda", updateFildes);

                                await updateDoc(updatecoruse, updateFildes);
                                alert("AN Update has been made");
                                setrun(run + 1);
                              }}
                            >
                              Update{" "}
                            </Button>
                          </Grid>
                          <Grid>
                            {/* <p>Length: {mj.values.undergrad.length}</p> */}
                            {mj.values.undergrad.length > 1 && (
                              <Button
                                color="error"
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                onClick={async () => {
                                  function removeArray() {
                                    var newUpdateArray = mj.values.undergrad;
                                    console.log("Un delte", newUpdateArray);
                                    newUpdateArray = newUpdateArray.filter(
                                      (_, deleteIndex) => deleteIndex !== ind
                                    );
                                    console.log(
                                      newUpdateArray,
                                      "Test remove Function"
                                    );
                                    return newUpdateArray;
                                  }
                                  const updatecoruse = doc(
                                    db,
                                    "college",
                                    mj.id
                                  );
                                  const deleteItems = {
                                    values: {
                                      undergrad: removeArray(),
                                      grad: mj.values.grad,
                                      majorName: mj.values.majorName,
                                    },
                                  };
                                  await updateDoc(updatecoruse, deleteItems);
                                  alert("A DELETE has been made");
                                  setrun(run + 1);
                                  // removeArray();
                                }}
                              ></Button>
                            )}
                          </Grid>

                          <Grid container>
                            {ind === mj.values.undergrad.length - 1 && (
                              <TextField
                                label="add course name"
                                onChange={(e) => {
                                  nc = e.target.value;
                                  console.log(nc, " = nc");
                                }}
                              />
                            )}
                            {ind === mj.values.undergrad.length - 1 && (
                              <TextField
                                label="dispersion of the Course"
                                onChange={(e) => {
                                  nd = e.target.value;
                                  console.log(nd, " = nd");
                                }}
                              />
                            )}
                            {ind === mj.values.undergrad.length - 1 && (
                              <Button
                                color="secondary"
                                variant="outlined"
                                onClick={async () => {
                                  function addNew() {
                                    var newArray = mj.values.undergrad;
                                    newArray.push({
                                      courseName: nc,
                                      dispersion: nd,
                                    });
                                    console.log("New Values added", newArray);
                                    return newArray;
                                  }
                                  const updatecoruse = doc(
                                    db,
                                    "college",
                                    mj.id
                                  );
                                  const addMore = {
                                    values: {
                                      undergrad: addNew(),
                                      grad: mj.values.grad,
                                      majorName: mj.values.majorName,
                                    },
                                  };
                                  await updateDoc(updatecoruse, addMore);
                                  alert("New Value has been added");
                                  setrun(run + 1);
                                }}
                              >
                                Add Course
                              </Button>
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                  })}

                  <h2>Grad : </h2>
                  {mj.values.grad.map((e, ind) => {
                    let c = ""; // course name
                    let d = "";
                    let nc = ""; // course  new name value
                    let nd = "";

                    return (
                      <Grid container spacing={1}>
                        <Grid item>
                          <p>
                            course Name: {e.courseName} & course dispersion:{" "}
                            {e.dispersion}
                          </p>
                        </Grid>

                        <Grid
                          item
                          container
                          // spacing={4}
                          sx={{ border: 2, borderTop: 0 }}
                          // xs={12}
                        >
                          <Grid item>
                            <TextField
                              label={e.courseName + " update"}
                              onChange={(e) => {
                                c = e.target.value;
                                console.log(c, " = c");
                              }}
                            />
                          </Grid>
                          <Grid item>
                            <TextField
                              placeholder={"change dispersion"}
                              onChange={(e) => {
                                d = e.target.value;
                                console.log(d, " = d");
                              }}
                            />
                          </Grid>
                          <Grid item>
                            <Button
                              variant="contained"
                              color="secondary"
                              onClick={async () => {
                                console.log("My Indx is ", ind);
                                const updatecoruse = doc(db, "college", mj.id);
                                // const updateFildes = {
                                //   values:{grad: { courseName: c, dispersion: d },}
                                // };
                                function updateArray() {
                                  var newUpdateArray = mj.values.grad;
                                  newUpdateArray[ind] = {
                                    courseName: c,
                                    dispersion: d,
                                  };
                                  console.log(mj.values.grad, "Hello ----");

                                  console.log(
                                    "Hey My new arrya",
                                    newUpdateArray
                                  );
                                  return newUpdateArray;
                                }
                                const updateFildes = {
                                  values: {
                                    grad: updateArray(),
                                    grad: mj.values.grad,
                                    majorName: mj.values.majorName,
                                  },
                                };
                                console.log("My newrrr Upda", updateFildes);

                                await updateDoc(updatecoruse, updateFildes);
                                alert("AN Update has been made");
                                setrun(run + 1);
                              }}
                            >
                              Update{" "}
                            </Button>
                          </Grid>
                          <Grid>
                            {/* <p>Length: {mj.values.grad.length}</p> */}
                            {mj.values.grad.length > 1 && (
                              <Button
                                color="error"
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                onClick={async () => {
                                  function removeArray() {
                                    var newUpdateArray = mj.values.grad;
                                    console.log("Un delte", newUpdateArray);
                                    newUpdateArray = newUpdateArray.filter(
                                      (_, deleteIndex) => deleteIndex !== ind
                                    );
                                    console.log(
                                      newUpdateArray,
                                      "Test remove Function"
                                    );
                                    return newUpdateArray;
                                  }
                                  const updatecoruse = doc(
                                    db,
                                    "college",
                                    mj.id
                                  );
                                  const deleteItems = {
                                    values: {
                                      grad: removeArray(),
                                      grad: mj.values.grad,
                                      majorName: mj.values.majorName,
                                    },
                                  };
                                  await updateDoc(updatecoruse, deleteItems);
                                  alert("A DELETE has been made");
                                  setrun(run + 1);
                                  // removeArray();
                                }}
                              ></Button>
                            )}
                          </Grid>

                          <Grid>
                            {ind === mj.values.grad.length - 1 && (
                              <TextField
                                label="add course name"
                                onChange={(e) => {
                                  nc = e.target.value;
                                  console.log(nc, " = nc");
                                }}
                              />
                            )}
                            {ind === mj.values.grad.length - 1 && (
                              <TextField
                                label="dispersion of the Course"
                                onChange={(e) => {
                                  nd = e.target.value;
                                  console.log(nd, " = nd");
                                }}
                              />
                            )}
                            {ind === mj.values.grad.length - 1 && (
                              <Button
                                color="secondary"
                                variant="outlined"
                                onClick={async () => {
                                  function addNew() {
                                    var newArray = mj.values.grad;
                                    newArray.push({
                                      courseName: nc,
                                      dispersion: nd,
                                    });
                                    console.log("New Values added", newArray);
                                    return newArray;
                                  }
                                  const updatecoruse = doc(
                                    db,
                                    "college",
                                    mj.id
                                  );
                                  const addMore = {
                                    values: {
                                      grad: addNew(),
                                      grad: mj.values.grad,
                                      majorName: mj.values.majorName,
                                    },
                                  };
                                  await updateDoc(updatecoruse, addMore);
                                  alert("New Value has been added");
                                  setrun(run + 1);
                                }}
                              >
                                Add Course
                              </Button>
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                  })}
                  <React.Fragment>
                    <Button
                      color="error"
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={async () => {
                        alert("About Delete Whole Major ");
                        const deleteMajor = doc(db, "college", mj.id);
                        await deleteDoc(deleteMajor);
                        setrun(run + 1);
                      }}
                    >
                      Delete
                    </Button>
                  </React.Fragment>
                </Box>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </div>
  );
}

// var comInd = ind;
// for (let i in mj.values.undergrad) {
//   console.log(
//     "i = ",
//     i,
//     " and ind = ",
//     ind,
//     "hello",
//     comInd
//   );
//   if ({ i } !== 0) {
//     console.log(
//       "Am I working my c= ",
//       c,
//       " and my d=",
//       d
//     );
//     newUpdateArray[i] =
//       mj.values.undergrad[i];
//   } else {
//     console.log("Am Here?");
//     newUpdateArray[i] = {
//       courseName: c,
//       dispersion: d,
//     };
//   }
// }
// mj.values.undergrad.map((newE, newInd) => {
//   console.log(newE, " and my index", newInd);
//   if (ind !== newInd) {
//     newUpdateArray[newInd] =
//       mj.values.undergrad[newInd];
//   } else {
//     console.log("Am Here?");
//     newUpdateArray[newInd] = {
//       courseName: c,
//       dispersion: d,
//     };
//   }
// });

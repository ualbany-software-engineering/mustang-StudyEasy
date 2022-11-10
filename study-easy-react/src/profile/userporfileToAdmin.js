import { Alert, Button, Card, TextField } from "@mui/material";
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db, auth } from "../firbase-config";

export default function UserporfileToAdmin() {
  // let read from the firestore where user profile info is saved for the Admin
  // const uid= firebase.auth().currentUser.uid
  const dbName = "UserProfileToAdmin";
  const collectionRef = collection(db, dbName);
  // .withConverter(
  //   "id",
  //   "==",
  //   auth.currentUser.uid
  // );

  console.log("current user " + auth.currentUser.uid);

  const [userProfile, setUserProfile] = useState();
  const [dataExits, setDataExits] = useState(false);
  useEffect(() => {
    const getCurrentUserProfile = async () => {
      const data = await getDocs(collectionRef);
      console.log(data, " dat from useEffect");
      setUserProfile(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(userProfile, " Only user");
      const tempUserdata = userProfile;
      // let k;
      tempUserdata.map((e) => {
        console.log(
          e.uid,
          "and current id",
          auth.currentUser.uid,
          "and ",
          e.name
        );
        let inComeingUid = e.uid;
        let currentUidofUser = auth.currentUser.uid;
        if (inComeingUid === currentUidofUser) {
          console.log("Why work here");
          // setUserProfile({
          //   uid: e.uid,
          //   name: e.name,
          //   email: e.email,
          //   awards: e.awards,
          //   exam: e.exam,
          //   gpa: e.gpa,
          // });
          // setUserProfile("Hello it worked");
          setName(e.name);
          setEmail(e.email);
          setGpa(e.gpa);
          setAwards(e.awards);
          setExam(e.exam);
          setDataExits(e.id);

          // k = {
          //   uid: e.uid,
          //   name: e.name,
          //   email: e.email,
          //   awards: e.awards,
          //   exam: e.exam,
          //   gpa: e.gpa,
          // };
          // console.log(k, " END of k");
          // return setPName(k);

          // t = k;
          return;
        }
      });
      // if (k !== undefined) {
      //   console.log("k not  null");
      //   // setUserProfile(k);
      //   setPName(k);
      //   // setUserProfile("hello");
      //   console.log(k, " k is");

      //   console.log(userProfile, "user profile");
      // } else {
      //   console.log("AM here");
      //   k = {
      //     uid: "",
      //     name: "",
      //     email: "",
      //     awards: "",
      //     exam: "",
      //     gpa: "",
      //   };
      //   // setUserProfile(k);
      //   setPName(k);
      //   console.log(k, " User has not made the profile page yet!");
      // }
      console.log("tempUserData", tempUserdata);
      console.log("new Only user", userProfile);
    };
    // let o
    if (auth.currentUser.uid !== null) {
      console.log(
        "*******************************************8\n&& userProfile === undefined"
      );
    }
    getCurrentUserProfile();
  }, []);
  // const [upadteProfile, setUpdateProfile] = useState();
  const [name, setName] = useState();
  const [exam, setExam] = useState();
  const [gpa, setGpa] = useState();
  const [email, setEmail] = useState();
  const [awards, setAwards] = useState();
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("none");

  useEffect(() => {
    // console.log(pName, "hello UserProfile");
    // if (pName !== null) {
    //   console.log("helloworld");
    // }
    console.log(name, email, awards, gpa, exam, " values");
  }, [name]);
  return (
    <div>
      <Card>
        <Card item>
          <TextField
            name="Name"
            label={name}
            placeholder="full name"
            onChange={(e) => {
              setName(e.target.value);
              console.log("name is " + name);
            }}
            sx={{
              width: 300,
            }}
          />
        </Card>

        <Card item>
          <TextField
            name="Exam score"
            label={exam}
            placeholder="sat"
            onChange={(e) => {
              setExam(e.target.value);
              console.log("exam score is " + exam);
            }}
            sx={{
              width: 300,
            }}
          />
        </Card>

        <Card item>
          {error === "gpa" && (
            <Alert severity="error">Gpa must between 0.0 to 4.0 </Alert>
          )}
          <TextField
            name="GPA"
            label={gpa}
            placeholder="scale 0.0 to 4.0 "
            type="number"
            sx={{
              width: 300,
            }}
            InputProps={{ inputProps: { min: 0.0, max: 4.0 } }}
            onChange={(e) => {
              let value = parseInt(e.target.value, 10);
              if (value < 0 || value > 4.1) {
                setError("gpa");
              } else {
                setError("");
                setGpa(value);
                console.log("GPA is " + gpa);
                value = { gpa };
              }
              // if (value > 4.0) value = 4.0;
              // if (value < 0.0) value = 0.0;
            }}
          />
        </Card>

        <Card item>
          <TextField
            name="email"
            label={email}
            placeholder="email address"
            sx={{
              width: 300,
            }}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log("Email is " + email);
            }}
          />
        </Card>
        <Card item>
          <TextField
            label={awards}
            name="Awards"
            placeholder="Awards"
            onChange={(e) => {
              setAwards(e.target.value);
              console.log("Award is " + awards);
            }}
          />
        </Card>
        <Card item>
          {dataExits === false ? (
            <Button
              variant="contained"
              onClick={() => {
                async function add() {
                  await addDoc(collectionRef, {
                    uid: auth.currentUser.uid,
                    name: name,
                    email: email,
                    gpa: gpa,
                    exam: exam,
                    awards: awards,
                  });
                }
                add();
              }}
            >
              Add your profile
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                async function update() {
                  let tempCollection = { db, dbName, dataExits };
                  console.log("Name of collection ref", tempCollection);
                  const newValues = {
                    uid: auth.currentUser.uid,
                    name: name,
                    email: email,
                    gpa: gpa,
                    exam: exam,
                    awards: awards,
                  };
                  console.log("update values are ", newValues);
                  await updateDoc(tempCollection, newValues);
                }
                update();
              }}
            >
              update your profile
            </Button>
          )}
        </Card>
      </Card>
    </div>
  );
}

// useEffect(() => {
//   setUserProfile("hello");
//   console.log(userProfile, "hello UserProfile");
// }, [name]);

import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  Grid,
  Typography,
} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firbase-config";

export default function AdminViewStudents() {
  const dbName = "UserProfileToAdmin";
  const [studentProfile, setStudetProfile] = useState();
  const [userProfile, setUserProfile] = useState();
  const [open, setOpen] = useState(false);
  const [show, setshow] = useState(false);
  const collectionRef = collection(db, dbName);
  const collectionRef2 = collection(db, "savedColleges");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collectionRef);
      console.log("from AdminViewStudents.js", data);
      setStudetProfile(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(studentProfile, "data end ");
    };
    getUsers();

    const getCurrentUserProfile = async () => {
      const data = await getDocs(collectionRef2);
      console.log(data, " dat from useEffect");
      setUserProfile(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(userProfile, " Only userasdasfasd");
    };
    getCurrentUserProfile();
  }, []);
  return (
    <div style={{ padding: 30 }}>
      <Grid>
        <Dialog></Dialog>
      </Grid>
      <Card container spacing={10} justify="center">
        {studentProfile !== undefined && (
          <Card item variant="outlined" sx={{ width: "75%" }}>
            {studentProfile.map((student, index) => {
              return (
                <div key={index}>
                  <Card
                    sx={{
                      maxWidth: 500,
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        height="150"
                        square
                        component="img"
                        alt="Student profile pic"
                        src="https://marketplace.canva.com/EAE6OH6DF2w/1/0/1600w/canva-moon-astronaut-character-twitch-profile-picture-0kkgyJSodt4.jpg"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h3" component="div">
                          {student?.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {" "}
                          GPA : {student?.gpa}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {" "}
                          SAT : {student?.exam}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {" "}
                          awards : {student?.awards}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {" "}
                          Email address :{student?.email}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActionArea>
                      <Button onClick={() => setOpen(true)}>Send Mail</Button>
                      <Dialog
                        onClose={() => {
                          setOpen(false);
                        }}
                        open={open}
                      >
                        <DialogTitle id="alert-dialog-title">
                          Send email
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            When you receive an unusual text message from
                            someone you do not know, especially prompting you to
                            look at something on the internet, or asking you to
                            provide your personal information, do not act on the
                            text. Never select the link provided, and do not
                            reply to the text. Use the same safety and security
                            practices on your cell phone as you do on your
                            computer. SmartPhone users have to be diligent
                            watching for possible fake text messages they
                            receive, just as they do when watching for phish
                            emails they might receive.{student?.email} kfghf
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            onClick={() => {
                              setOpen(false);
                            }}
                          >
                            Close
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </CardActionArea>
                  </Card>{" "}
                  <Button
                    variant="contained"
                    onClick={() => {
                      setshow(!show);
                    }}
                  >
                    {show ? (
                      <p>hide interested college</p>
                    ) : (
                      <p>Show interested college </p>
                    )}
                  </Button>
                  {show && (
                    <Card>
                      {userProfile?.map((e) => {
                        if (e.uid === student.uid) {
                          return (
                            <Card>
                              <Typography>{e?.CollegeName}</Typography>
                            </Card>
                          );
                        }
                      })}
                    </Card>
                  )}
                </div>
              );
            })}
          </Card>
        )}
      </Card>
    </div>
  );
}

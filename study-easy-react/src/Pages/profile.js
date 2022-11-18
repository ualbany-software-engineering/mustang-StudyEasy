import { Button, Card } from "@mui/material";
import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { useState } from "react";
import SavedCollegesProfile from "../profile/savedColleges";
import {useNavigate, userNavigate} from 'react-router-dom';
export default function Profile() {
  const [typeOfProfile, setTypeOfProfile] = useState("1");
  const [showDefalut, setShowDefalut] = useState(true);
  let navigate=useNavigate();
  const routeChange = () =>{ 
        
    navigate("/CreatePost");
  };
  const UserDeatiledProfile = lazy(() =>
    import("../profile/userporfileToAdmin")
  );
  //import UserDeatiledProfile from "../profile/userporfileToAdmin";

  return (
    <div>
      {showDefalut ? (
        <Card
          container={{ border: "4px solid green", display: "inline-flex" }}
          sx={{
            mx: "auto",
            width: "45%",
            p: 1,
            m: 1,
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "grey.50",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            border: "1px solid",
            borderColor: (theme) =>
              theme.palette.mode === "dark" ? "grey.800" : "grey.300",
            borderRadius: 2,
            textAlign: "center",
            fontSize: "0.875rem",
            fontWeight: "700",
          }}
        >
          <Card item sx={{ borderRadius: "30px" }}>
            <Button
              onClick={() => {
                setTypeOfProfile("Detailed");
                setShowDefalut(false);
              }}
            >
              Show Detailed profile
            </Button>
          </Card>

          <Card item sx={{ borderRadius: "30px" }}>
            <Button
            onClick={() => {
              setTypeOfProfile("Detailed2");
              setShowDefalut(false);
            }}>
              Saved Colleges
            </Button>
          </Card>
          <Card item sx={{ borderRadius: "30px" }}>
            <Button
            onClick={() => {
              routeChange();
            }}>
              Create a Post
            </Button>
          </Card>

          <Card item sx={{ borderRadius: "30px" }}>
            <Button disabled>resume or something Profile</Button>
          </Card>
        </Card>
      ) : (
        <Button
          onClick={() => {
            setTypeOfProfile("1");
            setShowDefalut(true);
          }}
        >
          Go Back to profile
        </Button>
      )}
      {typeOfProfile === "Detailed" && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <UserDeatiledProfile />
        </Suspense>
      )}

      {typeOfProfile === "Detailed2" && <SavedCollegesProfile />}
    </div>
  );
}

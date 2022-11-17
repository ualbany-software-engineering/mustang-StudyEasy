import { Button, Card } from "@mui/material";
import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import '../styling/Profile.css';
import { auth, db } from '../firbase-config';
import { collection, getDocs, updateDoc, doc, deleteDoc, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import SavedCollegesProfile from "../profile/savedColleges";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const [typeOfProfile, setTypeOfProfile] = useState("1");
  const [showDefalut, setShowDefalut] = useState(true);
  const [posts,setPosts]= useState([]);
  const currentUser = auth.currentUser;
    const postCollectionRef=collection(db,"Posts");
  let navigate = useNavigate();
  const UserDeatiledProfile = lazy(() =>
    import("../profile/userporfileToAdmin")
  );
  const handlePost = () => {
    navigate('/AddPosts');
}
const handleDelete = (id) => {
  deleteDoc(doc(db,"Posts", id))
  document.getElementById(id).style.display = "none"
  alert("Deleted Successfully!")
}
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
      <div class="col-md-12">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center experience"><span>User Posts</span></div><br/>

                        {posts.map((item)=>{
                            if (item.uid === currentUser.uid) {
                                return(
                                    <div id={item.id}>
                                    <div className='tbox-resource d-flex align-items-center'>
                                        <div className="d-inline-block image-part">
                                        <img alt="not fount" className="post-image" src={item.image} />
                                        </div>

                                        <div className="d-inline-block main-part">
                                            <div className='box-top'>
                                                <h5><strong>{item.title}</strong></h5>
                                            </div>
                                            <div className='client-comment'>
                                                <p>{item.description}</p>
                                            </div>

                                            <div className="box-bottom">
                                                <button className="btn-warning" onClick={e => {e.preventDefault(); e.stopPropagation(); handleDelete(item.id)}}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                )
                            }
                        })}

                        <div class="mt-5 text-center"><button class="btn btn-info" type="button" onClick={handlePost}>New Post</button></div>
                    </div>
                </div>
    </div>
  );
}

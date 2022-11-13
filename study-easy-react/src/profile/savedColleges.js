import { Alert, Button, Card, TextField } from "@mui/material";
import { addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db, auth } from "../firbase-config";

export default function SavedCollegesProfile()  {

    const collectionRef = collection(db, "savedColleges");

    const [userProfile, setUserProfile] = useState();
    const [deleteDisplay, setDeleteDisplay] = useState(0);

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    useEffect(() => {
        const getCurrentUserProfile = async () => {
          const data = await getDocs(collectionRef);
          console.log(data, " data from useEffect");
          setUserProfile(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          console.log(userProfile, " Only userasdasfasd");
        }
        getCurrentUserProfile();
    },[deleteDisplay])





    return (
        <div>
            {userProfile?.map((e, index) => {
                let inComeingUid = e.uid;
                let currentUidofUser = auth.currentUser.uid;
                if (inComeingUid === currentUidofUser) {
                return (
                    <div key={index}>
                        <p>
                            {e?.CollegeName} <Button onClick={() => openInNewTab(e?.url)}>College home page</Button> <Button onClick={async() => {
                                const DeleteSavedCollege = doc(db, "savedColleges", e.id);
                                await deleteDoc(DeleteSavedCollege);
                                setDeleteDisplay(deleteDisplay+1);
                            } }>Remove College</Button>
                        </p>
                    </div>
                )}
            })}
        </div>
    )
}

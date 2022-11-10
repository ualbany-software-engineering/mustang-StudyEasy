import { Alert, Button, Card, TextField } from "@mui/material";
import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db, auth } from "../firbase-config";

export default function savedCollegesProfile()  {


    return (
        <div>
            Saved Colleges
        </div>
    )
}
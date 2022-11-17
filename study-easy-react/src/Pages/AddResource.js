import React from 'react'
import {useState} from 'react';
import {db} from '../firbase-config';
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
  import { storage } from "../firbase-config";
  import '../styling/AddResource.css';
function AddResource() {
    const [Heading,setHeading]=useState("");
    const [des,setDes]=useState("");
    const [t1,setT1]=useState("");
    const [t2,setT2]=useState("");
    const [t3,setT3]=useState("");
    const [l1,setL1]=useState("");
    const [l2,setL2]=useState("");
    const [l3,setL3]=useState("");
    const [second,setSecond]=useState("");
    const userCollectionRef=collection(db,"ExamResources"); 
    const userCollectionRef2=collection(db,"Eresources");
    const imagesListRef = ref(storage, "images/");
    const [imageUpload1, setImageUpload1] = useState(null);
    const [imageUpload2, setImageUpload2] = useState(null);
    const [imageUpload3, setImageUpload3] = useState(null);
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [imageUrls, setImageUrls] = useState("");
    const [imageUrls1, setImageUrls1] = useState("");
    const [imageUrls2, setImageUrls2] = useState("");
    const [imageUrls3, setImageUrls3] = useState("");
    const [fileUpload1,setFileUpload1]= useState(null);
    const [fileUpload2,setFileUpload2]= useState(null);
    const [fileUpload3,setFileUpload3]= useState(null);
    const [f1,setF1]=useState("");
    const [f2,setF2]=useState("");
    const [f3,setF3]=useState("");
    let h=null;
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const uploadFile1 = () => {
        if (imageUpload1 == null) return;
        const imageRef = ref(storage, `images/${imageUpload1.name}`);
        uploadBytes(imageRef, imageUpload1).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            console.log(url);
            setImageUrls1(url);
          });
        });
        
      };
      const uploadFile2 = () => {
        if (imageUpload2 == null) return;
        const imageRef = ref(storage, `images/${imageUpload2.name}`);
        uploadBytes(imageRef, imageUpload2).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            console.log(url);
            setImageUrls2(url);
          });
        });
       
      };
      const uploadFile3 = () => {
        if (imageUpload3 == null) return;
        const imageRef = ref(storage, `images/${imageUpload3.name}`);
        uploadBytes(imageRef, imageUpload3).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            console.log(url);
            setImageUrls3(url);
          });
        });
        alert(`image uploaded`)
      };
      const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            console.log(url);
            setImageUrls(url);
          });
        });
        
      };
      const uploadFile0 = () => {
        if (fileUpload1 == null) return;
        const imageRef = ref(storage, `images/${fileUpload1.name}`);
        uploadBytes(imageRef, fileUpload1).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            console.log(url);
            setF1(url);
          });
        });
        if (fileUpload2 == null) return;
        const imageRef1 = ref(storage, `images/${fileUpload2.name}`);
        uploadBytes(imageRef1, fileUpload2).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            console.log(url);
            setF2(url);
          });
        });
        if (fileUpload3 == null) return;
        const imageRef2 = ref(storage, `images/${fileUpload3.name}`);
        uploadBytes(imageRef2, fileUpload3).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            console.log(url);
            setF3(url);
          });
        });
        alert(`Files uploaded`)
      };
    const petCheck=()=>{
        alert(`The name you entered was: ${uploadFile1()}`)
      }
      const createUser=async()=>{
        setImageUrl(true);
        await delay(5000);
        setImageUrl(false);
        console.log(imageUrls);
        const docRef=await addDoc(userCollectionRef2,{heading:Heading,img1:imageUrls1,img2:imageUrls2,img3:imageUrls3,text1:t1,text2:t2,text3:t3,link1:l1,link2:l2,link3:l3,material1:f1,material2:f2,material3:f3});
        console.log(docRef.id);
        await addDoc(userCollectionRef,{heading:Heading,description:des,next:docRef.id,img:imageUrls});
        alert(`Resource has been added successfully`)
       // setSecond(docRef.id);
    //    imageUrls.map((url) => {
         
    //   })
      };
    const handleSubmit=(event)=>{
        event.preventDefault();
        
       // uploadFile();
        //createUser();
       // petCheck();
    }
  return (
    <>
    <div className='Head'><h1>Add Resource</h1></div>
    <div className='Container'>
      <div className='newcass'>
        Resource Title:
      </div>
      
        <input type="text" value={Heading} onChange={(e)=>setHeading(e.target.value)}/>
      
      <div className='newcasss'>
        Resource Description:
      </div>
      
     
        <input type="textarea" value={des} onChange={(e)=>setDes(e.target.value)}/>
      
      <div className='Icon'>
        Resource Icon: 
        
        <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
        
        <button className='primary-btnn' onClick={uploadFile}>uploadImage</button>
        
      </div>
    <div className='boxes'>
      <div className='head1'><h2>Study Resources Link Upload</h2></div>
    
        <label>Study Source 1:
            <input type="text" value={t1} onChange={(e)=>setT1(e.target.value)}/>
        </label>
        
        <label>Source 1 link:
            <input type="text" value={l1} onChange={(e)=>setL1(e.target.value)}/>
            
        </label>
        <input
        type="file"
        onChange={(event) => {
          setImageUpload1(event.target.files[0]);
        }}
      />
        
        <button className='primary-btnn' onClick={uploadFile1}>uploadImage</button>
        
        
    
    
        <label>Study Source 2:
            <input type="text" value={t2} onChange={(e)=>setT2(e.target.value)}/>
        </label>
        
        <label>Source 2 link:
            <input type="text" value={l2} onChange={(e)=>setL2(e.target.value)}/>
        </label>
        <input
        type="file"
        onChange={(event) => {
          setImageUpload2(event.target.files[0]);
        }}
      />
        
        <button className='primary-btnn' onClick={uploadFile2}>uploadImage</button>
        
        
   
    
        <label>Study source 3:
            <input type="text" value={t3} onChange={(e)=>setT3(e.target.value)}/>
        </label>
        
        <label>Source 3 link:
            <input type="text" value={l3} onChange={(e)=>setL3(e.target.value)}/>
        </label>
        <input
        type="file"
        onChange={(event) => {
          setImageUpload3(event.target.files[0]);
        }}
      />
        
        <button className='primary-btnn' onClick={uploadFile3}>uploadImage</button>
       
        
    
    </div>
    <div className='box2'>
    <div className='head1'><h2>Study Material upload</h2></div>
    
      <label>Material 1
      
     
      </label>
      <input
        type="file"
        onChange={(event) => {
          setFileUpload1(event.target.files[0]);
        }}
      />
      <label>Material 2
      
      
      </label>
      <input
        type="file"
        onChange={(event) => {
          setFileUpload2(event.target.files[0]);
        }}
      />
      <label>Material 3
      
      </label>
      <input
        type="file"
        onChange={(event) => {
          setFileUpload3(event.target.files[0]);
        }}
      />
      <button className='primary-btnn' onClick={uploadFile0}>uploadFiles</button>
    
    <button className='btn-2' onClick={createUser}>Submit</button>
    </div>
    <p>url={imageUrls}</p>
    {imageUrl && <p>Loading...</p>}
</div>
</>
  )
}

export default AddResource;
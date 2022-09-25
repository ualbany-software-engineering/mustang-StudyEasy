import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
export const Req = (data) =>{
  const course = data.course
    if (course==='CS'){
      return(
        <div>
          <h1>Welcome to Computer Science </h1>
          <p><h3>Admission Deadlines:</h3> <h5>9 October, 2022</h5><br></br>
          <h3>Required Exams:</h3> <h5>JEE Online Test, IELTS/TOEFL</h5><br></br>
          
          </p>
          </div>
      );
    }
    if(course==='DS'){
     return( 
     <div>
        <h1>Welcome to Data Science </h1>
          <p><h3>Admission Deadlines:</h3> <h5>20 October, 2022</h5><br></br>
          <h3>Required Exams:</h3> <h5>JEE Online Test, IELTS/TOEFL</h5><br></br>
          
          </p>
        </div>)
    }
    if(course==='IS'){
      return(
        <div>
          <h1>Welcome to Informational Sciences </h1>
          <p><h3>Admission Deadlines:</h3> <h5>5 November, 2022</h5><br></br>
          <h3>Required Exams:</h3> <h5>JEE Online Test, IELTS</h5><br></br>
          
          </p>
          
        </div>)
    }
    
    
    return(
        <div>
          <h4>{data.course}</h4>
            
        </div>);
};



// const Course = (aarops) =>{
 //    return (
 //     <div>
 //       <h2>{aarops.collegeName}</h2>
 //     </div>)
//}


import { useState } from "react";
import { Courses } from "./Courses";
export const Majors = (data) => {
  const temp = data.major;
  // <ListMajors major =""/>

  if (temp === 1) {
    return (
      <div>
        <ListMajors major="AGRICULTURE & NATURAL RESOURCES CONSERVATION" />
        <ListMajors major="AREA, ETHNIC, & MULTIDISCIPLINARY STUDIES" />
        <ListMajors major="ARTS: VISUAL & PERFORMING" />
        <ListMajors major="BUSINESS" />
        <ListMajors major="COMPUTER SCIENCE & MATHEMATICS" />
        <ListMajors major="EDUCATION" />
      </div>
    );
  }
  if (temp === 2) {
    return (
      <div>
        {/* <ListMajors major="AGRICULTURE & NATURAL RESOURCES CONSERVATION"/>  */}
        {/* <ListMajors major="AREA, ETHNIC, & MULTIDISCIPLINARY STUDIES"/> */}
        <ListMajors major="ARTS: VISUAL & PERFORMING" />
        <ListMajors major="BUSINESS" />
        <ListMajors major="COMPUTER SCIENCE & MATHEMATICS" />
        <ListMajors major="EDUCATION" />
        <ListMajors major="ENGINEERING" />
        <ListMajors major="SOCIAL SCIENCES & LAW" />
        <ListMajors major="BIOLOGICAL & PHYSICAL" />
      </div>
    );
  }

  return (
    <div>
      <p>😲😲 U r Hacker... How did you get see this 😲 </p>
    </div>
  );
};
const ListMajors = (props) => {
  const [course, showCourse] = useState(false);
  const [buttonDisplay, buttonfuntions] = useState(false);
  var buttontext = buttonDisplay ? "Hide courses" : "Show courses";
  const updateView = () => {
    showCourse(!course);
    buttonfuntions(!buttonDisplay);
  };

  return (
    <div>
      <h4>{props.major}</h4>
      <button onClick={updateView}>{buttontext}</button>
      {course ? <Courses name={props?.major} /> : null}
      <p></p>
    </div>
  );
};

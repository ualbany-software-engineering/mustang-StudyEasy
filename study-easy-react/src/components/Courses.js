export const Courses = (data) => {
  const majorName = data.name;
  if (majorName === "AGRICULTURE & NATURAL RESOURCES CONSERVATION") {
    return (
      <div>
        <DisplayCourses
          n1="Agriculture, General"
          n2="Agricultural Production"
          n3="Animal Sciences"
        />
      </div>
    );
  }
  if (majorName === "AREA, ETHNIC, & MULTIDISCIPLINARY STUDIES") {
    return (
      <div>
        <DisplayCourses n1="Asian Area Studies" n2="Women’s Studies" />
      </div>
    );
  }
  if (majorName === "ARTS: VISUAL & PERFORMING") {
    return (
      <div>
        <DisplayCourses
          n1="Art, General"
          n2="Graphic Design"
          n3="Music, Performance"
        />
      </div>
    );
  }
  if (majorName === "BUSINESS") {
    return (
      <div>
        <DisplayCourses
          n1="Accounting"
          n2="Hotel/Motel Management"
          n3="Operations Management & Supervision"
        />
      </div>
    );
  }
  if (majorName === "COMPUTER SCIENCE & MATHEMATICS") {
    return (
      <div>
        <DisplayCourses
          n1="Computer & Information Sciences, General"
          n2="Applied Mathematics"
          n3="Computer Science & Programming"
        />
      </div>
    );
  }
  if (majorName === "EDUCATION") {
    return (
      <div>
        <DisplayCourses
          n1="Counseling & Student Services"
          n2="Teacher Education, General"
          n3=""
        />
      </div>
    );
  }

  if (majorName === "ENGINEERING") {
    return (
      <div>
        <DisplayCourses
          n1="Aerospace/Aeronautical Engineering"
          n2="Industrial Engineering"
          n3="Nuclear Engineering"
        />
      </div>
    );
  }
  if (majorName === "SOCIAL SCIENCES & LAW") {
    return (
      <div>
        <DisplayCourses
          n1="Legal Administrative Assisting/Secretarial*"
          n2=""
          n3=""
        />
      </div>
    );
  }
  if (majorName === "BIOLOGICAL & PHYSICAL") {
    return (
      <div>
        <DisplayCourses
          n1="Biology, General"
          n2="Physical Sciences, General"
          n3="Chemistry"
        />
      </div>
    );
  }

  return (
    <div>
      <p>***{majorName}</p>
      <p>U r Hacker... How did you get see this</p>
    </div>
  );
};

const DisplayCourses = (data) => {
  return (
    <div>
      <ul>
        {data.n1 ? <li>{data.n1}</li> : null}
        {data.n2 ? <li>{data?.n2}</li> : null}
        {data.n3 ? <li>{data?.n3}</li> : null}
      </ul>
    </div>
  );
};

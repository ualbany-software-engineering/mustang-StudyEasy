export const University = (data) =>{
  const country = data.country
    if (country==='USA'){
      return(
        <div>
          <h1>Welcome to USA </h1>
          <College collegeName="UAblany" city="Albany" zipCode={12345} url= "https://albany.edu/"/>
          <College collegeName= "ULosAngles" city = "Los Angles" zipCode={99993} url ="https://www.programiz.com/python-programming/time/sleep"/>
        </div>
      );
    }
    if(country==='IND'){
     return( 
     <div>
        <h1>Welcome to India</h1>
        <College collegeName="H.Tech Ashoka" city ="New Delhi" zipCode={9091321} url= "https://fastapi.io"/>
        <College collegeName="Darius" city ="Pune" zipCode={19123321} url= "https://www.robinwieruch.de/react-dropdown/"/>
    </div>)
    }
    if(country==='CHI'){
      return(
        <div>
          <h1>Welcome to China</h1>
          <College collegeName="Peking University" city ="Beijing" zipCode={443211} url= "https://reactjs.org/docs/conditional-rendering.html"/>
          <College collegeName="Ming vu university" city ="Beijing" zipCode={443200} url= "https://reactjs.org/docs/conditional-rendering.html"/>

        </div>)
    }
    if(country==='None'){
      return(<div>
        <h4>Please Pick a Country</h4>
      </div>)
    }
    
    return(
        <div>
          <h4>{data.country}</h4>
            
        </div>);
};


// export default class university extends Component {
//   render() {
//     return (
//       <div>university
//         <College collegeName="UAblany" city="Albany" zipCode={12345} url= "https://albany.edu/"/>
//         <College collegeName= "ULosAngles" city = "Los Angles" zipCode={99993} url ="https://www.programiz.com/python-programming/time/sleep"/>
//       </div>
      
//     )
//   }
// }
const College = (aarops) =>{
    return (
      <div>
        <h2>{aarops.collegeName}</h2>
        <h3>{aarops.city}, {aarops.zipCode}</h3>
        <h4><a href={aarops.url}>Click for {aarops.collegeName}</a></h4>
      </div>)
}


export const University = (data) =>{
    return(
        <div>
            <College collegeName="UAblany" city="Albany" zipCode={12345} url= "https://albany.edu/"/>
            <College collegeName= "ULosAngles" city = "Los Angles" zipCode={99993} url ="https://www.programiz.com/python-programming/time/sleep"/>
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
const College = (props) =>{
    return (
      <div>
        <h2>{props.collegeName}</h2>
        <h3>{props.city}, {props.zipCode}</h3>
        <h4><a href={props.url}>Click for {props.collegeName}</a></h4>
      </div>)
}


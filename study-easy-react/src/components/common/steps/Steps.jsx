import React from "react";
import HTMLFlipBook from "react-pageflip";
import { Link } from "react-router-dom";
// import "./style.css";
import FlipData from "./Step.json";
import "./steps.css";
import Typewritter from "typewriter-effect";

// import TextImg from "../../assets/imgs/some_random_text.jpg";
// import ImageBlend from "../../assets/imgs/some_blend.jpg";

const Steps = () => {
    const PageCover = React.forwardRef((props, ref) => {
        return (
          <div className="page page-cover" ref={ref} data-density="hard">
            <div className="page-content">
              <div className="Type">
               <h2>"Nothing is Easy without Study Easy"</h2>
                <Typewritter options= {{
                strings:[`${props.children}`,"LETS MOVE AHEAD :)" ],
                autoStart: true,
                loop: true,
                delay:40,
                }}/>
                </div>
            </div>
          </div>
        );
      });
      
      const Page = React.forwardRef((props, ref) => {
        return (
          <div className="page" ref={ref}>
            <div className="page-content" style = {{backgroundImage: `url(${props.url})`, backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat', backgroundPosition: '14%',}}>
              <div className="glass"> 
              <div className="page-text">
                 <h2>{props.tag}</h2>
                <h1>{props.children}</h1>
                <button data-aos="fade-left" className="btn"><Link to="/Countries" style={{color: "black"}}>Checkout</Link></button>
              </div>
              </div>
              <div className="page-footer">{props.number + 1}</div>
            </div>
          </div>
        );
      });

  const { flipData } = FlipData;
  return (
    <div>
    <div className="step"></div>
    <div className="steps">
      <div className="main-page-container">
        <HTMLFlipBook
          width={250}
          height={200}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="demo-book"
          useMouseEvents = {true}
          style={{ margin: "0 auto" }}
        >


        <PageCover>
         Allons de l’avant
        </PageCover>


        <Page number = {1} url = {"https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=2000"} tag={"Selection"}>Select a country</Page>
        <Page number = {2} url ={"https://gonzaga.azureedge.net/-/media/Website/Images/Homepage-Hero-Images/Campus-Shots/hero-college-hall-fall-admission.ashx?rev=b28325d5b84245668248bd66dfcdbddb&h=730&w=1505&la=en&hash=B861537B1A4FE9B810CD432E585CE5AF"} tag = {"Selection"}>Select your Dream University</Page>
        <Page number = {3} url ={"https://www.englishradar.com/wp-content/uploads/2017/03/writing-tips-for-English-proficiency-exams.jpg"} tag = {"Application"}>Quick Application Process</Page>
        <Page number = {4} url ={"https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/woman-calculator-budget-finances_SOMN19162_869247602_is_1560x880.jpg"} tag = { "Expense Operation"}>Scholarship Processing</Page>
        <Page number = {5} url ={ "https://thehill.com/wp-content/uploads/sites/2/2022/09/CA_passport_09212022istock.jpg?strip=1"} tag = {"Visa Application"}>Visa Processing</Page>
        <Page number = {6} url ={"https://img.etimg.com/thumb/width-1200,height-900,imgsize-511935,resizemode-1,msid-90117198/industry/transportation/airlines-/-aviation/book-that-flight-airfares-likely-to-fall-by-up-to-40.jpg"}>Fly & Enroll to <br/> your dream university</Page>

        <PageCover>Thankyou</PageCover>
        </HTMLFlipBook>
      </div>
    </div>
    </div>
  );
};

export default Steps;

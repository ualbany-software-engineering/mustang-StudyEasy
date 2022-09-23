import React from "react";
import { BrowserRouter } from "react-router-dom";
import Visa from "./Visa";
import '../styling/Uk.css';
function Uk(){
    return(
        <>
        <div>
          <Visa/>
          </div>
           <div>
            
           <h1 class="h1tag unselectable">Uk Visa Information</h1>
           <h2 class="h2tag unselectable">Five Step Visa Application Process</h2>
           
           <div class='ukcontent unselectable'>
            <span class="number">1</span>
            <h3 class="h3tag ">Your Course</h3>
                        <p class="para">
                            You must have an unconditional offer of a place on a course with a <a href=""> licensed student sponsor.</a>
                            <br/>
                            To prove this, your education provider will send you a reference number
                            (called a Confirmation of Acceptance of Studies(CAS)) once they have offered you a place on the course.
                            You need a CAS before you can apply for your visa. You must 
                            enter this reference number on your visa application. 
                        </p>
                    </div>
                    <div class="ukcontent unselectable">
                        <span class="number">2</span>
                        <h3 class="h3tag">Money you need</h3> 
                        <p class="para">
                            You must have enough money to pay for your course and support yourself in the UK.
                            How much money you need depends on your circumstances and what you're applying for.
                            <ul>
                                <li title="Course Fee">You need enough money to pay for your course for 1 academic year.
                                The amount you need to pay will be on your CAS.</li>
                                <li title="Money to support yourself">
                                    You will need to show you have enough money to support yourself - unless you have been in the UK
                                    with a valid visa for at least 12 months on the date of your application.
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div class="ukcontent unselectable">
                        <span class="number">3</span>
                        <h3 class="h3tag">Knowledge of English</h3> 
                        <p class="para"> 
                        <ul>
                        You must prove your knowledge of English language when you apply.
                        <br/>
                        You can prove your knowledge of English by: 
                        <li>passing a Secure English Language Test (SELT) from <a href="https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt">
                             your approved provider</a></li>
                        <li>having a GCSE, A level, Scottish National Qualification level 4 or 5, 
                            Scottish Higher or Advanced Higher in English, gained through study at a UK school that you began when you were 
                            under 18.
                        </li>
                        </ul>
                        </p>
                    </div>  
                   
                    <div class="ukcontent unselectable">
                        <span class="number">4</span>
                        <h3 class="h3tag">Documents you'll need to apply</h3> 
                        <p class="para"> 
                            <ul>
                                When you apply for Visa, you must provide:
                                <li>current valid passport</li>
                                <li>CAS from your course provider</li>
                                <li>proof you have enough money to support yourself and pay for your course</li>
                                <li>your <a href="https://www.gov.uk/tb-test-visa"> Tuberculosis test results</a></li>
                                <li>written consent for your application from your financial sponsor
                                    if you have received sponsorship for your course fees and living costs in last 12 months.
                                </li>
                            </ul>
                        </p>
                    </div>  

                    
                    <div class="ukcontent unselectable">
                        <span class="number">5</span>
                        <h3 class="h3tag">Apply</h3> 
                        <p class="para"> 
                        <ul>
                        You must apply ONLINE for a Student Visa.
                        <br/>
                        As a part of your application, you will need to prove your identity.
                        How you do this depends on where you're from and what type of passport you have.
                        <br/>
                        You'll either:
                        <li>give your fingerprints and a photograph at a <a href="https://www.gov.uk/find-a-visa-application-centre">
                             visa application centre</a></li>
                        <li>use the 'UK Immigration:ID Check' app to scan your identity document - 
                            you'll also create or sign into your UK Visas and Immigration (UKVI) account.
                        </li>
                        </ul>
                        </p>
                    </div>  
                    <div class="ukinfopane unselectable">For More Information related to UK Visa visit 
                        <a href="https://www.gov.uk/student-visa/print"> Government of UK </a> Website</div>   
                        </div>
           
            </>
    )
}
export default Uk;
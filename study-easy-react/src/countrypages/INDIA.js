import React from 'react'
import College from './College';
// import { Majors } from "../components/Majors";
// import {useState} from "react";
import '../styling/Country.css'
import Nav from '../designpages/Nav'

export const INDIA = () => {
  return (
    <div>
    <Nav given = 'country' link = '/indiavisa' link1 = "/Univ/IND"/>
    <h1 className='h1'>Welcome to INDIA</h1><div className='Country'>
    <div className='Country'>
    <College collegeName="IIT" Logo= "https://images.indianexpress.com/2021/09/iit-delhi-1200-1.jpg" zipCode={9091321} url= "https://fastapi.io" name = "/IIT" number={1} link="https://www.iitb.ac.in/newacadhome/toadmission.jsp"/>
    <College collegeName="NIT" Logo='https://i.ytimg.com/vi/DXP9RiPPis0/maxresdefault.jpg' zipCode={19123321} url= "https://www.robinwieruch.de/react-dropdown/"  name = "/NIT" number={2} link="https://www.iitb.ac.in/newacadhome/toadmission.jsp"/>
    </div>
    </div>
    </div>
  )
}


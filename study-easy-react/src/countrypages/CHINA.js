import React from 'react'
import College from './College';
// import { Majors } from "../components/Majors";
// import {useState} from "react";
import '../styling/Country.css'
import Nav from '../designpages/Nav'

export const CHINA = () => {
  return (
    <div>
         <Nav given = 'country' link = '/chinavisa' link1 = "/Univ/CHI"/>
      <h1 className='h1'>Welcome to CHINA</h1><div className='Country'>
    <div className='Country'>
    <College collegeName="Peking University" Logo='https://mcdonnell.wustl.edu/wp-content/uploads/2020/10/PKU.png' zipCode={100871} url= "https://english.pku.edu.cn/" name = "/Peking" number={1}  link="https://english.pku.edu.cn/admissions.html"/>
    <College collegeName="Nanjing University" Logo='https://www.12consultants.com/wp-content/uploads/2022/03/Nanjing-University.jpg' zipCode={210093} url= "https://www.nju.edu.cn/EN/main.htm"   name = "/Shanghai"  number={2} link="https://www.nju.edu.cn/EN/graduate/list.htm"/>
  </div>
  </div>

  </div>
  )
}

import React, { Component } from 'react'
import Bodytab from '../designpages/bodytab'
import Headertab from '../designpages/Headertab'
import {motion} from 'framer-motion';

export default class Home extends Component {
  render() {
    return (
      <motion.div className='home'
       initial={{width: 0}}
        animate={{width:'100%'}} 
        exit={{x: window.innerWidth,
        transition: {duration: 0.3} 
        }}> 
      <Bodytab/>
      </motion.div>
    )
  }
}

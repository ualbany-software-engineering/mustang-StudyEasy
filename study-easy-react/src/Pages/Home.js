import React, { Component } from 'react'
import Bodytab from '../designpages/bodytab'
import Headertab from '../designpages/Headertab'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
      <Headertab/>
      <Bodytab/>
      </div>
    )
  }
}

import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock,faMobile } from '@fortawesome/free-solid-svg-icons'

import "./NavBar.css"

const NavBar = () => {
  return (
    <Navbar bg="info" className=' text-light px-5 py-3 fs-5 Nav1Font  '>
      <Nav className='align-items-center w-100 '><FontAwesomeIcon  className='pe-3' icon={faClock}/> Monday-Saturday,8AM to 10Pm</Nav>
      <Nav className=" d-flex justify-content-end align-items-center  w-100 "> <FontAwesomeIcon className='pe-3' icon={faMobile}/> Call us now +1 5589 55488 55
</Nav>
   
  </Navbar>
  )
}

export default NavBar

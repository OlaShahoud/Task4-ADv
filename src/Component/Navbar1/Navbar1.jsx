import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Logo from './../../assets/img/logo.png'
import NavBar from '../NavBar/NavBar';
import Row from 'react-bootstrap/esm/Row';
import './Navbar1.css'
const Navbar1 = () => {
  return (
 <>
 <div className='position-fixed top-0 w-100 z-1'>
 <Row><NavBar/></Row>
<Navbar expand="lg" className="bg-body-tertiary NavFont  px-5 py-3  fs-5 d-flex justify-content-between align-items-center  ">
  <Navbar.Brand className='WNav' ><img src={Logo} alt="logo"className='w-75 ' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="w-100 d-flex justify-content-between align-items-center">
            <Nav.Link className='' href="#home">HOME</Nav.Link>
            <Nav.Link  className='' href="#link">ABOUT</Nav.Link>
            <Nav.Link   className=''href="#link">SERVICES</Nav.Link>
            <Nav.Link  className='' href="#link">DEPARTMENTS</Nav.Link>
            <Nav.Link  className='' href="#link">DOCTORS</Nav.Link>
            <NavDropdown  className='' title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  className='' href="#link">CONTACT</Nav.Link>
            <Button   className='btn-info  ButtonFont '>Make an Appointment</Button>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </div>



    </>
  );
}

export default Navbar1

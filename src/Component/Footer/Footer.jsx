import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faFacebook,faInstagram,faXTwitter } from '@fortawesome/free-brands-svg-icons'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
import Button from 'react-bootstrap/esm/Button'
const Footer = () => {
  const dataFooter=[
    {
    h2:'Useful Links',
    p1:'Home',
    p2:'About us',
    p3:'Services',
    p4:'Terms of service',
    p5:'Privacy policy'
  },
  {
    h2:'Our Services',
    p1:'Web Design',
    p2:'Web Development',
    p3:'Product Management',
    p4:'Marketing',
    p5:'Graphic Design'
  },
  {
    h2:'Nobis illum',
    p1:'Ipsam',
    p2:'Laudantium dolorum',
    p3:'Dinera',
    p4:'Trodelas',
    p5:'Flexo'
  },
  {
    h2:'Nobis illum',
    p1:'Ipsam',
    p2:'Laudantium dolorum',
    p3:'Dinera',
    p4:'Trodelas',
    p5:'Flexo'
  },
  ]
  const icons=[{name:faXTwitter},{name:faFacebook},{name:faInstagram},{name:faLinkedin}]
  return (<>
    <footer className='px-5 PaddingLeft  pt-5 pb-3 bg-light '>
      <Row className='mx-5 py-5 border-bottom'>
      <Col sm={3}>
      <h2 className='mb-5'>Medicio</h2>
      <p className='fs-5 cursor-pointer active opacity-75'>A108 Adam Street</p>
      <p className='fs-5 cursor-pointer active opacity-75'>New York, NY 535022</p>
      <p className='fs-5 cursor-pointer active opacity-75'><span className='opacity-100 text-dark fw-bold'>Phone:</span> +1 5589 55488 55</p>
      <p className='fs-5 cursor-pointer active opacity-75'><span className='opacity-100 fw-bold'>Email: </span> info@example.com</p>
     <div className='d-flex'>
   {icons.map((item,key)=>{return( <div key={key} className=' cursor-pointer active p-3 me-2 d-flex align-items-center justify-content-center border rounded-circle'> <FontAwesomeIcon  className='fs-3 border rounded-circle ' icon={item.name}/></div>)})} 
</div>
      </Col>
{dataFooter.map((item,id)=>{return(
  <Col key={id} className=''>
      <h2 className=''>{item.h2}</h2>
      <p className='fs-5 mt-4 active cursor-pointer opacity-75'>{item.p1}</p>
      <p className='fs-5 cursor-pointer active opacity-75'>{item.p2}</p>
      <p className='fs-5 cursor-pointer active opacity-75'>{item.p3}</p>
      <p className='fs-5 cursor-pointer active opacity-75'>{item.p4}</p>
      <p className='fs-5 cursor-pointer active opacity-75'>{item.p5}</p>
      </Col>)})}
  </Row>
    </footer>
    <div className=' position-relative  bg-light d-flex align-items-center  justify-content-center'>
      <div className='text-center '><p className='fs-4 Font'>© Copyright Medicio All Rights Reserved</p>
      <p className='fs-4 Font'>Designed by <span className='text-info'> BootstrapMade </span></p></div>
      <Button className='position-absolute end-0 me-5  bg-info p-3 border-0'> <FontAwesomeIcon  className='fs-4 ' icon={faArrowUp}/></Button> 
      </div>
    </>
  )
}

export default Footer

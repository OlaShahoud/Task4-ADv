import React from 'react'
import Title from '../Title/Title'
import CardContact from '../CardContact/CardContact'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import FormContact from '../FormContact/FormContact'
import {faPhone,faMapMarker } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope } from '@fortawesome/free-regular-svg-icons'
const Contact = () => {
   const title='Contact'
    const paragraf='Necessitatibus eius consequater ex aliquid fuga eum quidem sint consecteur veilt'
     const icon1=faMapMarker 
     const icon2=faPhone
     const icon3=faEnvelope  
     const title1="Address" 
     const title2="Call Us"
     const title3="Email Us"
     const Paragraf1="A108 Adam Street, New York, NY 535022"
     const Paragraf2="+1 5589 55488 55"
     const Paragraf3="info@example.com"
    const className1='shadow py-4 ms-5 mt-5 border-0 marginLeft'
    const className2='shadow py-3  ms-5 mt-4 border-0 marginLeft'
    const className3='shadow py-3  ms-3 mt-4 border-0 marginLeft'
  return (
    <div className=''>
       <Title Title={title} Paragraf={paragraf}/>
       <iframe style={{height:"500px"}} className='w-100 my-5 ' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" ></iframe>
     <Row className='mx-5 '>
      <Col sm={6}>
      <Row>
        <Col><CardContact title={title1} pargraf={Paragraf1} icon={icon1} className={className1} /></Col>
      </Row>
     <Row>
      <Col><CardContact title={title2} pargraf={Paragraf2} icon={icon2}  className={className2}/></Col>
     <Col><CardContact title={title3} pargraf={Paragraf3} icon={icon3}  className={className3}/></Col>
     </Row>
     </Col>
     <Col sm={6}><FormContact/></Col>
     </Row> 
       
    
      
    </div>
  )
}

export default Contact

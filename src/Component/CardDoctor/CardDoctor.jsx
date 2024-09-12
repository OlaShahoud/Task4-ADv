import React from 'react'
import Card from 'react-bootstrap/Card';
import imgDoctor1 from './../../assets/img/doctors/doctors-1.jpg'
import imgDoctor2 from './../../assets/img/doctors/doctors-2.jpg'
import imgDoctor3 from './../../assets/img/doctors/doctors-3.jpg'
import imgDoctor4 from './../../assets/img/doctors/doctors-4.jpg'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const CardDoctor = () => {
    const dataDoctor=[
    {img:imgDoctor1,
    title:"Walter White",
    paragraf:"Chief Medical Officer"
    },
    {img:imgDoctor2,
    title:"Sarah Jhonson",
    paragraf:"Anesthesiologist"
    },
    {img:imgDoctor3,
    title:"William Anderson",
    paragraf:"diology"
    }, 
    {img:imgDoctor4,
    title:"Amanda Jepson",
    paragraf:"Neurosurgeon"
    }]
  return (
    
    <Row className='mx-5' >
    {dataDoctor.map((item,id)=>{return( 
    <Col >  
    <Card  className='shadow border-0 rounded mb-2'>
    <Card.Img  variant="top" src={item.img} />
    <Card.Body>
      <Card.Title className='fs-4'>{item.title}</Card.Title>
      <Card.Text className='fs-5 opacity-75'>{item.paragraf}</Card.Text>
</Card.Body>
  </Card>
  </Col>)})}
 </Row>
  )
}

export default CardDoctor

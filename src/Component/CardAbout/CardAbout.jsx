import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './CardAbout.css'
export default  function CardAbout (props) {
    return (
   <Card className='border-0 shadow mx-5 w-100 my-2 marginLeft ' style={{width:"320px"}}>
         <Card.Body >
            <Row className='m-2'>
                <Col className=' maxWidth fs-1 d-flex align-items-center'><FontAwesomeIcon style={{fontSize:"50px"}} className='text-info pe-1 ' icon= {props.img} /></Col>
                <Col className='fs-4'> 
                <Card.Title  className=' maxWidth fs-1 fw-bold'>{props.title}</Card.Title>
                <Card.Text className=' maxWidth opacity-75'>{props.text}</Card.Text>
                </Col>
            </Row>
          </Card.Body>
        </Card>
 
  )
}



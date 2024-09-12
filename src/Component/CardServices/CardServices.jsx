import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardServices = (props) => {
  return (
    <Card style={{}} className='m-5 border-0'>
  <Card.Body className='d-flex  flex-column justify-content-center align-items-center '>
  <Card.Title style={{width:"80px", height:"80px"}}className='shadow d-flex justify-content-center align-items-center rounded-circle fs-3 text-info'><FontAwesomeIcon icon={props.img}/></Card.Title>
      <Card.Title  className='fs-3'>{props.title}</Card.Title>
      <div style={{width:"60px", height:"1px"}} className='bg-info'></div>
      <Card.Text className='fs-5 pt-2  text-center'>{props.Paragraf}</Card.Text>
 </Card.Body>
  </Card>
  )
}

export default CardServices

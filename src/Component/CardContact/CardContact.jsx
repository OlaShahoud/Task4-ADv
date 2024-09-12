import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const CardContact = (props) => {
  return (
    <Card  className={props.className}>
   <Card.Body className='d-flex flex-column align-items-center justify-content-center '>
      <Card.Title className='border border-info p-3 rounded-circle'><FontAwesomeIcon  className='fs-2 text-info' icon={props.icon}/></Card.Title>
      <Card.Title className='fs-3'>{props.title}</Card.Title>
      <Card.Text className='fs-4'>
      {props.pargraf}
      </Card.Text>
     
    </Card.Body>
  </Card>
  )
}

export default CardContact

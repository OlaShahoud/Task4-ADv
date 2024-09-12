import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardPricing.css'

const CardPricing = (props) => {
    
  return (
    <Card className="text-center border-0 shadow mb-3  ">
    <Card.Header className={props.classNameHead}>{props.head} <p className={props.classNameAdvance}>Advanced</p></Card.Header>
    <Card.Body className='  d-flex flex-column align-items-center justify-content-center'>
      <Card.Title className='my-2 position-relative fs-2 fw-bold'> <span className='fs-4  position-absolute  position mt-md-n5 '>$</span> {props.number} <span className=' fs-5 opacity-75  fw-light position-absolute  mt-3 ms-1 '>/month</span></Card.Title>
      <Card.Text className='my-2 fs-4'>{props.text1}</Card.Text>
      <Card.Text className='my-2 fs-4'>{props.text2}</Card.Text>
      <Card.Text className='my-2 fs-4'>{props.text3}</Card.Text>
      <Card.Text className={props.classNameText1}>{props.text4}</Card.Text>
      <Card.Text className={props.classNameText}>{props.text5}</Card.Text>
   </Card.Body>
    <Card.Footer className=" p-4 border-0"> <Button  className='fs-4 btn-info px-5 py-2 text-white '>Buy Now</Button></Card.Footer>
  </Card>
  )
}

export default CardPricing

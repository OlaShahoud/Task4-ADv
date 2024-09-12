import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import CardCarousel from '../CardCarousel/CardCarousel';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './CarouselTest.css'

const CarouselTest = () => {
  return (<>
    <Carousel data-bs-theme=""   className='  marginLeft mx-5 py-5 'cols={4} rows={1} gap={4} loop>
  <Carousel.Item> 
        <Row  xs={3} md={3} bg={3}> 
        <Col ><CardCarousel/></Col>
        <Col> <CardCarousel/></Col>
        <Col> <CardCarousel/></Col>
       </Row>
    </Carousel.Item> 
        <Carousel.Item> 
        <Row xs={3} md={3} bg={3} > 
        <Col> <CardCarousel/></Col>
        <Col> <CardCarousel/></Col>
        <Col> <CardCarousel/></Col>
      </Row>
        </Carousel.Item> 
        <Carousel.Item> 
        <Row xs={3} md={3} bg={3} > 
        <Col> <CardCarousel/></Col>
        <Col> <CardCarousel/></Col>
        <Col> <CardCarousel/></Col>
      </Row>
        </Carousel.Item> 
        <Carousel.Item> 
        <Row xs={3} md={3} bg={3} > 
        <Col> <CardCarousel/></Col>
        <Col> <CardCarousel/></Col>
        <Col> <CardCarousel/></Col>
      </Row>
        </Carousel.Item> 
        <Carousel.Item> 
        <Row xs={3} md={3} bg={3} > 
        <Col> <CardCarousel/></Col>
        <Col> <CardCarousel/></Col>
        <Col> <CardCarousel/></Col>
      </Row>
        </Carousel.Item> 


  

   
    
  </Carousel>
   
  </>
  )
}

export default CarouselTest

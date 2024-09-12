import React from 'react'
import Card from 'react-bootstrap/Card';
import imgCarsel1 from './../../assets/img/testimonials/testimonials-3.jpg'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
const CardCarousel = () => {
   
  return (
   <Row  className='mb-5 '>
   <Col className='mx-5 mb-5 marginLeft'><Card className='mb-5  border-0 ' >
   <Card.Body className='bg-light rounded '>
    <Card.Text className=' fs-4 position-relative w-100 bg-light  ' >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis, eligendi incidunt recusandae et quidem eaque saepe, fugiat quis voluptates exercitationem necessitatibus veritatis amet ut, reprehenderit asperiores quo accusamus? Possimus.
        <Card.Text className='position-absolute  ' >
        <div className=' '><img className='rounded-circle w-25' src={imgCarsel1} alt="" /></div>
        <h5>Jena Kalis</h5>
        <p className='fs-6'> Store Owner</p>
        </Card.Text>
      </Card.Text>
   
    </Card.Body>
  </Card>
  </Col>

  </Row>
  )
}

export default CardCarousel

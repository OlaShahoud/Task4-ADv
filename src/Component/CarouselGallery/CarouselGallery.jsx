
import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgcaro1 from './../../assets/img/gallery/gallery-1.jpg'
import imgcaro2 from './../../assets/img/gallery/gallery-2.jpg'
import imgcaro3 from './../../assets/img/gallery/gallery-3.jpg'
import imgcaro4 from './../../assets/img/gallery/gallery-4.jpg'
import imgcaro5 from './../../assets/img/gallery/gallery-5.jpg'
import imgcaro6 from './../../assets/img/gallery/gallery-6.jpg'
import imgcaro7 from './../../assets/img/gallery/gallery-7.jpg'
import imgcaro8 from './../../assets/img/gallery/gallery-8.jpg'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import'./CarouselGallery.css'


const CarouselGallery = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    const [active, setactive] = useState('false');
    const [idd, setId] = useState('');
    const handleactive = (index) => {
     
      setactive(!active);
      setId(index);
    };
    const dataItem=[
      {img1:imgcaro1,img2:imgcaro2,img3:imgcaro3,img4:imgcaro4,img5:imgcaro5},
      {img1:imgcaro6,img2:imgcaro7,img3:imgcaro8,img4:imgcaro1,img5:imgcaro2},
      {img1:imgcaro3,img2:imgcaro4,img3:imgcaro5,img4:imgcaro6,img5:imgcaro7},
      {img1:imgcaro8,img2:imgcaro1,img3:imgcaro2,img4:imgcaro3,img5:imgcaro4},
      {img1:imgcaro5,img2:imgcaro6,img3:imgcaro7,img4:imgcaro8,img5:imgcaro1},
    ]
  return (
    <>
  <Carousel  style={{height:"20rem"}} activeIndex={index} onSelect={handleSelect} className='px-5 m-5 w-100 marginLeft PaddingLeft'>
    {dataItem.map((item,index)=>{return(
      <Carousel.Item key={index} className=' '>
        <Row  xs={5} md={5} className='px-5  w-100 '  >
          <Col id='1'  className={idd=='1'?active?" marginLeft p-1   z-3 border border-info d-flex align-items-center activee my-4":"d-flex align-items-center my-4 marginLeft":' marginLeft my-4'} 
          onClick={(e) => {handleactive(e.target.id)}} > 
          <img
          id='1'
          className="d-block w-100 hight "
          src={item.img1}
          alt="First slide"
        
         />
         </Col>
         <Col id='2' className={idd=='2'?active?"p-1 my-4  z-3 border border-info d-flex align-items-center activee":"d-flex align-items-center my-4":'my-4'} 
     onClick={(e) => {handleactive(e.target.id)}} >
             <img
          id='2'
          className="d-block w-100 hight  "
          src={item.img2}
          alt="First slide"
         />
         </Col>
         <Col className={idd=='3'?active?"p-1 my-4  z-3 border border-info d-flex align-items-center activee":"d-flex align-items-center my-4":'my-4'}  onClick={(e) => {handleactive(e.target.id)}}> 
          <img
          id='3'
          className="d-block w-100 hight "
          src={item.img3}
          alt="First slide"
         />
         </Col>   
          <Col className={idd=='4'?active?"p-1 my-4 z-3 border border-info d-flex align-items-center activee":"d-flex align-items-center my-4":'my-4'}  onClick={(e) => {handleactive(e.target.id)}}> 
          <img
          id='4'
          className="d-block w-100 hight "
          src={item.img4}
          alt="First slide"
         />
        </Col>
         <Col className={idd=='5'?active?"p-1 my-4 z-3 border border-info d-flex align-items-center activee":"d-flex align-items-center my-4":'my-4'}  onClick={(e) => {handleactive(e.target.id)}}> 
          <img
          id='5'
          className="d-block w-100 hight "
          src={item.img5}
          alt="First slide"
         />
        </Col>
 </Row>
  </Carousel.Item>)})} 
   </Carousel>

  </>
  )
}

export default CarouselGallery
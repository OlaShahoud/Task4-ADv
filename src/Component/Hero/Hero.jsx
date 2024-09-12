import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imgCarousel1 from './../../assets/img/hero-carousel/hero-carousel-1.jpg'
import imgCarousel2 from './../../assets/img/hero-carousel/hero-carousel-2.jpg'
import imgCarousel3 from './../../assets/img/hero-carousel/hero-carousel-3.jpg'
import Button from 'react-bootstrap/Button';
import './Hero.css'
const Hero = () => {
  return (
<>
<Carousel data-bs-theme="dark" className='position-relative  mb-4 vh-100'  >
      <Carousel.Item className=''>
        <img
          className="d-block w-100 vh-100"
          src={imgCarousel1}
          alt="First slide"
        />
        <Carousel.Caption className='bg-light bg-opacity-75 rounded border-top border-5 border-info position-absolute mh-100 bottom  '>
          <h5 className=' fs-4'>Temporibus autem quibusdam</h5>
          <p className='fs-5 px-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates recusandae reiciendis nostrum! Animi, reprehenderit beatae adipisci autem amet nam, unde, libero esse deserunt ea mollitia! Velit consequatur, ratione recusandae aut quo ea voluptatum cum, maiores nihil voluptates totam similique non. Cupiditate iste magnam, ea natus eius veniam? Eum,</p>
         <Button  className='btn-info  py-2 px-5 '>Read More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 vh-100"
          src={imgCarousel2}
          alt="Second slide"
        />
        <Carousel.Caption className='bg-light bg-opacity-75 rounded border-top border-5 border-info position-absolute mh-100 bottom '>
        <h5 className=' fs-4'>Temporibus autem quibusdam</h5>
          <p className='fs-5 px-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates recusandae reiciendis nostrum! Animi, reprehenderit beatae adipisci autem amet nam, unde, libero esse deserunt ea mollitia! Velit consequatur, ratione recusandae aut quo ea voluptatum cum, maiores nihil voluptates totam similique non. Cupiditate iste magnam, ea natus eius veniam? Eum,</p>
          <Button  className='btn-info  py-2 px-5 '>Read More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 vh-100"
          src={imgCarousel3}
          alt="Third slide"
        />
        <Carousel.Caption className='bg-light bg-opacity-75 rounded border-top border-5 border-info position-absolute mh-100 bottom  '>
        <h5 className=' fs-4 '>Temporibus autem quibusdam</h5>
          <p className='fs-5 px-2 lh'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates recusandae reiciendis nostrum! Animi, reprehenderit beatae adipisci autem amet nam, unde, libero esse deserunt ea mollitia! Velit consequatur, ratione recusandae aut quo ea voluptatum cum, maiores nihil voluptates totam similique non. Cupiditate iste magnam, ea natus eius veniam? Eum,</p>
          <Button  className='btn-info py-2 px-5'>Read More</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</>
  )
}

export default Hero

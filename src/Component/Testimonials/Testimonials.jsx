import React from 'react'
import Title from '../Title/Title'
import CarouselTest from '../CarouselTest/CarouselTest'


const Testimonials = () => {
    const title='Testimonials'
    const paragraf='Necessitatibus eius consequater ex aliquid fuga eum quidem sint consecteur veilt'
  return (
    <div className=' PaddingLeft py-5  '>
        <Title Title={title} Paragraf={paragraf}/>
          <CarouselTest/>
  </div>
  )
}

export default Testimonials

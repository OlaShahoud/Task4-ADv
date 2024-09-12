import React from 'react'
import Title from '../Title/Title'
import CarouselGallery from '../CarouselGallery/CarouselGallery'

const Gallery = () => {
     const title='Gallery'
    const paragraf='Necessitatibus eius consequater ex aliquid fuga eum quidem sint consecteur veilt'
  return (
    <div className='m-5  marginLeft '>
       <Title Title={title} Paragraf={paragraf}/>
     <CarouselGallery/>
    </div>
  )
}

export default Gallery

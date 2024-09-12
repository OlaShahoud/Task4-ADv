import React from 'react'
import Title from '../Title/Title'
import CardDoctor from '../CardDoctor/CardDoctor'

const Doctors = () => {
     const title='Doctors'
    const paragraf='Necessitatibus eius consequater ex aliquid fuga eum quidem sint consecteur veilt'
  return (
    <div className='p-5 bg-light PaddingLeft '>
        <Title Title={title} Paragraf={paragraf}/>
        <CardDoctor/>
    </div>
  )
}

export default Doctors

import React from 'react'
import Title from '../Title/Title'
import TapsDeppartment from '../TapsDeppartment/TapsDeppartment'

const Departments = () => {
    const title='Department'
    const paragraf='Necessitatibus eius consequater ex aliquid fuga eum quidem sint consecteur veilt'
  return (
    <div className='m-5'>
      <Title Title={title} Paragraf={paragraf}/>
      <TapsDeppartment/>
    </div>
  )
}

export default Departments

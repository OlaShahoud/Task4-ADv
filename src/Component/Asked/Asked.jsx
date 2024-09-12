import React from 'react'
import Title from '../Title/Title'
import Occordione from '../Occordione/Occordione'

const Asked = () => {
   const title='Frequently Asked Questions'
    const paragraf='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
  return (
    <div className='m-5 marginLeft'>
       <Title Title={title} Paragraf={paragraf}/>
       <Occordione/>
     
    </div>
  )
}

export default Asked

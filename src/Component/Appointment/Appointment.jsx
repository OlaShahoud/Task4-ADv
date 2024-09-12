import React from 'react'
import Title from '../Title/Title'
import FormApp from '../FormApp/FormApp'


const Appointment = () => {
    const title='MAKE AN APPOINTMENT'
    const paragraf='Necessitatibus eius consequater ex aliquid fuga eum quidem sint consecteur veilt'
 
    return (
    <div className='bg-light PaddingCol  p-5 '>
      <Title Title={title} Paragraf={paragraf}/>
     <FormApp/>
   </div>
  )
}

export default Appointment

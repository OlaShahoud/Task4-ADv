
import React from 'react'
import './Title.css'

const Title = ( {Title,Paragraf}) => {
  return (
    <div className='w-100 d-flex  flex-column  align-items-center'>
        <h1 className='   '>{Title}</h1>
        <div className=' my-2 Bar bg-info'></div>
        <p className='px-4'>{Paragraf}</p>
    
      </div>
  )
}

export default Title

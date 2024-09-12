import Button from 'react-bootstrap/Button';
import React from 'react'
import './Help.css'
import Container from 'react-bootstrap/esm/Container';
const Help = () => {
  return (
  
    <div className=' bg-info py-5  w-100 d-flex  flex-column  align-items-center justify-content-center '>
     
        <h1 className='titleHelp px-4 w-100 fs-1'> In an emergency? Need help now</h1>
        <p className='w-75 fs-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus debitis doloribus dolores ullam accusantium impedit nemo asperiores nam labore natus voluptates nostrum molestias ipsum sit, quo est alias sint perferendis rem? Sit, veniam. Voluptate repudiandae quibusdam ad cumque neque excepturi, quis in. Quo cum at obcaecati eos enim delectus dolorem?</p>
       <Button variant="outline-light" className=''> Make an Appointment</Button>{' '}
      
      </div>
   
 
  )
}

export default Help

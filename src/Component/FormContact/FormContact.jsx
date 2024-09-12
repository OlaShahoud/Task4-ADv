import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const FormContact = () => {
  const dataForm=[
    {type:"text",placeholder:"Your Name"},
    {type:"text",placeholder:"Your Email"},
 
   
    ]
  return (
    <div>
  <Form className=' me-5 my-5 shadow '>
    <Form.Group className="p-5" controlId="formBasicEmail">
    <Row xs={1} md={2} lg={2} className=' '>
    {dataForm.map((item,index)=>{return<Col><Form.Control className='p-3  opacity-75' key={index} type={item.type} placeholder={item.placeholder} /></Col>})}
    </Row>
    
    <Row><Col><Form.Control className='p-3 my-4 opacity-75'  type='text' placeholder='Subject' /> </Col></Row>
  <Row className=''><Col>  <Form.Control className=' p-3 opacity-75 p-2'as="textarea" rows={4}  placeholder='Messsage (Optional)'/> </Col></Row>
  <Row> <Col className=' mt-4  d-flex  justify-content-center align-items-center '><Button   className='btn-info  text-white px-4 py-2 fs-4  '>Send Massage</Button></Col></Row>
 
 </Form.Group>

  
  </Form>
    </div>
  
  )
}

export default FormContact

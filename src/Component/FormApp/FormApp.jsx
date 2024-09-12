import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button';
const FormApp = () => {
    const dataForm=[
        {type:"text",placeholder:"Your Name"},
        {type:"text",placeholder:"Your Email"},
        {type:"text",placeholder:"Your Phone"},
       
        ]
  return (
    <Form>
    <Form.Group className="marginLeft  mb-3 m-5" controlId="formBasicEmail">
    <Row xs={1} md={2} lg={3} className='marginLeft  mx-5 '>
    {dataForm.map((item,index)=>{return<Col><Form.Control className='py-2' key={index} type={item.type} placeholder={item.placeholder} /></Col>})}
    </Row>
    
    <Row xs={1} md={2} lg={3} className='marginLeft  mx-5 my-3'>
    <Col><Form.Control className='py-2' type="date" placeholder="dd/mm/yyyy" /></Col>
    <Col> <Form.Select  className='py-2' id="disabledSelect">
    <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select> </Col>
    <Col> <Form.Select className='py-2' id="disabledSelect">
    <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </Col>
    </Row>
  <Row className=' MarGinCol mx-5'><Col>  <Form.Control as="textarea" rows={3}  placeholder='Messsage (Optional)'/> </Col></Row>
  <Row> <Col className=' mt-4  d-flex  justify-content-center align-items-center '><Button   className='btn-info  text-white px-5 py-2 fs-5  '>Make an Appointment</Button></Col></Row>
 </Form.Group>

  
  </Form>
  )
}

export default FormApp

import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import imgDeppartment1 from '/src/assets/img/departments-1.jpg';
import imgDeppartment2 from '/src/assets/img/departments-2.jpg';
import imgDeppartment3 from '/src/assets/img/departments-3.jpg';
import imgDeppartment4 from '/src/assets/img/departments-4.jpg';
import imgDeppartment5 from '/src/assets/img/departments-5.jpg';
import './TapsDeppartment.css'
import Collapse from 'react-bootstrap/esm/Collapse';
const TapsDeppartment = () => {
   const dataContentTaps=[
    { title:"Ophthalmologists",
    Paragraf1:"Ominis blanditils sarpe eos autem qui sunt debitis porro quia.",
    Paragraf2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nobis modi atque qui iusto doloremque sapiente velit illum id itaque pariatur reiciendis incidunt, nemo dolor labore amet. Ea veniam, nemo aliquam deleniti pariatur est temporibus. Nesciunt temporibus et omnis! Ducimus officiis in quaerat. Sunt numquam ullam veniam saepe sequi eius!",
    img:imgDeppartment1,
    eventKey:"Cardiology"},
    { title:"Ophthalmologists",
    Paragraf1:"Ominis blanditils sarpe eos autem qui sunt debitis porro quia.",
    Paragraf2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nobis modi atque qui iusto doloremque sapiente velit illum id itaque pariatur reiciendis incidunt, nemo dolor labore amet. Ea veniam, nemo aliquam deleniti pariatur est temporibus. Nesciunt temporibus et omnis! Ducimus officiis in quaerat. Sunt numquam ullam veniam saepe sequi eius!",
    img:imgDeppartment2,
    eventKey:"Neurology"},
    { title:"Ophthalmologists",
    Paragraf1:"Ominis blanditils sarpe eos autem qui sunt debitis porro quia.",
    Paragraf2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nobis modi atque qui iusto doloremque sapiente velit illum id itaque pariatur reiciendis incidunt, nemo dolor labore amet. Ea veniam, nemo aliquam deleniti pariatur est temporibus. Nesciunt temporibus et omnis! Ducimus officiis in quaerat. Sunt numquam ullam veniam saepe sequi eius!",
    img:imgDeppartment3,
    eventKey:"Hepatology"},
    { title:"Ophthalmologists",
    Paragraf1:"Ominis blanditils sarpe eos autem qui sunt debitis porro quia.",
    Paragraf2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nobis modi atque qui iusto doloremque sapiente velit illum id itaque pariatur reiciendis incidunt, nemo dolor labore amet. Ea veniam, nemo aliquam deleniti pariatur est temporibus. Nesciunt temporibus et omnis! Ducimus officiis in quaerat. Sunt numquam ullam veniam saepe sequi eius!",
    img:imgDeppartment4,
    eventKey:"Pediatrics"},
    { title:"Ophthalmologists",
    Paragraf1:"Ominis blanditils sarpe eos autem qui sunt debitis porro quia.",
    Paragraf2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nobis modi atque qui iusto doloremque sapiente velit illum id itaque pariatur reiciendis incidunt, nemo dolor labore amet. Ea veniam, nemo aliquam deleniti pariatur est temporibus. Nesciunt temporibus et omnis! Ducimus officiis in quaerat. Sunt numquam ullam veniam saepe sequi eius!",
    img:imgDeppartment5,
    eventKey:"Ophthalmologists"}
   ]
   const dataNavLink=[
    {title:"Cardiology",eventKey:"Cardiology"},
    {title:"Neurology",eventKey:"Neurology"},
    {title:"Hepatology",eventKey:"Hepatology"},
    {title:"Pediatrics",eventKey:"Pediatrics"},
    {title:"Ophthalmologists",eventKey:"Ophthalmologists"}

   ]
  return (
    <Tab.Container  id="left-tabs-example" defaultActiveKey={['Cardiology']} >
      <Row className=' marginLeft m-5'>
        <Col md={5} bg={3} >
          <Nav  variant="pills" className="flex-column ">
            {dataNavLink.map((item,index)=>{return(
            <Nav.Item key={index}>
              <Nav.Link className='nav-linkk fs-4 text-dark bg-white rounded-0 ' eventKey={item.eventKey}>{item.title}</Nav.Link>
            </Nav.Item>)})}
         </Nav>
        </Col>
        <Col sx={12} bg={9}>
      
        {dataContentTaps.map((element,index)=>{return(
        <Tab.Content key={index} >
            <Tab.Pane eventKey={element.eventKey}>
                <Row>
                   <Col  md={12} bg={8} className='mt-2'>
                    <h2>{element.title}</h2>
                    <p className='py-2 fs-5 opacity-75 '>{element.Paragraf1}</p> 
                    <p className='fs-5 opacity-75'>{element.Paragraf2}</p>
                    </Col>
                     <Col md={10} bg={4}><img className='w-75 h-75' src={element.img} alt="imgDeppartment1" /></Col>
                </Row>
            </Tab.Pane>
         </Tab.Content>)})}
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default TapsDeppartment

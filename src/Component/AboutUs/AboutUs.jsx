import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble, faPlay,faUserDoctor,faBuilding,faFlask,faAward,faThermometer } from '@fortawesome/free-solid-svg-icons'
import imgAbout from './../../assets/img/about.jpg'
import './AboutUs.css'
import Title from '../Title/Title'
import CardAbout from '../CardAbout/CardAbout';
const AboutUs = () => {
    const title ='About Us'
    const Paragraf='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
    const dataAbout=[
    {
      paragraf:" Ullamco laboris nisi ut allquip ex ea commodo consequat."
    },
    { 
      paragraf:"Duis aute irure dolor in reprehenderti in voluptate velit."
    },
    {
      paragraf:"Ullamco laboris nisi ut allquip ex ea commodo consequat. Duis aute irure dolor in reprehenderti in voluptate trideta storeacalaperda mastiro dolore eu fugiat nulla pariatur."
    },]
   const dataCard=[{
    img:faUserDoctor,
    number:"25",
    Title:"Doctors",
    class:" fs-4"
   },
   {
    img:faBuilding,
    number:"15",
    Title:"Departments",
    class:""
   },
   {
    img:faFlask,
    number:"8",
    Title:"Research Laps",
    class:""
   },
   {
    img:faAward,
    number:"150",
    Title:"Awards",
    class:""
   }]
  return (
    <div className='mt-5'>
        <Title Title={title} Paragraf={Paragraf}/>
      <Row className='m-5 marginCol'>
        <Col className=' marginCol  ms-5 me-1 position-relative '>
        <img src={imgAbout} alt="imgAbout" className='imgAbout ps-5 h-75 w-100 rounded ' />
         <div className='fs-4 position-absolute start-50 bottom-50 size1 bg-info rounded-circle d-flex align-items-center justify-content-center text-light ps-1 '><FontAwesomeIcon   icon={faPlay}/> </div>
      </Col>
        <Col className=' marginColl me-5 ColAbout'>
      <h1 >Voluptatem dignissimos provident quasi corporis voluptates sit assumenda. </h1>
      <p className='w-75'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi cupiditate enim impedit nemo soluta corrupti praesentium et magnam esse. Quaerat.</p>
      {dataAbout.map((item,index)=>{ return<p key={index} className='w-75'> <FontAwesomeIcon  className='pe-3 text-info' icon={faCheckDouble}/>{item.paragraf}</p>})}
      <p className='w-75'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sint? Explicabo veritatis similique accusantium rerum, illum deserunt obcaecati, omnis repudiandae excepturi, ea nulla culpa earum quos magnam pariatur? Expedita, tempore!</p>
        </Col>
      </Row>
    
      <Row lg={4} className=" marginLeft mx-5 px-5">
      { dataCard.map((item, idx) => { 
        return<Col>
        <CardAbout key={idx}  class={item.class} title={item.number} text={item.Title} img={item.img} />
        </Col>
      })}
  </Row>
     
    
      
   </div>
  )
}

export default AboutUs

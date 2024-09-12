import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgChemistry from './../../assets/img/features.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcaseMedical, faLungs,faHandHoldingMedical,faStaffSnake } from '@fortawesome/free-solid-svg-icons'
import './Chemistry.css'
const Chemistry = () => {
  const dataChemistry=[
    {img:faHandHoldingMedical,title:"Lorem Ipsum",paragraf:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",class:"mt-5 pt-4"},
    {img:faSuitcaseMedical,title:"Nemo Enim",paragraf:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",class:"mt-4"},
    {img:faStaffSnake,title:"Dine Pad",paragraf:"Explicabo est voluptatum asperioes consequatur magnam.Et veritatis odit. Sunt aut deserunt minus aut  eligendi omnis ",class:"my-4"},
    {img:faLungs,title:"Tride clov",paragraf:"Est voluptatum labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi.",class:"mt-4"}]
  return (
    <Row className=' m-5 pt-5'>
    <Col className=' marginLeft  ms-5 me-2 position-relative '>
    <img src={imgChemistry} alt="imgAbout" className='paddingCol imgAbout imgCh ps-5 rounded w-100' />
    </Col>
    <Col className='me-5 ms-2 marginTopp '>
  <h1 >Voluptatem dignissimos provident quasi corporis voluptates sit assumenda. </h1>
  <p className='w-75 fs-5'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi cupiditate enim impedit nemo soluta corrupti praesentium et magnam esse. Quaerat.</p>
  <div>
    {dataChemistry.map((item,index)=>{return<Row key={index} className={item.class}>
      <Col className='fs-3 text-info rounded me-2 maxHight shadow d-flex justify-content-center align-items-center'><FontAwesomeIcon icon={item.img}/></Col>
      <Col> <h4 className=''>{item.title}</h4>
      <p className='fs-6'>{item.paragraf}</p>
      </Col>
      </Row>
    })}
  </div>
  </Col>
  </Row>
  )
}

export default Chemistry

import React from 'react'
import Title from '../Title/Title'
import CardServices from '../CardServices/CardServices'
import { faHeartPulse,faNotesMedical,faDna,faHospitalUser,faWheelchair,faPills} from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const Services = () => {
   const title='Services'
  const paragraf='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
  const dataServices=[
    {img:faHeartPulse,title:"Nesciunt Mete",paragraf:"Provident nihil minus qui consequatur non omnis maiores.Eos accusantium minus dolors iure perferendis tempore et consequatur."},
    {img:faPills,title:"Eosle Commodi",paragraf:"Ut autem aut autem non a . Sint sint sit facilis nam iusto sint.Libero corrupti neque eum hic non ut nesciunt dolorem"},
    {img:faHospitalUser,title:"Ledo Markt",paragraf:" Ut excepturi voluptatem nisi sed. ZQuidem fuga consequatur.Minus ea aut.Vel qui id voluptas adipisci eos earum corrupti."},
    {img:faDna,title:"Asperiores Commodit",paragraf:"Non et temporbus minus omins sed dolor esse consequatur.Cupiditate sed error ea fuga sit provident adipisci neque."},
    {img:faWheelchair,title:" Velit Doloremque",paragraf:"Cumque et suscipit saepe.Est maiores aytem enim facilis ut aut ipsam corporis aut.Sed animi at autem lias elus labore."},
    {img:faNotesMedical,title:"Dolori Architecto",paragraf:"Hic molestias ea quaibusdam eos. Fugiat enim doloremque aut neque non et debities iure.Corrupti recusandae ducimus enim."}]
  return (
    <div className='m-5 '>
      <Title Title={title} Paragraf={paragraf}/>
     <Row xs={1} md={2} lg={3} className='mx-5 '>
    {dataServices.map((item,index)=>{return<Col><CardServices key={index} img={item.img} title={item.title} Paragraf={item.paragraf}/></Col>})}
    </Row>
    </div>
  )
}

export default Services

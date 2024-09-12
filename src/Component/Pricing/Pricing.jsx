import React from 'react'
import Title from '../Title/Title'
import CardPricing from '../CardPricing/CardPricing'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const Pricing = () => {
     const title='Pricing'
    const paragraf='Necessitatibus eius consequater ex aliquid fuga eum quidem sint consecteur veilt'
  const dataCardPricing=[
    {classNameHead:" position-relative overflow-hidden border-0 p-4 fs-3 ",
    classNameAdvance:'fs-6 position-absolute  bg-info text-white py-1  w-50  n d-none',
    classNameText:"fs-4 my-2 text-decoration-line-through opacity-75",
    classNameText1:"fs-4 my-2 text-decoration-line-through opacity-75",
    classNameCard:"",
    text1:"Aida dere",
    text2:"Nec feugiat nist",
    text3:"Nulla at volutpat dola",
    text4:"Pharetra massa",
    text5:"Massa ultricies mi",
    number:"0",
    head:"Free"
    },
    {classNameHead:"position-relative overflow-hidden fs-3 border-0 p-4  bg-info text-white ",
    classNameAdvance:'fs-6 position-absolute  bg-info text-white py-1  w-50  n d-none',
    classNameText:"fs-4 my-2 text-decoration-line-through opacity-75",
    classNameText1:"fs-4 my-2 ",
    classNameCard:"",
    text1:"Aida dere",
    text2:"Nec feugiat nist",
    text3:"Nulla at volutpat dola",
    text4:"Pharetra massa",
    text5:"Massa ultricies mi",
    number:"19",
    head:"Business"
    },
    {classNameHead:"position-relative overflow-hidden fs-3 border-0 p-4 ",
    classNameAdvance:'fs-6 position-absolute  bg-info text-white py-1  w-50  n d-none',
    classNameText:"fs-4 my-2",
    classNameText1:"fs-4 my-2 ",
    classNameCard:"",
    text1:"Aida dere",
    text2:"Nec feugiat nist",
    text3:"Nulla at volutpat dola",
    text4:"Pharetra massa",
    text5:"Massa ultricies mi",
    number:"29",
    head:"Developer"
    },
    {classNameHead:"position-relative overflow-hidden fs-3 border-0 p-4 ",
    classNameAdvance:'fs-6 position-absolute bg-info text-white py-1 n ',
    classNameText:"fs-4  my-2",
    classNameText1:"fs-4 my-2 ",
    classNameCard:"",
    text1:"Aida dere",
    text2:"Nec feugiat nist",
    text3:"Nulla at volutpat dola",
    text4:"Pharetra massa",
    text5:"Massa ultricies mi",
    number:"49",
    head:"Ultimate"
    }]
    return (
    <div className=' marginLeft m-5'>
   <Title Title={title} Paragraf={paragraf}/>
       <Row className='m-5'>
        {dataCardPricing.map((item,id)=>{return(
        <Col className='gap-3'>
        <CardPricing classNameHead={item.classNameHead} classNameText={item.classNameText} classNameText1={item.classNameText1} classNameAdvance={item.classNameAdvance} head={item.head} number={item.number} text1={item.text1} text2={item.text2} text3={item.text3} text4={item.text4} text5={item.text5} />
        </Col>)})}
       </Row>
      
   
    </div>
  )
}

export default Pricing

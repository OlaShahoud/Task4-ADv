import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './Occordione.css'

const Occordione = () => {
  const  dataAccordione=[
    {eventKey:"0",
    header:"Non consectetur a erat nam at lectus urna duis?",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam,"
    },
    {eventKey:"1",
    header:"Feugiat scelerisque varius morbi enim nunc faucibus?",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam,"
    },
    {eventKey:"2",
    header:"Dolor sit amet consectetur adipiscing elit pellentesque?",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam,"
    },
    {eventKey:"3",
    header:"Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam,"
    },
    {eventKey:"4",
    header:"Tempus quam pellentesque nec nam aliquam sem et tortor?",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam,"
    },
    {eventKey:"5",
    header:"Perspiciatis quod quo quos nulla quo illum ullam?",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam,"
    },
]
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen className='m-5 marginLeft'>
        {dataAccordione.map((item,id)=>{return(
    <Accordion.Item key={id} eventKey={item.eventKey} className='m-5 p-2  border'>
      <Accordion.Header className='fs-1'>{item.header}</Accordion.Header>
      <Accordion.Body className='fs-5'>{item.text}</Accordion.Body>
    </Accordion.Item>)})}
   

  </Accordion>
  )
}

export default Occordione

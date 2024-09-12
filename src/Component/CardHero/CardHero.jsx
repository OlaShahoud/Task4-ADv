import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import'./CardHero.css'

const CardHero = () => {
  return (
    <CardGroup className='m-5'>
      <Card className='marginCard1  marginCard ms-5 my-5 p-5 shadow border-0 min-w-100 width'>
        <Card.Body className=''>
          <Card.Text className='fs-1 text-info '><FontAwesomeIcon icon={faHeartPulse}/></Card.Text>
          <Card.Title className='fs-2 '>Lorem lpsum</Card.Title>
          <Card.Text className='fs-6 '>
           Voluptatum deleniti atque corrupti quos dolores et quas molestias excepture
          </Card.Text>
        </Card.Body>
       </Card>
       <Card className='marginCard1  m-5 p-5 border-0 shadow min-w-100 width'>
        <Card.Body >
          <Card.Text className='fs-1 text-info'><FontAwesomeIcon icon={faHeartPulse}/></Card.Text>
          <Card.Title className='fs-2 '>Lorem lpsum</Card.Title>
          <Card.Text className='fs-6 '>
           Voluptatum deleniti atque corrupti quos dolores et quas molestias excepture
          </Card.Text>
        </Card.Body>
       </Card>
       <Card className= ' marginCard1 me-5 my-5 p-5 shadow border-0 min-w-100 width'>
        <Card.Body>
          <Card.Text className='fs-1 text-info '><FontAwesomeIcon icon={faHeartPulse}/></Card.Text>
          <Card.Title className='fs-2 '>Lorem lpsum</Card.Title>
          <Card.Text className='fs-6 '>
           Voluptatum deleniti atque corrupti quos dolores et quas molestias excepture
          </Card.Text>
        </Card.Body>
       </Card>
       <Card className=' marginCard1 me-5 my-5 p-5 shadow border-0 min-w-100 width'>
        <Card.Body>
          <Card.Text className='fs-1 text-info'><FontAwesomeIcon icon={faHeartPulse}/></Card.Text>
          <Card.Title className='fs-2 '>Lorem lpsum</Card.Title>
          <Card.Text className='fs-6 '>
           Voluptatum deleniti atque corrupti quos dolores et quas molestias excepture
          </Card.Text>
        </Card.Body>
       </Card>
    </CardGroup>
  )
}

export default CardHero

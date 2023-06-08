import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RestoCard({item}) {
  return (


    <Link style={{textDecoration:"none"}} to={`details/${item.id}`}>
      <Card>

<Card.Img src={item.photograph} variant="top"  className='p-3'/>
<Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text><strong>Cuisine:</strong>{item.cuisine_type}</Card.Text>
    <Card.Text>{item.address}</Card.Text>
</Card.Body>
</Card>
    
    </Link>
  
  )
}

export default RestoCard
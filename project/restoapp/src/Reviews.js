import React from 'react'
import { ListGroup } from 'react-bootstrap'

function Reviews({data}) {
  return (
    <div>

      { data.map((item)=>(
        <>

        <h6>{item.name}</h6>

        <ListGroup>
            <ListGroup.Item>
            <p>{item.date}</p>
            <p>{item.comments}</p>
            </ListGroup.Item>
        </ListGroup>
           
        
        </>

        ))}
    </div>
  )
}

export default Reviews
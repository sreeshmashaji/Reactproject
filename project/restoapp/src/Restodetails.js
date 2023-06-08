import React from 'react'
import { useState,useEffect } from 'react'
import { useParams ,Link} from 'react-router-dom'
import {Row,Col,ListGroup,Image,Card} from'react-bootstrap'
import Reviews from './Reviews'
import { useSelector,useDispatch } from 'react-redux'



function Restodetails() {
    // const [datas,setData]=useState ([])
    const params=useParams()

    // const fetchData=async()=>{
    //     await fetch('/restaurants.json')
    //     .then((res)=>res.json())
    //     .then((data)=>setData(data.restaurants))
    // }
  // const dispatch=useDispatch()

 
    // useEffect(()=>{
    //   dispatch(listRestaurants())
    // },[])
   
  const restaurantsData=useSelector(state=>state.restaurantReducer)
  const {restaurants}=restaurantsData

  // const Data=useSelector(state=>state.restaurantReducer)
  // const {res}=Data



const details=restaurants.find((i)=>i.id == params.id)
console.log("daaata",details)

  return (
    <div>
<Link className='btn btn-outline-dark my-2 rounded btn-sm' to="/">Back</Link>
{ details?(
<Row className='my-3'>
  <Col md={3}>
    <Image className='img' src={details.photograph} fluid/>

  </Col>
  <Col md={4}>
    <ListGroup>
      <ListGroup.Item>
        <h2>{details.name}</h2>
        <h2>{details.neighborhood}</h2>
      </ListGroup.Item>
      <ListGroup.Item>
        <p>cuisine: {details.cuisine_type}</p>
      </ListGroup.Item>
      <ListGroup.Item>
        <p>Address: {details.address}</p>
      </ListGroup.Item>
    </ListGroup>
  </Col>
  <Col md={4}>
    <ListGroup>
      <ListGroup.Item>
        <h4>OPERATING HOURS</h4>
        <p>Monday:{details.operating_hours.Monday}</p>
        <p>Tuesday:{details.operating_hours.Monday}</p>

        <p>wednesday:{details.operating_hours.Monday}</p>

        <p>Friday:{details.operating_hours.Monday}</p>

        <p>Saturday:{details.operating_hours.Monday}</p>

      </ListGroup.Item>
    </ListGroup>
  </Col>
  <Row >
    <Card className='my-3 mx-3 p-3 rounded card'>
    <Reviews data={details.reviews}/>

    </Card>
  </Row>

</Row>



):'null'}


    </div>
  )
}

export default Restodetails
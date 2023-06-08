import React from 'react'
import { useState,useEffect } from 'react'
import { Row,Col}from 'react-bootstrap'
import RestoCard from '../RestoCard'
import { useDispatch,useSelector } from 'react-redux'
import { listRestaurants } from '../actions/RestoAction'

function Home() {
  // const[restaurants,setRestaurants]=useState([])
  // const fetchData=async()=>{
  //   await fetch('/restaurants.json')
  //   .then((res)=>res.json())
  //   .then((item)=>setRestaurants(item.restaurants))
  // }

  const dispatch=useDispatch()

  const restaurantsData=useSelector(state=>state.restaurantReducer)
  const {restaurants}=restaurantsData



 useEffect(()=>{
dispatch(listRestaurants())
 },[])



  console.log('data is',restaurants)


  return (
    <Row>
      
      {restaurants.map((item) => (
        <Col sm={12} lg={6} md={8} xl={3}>
          <RestoCard item={item}/>
        </Col>
      ))}

    </Row>
  )
}

export default Home






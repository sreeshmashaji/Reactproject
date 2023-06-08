import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


function Newhome() {
    const [restaurants, setRestaurants] = useState([])
    const fetchData = async () =>{
      await fetch('/restaurants.json')
      .then((res) => res.json())
      .then((item) => setRestaurants(item.restaurants))
    }
    
    useEffect(() => {
      fetchData()
    }, [])
    console.log("data: ", restaurants)
  

  return (
    
         <div>
      {restaurants.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <p>{item.id}</p>
        </div>
      ))}

    </div>
  )
}

export default Newhome
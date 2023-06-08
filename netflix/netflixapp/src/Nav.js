import React from 'react'
import { useState,useEffect } from 'react'
import './Nav.css'

function Nav() {

    const [show,setHandleshow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                setHandleshow(true)
            }
            else setHandleshow(false)
        })

    },[])



  return (
    <div className={`nav ${show && 'naqv_black'}`}>
        <img className='nav_logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>

    </div>
  )
}

export default Nav

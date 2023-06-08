import React from 'react'
import { useEffect,useState } from 'react'
import instance from './Instance'
import requests from './Request'
import './Banner.css'


export const Banner = () => {

const [movie,setMovie]=useState([])

async function fetchData(){
    const req=await instance.get(requests.fetchNetflixOriginals)
    setMovie(req.data.results[
        Math.floor(Math.random()* req.data.results.length- 1)
    ])


}

useEffect(()=>{
    fetchData()
},[])


function truncate(str,n){
    return str?.length > n ? str.substr(0 , n-1)+ "...." :str
}


console.log("lall",movie
);

  return (
    <header 
    className='banner'
    style={
        {
            backgroundSize:"cover",
            backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition:"center"
        }
    }>

    <div className='banner_contents'>
        <h1 className='banner_title'>
            {movie.title || movie.name || movie.original_name}

        </h1>
    </div>
    <h1 className='banner_desc'>
        {truncate(movie.overview,100)}
        {/* {movie.overview} */}
        

    </h1>
    
    </header>
  )
}

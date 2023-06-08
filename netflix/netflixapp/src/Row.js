// import React from 'react'
// import  {useEffect,useState} from 'react'
// import instance from './Instance'


// function Row({title,fetchUrl}) {
//     const [movies,setMovies]=useState([])

//     async function fetchData(){
//         const requ=await instance.get(fetchUrl)
//         setMovies(requ.data.results)
//     }

//     useEffect(()=>{ 
//         fetchData()

//     },[])

//     console.log(movies)

//   return (
//     <div>Row</div>
//   )
// }

// export default Row
import React from 'react'
import { useState, useEffect } from 'react'
import instance from './Instance'
import './Row.css'

const image_url="https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl,isLarge }) {
    const [movies, setMovies] = useState([])
    async function fetchData() {
        const request = await instance.get(fetchUrl)
        setMovies(request.data.results)
        console.log(request)
        return request
    }
    

    


    useEffect(() => {
        fetchData()
    },[])
    // console.log("movies: ", movies)
    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='row_posters'>
            
                {
                   
                    movies.map((i)=>(
                       
                      <img

                      key={i.id}
                      className={`row_poster ${isLarge && 'row_posterLarge'}`}
                      src={`${image_url}${ isLarge?i.poster_path:i.backdrop_path}`}
                      alt={i.name}
                      
                      
                      
                      
                      />
                    )
                
                    )
                    
                }
            
            </div>
        </div>
    )
}

export default Row
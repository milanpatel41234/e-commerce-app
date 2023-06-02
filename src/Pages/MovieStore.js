import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'

const Movie=(props)=>{
return <Container>
    <li>
        <h3>{props.item.title}</h3>
        <b>Release date: {props.item.release_date}</b>
        <p>{props.item.opening_crawl}</p>
        <Button variant='info'>Buy Movie</Button>
    </li>
</Container>
}

function MovieStore() {
    const [movies,setMovies] = useState([])
    useEffect(() => {
        function fatchfilms (){
            try {
              fetch('https://swapi.dev/api/films/').then(response=>{
                return response.json()
            }).then(data=>{
                setMovies(data.results)
            })
          
            } catch (error) {
                console.log(error)
            }
        }
        fatchfilms()
       
      },[])
      console.log(movies)
    const MovieList = movies.map(item=>{ return <Movie key={item.episode_id} item={item}/>})
  return (
  <>{MovieList}</>
  )
}

export default MovieStore

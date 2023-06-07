import React from 'react'
import { Button,Container } from 'react-bootstrap'

function MovieList(props) {
  const HandleDelete= async(id)=>{
  
    await fetch(`https://moviestore-9dbbc-default-rtdb.firebaseio.com/movielist/${id}.json`,{
         method:'DELETE',
       
     })
     props.onRefresh()
  }
  return (
    <Container>
      <li>
        <h3>{props.item.name}</h3>
        <b>Release date: {props.item.date}</b>
        <p>{props.item.details}</p>
        <Button onClick={HandleDelete.bind(null,props.item.key)} variant="danger">Delete Movie</Button>
      </li>
    </Container>
  )
}

export default MovieList

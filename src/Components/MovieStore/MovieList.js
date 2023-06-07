import React from 'react'
import { Button,Container } from 'react-bootstrap'

function MovieList(props) {
  return (
    <Container>
      <li>
        <h3>{props.item.name}</h3>
        <b>Release date: {props.item.date}</b>
        <p>{props.item.details}</p>
        <Button variant="info">Buy Movie</Button>
      </li>
    </Container>
  )
}

export default MovieList

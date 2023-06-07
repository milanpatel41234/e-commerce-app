import React, { useState } from 'react'
import { Button, Container, Form, InputGroup} from 'react-bootstrap'

function AddMovieForm(props) {
    const [MovieTitle,setMovieTitle] = useState('')
    const [Date,setDate] = useState('')
    const [Details,setDetails] = useState('');
    const HandleMovieTitle=(e)=>{
        setMovieTitle(e.target.value)
    }
    const HandleDate=(e)=>{
        setDate(e.target.value)
    }
    const HandleDetails=(e)=>{
        setDetails(e.target.value)
    }
    async function HandleSubmit(e){
        e.preventDefault()
       if(MovieTitle.trim()!=='' && Date.trim()!=='' && Details.trim()!==''){
        const movie = {
            name: MovieTitle,
            date: Date,
            details:Details
        }
       await fetch('https://moviestore-9dbbc-default-rtdb.firebaseio.com/movielist.json',{
            method:'POST',
            body:JSON.stringify(movie)
        })
        props.onRefresh()
       }
    }
  return (
   <Container className='my-2'>
    <Form onSubmit={HandleSubmit}>
    <InputGroup className="mb-3">
      <InputGroup.Text>Movie Title</InputGroup.Text>
      <Form.Control value={MovieTitle} onChange={HandleMovieTitle} aria-label="Title" />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroup.Text>Release Date</InputGroup.Text>
      <Form.Control value={Date} onChange={HandleDate} type='date'aria-label="Title" />
    </InputGroup>
    <InputGroup className="mb-3">
    <InputGroup.Text>Details</InputGroup.Text>
      <Form.Control value={Details} onChange={HandleDetails} as="textarea" aria-label="With textarea" />
    </InputGroup>
        <Button variant='info' type='submit'>Add Movie</Button>
    </Form>
   </Container>
  )
}

export default AddMovieForm

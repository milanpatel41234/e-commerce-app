import React, { useEffect, useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import MovieList from "../Components/MovieStore/MovieList";
import AddMovieForm from "../Components/MovieStore/AddMovieForm";


function MovieStore() {
  const [movies, setMovies] = useState([]);
  const [fetchButton, setfetchButton] = useState(
   <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
  );

  async function fetchfilms() {
    setfetchButton( <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>)
    try {
      const response = await fetch("https://moviestore-9dbbc-default-rtdb.firebaseio.com/movielist.json");
      if(!response.ok){
        throw new Error('Unable to fetch movies! Something went wronge.')
      }else{
      const data = await response.json();
      const fetchedmovies = []
      for(const key in data){
        const obj = {
          name:data[key].name,
          date:data[key].date,
          details:data[key].details,
          key:key
        }
         fetchedmovies.push(obj)
      }
      setMovies(fetchedmovies);
      setfetchButton( <Button variant="success" disabled>
      Your Movies
    </Button>)
      }
    } catch (error) {
        setfetchButton(<Button variant="danger" disabled>
        {error.message}
      </Button>)
    } 
  }
 useEffect(()=>{
    fetchfilms()
 },[])

  const List = movies.map((item) => {
    return <MovieList key={item.key} item={item} />
  });


  return (
    <>
   <Container style={{display:'flex', flexDirection:'column',width:'70%'}}>
   <AddMovieForm onRefresh={fetchfilms}/>
      {fetchButton}
      {List}
   </Container>
    </>
  );
}

export default MovieStore;

import React, { useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";

const Movie = (props) => {
  return (
    <Container>
      <li>
        <h3>{props.item.title}</h3>
        <b>Release date: {props.item.release_date}</b>
        <p>{props.item.opening_crawl}</p>
        <Button variant="info">Buy Movie</Button>
      </li>
    </Container>
  );
};

function MovieStore() {
  const [movies, setMovies] = useState([]);

  async function fatchfilms() {
    setbtn( <Button variant="primary" disabled>
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
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      setMovies(data.results);
      setbtn( <Button variant="success" disabled>
      Movies Fatched
    </Button>)
    } catch (error) {
      console.log(error);
    }
  }
  const [btn, setbtn] = useState(
    <Button variant="info" onClick={fatchfilms}>
      Fatch Movies
    </Button>
  );

  const MovieList = movies.map((item) => {
    return <Movie key={item.episode_id} item={item} />;
  });

  return (
    <>
      {btn}
      {MovieList}
    </>
  );
}

export default MovieStore;

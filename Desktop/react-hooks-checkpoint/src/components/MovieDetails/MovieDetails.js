import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

 

  const findMovie = () => {
    setMovie(movies.find((el) => el.id == id));
  };

  useEffect(() => {
    findMovie();
  }, []);

  return <div>{movie.title}</div>;
};

export default MovieDetails;
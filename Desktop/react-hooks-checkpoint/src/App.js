import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MovieForm from "./components/MovieForm/MovieForm";
import MoviesList from "./components/MovieList/MovieList";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";




function App() {
  const [filterText, setFilterText] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  console.log(filterText);
  const movies = [
    {
      id: Math.random(),
      title: "The Shawshank Redemption",
      year: 1994,
      rate: 5,
      image: "https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg",
    },
    {
      id: Math.random(),
      title: "The Godfather",
      year: 1972,
      rate: 3,
      image:
        "https://e.snmc.io/i/300/s/b87e1473d14c14fddb66b9c1560cc095/5908468",
    },
    {
      id: Math.random(),
      title: "The Godfather: Part II",
      year: 1974,
      rate: 2,
      image:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
      id: Math.random(),
      title: "The Dark Knight",
      year: 2008,
      rate: 4,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    },
    {
      id: Math.random(),
      title: "12 Angry Men",
      year: 1957,
      rate: 1,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/08c56299bd22f83264a20025be29f9e6d47664792cde0d879bbd6f0cd3d673c8._RI_V_TTW_.jpg",
    },
  ];

  return (
    <div>
      <Header
        setFilterText={setFilterText}
        setFilterRate={setFilterRate}
        filterRate={filterRate}
      />

      <MovieForm isEdit={false} />
      <MoviesList
        movies={movies}
        filterText={filterText}
        filterRate={filterRate}
      />
      
      <MovieForm isEdit={false} addMovie={addMovie} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movieslist"
          element={
            <MoviesList
              movies={movies}
              filterText={filterText}
              filterRate={filterRate}
            />
          }
        />

        <Route
          path="/moviedetails/:id"
          element={<MovieDetails movies={movies} />}
        />
      </Routes>
    </div>
  );
  
}

export default App;
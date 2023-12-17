import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import requests from "../../Api";
import "./Header.css";
import Card from "../Card/Card";

function Header() {
  const [cover, setCover] = useState("");
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let ignore = false;
    const fetchCover = async () => {
      await fetch(requests.fetchDramaMovies)
        .then((response) => response.json())
        .then((data) => {
          if (!ignore) {
            // console.log(data.results[0].backdrop_path);
            setCover(
              data.results[Math.floor(Math.random() * 20)].backdrop_path
            );
          }
        })
        .catch((error) => console.log("erreur sur la miniature"));
    };
    fetchCover();
    return () => (ignore = true);
  }, []);

  const fetchMovie = async () => {
    search !== ""
      ? await fetch(requests.fetchMovieName + search)
          .then((response) => response.json())
          .then((data) => {
            setMovies(data.results);
            console.log(data.results);
          })
      : await fetch(requests.fetchActionMovies)
          .then((response) => response.json())
          .then((data) => {
            setMovies(data.results);
          });
  };

  const findMovie = (e) => {
    e.preventDefault();
    setSearch("");
    fetchMovie();
  };

  return (
    <>
      <div
        className="header"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${cover}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <form className="form__search">
          <input
            placeholder="ENTER YOUR MOVIE"
            className="input__search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="button__search" onClick={findMovie}>
            SEARCH
          </button>
        </form>
      </div>

      {/* Si film introuvable */}
      {/* {movies.length === 0 && (
        <div
          style={{
            padding: "100px",
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <h1>FILM INTROUVABLE</h1>
        </div>
      )} */}

      {movies.length > 0 && [
        <div key={0} className="container" id="container">
          {movies.map((movie) => (
            <Card key={movie.id} {...movie} />
          ))}
        </div>,
      ]}
    </>
  );
}

export default Header;

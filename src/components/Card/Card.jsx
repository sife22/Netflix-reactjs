import React from "react";
import "./Card.css";

function Card({ title, poster_path, vote_average, overview }) {
  const src_img = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="card">
      <img className="img_card" src={src_img + poster_path} alt={title} />
      <div className="info_card">
        <h1 className="title_card">{title}</h1>
        <p className="vote_card">{vote_average}</p>
      </div>
      <div className="overview">
        <div className="content">{overview}</div>
      </div>
    </div>
  );
}

export default Card;

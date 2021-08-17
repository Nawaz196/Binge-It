import React from "react";
import "./Cads.css";



const base_url = "https://image.tmdb.org/t/p/original";
var h = window.innerHeight;

function Cards({ title, imgurl,overview,vote_average }) {
    //onsole.log(genre_id);
  return (
    
    <div className="cards">
    {/* {console.log(h)} */}
  
      <img src={`${base_url}${imgurl}`} alt={title} />

      <div className="card-info">
          <h3>{title}</h3>
          <span>{vote_average}</span>
      </div>

      <div className="card-overview" >
            <h2>Overview :</h2>
            <p>{overview}</p>
      </div>
  

    </div>
    
  );
}

export default Cards;

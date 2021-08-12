import React from "react";
import "./Cads.css";

const numb = [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const base_url = "https://image.tmdb.org/t/p/original"

function Cards({title,imgurl}) {
  return (
    <div className="cards">

        <div className="card-container">
            <div className="card-image">
                <img
                    src={`${base_url}${imgurl}`}
                    alt=""
                />
            </div>

            <div className="card-title">
                {title}
            </div>
        </div>
    </div>
  );
}

export default Cards;

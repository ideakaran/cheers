import React from "react";
import CardStyle from "./CardStyle";
import { limitCharacters } from "../../utils/util";

function Card({ beer }) {
  return (
    <CardStyle className="card_style">
      <div className="card_container">
        {/* Card Image */}
        <div className={beer?.image_url ? "card_img" : "loading img_loading"}>
          <img src={beer?.image_url} loading="lazy" alt="beer image" />
        </div>

        {/* Card Content */}
        <div className="card_content">
          <h3 className={beer.name ? "card_title" : "loading"}>{beer?.name}</h3>
          <h5 className={beer.tagline ? "card_tagline" : "loading"}>
            {beer?.tagline}
          </h5>
          <div className={beer.description ? "card_description" : "loading"}>
            {limitCharacters(beer?.description, false)}
          </div>
        </div>
      </div>
    </CardStyle>
  );
}

export default Card;

import React from "react";
import PropTypes from "prop-types";
import BeerCardStyle from "./BeerCardStyle";
import { limitCharacters } from "../../utils/util";

function BeerCard(props) {
  const {
    beer: { name, tagline, description, image_url: imageUrl },
  } = props;

  return (
    <BeerCardStyle className="card_style">
      <div className="card_container">
        {/* Card Image */}
        <div className={imageUrl ? "card_img" : "loading img_loading"}>
          <img src={imageUrl} loading="lazy" alt="Beer" />
        </div>

        {/* Card Content */}
        <div className="card_content">
          <h3 className={name ? "card_title" : "loading"}>{name}</h3>
          <h5 className={tagline ? "card_tagline" : "loading"}>{tagline}</h5>
          <div className={description ? "card_description" : "loading"}>
            <p>{limitCharacters(description, false)}</p>
          </div>
        </div>
      </div>
    </BeerCardStyle>
  );
}

BeerCard.defaultProps = {
  beer: PropTypes.shape({
    name: "",
    image_url: "",
    tagline: "",
    description: "",
  }),
};

BeerCard.propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
    tagline: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default BeerCard;

import React from "react";
import PropTypes from "prop-types";
import BeerCardStyle from "./BeerCardStyle";
import BeerImg from "./BeerImg";
import BeerContent from "./BeerContent";

function BeerCard({
  beer: { name, tagline, description, image_url: imageUrl },
}) {
  return (
    <BeerCardStyle className="hz-card_style">
      <div className="hz-card_container">
        <BeerImg imageUrl={imageUrl} />
        <BeerContent name={name} tagline={tagline} description={description} />
      </div>
    </BeerCardStyle>
  );
}

BeerCard.defaultProps = {
  beer: {},
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

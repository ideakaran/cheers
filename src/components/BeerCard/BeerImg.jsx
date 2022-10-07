import React from "react";
import PropTypes from "prop-types";

function BeerImg({ imageUrl }) {
  return (
    <div className="hz-card_img_container">
      <div className={imageUrl ? "hz-card_img" : "loading img_loading"}>
        <img src={imageUrl} loading="lazy" alt="Beer" />
      </div>
    </div>
  );
}

BeerImg.defaultProps = {
  imageUrl: "",
};

export const propTypes = {
  imageUrl: PropTypes.string,
};

BeerImg.propTypes = propTypes;

export default BeerImg;

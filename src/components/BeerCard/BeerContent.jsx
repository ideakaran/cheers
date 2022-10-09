import React from "react";
import PropTypes from "prop-types";

function BeerContent({ name, tagline, description }) {
  return (
    <div className="hz-card_content_container">
      <div className="hz-card_content">
        <h3 className={name ? "hz-card_title" : "hz-card_loading"}>{name}</h3>
        <p className={tagline ? "hz-card_tagline" : "hz-card_loading"}>
          {tagline}
        </p>
        <div
          className={description ? "hz-card_description" : "hz-card_loading"}
        >
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

BeerContent.defaultProps = {
  name: "",
  tagline: "",
  description: "",
};

export const propTypes = {
  name: PropTypes.string,
  tagline: PropTypes.string,
  description: PropTypes.string,
};

BeerContent.propTypes = propTypes;

export default BeerContent;

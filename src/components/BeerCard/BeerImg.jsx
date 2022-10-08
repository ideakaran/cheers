import React from "react";
import PropTypes from "prop-types";
import ToolTip from "../ToolTip/ToolTip";
import { formatIngredients } from "../../utils/util";

function BeerImg({ imageUrl, ingredients, name }) {
  return (
    <div className="hz-card_img_container">
      <div
        className={
          imageUrl ? "hz-card_img" : "hz-card_loading hz-card_img_loading"
        }
      >
        {imageUrl && (
          <ToolTip tip={formatIngredients(ingredients)} position="top">
            <img src={imageUrl} loading="lazy" alt={`${name} Beer`} />
          </ToolTip>
        )}
      </div>
    </div>
  );
}

BeerImg.defaultProps = {
  imageUrl: "",
  name: "",
  ingredients: {},
};

export const propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  ingredients: PropTypes.instanceOf(Object),
};

BeerImg.propTypes = propTypes;

export default BeerImg;

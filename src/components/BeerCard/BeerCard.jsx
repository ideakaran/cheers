import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

import BeerCardStyle from "./BeerCardStyle";
import BeerImg from "./BeerImg";
import BeerContent from "./BeerContent";
import useIsMobile from "../../hooks/useIsMobile";
import { limitCharacters } from "../../utils/util";

function BeerCard({
  beer: { id, name, tagline, description, image_url: imageUrl, ingredients },
}) {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {}, [isMobile]);

  const navigateToBeer = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      navigate(`/beer/${id}`);
    }
  };

  return (
    <BeerCardStyle className="hz-card_style">
      <div
        className="hz-card_container"
        onClick={navigateToBeer}
        role="link"
        tabIndex={0}
        onKeyPress={(e) => navigateToBeer(e)}
      >
        <BeerImg imageUrl={imageUrl} ingredients={ingredients} name={name} />
        <BeerContent
          name={name}
          tagline={tagline}
          description={limitCharacters(description, isMobile)}
        />
      </div>
    </BeerCardStyle>
  );
}

BeerCard.defaultProps = {
  beer: {},
};

BeerCard.propTypes = {
  beer: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    image_url: PropTypes.string,
    tagline: PropTypes.string,
    description: PropTypes.string,
    ingredients: PropTypes.instanceOf(Object),
  }),
};

export default BeerCard;

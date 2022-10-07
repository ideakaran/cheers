import React, { useEffect } from "react";
import PropTypes from "prop-types";
import BeerCardStyle from "./BeerCardStyle";
import BeerImg from "./BeerImg";
import BeerContent from "./BeerContent";
import useIsMobile from "../../hooks/useIsMobile";
import { limitCharacters } from "../../utils/util";

function BeerCard({
  beer: { name, tagline, description, image_url: imageUrl, ingredients },
}) {
  const isMobile = useIsMobile();
  console.log("IsMobile::", isMobile);
  useEffect(() => {
    console.log("isMobilEFfect: ", isMobile);
  }, [isMobile]);

  return (
    <BeerCardStyle className="hz-card_style">
      <div className="hz-card_container">
        <BeerImg imageUrl={imageUrl} ingredients={ingredients} />
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
    name: PropTypes.string,
    image_url: PropTypes.string,
    tagline: PropTypes.string,
    description: PropTypes.string,
    ingredients: PropTypes.instanceOf(Array),
  }),
};

export default BeerCard;

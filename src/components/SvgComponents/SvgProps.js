import PropTypes from "prop-types";

const SVGDefaultProps = {
  style: {},
};

const SVGProps = {
  style: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    fill: PropTypes.string,
    viewBox: PropTypes.string,
    title: PropTypes.string,
  }),
};

export { SVGProps, SVGDefaultProps };

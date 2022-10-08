import React from "react";
import PropTypes from "prop-types";
import { DownArrow, UpArrow } from "../SvgComponents";

function SvgLoader(props) {
  const { iconName, style } = props;
  function getSvgIcon() {
    switch (iconName) {
      case "uparrow":
        return <UpArrow style={style} />;
      case "downarrow":
        return <DownArrow style={style} />;
      default:
        return "";
    }
  }
  return <>{getSvgIcon()}</>;
}

SvgLoader.defaultProps = {
  iconName: "",
  style: {},
};

SvgLoader.propTypes = {
  iconName: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};

export default SvgLoader;

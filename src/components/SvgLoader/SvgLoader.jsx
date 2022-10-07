import React from "react";
import { DownArrow, UpArrow } from "../SvgComponents";

function SvgLoader(props) {
  const { iconName, style } = props;
  console.log('Style is:: ',)
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

export default SvgLoader;

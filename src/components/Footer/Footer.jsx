import React from "react";
import ScrollTo from "../ScrollTo/ScrollTo";

function Footer() {
  return (
    <ScrollTo
      icon={{
        name: "uparrow",
        style: {
          fill: "#2169aa",
          viewBox: "0 0 512 512",
          width: "1.5rem",
          height: "1.5rem",
          title: "Scroll to top",
        },
      }}
    />
  );
}

export default Footer;

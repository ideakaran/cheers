import React, { useState } from "react";

import ToolTipStyle from "./ToolTipStyle";

function ToolTip({ tip, children, position }) {
  const [active, setActive] = useState(false);
  let timeout;

  const showToolTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 200);
  };

  const hideToolTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <ToolTipStyle onMouseEnter={showToolTip} onMouseLeave={hideToolTip}>
      {children}

      {active && (
        <div className={`hz-card_img_tooltip ${position || "top"}`}>{tip}</div>
      )}
    </ToolTipStyle>
  );
}

export default ToolTip;

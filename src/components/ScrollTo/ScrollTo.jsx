import React, { useEffect, useState } from "react";
import { SHOW_SCROLL_TO_TOP_PAGE_Y_OFFSET } from "../../utils/constants";
import { scrollTo } from "../../utils/util";
import SvgLoader from "../SvgLoader/SvgLoader";
import ScrollToStyle from "./ScrollToStyle";

function ScrollTo({ icon: { name, style } }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScrollButton = () => {
    if (window.pageYOffset > SHOW_SCROLL_TO_TOP_PAGE_Y_OFFSET) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollButton.bind(this));
    return () => {
      window.removeEventListener("scroll", handleScrollButton.bind(this));
    };
  }, []);

  const scrollToTop = () => {
    scrollTo(document.body, { behavior: "smooth" });
  };

  return (
    <div>
      {showScrollTop && (
        <ScrollToStyle
          className="hz-scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <SvgLoader iconName={name} style={style} />
        </ScrollToStyle>
      )}
    </div>
  );
}

export default ScrollTo;

import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <p>
        Page Not Found.
        <Link to="/">Click me to go home </Link>
      </p>
    </div>
  );
}

export default PageNotFound;

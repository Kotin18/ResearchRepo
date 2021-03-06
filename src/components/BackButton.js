import React from "react";
import { useHistory } from "react-router-dom";

const BackButton = () => {
  let history = useHistory();
  return (
    <button onClick={() => history.goBack()}>
      <svg
        height="25px"
        width="25px"
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        x="0px"
        y="0px"
      >
        <title>Rewind</title>
        <g data-name="Layer 2">
          <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM11.28,16.36l4.27,2.8a1,1,0,1,1-1.1,1.67L10.18,18a2.35,2.35,0,0,1,0-4.07l4.27-2.8a1,1,0,0,1,1.1,1.67l-4.27,2.8A.52.52,0,0,0,11,16,.52.52,0,0,0,11.28,16.36Zm7.2,0,4.09,2.8a1,1,0,0,1-1.13,1.65L17.35,18a2.38,2.38,0,0,1,0-4l4.09-2.8a1,1,0,0,1,1.13,1.65l-4.09,2.8a.4.4,0,0,0,0,.75Z"></path>
        </g>
      </svg>
    </button>
  );
};

export default BackButton;

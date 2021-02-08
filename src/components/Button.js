import React from "react";

const Button = ({ color, text, toggleShow}) => {
  return (
    <button
      onClick={toggleShow}
      style={{backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
}

export default Button;

import React from "react";

const ResultWindow = ({ color, hexValue, isDarkText }) => {
  return (
    <div
      class="resultWindow"
      style={{ backgroundColor: color, color: isDarkText ? "#000" : "#FFF" }}
    >
      <p>{color ? color : "Empty Value"}</p>
      <p> {hexValue ? hexValue : ""}</p>
    </div>
  );
};

ResultWindow.defaultProps = {
  color: "Empty Value",
};
export default ResultWindow;

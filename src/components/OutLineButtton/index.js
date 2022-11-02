import React from "react";
import "./style.css";
function OutLineButton({ text, onClick }) {
  return (
    <div className="outline-button-wrapper" onClick={onClick}>
      <p>{text}</p>
    </div>
  );
}

export default OutLineButton;

import React from "react";
const ImageCard = (props) => {
  return (
    <div className="col" style={{ maxWidth: "20%" }}>
      <div className="hover-card at-card">
        <img className="hover-card-img " src={props.src} alt={props.alt} />
        <div className="hover-card-title">{props.name}</div>
      </div>
    </div>
  );
};

export default ImageCard;

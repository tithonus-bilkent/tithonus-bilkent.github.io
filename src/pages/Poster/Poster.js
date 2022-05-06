import React from "react";
import Poster from "../../assets/Poster.png";

export default function Landing() {
  return (
    <div style={{ textAlign: "center", margin: "25px 0" }}>
      <img style={{ maxWidth: "80%" }} src={Poster} alt="Poster" />
    </div>
  );
}

import React from "react";
const IFrameCard = () => {
  return (
    <div className="col-6 col-landing-card img-card">
      <div className="at-card report-card">
        <iframe
          className="iframe-flex"
          title="Project Specifications"
          src="/reports/ProjectSpecifications.pdf"
          frameBorder="0"
          scrolling="no"
        ></iframe>
        {/* <button>Maximize</button> */}
      </div>
    </div>
  );
};

export default IFrameCard;

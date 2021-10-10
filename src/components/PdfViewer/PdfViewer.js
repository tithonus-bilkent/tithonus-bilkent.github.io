import React from "react";
import report from "~/reports/ProjectSpecifications.pdf";

const PdfViewer = () => {
  return (
    <div className="col-6">
      <div className="at-card report-card">
        <iframe className="iframe-flex" src={report} />
      </div>
    </div>
  );
};

export default PdfViewer;

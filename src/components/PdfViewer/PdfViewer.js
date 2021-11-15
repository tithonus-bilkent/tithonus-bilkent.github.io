import React from "react";
import { Reports } from "~/reports";

const PdfViewer = (props) => {
  return (
    <div className="col-6">
      <div className="at-card report-card">
        <iframe className="iframe-flex" src={Reports[props.reportName]} />
      </div>
    </div>
  );
};

export default PdfViewer;

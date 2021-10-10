import React from "react";
import IFrameCard from "../../components/PdfViewer/PdfViewer";

export default function Reports() {
  return (
    <div className="at-content-container" style={{ paddingTop: "0" }}>
      <div className="row iframe-container">
        <IFrameCard></IFrameCard>
      </div>
    </div>
  );
}

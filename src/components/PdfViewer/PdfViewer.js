import React from "react";
import { Reports } from "~/reports";

const PdfViewer = (props) => {
    return (
        <div style={{ width: "100%" }}>
            <div className="at-card report-card">
                <iframe
                    className="iframe-flex"
                    src={Reports[props.reportName]}
                />
            </div>
        </div>
    );
};

export default PdfViewer;

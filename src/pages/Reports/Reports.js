import React, { useEffect, useState } from "react";
import IFrameCard from "../../components/PdfViewer/PdfViewer";

export default function Reports(props) {
  const { history } = props;
  const [active, setActive] = useState("");

  const setActiveLink = () =>
    setActive(history.location.pathname.split("/").pop());
  useEffect(() => {
    setActiveLink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location]);

  return (
    <div className="at-content-container" style={{ paddingTop: "0" }}>
      <div className="row iframe-container">
        <IFrameCard></IFrameCard>
      </div>
    </div>
  );
}

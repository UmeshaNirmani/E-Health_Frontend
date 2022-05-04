import React from "react";

const PGC = (props) => {
  const mainContent = React.useRef(null);

  return (
    <>
      <div className="main-content" ref={mainContent}></div>
    </>
  );
};

export default PGC;

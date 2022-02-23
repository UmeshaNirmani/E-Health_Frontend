import React from "react";

const MyProgress = (props) => {
  const mainContent = React.useRef(null);

  return (
    <>
      <div className="main-content" ref={mainContent}></div>
    </>
  );
};

export default MyProgress;

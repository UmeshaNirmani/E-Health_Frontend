import React from "react";

const MyDoctor = (props) => {
  const mainContent = React.useRef(null);

  return (
    <>
      {/* Page Content */}
      <div className="main-content" ref={mainContent}></div>
    </>
  );
};

export default MyDoctor;

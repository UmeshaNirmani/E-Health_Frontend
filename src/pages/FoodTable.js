import React from "react";

const FoodTable = (props) => {
  const mainContent = React.useRef(null);

  return (
    <>
      {/* Page Content */}
      <div className="main-content" ref={mainContent}></div>
    </>
  );
};

export default FoodTable;

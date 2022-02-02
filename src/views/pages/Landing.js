import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

const Landing = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);
  return (
    <>
      {/* Page Content */}
      <div className="main-content" ref={mainContent}>
        <div
          style={{
            position: "relative",
            width: "100%",
            background: "linear-gradient(to right, #ebb105, #f7df9b)",
            minHeight: 500,
          }}
        >
          <Container>
            <Row>
              <Col md="7">
                <h2 className="pt-9" style={{ color: "#000", fontSize: 48 }}>
                  Welcome to E-Health!
                </h2>
              </Col>
              <Col md="5">
                <img
                  alt="Obis"
                  src={
                    require("../../assets/img/theme/profile-cover.png").default
                  }
                  style={{ width: "100%", height: "auto" }}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Landing;

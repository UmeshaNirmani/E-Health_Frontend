import { Link } from "react-router-dom";
// reactstrap components
import { useState } from "react";
import {
  UncontrolledCollapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const LandingNavbar = () => {
  const [setCollapseOpen] = useState();
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };

  return (
    <>
      <Navbar
        className="navbar-top navbar-horizontal navbar-dark bg-white"
        expand="md"
      >
        <Container className="px-4 ">
          <img
            alt="..."
            src={require("../../assets/img/brand/img_logo.png").default}
          />

          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/brand/img_logo.png").default
                      }
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleCollapse}
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link-icon" to="/public" tag={Link}>
                  <i className="ni ni-circle-08 text-darker" />
                  <span className="nav-link-inner--text text-darker font-weight-bold">
                    Home
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon text-darker"
                  to="/public/login"
                  tag={Link}
                >
                  <i className="ni ni-key-25" />
                  <span className="nav-link-inner--text text-darker font-weight-bold">
                    Login
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default LandingNavbar;

// have to make changes in mobile view

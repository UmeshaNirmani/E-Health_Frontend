import { Link } from "react-router-dom";
// reactstrap components
import { Navbar, NavItem, NavLink, Nav, Container } from "reactstrap";

const LandingNavbar = () => {
  return (
    <>
      <Navbar
        className="navbar-top shadow bg-white"
        expand="md"
        style={{ padding: 0, paddingTop: 5, paddingBottom: 5 }}
      >
        <Container style={{ backgroundColor: "#fff" }}>
          <div className="collapse-brand">
            <img
              alt="APP"
              src={require("../../assets/img/brand/img_logo.png").default}
            />
          </div>

          <Nav className="ml-auto" navbar>
            <div className="row">
              <NavItem style={{ marginRight: 10 }}>
                <NavLink className="nav-link-icon" to="/" tag={Link} style={{}}>
                  <i className="ni ni-book-bookmark" />
                  <span className="nav-link-inner--text">
                    <b>Home</b>
                  </span>
                </NavLink>
              </NavItem>
              <NavItem style={{ marginRight: 10 }}>
                <NavLink
                  className="nav-link-icon"
                  to="/public/login"
                  tag={Link}
                  style={{}}
                  onClick={(e) => {
                    // dispatch({ type: actionType.LOGOUT });
                    localStorage.clear();
                  }}
                >
                  <i className="ni ni-circle-08" />
                  <span className="nav-link-inner--text">
                    <b>Login</b>
                  </span>
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default LandingNavbar;

// have to make changes in mobile view

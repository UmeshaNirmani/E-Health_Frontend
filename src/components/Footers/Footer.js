/*eslint-disable*/

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <>
      <footer className="py-5" style={{ backgroundColor: "#EBB105" }}>
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted text-white">
                © {new Date().getFullYear()}{" "}
                <a className="font-weight-bold ml-1 text-darker">E-Health</a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;

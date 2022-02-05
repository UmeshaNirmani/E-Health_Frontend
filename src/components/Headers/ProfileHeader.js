// reactstrap components
import { Container, Row, Col } from "reactstrap";

const ProfileHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-3 pt-lg-4 d-flex align-items-center"
        style={{
          minHeight: "300px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/profile-cover.png").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col>
              <h1 className="display-2 text-darker">Hello Roopasinghe</h1>
              <p className="text-darker font-weight-bold mt-0 mb-5">
                Welcome to your profile. You can edit your profile here.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProfileHeader;

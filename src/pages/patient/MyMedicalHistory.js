import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, CardHeader, Row, Button, Form } from "reactstrap";
import { TextField, Grid, Tooltip } from "@material-ui/core";
import { Formik } from "formik";
import {
  medicalHistoryCreate,
  medicalHistoryFetch,
} from "../../actions/medicalhistory";

const MyMedicalHistory = (props) => {
  const mainContent = React.useRef(null);
  const dispatch = useDispatch();

  const medicalHistoryAllRecords = useSelector(
    (state) => state.medicalhistory.medicalHistoryAllRecords
  );
  //console.log(medicalHistoryAllRecords);
  useEffect(() => {
    dispatch(medicalHistoryFetch());
  });

  return (
    <>
      {/* Page Content */}
      <div className="main-content" ref={mainContent}>
        <Container
          className="mt--7 mb-3 "
          fluid
          style={{ overflowX: "hidden" }}
        >
          <Row className="mt-5">
            <div className="col">
              <Card className="shadow mb-7">
                <CardHeader className="border-0 ">
                  <div className="row">
                    <div className="mb-xl-0 col-11">
                      <h4 className="mb-0">Past Medical History</h4>
                    </div>
                  </div>
                </CardHeader>
                <Row>
                  {medicalHistoryAllRecords.map((records, i) => (
                    <div
                      className="ml-5 mr-5 mb-3"
                      style={{ textAlign: "justify" }}
                      key={i}
                    >
                      {records.Disease}
                      <Tooltip title="Edit" arrow>
                        <i
                          className="far fa-edit ml-3"
                          style={{ cursor: "pointer" }}
                        />
                      </Tooltip>
                    </div>
                  ))}
                </Row>

                <CardHeader className="border-0 ">
                  <div className="row">
                    <div className="mb-xl-0 col-11">
                      <h4 className="mb-0">Drug History</h4>
                    </div>
                  </div>
                </CardHeader>
                <Row>
                  {medicalHistoryAllRecords.map((records, i) => (
                    <div
                      className="ml-5 mr-5 mb-3"
                      style={{ textAlign: "justify" }}
                      key={i}
                    >
                      {records.DrugHistory}
                      <Tooltip title="Edit" arrow>
                        <i
                          className="far fa-edit ml-3"
                          style={{ cursor: "pointer" }}
                        />
                      </Tooltip>
                    </div>
                  ))}
                </Row>

                <CardHeader className="border-0 ">
                  <div className="row">
                    <div className="mb-xl-0 col-11">
                      <h4 className="mb-0">Investigations</h4>
                    </div>
                  </div>
                </CardHeader>

                <Row>
                  {medicalHistoryAllRecords.map((records, i) => (
                    <div
                      className="ml-5 mr-5 mb-3"
                      style={{ textAlign: "justify" }}
                      key={i}
                    >
                      {records.Investigations}
                      <Tooltip title="Edit" arrow>
                        <i
                          className="far fa-edit ml-3"
                          style={{ cursor: "pointer" }}
                        />
                      </Tooltip>
                    </div>
                  ))}
                </Row>

                <Formik
                  initialValues={{
                    Disease: "",
                    DrugHistory: "",
                    Investigations: "",
                  }}
                  //validationSchema={validateSchema}
                  onSubmit={(values, actions) => {
                    console.log(JSON.stringify(values, null, 2));
                    dispatch(medicalHistoryCreate(values));
                    actions.setSubmitting(false);
                    actions.resetForm();
                  }}
                >
                  {(props) => (
                    <Form
                      role="form"
                      onSubmit={props.handleSubmit}
                      onReset={props.handleReset}
                      className="mb-5"
                    >
                      <Container className="mb-5">
                        <Grid container spacing={2} justifyContent="center">
                          <Grid item xs={3}>
                            <TextField
                              type="text"
                              multiline
                              id="Disease"
                              name="Disease"
                              label="Disease"
                              variant="outlined"
                              size="small"
                              value={props.values.Disease}
                              onChange={props.handleChange}
                              error={
                                props.touched.Disease &&
                                Boolean(props.errors.Disease)
                              }
                              helperText={
                                props.touched.Disease && props.errors.Disease
                              }
                            />
                          </Grid>

                          <Grid item xs={3}>
                            <TextField
                              type="text"
                              multiline
                              id="DrugHistory"
                              name="DrugHistory"
                              label="DrugHistory"
                              variant="outlined"
                              size="small"
                              value={props.values.DrugHistory}
                              onChange={props.handleChange}
                              error={
                                props.touched.DrugHistory &&
                                Boolean(props.errors.DrugHistory)
                              }
                              helperText={
                                props.touched.DrugHistory &&
                                props.errors.DrugHistory
                              }
                            />
                          </Grid>

                          <Grid item xs={3}>
                            <TextField
                              type="text"
                              multiline
                              id="Investigations"
                              name="Investigations"
                              label="Investigations"
                              variant="outlined"
                              size="small"
                              value={props.values.Investigations}
                              onChange={props.handleChange}
                              error={
                                props.touched.Investigations &&
                                Boolean(props.errors.Investigations)
                              }
                              helperText={
                                props.touched.Investigations &&
                                props.errors.Investigations
                              }
                            />
                          </Grid>
                        </Grid>
                      </Container>
                      <Grid align="center">
                        <Button
                          style={{
                            backgroundColor: "#EBB105",
                            border: "none",
                            width: "25%",
                          }}
                        >
                          <div className="text-white font-weight-bold">
                            Add Records
                          </div>
                        </Button>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MyMedicalHistory;

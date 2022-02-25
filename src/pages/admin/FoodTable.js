import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import Lodash from "lodash";
import { Tooltip } from "@material-ui/core";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Table,
  Form,
  Button,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  FormFeedback,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  fetchRecordsAll,
  deleteRecords,
  createRecords,
  updateRecords,
} from "actions/foodtable";

const validateSchema = Yup.object({
  Food: Yup.string().required("* Required"),
  UnitCalorieAmount: Yup.string().required("* Required"),
});

const FoodTableRow = ({ TableData, editClick, deleteClick, createClick }) => (
  <tr>
    <td>{TableData.Food}</td>
    <td>{TableData.UnitCalorieAmount}</td>
    <td>{TableData.Unit}</td>
    <td className="text-right">
      <div className="row">
        <Tooltip title="Edit" arrow>
          <div
            className="navbar-toggler"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              editClick(e, TableData);
            }}
          >
            <i className="far fa-edit" />
          </div>
        </Tooltip>
        <Tooltip title="Delete record" arrow>
          <div
            className="navbar-toggler"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              deleteClick(e, TableData);
            }}
          >
            <i className="far fa-times-circle" />
          </div>
        </Tooltip>
      </div>
    </td>
  </tr>
);

const FoodTable = (props) => {
  const mainContent = React.useRef(null);
  const formRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  // to edit records
  const [isEdit, setIsEdit] = useState(false);

  const foodTableRecordsAll = useSelector(
    (TableData) => TableData.foodtable.foodTableRecordsAll
  );

  // useEffect(() => {
  //   dispatch(fetchRecordsAll());
  // }, []);

  const fetchRecords = () => {
    dispatch(fetchRecordsAll());
  };

  const handleEditClick = (e, TableData) => {
    console.log("TableData", TableData);
    e.preventDefault();

    if (formRef.current && TableData && !Lodash.isEmpty(TableData)) {
      formRef.current?.resetForm();
      formRef.current.setFieldValue("recordId", TableData._id, false);
      formRef.current.setFieldValue("Food", TableData.Food, false);
      formRef.current.setFieldValue(
        "UnitCalorieAmount",
        TableData.UnitCalorieAmount,
        false
      );
      formRef.current.setFieldValue("Unit", TableData.Unit, false);
    }
  };

  const handleDeleteClick = (e, TableData) => {
    console.log("TableData", TableData);
    e.preventDefault();
    let values = {
      TableDataId: TableData._id,
    };
    dispatch(deleteRecords(values));
  };

  // onSubmit: (values, onSubmitProps) => {
  //   console.log(JSON.stringify(values, null, 2));
  //   dispatch(updateRecords(values, history));
  //   dispatch(createRecords(values, history));
  //   onSubmitProps.setSubmitting(false);
  //   onSubmitProps.resetForm();
  // },

  return (
    <>
      <div className="main-content" ref={mainContent}>
        {fetchRecords()}
        <Col lg="6">
          <Container className="mt--7 mb-3 " fluid>
            <Row className="mt-5">
              <div className="col">
                <Card className="shadow">
                  <CardHeader className="border-0 ">
                    <div className="row">
                      <div className="mb-xl-0 col-11">
                        <h4 className="mb-0">Enter the Records</h4>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Formik
                      initialValues={{
                        recordId: null,
                        Food: "",
                        UnitCalorieAmount: "",
                        Unit: "",
                      }}
                      validationSchema={validateSchema}
                      onSubmit={(values, actions) => {
                        console.log(JSON.stringify(values, null, 2));

                        let params = {
                          Food: values.Food,
                          UnitCalorieAmount: values.UnitCalorieAmount,
                          Unit: values.Unit,
                        };

                        if (values.recordId && values.recordId.length > 10) {
                          params["recordId"] = values.recordId;
                          console.log("updated record: ", params);
                          dispatch(updateRecords(params, history));
                        } else {
                          console.log("created record: ", params);
                          dispatch(createRecords(params, history));
                        }
                      }}
                      innerRef={formRef}
                    >
                      {(props) => (
                        <Form role="form" onSubmit={props.handleSubmit}>
                          <FormGroup className="mb-3 ">
                            <InputGroup className="input-group-alternative ">
                              <Input
                                invalid
                                placeholder="Food"
                                type="text"
                                id="Food"
                                name="Food"
                                onChange={props.handleChange("Food")}
                                onBlur={props.handleBlur("Food")}
                                value={props.values.Food}
                                style={{ backgroundColor: "#f7fafc" }}
                              />
                            </InputGroup>
                            {props.touched.Food && props.errors.Food ? (
                              <FormFeedback style={{ display: "inline" }}>
                                {props.errors.Food}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>

                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <Input
                                invalid
                                placeholder="Calorie Amount"
                                type="text"
                                id="UnitCalorieAmount"
                                name="UnitCalorieAmount"
                                onChange={props.handleChange(
                                  "UnitCalorieAmount"
                                )}
                                onBlur={props.handleBlur("UnitCalorieAmount")}
                                value={props.values.UnitCalorieAmount}
                                style={{ backgroundColor: "#f7fafc" }}
                              />
                            </InputGroup>
                            {props.touched.UnitCalorieAmount &&
                            props.errors.UnitCalorieAmount ? (
                              <FormFeedback style={{ display: "inline" }}>
                                {props.errors.UnitCalorieAmount}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>

                          <FormGroup className="mb-3 ">
                            <InputGroup className="input-group-alternative ">
                              <Input
                                invalid
                                placeholder="Unit (Serving Size)"
                                type="text"
                                id="Unit"
                                name="Unit"
                                onChange={props.handleChange("Unit")}
                                onBlur={props.handleBlur("Unit")}
                                value={props.values.Unit}
                                style={{ backgroundColor: "#f7fafc" }}
                              />
                            </InputGroup>
                            {props.touched.Unit && props.errors.Unit ? (
                              <FormFeedback style={{ display: "inline" }}>
                                {props.errors.Unit}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>

                          <Row>
                            <Button
                              color="info"
                              type="submit"
                              style={{
                                width: "30%",
                                display: "block",
                                margin: "auto",
                              }}
                            >
                              <div className="font-weight-bold">Add</div>
                            </Button>
                          </Row>
                        </Form>
                      )}
                    </Formik>
                  </CardBody>
                </Card>
              </div>
            </Row>
          </Container>
        </Col>

        <Container className="mb-6" fluid>
          <Row className="mt-5">
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0 ">
                  <div className="row">
                    <div className="mb-xl-0 col-11 justify-content-center">
                      <h2 className="mb-0">Food Table</h2>
                    </div>
                  </div>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Food Name</th>
                      <th scope="col">Calorie Amount</th>
                      <th scope="col">Unit (Serving Size)</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr></tr>
                    {foodTableRecordsAll.map((TableData, i) => {
                      return (
                        <FoodTableRow
                          key={i}
                          TableData={TableData}
                          editClick={handleEditClick}
                          deleteClick={handleDeleteClick}
                        />
                      );
                    })}
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FoodTable;

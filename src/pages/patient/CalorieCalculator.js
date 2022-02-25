import { Tooltip } from "@material-ui/core";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Lodash from "lodash";
import {
  Container,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroupAddon,
  InputGroup,
  Table,
  FormFeedback,
} from "reactstrap";
import { TextField, Grid } from "@material-ui/core";
import {
  fetchRecordsAll,
  deleteRecords,
  createRecords,
  updateRecords,
} from "actions/foodtable";
import { useFormik } from "formik";
import * as Yup from "yup";

const FoodTableRow = ({ TableData, editClick, deleteClick, createClick }) => (
  <tr>
    <td>{TableData.Food}</td>
    <td>{TableData.UnitCalorieAmount}</td>
    <td>{TableData.UnitCalorieAmount}</td>
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

const CalorieCalculator = (props) => {
  const mainContent = React.useRef(null);
  const formRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const foodTableRecordsAll = useSelector(
    (TableData) => TableData.foodtable.foodTableRecordsAll
  );

  useEffect(() => {
    dispatch(fetchRecordsAll());
  }, []);

  const handleEditClick = (e, TableData, type) => {
    console.log("TableData", TableData);
    e.preventDefault();
  };

  const handleDeleteClick = (e, TableData) => {
    console.log("TableData", TableData);
    e.preventDefault();
    let values = {
      TableDataId: TableData._id,
    };
    dispatch(deleteRecords(values));
  };

  // to edit records
  const [record, setRecord] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const tempRecord = props.location.state?.record;
    if (tempRecord && !Lodash.isEmpty(tempRecord)) {
      setRecord(tempRecord);
      setIsEdit(true);
    }
  }, []);

  useEffect(() => {
    if (formRef.current && record && !Lodash.isEmpty(record)) {
      formRef.current?.resetForm();
      formRef.current.setFieldValue("recordId", record._id, false);
      formRef.current.setFieldValue("Date", record.date, false);
      formRef.current.setFieldValue("SelectMeal", record.selectmeal, false);
      formRef.current.setFieldValue("SearchFood", record.searchfood, false);
      formRef.current.setFieldValue("Servings", record.servings, false);
      formRef.current.setFieldValue("Unit", record.unit, false);
    }
  }, [record]);

  const formik = useFormik({
    initialValues: {
      recordId: null,
      Date: "",
      SelectMeal: "",
      SearchFood: "",
      Servings: "",
      Unit: "",
    },

    validationSchema: Yup.object({
      Date: Yup.string().required("* Required"),
      SelectMeal: Yup.string().required("* Required"),
      SearchFood: Yup.string().required("* Required"),
      Servings: Yup.string().required("* Required"),
      Unit: Yup.string().required("* Required"),
    }),

    // onSubmit: (values, onSubmitProps) => {
    //   console.log(JSON.stringify(values, null, 2));
    //   dispatch(updateRecords(values, history));
    //   dispatch(createRecords(values, history));
    //   onSubmitProps.setSubmitting(false);
    //   onSubmitProps.resetForm();
    // },
    onSubmit: (values, onSubmitProps) => {
      console.log(JSON.stringify(values, null, 2));
      let params = {
        date: values.Date,
        selectmeal: values.SelectMeal,
        searchfood: values.SearchFood,
        servings: values.Servings,
        unit: values.Unit,
      };
      if (values.recordId && values.recordId.length > 10) {
        params["recordId"] = values.recordId;
        console.log("update record: ", params);
        dispatch(updateRecords(params, history));
      } else {
        console.log("create record: ", params);
        dispatch(createRecords(params, history));
      }
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    },
  });

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <Container
          className="mt--7 mb-3 "
          fluid
          style={{ overflowX: "hidden" }}
        >
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
                  <Form role="form" onSubmit={formik.handleSubmit}>
                    <FormGroup row>
                      <Label for="exampleSelect" sm={3}>
                        Date
                      </Label>
                      <Col sm={4}>
                        <Input
                          id="Date"
                          name="Date"
                          placeholder="date placeholder"
                          type="date"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Date}
                        />
                        {formik.touched.Date && formik.errors.Date ? (
                          <FormFeedback style={{ display: "inline" }}>
                            {formik.errors.Date}
                          </FormFeedback>
                        ) : null}
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="SelectMeal" sm={3}>
                        Meal Type
                      </Label>
                      <Col sm={4}>
                        <Input
                          type="select"
                          name="SelectMeal"
                          id="SelectMeal"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.SelectMeal}
                        >
                          <option>Breakfast</option>
                          <option>Lunch</option>
                          <option>Dinner</option>
                          <option>Tea time</option>
                        </Input>
                        {formik.touched.SelectMeal &&
                        formik.errors.SelectMeal ? (
                          <FormFeedback style={{ display: "inline" }}>
                            {formik.errors.SelectMeal}
                          </FormFeedback>
                        ) : null}
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <InputGroup className="input-group-rounded input-group-merge">
                        <Label for="SearchFood" sm={3}>
                          Add the Food
                        </Label>
                        <Col sm={4}>
                          <InputGroupAddon addonType="prepend">
                            <Input
                              name="SearchFood"
                              id="SearchFood"
                              aria-label="Search"
                              className="form-control-rounded form-control-prepended"
                              placeholder="Search"
                              type="search"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.SearchFood}
                            />
                          </InputGroupAddon>
                          {formik.touched.SearchFood &&
                          formik.errors.SearchFood ? (
                            <FormFeedback style={{ display: "inline" }}>
                              {formik.errors.SearchFood}
                            </FormFeedback>
                          ) : null}
                        </Col>
                      </InputGroup>
                    </FormGroup>

                    <FormGroup row>
                      <Label for="Servings" sm={3}>
                        Amount (Servings)
                      </Label>
                      <Col sm={3}>
                        <Input
                          id="Servings"
                          name="Servings"
                          type="number"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Servings}
                        />
                        {formik.touched.Servings && formik.errors.Servings ? (
                          <FormFeedback style={{ display: "inline" }}>
                            {formik.errors.Servings}
                          </FormFeedback>
                        ) : null}
                      </Col>
                      <Col sm={3}>
                        <Input
                          type="select"
                          name="Unit"
                          id="Unit"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Unit}
                        >
                          <option>Cups</option>
                          <option>Tea Spoons</option>
                          <option>Table Spoons</option>
                          <option>grams</option>
                          <option>Portions</option>
                        </Input>
                        {formik.touched.Unit && formik.errors.Unit ? (
                          <FormFeedback style={{ display: "inline" }}>
                            {formik.errors.Unit}
                          </FormFeedback>
                        ) : null}
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <InputGroup className="input-group-rounded input-group-merge">
                        <Label for="SearchFood" sm={3}>
                          Total Calorie:
                        </Label>
                      </InputGroup>
                    </FormGroup>

                    <FormGroup row>
                      <Col sm={{ size: 10, offset: 3 }}>
                        <Button
                          color="info"
                          type="submit"
                          style={{ width: "20%" }}
                        >
                          <div className="font-weight-bold">Add</div>
                        </Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>

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
                      <th scope="col">Amount (Servings)</th>
                      <th scope="col">Total Calorie</th>
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
                <CardTitle className="mb-5">
                  <hr></hr>

                  <Button
                    color="info"
                    type="submit"
                    style={{ width: "20%", display: "block", margin: "auto" }}
                  >
                    <div className="font-weight-bold">Save All</div>
                  </Button>
                </CardTitle>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CalorieCalculator;

// responsive hadanna

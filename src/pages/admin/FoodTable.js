import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  fetchRecordsAll,
  deleteRecords,
  createRecords,
  updateRecords,
} from "actions/foodtable";

const FoodTableRow = ({ TableData, editClick, deleteClick, createClick }) => (
  <tr>
    <td>{TableData.Food}</td>
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

const FoodTable = (props) => {
  const mainContent = React.useRef(null);
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
    history.push({
      pathname: "/user/foodtable",
      state: { TableData: TableData },
    });
  };

  const handleDeleteClick = (e, TableData) => {
    console.log("TableData", TableData);
    e.preventDefault();
    let values = {
      TableDataId: TableData._id,
    };
    dispatch(deleteRecords(values));
  };

  const formik = useFormik({
    initialValues: {
      Food: "",
      UnitCalorieAmount: "",
    },

    validationSchema: Yup.object({
      Food: Yup.string().required("* Required"),
      UnitCalorieAmount: Yup.string().required("* Required"),
    }),

    onSubmit: (values, onSubmitProps) => {
      console.log(JSON.stringify(values, null, 2));
      dispatch(updateRecords(values, history));
      dispatch(createRecords(values, history));
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    },
  });

  return (
    <>
      {/* Page Content */}
      <div className="main-content" ref={mainContent}>
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
                    <Form role="form" onSubmit={formik.handleSubmit}>
                      <FormGroup className="mb-3 ">
                        <InputGroup className="input-group-alternative ">
                          <Input
                            invalid
                            placeholder="Food"
                            type="text"
                            id="Food"
                            name="Food"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Food}
                            style={{ backgroundColor: "#f7fafc" }}
                          />
                        </InputGroup>
                        {formik.touched.Food && formik.errors.Food ? (
                          <FormFeedback style={{ display: "inline" }}>
                            {formik.errors.Food}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>

                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <Input
                            invalid
                            placeholder="Unit Calorie Amount"
                            type="text"
                            id="UnitCalorieAmount"
                            name="UnitCalorieAmount"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.UnitCalorieAmount}
                            style={{ backgroundColor: "#f7fafc" }}
                          />
                        </InputGroup>
                        {formik.touched.UnitCalorieAmount &&
                        formik.errors.UnitCalorieAmount ? (
                          <FormFeedback style={{ display: "inline" }}>
                            {formik.errors.UnitCalorieAmount}
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
                      <th scope="col">Unit Calorie Amount</th>
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

import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Lodash from "lodash";
import { TextField, Tooltip } from "@material-ui/core";
import Pagination from "react-responsive-pagination";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Table,
  Form,
  Button,
  Col,
  CardFooter,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
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
  Unit: Yup.string().required("* Required"),
});

const FoodTableRow = ({ TableData, editClick, deleteClick, createClick }) => (
  <tr>
    <td className="text-darker">{TableData.Food}</td>
    <td className="text-darker">{TableData.UnitCalorieAmount}</td>
    <td className="text-darker">{TableData.Unit}</td>
    <td>
      <div className="row">
        <Tooltip title="Edit" arrow>
          <div
            className="navbar-toggler"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              editClick(e, TableData);
            }}
          >
            <i className="far fa-edit text-darker" />
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
            <i className="far fa-times-circle text-darker" />
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

  const foodTableRecordsAll = useSelector(
    (state) => state.foodtable.foodTableRecordsAll
  );

  // pagination
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  //const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [recordsPageCount, setrecordsPageCount] = useState();

  useEffect(() => {
    dispatch(fetchRecordsAll());
  });

  useEffect(() => {
    let currentPageCount = Math.ceil(foodTableRecordsAll.length / pageSize);
    setrecordsPageCount(currentPageCount);
  });

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

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <Col lg="6">
          <Container className="mt--7 mb-3 " fluid>
            <Row className="mt-5">
              <div className="col">
                <Card className="shadow">
                  <CardHeader className="border-0 ">
                    <div className="row">
                      <div className="mb-xl-0 col-11">
                        <h4 className="mb-0 text-darker">Enter the Records</h4>
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
                          <TextField
                            type="text"
                            id="Food"
                            fullWidth
                            name="Food"
                            label="Food"
                            variant="outlined"
                            size="small"
                            value={props.values.Food}
                            onChange={props.handleChange("Food")}
                            onBlur={props.handleBlur("Food")}
                            error={
                              props.touched.Food && Boolean(props.errors.Food)
                            }
                            helperText={props.touched.Food && props.errors.Food}
                            className="mb-4"
                          />
                          <TextField
                            type="number"
                            id="UnitCalorieAmount"
                            fullWidth
                            name="UnitCalorieAmount"
                            label="Calorie Amount per Unit"
                            variant="outlined"
                            size="small"
                            value={props.values.UnitCalorieAmount}
                            onChange={props.handleChange("UnitCalorieAmount")}
                            onBlur={props.handleBlur("UnitCalorieAmount")}
                            error={
                              props.touched.UnitCalorieAmount &&
                              Boolean(props.errors.UnitCalorieAmount)
                            }
                            helperText={
                              props.touched.UnitCalorieAmount &&
                              props.errors.UnitCalorieAmount
                            }
                            className="mb-4"
                          />
                          <TextField
                            type="text"
                            id="Unit"
                            fullWidth
                            name="Unit"
                            label="Unit  (Serving Size)"
                            variant="outlined"
                            size="small"
                            value={props.values.Unit}
                            onChange={props.handleChange("Unit")}
                            onBlur={props.handleBlur("Unit")}
                            error={
                              props.touched.Unit && Boolean(props.errors.Unit)
                            }
                            helperText={props.touched.Unit && props.errors.Unit}
                            className="mb-4"
                          />

                          <Row>
                            <Button
                              className="mt-3 mb-3"
                              type="submit"
                              style={{
                                backgroundColor: "#EBB105",
                                border: "none",
                                width: "30%",
                                display: "block",
                                margin: "auto",
                              }}
                            >
                              <div className="font-weight-bold text-white">
                                Add
                              </div>
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
                  <Row>
                    <Col md="5">
                      <h3 className="mb-0">Pre-Registered Users</h3>
                    </Col>
                    <Col md="6">
                      <FormGroup style={{ marginBottom: 0 }}>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-zoom-split-in" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="form-control-alternative"
                            placeholder="By Food Name"
                            type="text"
                            // onChange={(e) => {
                            //   console.log(e.target.value);
                            //   setTxtFilter(e.target.value);
                            // }}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col" className="text-darker">
                        Food Name
                      </th>
                      <th scope="col" className="text-darker">
                        Calorie Amount
                      </th>
                      <th scope="col" className="text-darker">
                        Unit (Serving Size)
                      </th>
                      <th scope="col" className="text-darker">
                        Actions
                      </th>
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
                {/* pagination */}
                <CardFooter>
                  <Row>
                    <Col lg="12">
                      <Pagination
                        current={currentPage}
                        total={recordsPageCount}
                        onPageChange={setCurrentPage}
                      />
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FoodTable;

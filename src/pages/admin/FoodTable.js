import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useHistory } from "react-router-dom";
import { Tooltip } from "@material-ui/core";
import { Card, CardHeader, Container, Row, Table } from "reactstrap";

import { fetchRecordsAll } from "actions/foodtable";

const FoodTableRow = ({ TableData }) => (
  <tr>
    <td>{TableData.Food}</td>
    <td>{TableData.UnitCalorieAmount}</td>
    <td className="text-right">
      <div className="row">
        <Tooltip title="Edit" arrow>
          <div className="navbar-toggler" style={{ cursor: "pointer" }}>
            <i className="far fa-edit" />
          </div>
        </Tooltip>
        <Tooltip title="Delete record" arrow>
          <div className="navbar-toggler" style={{ cursor: "pointer" }}>
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
  //const history = useHistory();

  const foodTableRecordsAll = useSelector(
    (TableData) => TableData.foodtable.foodTableRecordsAll
  );

  useEffect(() => {
    dispatch(fetchRecordsAll());
  }, []);

  return (
    <>
      {/* Page Content */}
      <div className="main-content" ref={mainContent}>
        <Container className="mt--7 mb-6" fluid>
          <Row className="mt-5">
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <div className="row">
                    <div className="mb-xl-0 col-11">
                      <h2 className="mb-0">Food Table</h2>
                    </div>
                    <div className="mb-xl-0">
                      <Tooltip title="Add new record" arrow>
                        <div
                          className="navbar-toggler"
                          style={{ cursor: "pointer" }}
                        >
                          <i
                            className="fas fa-plus-circle"
                            style={{
                              fontSize: 30,
                              color: "#fcb71e",
                            }}
                          />
                        </div>
                      </Tooltip>
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
                      return <FoodTableRow key={i} TableData={TableData} />;
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

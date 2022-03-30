import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFoodDiary } from "../../actions/fooddiary";
import { Button, Row } from "reactstrap";
import { TextField, Grid } from "@material-ui/core";

const SearchBar = (props) => {
  const mainContent = React.useRef(null);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setDateSelected(e.target.value);
  };

  const [dateSelected, setDateSelected] = useState("");

  const handleSubmit = () => {
    dispatch(fetchFoodDiary({ Date: dateSelected }));
  };

  return (
    <>
      <div className="main-content m-4 p-3" ref={mainContent}>
        <Row>
          <Grid item xs={5} align="center">
            <TextField
              type="date"
              id="Date"
              name="Date"
              label="Date"
              variant="outlined"
              format={"yyyy-MM-dd"}
              onChange={(e) => handleChange(e)}
              size="small"
              InputLabelProps={{ shrink: true }}
              style={{ width: "50%" }}
            />
          </Grid>
          <Button
            color="info"
            type="submit"
            style={{ width: "20%", backgroundColor: "#EBB105" }}
            onClick={() => handleSubmit()}
          >
            <div className="font-weight-bold">Search</div>
          </Button>
        </Row>
      </div>
    </>
  );
};

export default SearchBar;

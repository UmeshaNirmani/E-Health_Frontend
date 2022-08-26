import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapForm: {
      display: "flex",
      width: "90%",
      margin: `${theme.spacing(0)} auto`,
    },
    wrapText: {
      width: "90%",
    },
  })
);

export const TextInput = () => {
  const classes = useStyles();
  return (
    <>
      <form className={classes.wrapForm} noValidate autoComplete="off">
        <TextField
          id="standard-text"
          label="type a message"
          className={classes.wrapText}
          //margin="normal"
        />
        <Button
          variant="contained"
          className={classes.button}
          style={{ backgroundColor: "#EBB105", color: "#FFFF" }}
        >
          <SendIcon />
        </Button>
      </form>
    </>
  );
};

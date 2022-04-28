import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { TextInput } from "../../components/Chat/TextField";
import { MessageLeft, MessageRight } from "../../components/Chat/Message";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "100%",
      height: "100%",
      maxWidth: "100%",
      maxHeight: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    paper2: {
      width: "100%",
      maxWidth: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    container: {
      width: "80vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    messagesBody: {
      width: "100%",
      margin: 10,
      padding: 30,
      //overflowY: "scroll",
      height: "calc( 100% - 80px )",
      backgroundColor: "#F8F9FE",
    },
  })
);

const MyCommunity = (props) => {
  const mainContent = React.useRef(null);
  const classes = useStyles();
  return (
    <>
      {/* Page Content */}
      <div className="main-content" ref={mainContent}>
        <div className={classes.container}>
          <Paper className={classes.paper} zDepth={2}>
            <Paper id="style-1" className={classes.messagesBody}>
              <MessageLeft
                message="messageR lorem ipsum"
                timestamp="MM/DD 00:00"
                displayName="piyal"
                avatarDisp={true}
              />
              <MessageLeft
                message="messageR lorem ipsum"
                timestamp="MM/DD 00:00"
                photoURL=""
                displayName="piyal"
                avatarDisp={false}
              />
              <MessageRight
                message="messageR lorem ipsum"
                timestamp="MM/DD 00:00"
                displayName="sunil"
                avatarDisp={true}
              />
              <MessageRight
                message="messageR hello"
                timestamp="MM/DD 00:00"
                displayName="sunil"
                avatarDisp={false}
              />
            </Paper>
            <TextInput />
          </Paper>
        </div>
      </div>
    </>
  );
};

export default MyCommunity;

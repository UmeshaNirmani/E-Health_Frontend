import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TextInput } from "../../components/Chat/TextField";
import { MessageLeft, MessageRight } from "../../components/Chat/Message";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

const PatientChat = (props) => {
  const mainContent = React.useRef(null);
  const classes = useStyles();
  return (
    <>
      <div className="main-content" ref={mainContent}>
        <div className={classes.container}>
          <Container id="style-1" className={classes.messagesBody}>
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
          </Container>
          <TextInput />
        </div>
      </div>
    </>
  );
};

export default PatientChat;

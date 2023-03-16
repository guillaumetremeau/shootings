import Authentication from "./Authentication";
import Shooting from "./Shooting";
import { Header, Icon, Segment, Label } from "semantic-ui-react";

function Actions(props) {
  if (!props.user) {
    return (
      <>
        <Header as="h3">
          <Icon name="user" />
          Login
        </Header>
        <Authentication submit={props.checkLogin} />
      </>
    );
  }
  return (
    <>
      <Segment>
        <p>
          Logged as :{" "}
          <Label as="a">
            <Icon name="user" />
            {props.user.email}
          </Label>
        </p>
      </Segment>
      <Segment>
        <Header as="h3">
          {props.editedShooting ? "Edit Shooting" : "New Shooting"}
        </Header>
        <Shooting
          submit={props.editedShooting ? props.putShooting : props.addShooting}
          edit={props.editedShooting}
        />
      </Segment>
      <Segment>
        <Header as="h3">New User</Header>
        <Authentication submit={props.addUser} />
      </Segment>
    </>
  );
}

export default Actions;

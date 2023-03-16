import "./App.css";
import Shootings from "./component/Shootings";
import { Container, Header, Icon } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Container style={{ padding: "5em 0em" }}>
        <Header as="h1">
          <Icon name="photo" />
          Shootings
        </Header>
        <Shootings />
      </Container>
    </div>
  );
}

export default App;

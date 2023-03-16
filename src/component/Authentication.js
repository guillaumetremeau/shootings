import { useState } from "react";
import { Form, Button } from "semantic-ui-react";

function Authentication(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.submit(email, password);
        }}
      >
        <Form.Group>
          <Form.Field>
            <label>email</label>
            <input
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
          </Form.Field>
          <Form.Field>
            <label>password</label>
            <input
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </Form.Field>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default Authentication;

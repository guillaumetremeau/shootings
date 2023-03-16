import { useState } from "react";
import { Form, Button } from "semantic-ui-react";

function Shooting(props) {
  const [photographer, setPhotographer] = useState();
  const [model, setModel] = useState();
  const [date, setDate] = useState();
  const [type, setType] = useState();
  const [status, setStatus] = useState();

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.submit(photographer, model, date, type, status);
        }}
      >
        <Form.Group>
          <Form.Field>
            <label>photograph</label>
            <input
              name="photographer"
              onChange={(e) => setPhotographer(e.target.value)}
              type="text"
            />
          </Form.Field>
          <Form.Field>
            <label>model</label>
            <input
              name="model"
              onChange={(e) => setModel(e.target.value)}
              type="text"
            />
          </Form.Field>
          <Form.Field>
            <label>date</label>
            <input
              name="date"
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </Form.Field>
          <Form.Field>
            <label>type</label>
            <input
              name="type"
              onChange={(e) => setType(e.target.value)}
              type="text"
            />
          </Form.Field>
          <Form.Field>
            <label>status</label>
            <input
              name="status"
              onChange={(e) => setStatus(e.target.value)}
              type="text"
            />
          </Form.Field>
        </Form.Group>
        <Button
          content={props.edit ? "Edit" : "Add"}
          icon={props.edit ? "edit" : "add"}
          labelPosition="right"
          type="submit"
        />
      </Form>
    </>
  );
}

export default Shooting;

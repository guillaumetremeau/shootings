import React from "react";
import { Table, Button } from "semantic-ui-react";

function ShootingsTable(props) {
  return (
    <>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Photographer</Table.HeaderCell>
            <Table.HeaderCell>Model</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            {props.user ? <Table.HeaderCell width="1" /> : ""}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.data.map((shooting) => (
            <Table.Row
              active={shooting.id === props.editedShooting ? true : false}
              key={shooting.id}
            >
              <Table.Cell>{shooting.photographer}</Table.Cell>
              <Table.Cell>{shooting.model}</Table.Cell>
              <Table.Cell>{shooting.date}</Table.Cell>
              <Table.Cell>{shooting.type}</Table.Cell>
              <Table.Cell>{shooting.status}</Table.Cell>
              {props.user ? (
                <Table.Cell>
                  <Button
                    content="Edit"
                    icon="edit"
                    labelPosition="right"
                    onClick={() => props.editShooting(shooting.id)}
                  />
                </Table.Cell>
              ) : (
                ""
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}

export default ShootingsTable;

import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import SideBar from "./SideBar";

function AddNewTask(props) {
  const [showModal, setShowModal] = props;
  const [taskText, setTaskText] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary data processing and validation
    // before calling the callback function to add the new task
    props.addTask({
      text: taskText,
      date: taskDate,
    });

    // Clear the form and hide the modal
    setTaskText("");
    setTaskDate("");
    setShowModal(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Add New Task
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTaskText">
              <Form.Label>Task Text</Form.Label>
              <Form.Control
                type="text"
                value={taskText}
                onChange={(event) => setTaskText(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTaskDate">
              <Form.Label>Task Date</Form.Label>
              <Form.Control
                type="date"
                value={taskDate}
                onChange={(event) => setTaskDate(event.target.value)}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddNewTask;

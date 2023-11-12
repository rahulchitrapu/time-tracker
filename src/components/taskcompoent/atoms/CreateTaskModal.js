import React, { useRef, useState } from "react";
import { Modal } from "react-bootstrap";

export default function CreateTaskModal(props) {
  const { createTask } = props;
  const [text, setText] = useState("");

  const [error, seterror] = useState("");

  const inputref = useRef(null);

  const submitHandler = (e) => {
    e?.preventDefault();
    if (text.trim() === "") {
      seterror(true);
      inputref?.current.focus();
    } else {
      console.log(text);
      seterror(false);
      createTask(text);
      props.onHide();
    }
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="create-task-modal"
      >
        <div className="width-100">
          <p className="taskname-text">Enter the Task Name</p>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              autoFocus
              ref={inputref}
              className="taskname-text-input"
              required
              type="text"
              placeholder="Enter here...."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            {error && text === "" ? (
              <p className="error-text mt-8px">Please enter task name...</p>
            ) : (
              <p className="mt-8px"></p>
            )}
            <div
              onClick={() => {
                submitHandler();
              }}
              className="create-task-save cursor-p flex-center-center mt-8px"
            >
              Save
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

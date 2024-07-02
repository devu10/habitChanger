import React, { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Tables } from "./components/Tables";

function App() {
  const [taskList, setTaskList] = useState([]);
  const addTaskList = (taskObj) => {
    const obj = {
      ...taskObj,
      id: idGen(),
      type: "entry",
    };
    setTaskList([...taskList, obj]);
  };
  console.log(taskList);
  const idGen = (length = 6) => {
    const str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPSDFGHJKLZXCVBNM123456789";

    let id = "";

    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * str.length);
      id += str[index];
    }

    return id;
  };
  return (
    <>
      <div className="wrapper pt-5">
        {/* <!-- title --> */}
        <div className="container">
          <h1 className="text-center">Habit List</h1>
          {/* <!-- form --> */}
          <Form addTaskList={addTaskList} />

          {/* <!-- tables --> */}
          <Tables taskList={taskList} />
          {/* <!-- displa --> */}
          <div className="alert alert-success">
            The total hours allocated =<span id="tlHr"> 0</span>
          </div>
        </div>
      </div>
      <footer className="bg-black text-center text-white">
        &copy devudevu10@gmail.com
      </footer>
    </>
  );
}

export default App;

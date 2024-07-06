import React, { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Tables } from "./components/Tables";
const hrPerWeek = 24 * 7;

function App() {
  const [taskList, setTaskList] = useState([]);
  const ttlHr = taskList.reduce((acc, item) => {
    return acc + item.hr;
  }, 0);
  const addTaskList = (taskObj) => {
    const obj = {
      ...taskObj,
      id: idGen(),
      type: "entry",
    };

    if (ttlHr + obj.hr > hrPerWeek) {
      return alert("total hr cannot exceed the total hrs ina week");
    }
    setTaskList([...taskList, obj]);
  };

  const moveHabit = (id, type) => {
    setTaskList(
      taskList.map((item) => {
        if (item.id === id) {
          item.type = type;
        }
        return item;
      })
    );
  };

  const onDelete = (id) => {
    if (window.confirm("Aye you sure to delte?")) {
      setTaskList(taskList.filter((item) => item.id !== id));
    }
  };

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
          <Tables
            taskList={taskList}
            moveHabit={moveHabit}
            onDelete={onDelete}
          />
          {/* <!-- displa --> */}
          <div className="alert alert-success">
            The total hours allocated =<span id="tlHr"> {ttlHr}</span>
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

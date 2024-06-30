import React, { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";

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
          <div className="row mt-5">
            <div className="col-md text-center">
              <h3>Habits</h3>
              <hr />
              {/* <!-- habit tables --> */}
              <table className="table table-striped table-hover">
                <tbody id="habitList"></tbody>
              </table>
            </div>
            <div className="col-md text-center">
              <h3>Habits to Improve</h3>
              <hr />
              {/* <!-- to improve habits tables --> */}
              <table className="table table-striped table-hover">
                <tbody id="improveList"></tbody>
              </table>
              <div className="alert alert-success">
                You could have saved <span id="svdHr">0</span> hours
              </div>
            </div>
          </div>
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

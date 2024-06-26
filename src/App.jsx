import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const hrPerWeek = 24 * 7;

function App() {
  const [tlHr, setTlHr] = useState("");
  let habitList = [];
  const formSubmit = (e) => {
    e.preventDefault();
    const newForm = new FormData(e);
    const habit = newForm.get("habit");
    const hr = +newForm.get("hr");
    const obj = {
      habit,
      hr,
      id: idGen(),
      type: "g",
    };

    const currentHr = totalHr();

    if (currentHr + hr > hrPerWeek) {
      return alert("total hr cannot exceed the total hrs ina week");
    }

    habitList.push(obj);

    displayHabitList();
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
  const totalHr = () => {
    const tothr = habitList.reduce((acc, item) => {
      return acc + item.hr;
    }, 0);
    setTlHr(tothr);

    return tothr;
  };
  const displayHabitList = () => {
    // console.log(habitList);
    let habitRow = "";
    const habitElm = document.getElementById("habitList");

    let gList = habitList.filter((item) => item.type === "g");
    // console.log(gList);

    gList.map((item, i) => {
      habitRow += ` <tr>
      <td>${i + 1}</td>
      <td>${item.habit}</td>
      <td>${item.hr}</td>
      <td class="text-end">
        <button onclick="onDelete('${item.id}')" class="btn btn-danger">
          <i class="fa-solid fa-trash"></i>
        </button>
        <button onClick="moveHabit('${item.id}','b')" class="btn btn-success">
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </td>
    </tr>`;
    });

    habitElm.innerHTML = habitRow;
    totalHr();
  };
  return (
    <>
      <div class="wrapper pt-5">
        {/* <!-- title --> */}
        <div class="container">
          <h1 class="text-center">Habit List</h1>
          {/* <!-- form --> */}
          <form
            onsubmit={formSubmit}
            action=""
            class="border p-5 rounded shadow-lg mt-5"
          >
            <div class="row">
              <div class="col-md-7">
                <input
                  type="text"
                  id="habits"
                  class="form-control"
                  placeholder="Habit"
                  aria-label="First name"
                  name="habit"
                />
              </div>
              <div class="col-md-2">
                <input
                  id="hrs"
                  type="number"
                  class="form-control"
                  placeholder="Hour"
                  aria-label="Last name"
                  name="hr"
                  min="1"
                />
              </div>
              <div class="col-md-3 d-flex gap-2">
                <button type="submit" class="btn btn-primary">
                  Add New Habit
                </button>
                <div type="clear" class="btn btn-primary" onclick="clearForm()">
                  clear
                </div>
              </div>
            </div>
          </form>

          {/* <!-- tables --> */}
          <div class="row mt-5">
            <div class="col-md text-center">
              <h3>Habits</h3>
              <hr />
              {/* <!-- habit tables --> */}
              <table class="table table-striped table-hover">
                <tbody id="habitList"></tbody>
              </table>
            </div>
            <div class="col-md text-center">
              <h3>Habits to Improve</h3>
              <hr />
              {/* <!-- to improve habits tables --> */}
              <table class="table table-striped table-hover">
                <tbody id="improveList"></tbody>
              </table>
              <div class="alert alert-success">
                You could have saved <span id="svdHr">0</span> hours
              </div>
            </div>
          </div>
          {/* <!-- displa --> */}
          <div class="alert alert-success">
            The total hours allocated =<span id="tlHr">{tlHr || 0}</span>
          </div>
        </div>
      </div>
      <footer class="bg-black text-center text-white">
        &copy devudevu10@gmail.com
      </footer>
    </>
  );
}

export default App;

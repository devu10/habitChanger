import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      {" "}
      <div class="wrapper pt-5">
        {/* <!-- title --> */}
        <div class="container">
          <h1 class="text-center">Habit List</h1>
          {/* <!-- form --> */}
          <form
            onsubmit="formSubmit(this)"
            action="javascript:void(0)"
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
            The total hours allocated =<span id="tlHr"> 0</span>
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

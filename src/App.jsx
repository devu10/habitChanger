import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper pt-5">
        {/* <!-- title --> */}
        <div className="container">
          <h1 className="text-center">Habit List</h1>
          {/* <!-- form --> */}
          <form
            onsubmit="formSubmit(this)"
            action="javascript:void(0)"
            className="border p-5 rounded shadow-lg mt-5"
          >
            <div className="row">
              <div className="col-md-7">
                <input
                  type="text"
                  id="habits"
                  className="form-control"
                  placeholder="Habit"
                  aria-label="First name"
                  name="habit"
                />
              </div>
              <div className="col-md-2">
                <input
                  id="hrs"
                  type="number"
                  className="form-control"
                  placeholder="Hour"
                  aria-label="Last name"
                  name="hr"
                  min="1"
                />
              </div>
              <div className="col-md-3 d-flex gap-2">
                <button type="submit" className="btn btn-primary">
                  Add New Habit
                </button>
                <div
                  type="clear"
                  className="btn btn-primary"
                  onclick="clearForm()"
                >
                  clear
                </div>
              </div>
            </div>
          </form>

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

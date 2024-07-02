import React from "react";

export const Tables = ({ taskList }) => {
  let entryList = taskList.filter((item) => item.type === "entry");
  return (
    <div className="row mt-5">
      <div className="col-md text-center">
        <h3>Habits</h3>
        <hr />
        {/* <!-- habit tables --> */}
        <table className="table table-striped table-hover">
          <tbody id="habitList">
            {entryList.map((item, i) => {
              return (
                <tr key={item.id}>
                  <td>${i + 1}</td>
                  <td>${item.habit}</td>
                  <td>${item.hr}</td>
                  <td class="text-end">
                    <button
                      onclick="onDelete('${item.id}')"
                      class="btn btn-danger"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button
                      onClick="moveHabit('${item.id}','b')"
                      class="btn btn-success"
                    >
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
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
  );
};

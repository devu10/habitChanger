import React from "react";

export const Tables = ({ taskList, moveHabit }) => {
  const entryList = taskList.filter((item) => item.type === "entry");
  const bList = taskList.filter((item) => item.type === "b");
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
                  <td>{i + 1}</td>
                  <td>{item.habit}</td>
                  <td>{item.hr}</td>
                  <td className="text-end">
                    <button
                      onClick="onDelete('${item.id}')"
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <button
                      onClick={() => moveHabit(item.id, "b")}
                      className="btn btn-success"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
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
          <tbody id="improveList">
            {bList.map((item, i) => (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.habit}</td>
                <td>{item.hr}</td>
                <td className="text-end">
                  <button
                    onClick={() => moveHabit(item.id, "entry")}
                    className="btn btn-warning"
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  <button
                    onClick="onDelete('${item.id}')"
                    className="btn btn-danger"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="alert alert-success">
          You could have saved <span id="svdHr">0</span> hours
        </div>
      </div>
    </div>
  );
};

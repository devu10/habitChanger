import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const hrPerWeek = 24 * 7;

function App() {
  const [tlHr, setTlHr] = useState("");
  const [svdHr, setSvdHr] = useState("");
  const [habits, sethabits] = useState("");
  const [hrs, sethrs] = useState("");
  const [habitList, setHabitList] = useState([]);
  const formSubmit = (e) => {
    e.preventDefault();
    const newForm = new FormData(e.target);
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

    setHabitList((prev) => {
      const updatedList = [...prev, obj];
      setTlHr(totalHr(updatedList));
      calculateSavedHours(updatedList);
      return updatedList;
    });

    clearForm();
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

  const calculateSavedHours = () => {
    const savedHours = habitList
      .filter((item) => item.type === "b")
      .reduce((acc, item) => acc + item.hr, 0);
    setSvdHr(savedHours);
  };

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setHabitList((prev) => {
        const updatedList = prev.filter((item) => item.id !== id);
        setTlHr(totalHr(updatedList));
        calculateSavedHours(updatedList);
        return updatedList;
      });
    }
  };

  const moveHabit = (id, type) => {
    setHabitList((prev) => {
      const updatedList = prev.map((item) => {
        if (item.id === id) {
          return { ...item, type };
        }
        return item;
      });
      setTlHr(totalHr(updatedList));
      calculateSavedHours(updatedList);
      return updatedList;
    });
  };

  const clearForm = () => {
    sethabits("");
    sethrs("");
  };
  return (
    <>
      <div className="wrapper pt-5">
        {/* <!-- title --> */}
        <div className="container">
          <h1 className="text-center">Habit List</h1>
          {/* <!-- form --> */}
          <form
            onSubmit={formSubmit}
            className="border p-5 rounded shadow-lg mt-5"
          >
            <div className="row">
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Habit"
                  aria-label="First name"
                  name="habit"
                  value={habits}
                  onChange={(e) => {
                    sethabits(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Hour"
                  aria-label="Last name"
                  name="hr"
                  value={hrs}
                  onChange={(e) => {
                    sethrs(e.target.value);
                  }}
                  min="1"
                />
              </div>
              <div className="col-md-3 d-flex gap-2">
                <button type="submit" className="btn btn-primary">
                  Add New Habit
                </button>
                <div
                  className="btn btn-primary"
                  onClick={() => {
                    sethabits("");
                    sethrs("");
                  }}
                >
                  Clear
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
                <tbody>
                  {habitList
                    .filter((item) => item.type === "g")
                    .map((item, i) => (
                      <tr key={item.id}>
                        <td>{i + 1}</td>
                        <td>{item.habit}</td>
                        <td>{item.hr}</td>
                        <td className="text-end">
                          <button
                            onClick={() => onDelete(item.id)}
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
                    ))}
                </tbody>
              </table>
            </div>
            <div className="col-md text-center">
              <h3>Habits to Improve</h3>
              <hr />
              {/* <!-- to improve habits tables --> */}
              <table className="table table-striped table-hover">
                <tbody>
                  {habitList
                    .filter((item) => item.type === "b")
                    .map((item, i) => (
                      <tr key={item.id}>
                        <td>{i + 1}</td>
                        <td>{item.habit}</td>
                        <td>{item.hr}</td>
                        <td className="text-end">
                          <button
                            onClick={() => moveHabit(item.id, "g")}
                            className="btn btn-warning"
                          >
                            <i className="fa-solid fa-arrow-left"></i>
                          </button>
                          <button
                            onClick={() => onDelete(item.id)}
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
                You could have saved <span id="svdHr">{svdHr}</span> hours
              </div>
            </div>
          </div>
          {/* <!-- displa --> */}
          <div className="alert alert-success">
            The total hours allocated =<span id="tlHr">{tlHr}</span>
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

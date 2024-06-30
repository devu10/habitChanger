import React, { useState } from "react";

export const Form = ({ addTaskList }) => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTaskList(form);
  };

  return (
    <form
      onSubmit={handleOnSubmit}
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
            onChange={handleOnChange}
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
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-3 d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Add New Habit
          </button>
        </div>
      </div>
    </form>
  );
};

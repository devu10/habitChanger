let habitList = [];

const formSubmit = (e) => {
  const newForm = new FormData(e);
  const habit = newForm.get("habit");
  const hr = newForm.get("hr");
  const obj = {
    habit,
    hr,
  };

  habitList.push(obj);
  displayHabitList();
};

const displayHabitList = () => {
  let habitRow = "";
  const habitElm = document.getElementById("habitList");

  habitList.map((item, i) => {
    habitRow += ` <tr>
    <td>${i + 1}</td>
    <td>${item.habit}</td>
    <td>${item.hr}</td>
    <td class="text-end">
      <button class="btn btn-danger">
        <i class="fa-solid fa-trash"></i>
      </button>
      <button class="btn btn-success">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </td>
  </tr>`;
  });

  habitElm.innerHTML = habitRow;
};

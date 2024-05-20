let habitList = [];

const formSubmit = (e) => {
  const newForm = new FormData(e);
  const habit = newForm.get("habit");
  const hr = newForm.get("hr");
  const obj = {
    habit,
    hr,
    id: idGen(),
  };

  habitList.push(obj);
  displayHabitList();
};

const displayHabitList = () => {
  console.log(habitList);
  let habitRow = "";
  const habitElm = document.getElementById("habitList");

  habitList.map((item, i) => {
    habitRow += ` <tr>
    <td>${i + 1}</td>
    <td>${item.habit}</td>
    <td>${item.hr}</td>
    <td class="text-end">
      <button onclick="onDelete('${item.id}')" class="btn btn-danger">
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

const idGen = (length = 6) => {
  const str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPSDFGHJKLZXCVBNM123456789";

  let id = "";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * str.length);
    id += str[index];
  }

  return id;
};

const onDelete = (id) => {
  if (window.confirm("Aye you sure to delte?")) {
    habitList = habitList.filter((item) => item.id !== id);
    displayHabitList();
  }
};

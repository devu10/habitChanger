let habitList = [];

const formSubmit = (e) => {
  const newForm = new FormData(e);
  const habit = newForm.get("habit");
  const hr = newForm.get("hr");
  const obj = {
    habit,
    hr,
    id: idGen(),
    type: "g",
  };

  habitList.push(obj);
  displayHabitList();
};

const displayHabitList = () => {
  console.log(habitList);
  let habitRow = "";
  const habitElm = document.getElementById("habitList");

  const gList = habitList.filter((item) => item.type === "g");

  habitList.map((item, i) => {
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
};
const displayImproveList = () => {
  console.log(habitList);
  let habitRow = "";
  const habitElm = document.getElementById("improveList");

  const bList = habitList.filter((item) => item.type === "b");

  habitList.map((item, i) => {
    habitRow += ` <tr>
    <td>${i + 1}</td>
    <td>${item.habit}</td>
    <td>${item.hr}</td>
    <td class="text-end">
    <button onClick="moveHabit('${item.id}','b')" class="btn btn-warning">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <button onclick="onDelete('${item.id}')" class="btn btn-danger">
        <i class="fa-solid fa-trash"></i>
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

const moveHabit = (id, type) => {
  habitList.map((item) => {
    if (item.id === id) {
      item.type = type;
    }
    return item;
  });

  displayHabitList;
};

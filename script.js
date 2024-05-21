let habitList = [];


const hrPerWeek = 24 * 7;

const formSubmit = (e) => {
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

  if(currentHr + hr > hrPerWeek){
    return alert("total hr cannot exceed the total hrs ina week");
  }

  habitList.push(obj);
  
  displayHabitList();
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
const displayImproveList = () => {
  // console.log(habitList);
  let improveRow = "";
  const improveElm = document.getElementById("improveList");

  let bList = habitList.filter((item) => item.type === "b");
  // console.log(bList);

  bList.map((item, i) => {
    improveRow += ` <tr>
    <td>${i + 1}</td>
    <td>${item.habit}</td>
    <td>${item.hr}</td>
    <td class="text-end">
    <button onClick="moveHabit('${item.id}','g')" class="btn btn-warning">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <button onclick="onDelete('${item.id}')" class="btn btn-danger">
        <i class="fa-solid fa-trash"></i>
      </button>      
    </td>
  </tr>`;
  });

  improveElm.innerHTML = improveRow;
  document.getElementById('svdHr').innerText = bList.reduce((acc,item)=> acc+item.hr,0);
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
    displayImproveList();
  }
};

const moveHabit = (id, type) => {
  habitList.map((item) => {
    if (item.id === id) {
      item.type = type;
    }
    return item;
  });

  displayHabitList();
  displayImproveList();
};

const totalHr = ()=>{
  const tothr = habitList.reduce((acc, item)=>{
    return acc + item.hr;
  },0);
  document.getElementById('tlHr').innerText = tothr;

  return tothr;
}

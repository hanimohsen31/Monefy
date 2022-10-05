let Total = 0;
var xValues = [];
var yValues = [];
var barColors = [];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();
let monthName = month[d.getMonth()];
document.querySelector("#month").innerText = monthName;

let AllVars = [
  {
    title: "gift",
    value: localStorage.getItem("gift") | 0,
    color: "#627689",
    class: ".fa-gift",
  },
  {
    title: "phone",
    value: localStorage.getItem("phone") | 0,
    color: "#79C793",
    class: ".fa-phone",
  },
  {
    title: "water",
    value: localStorage.getItem("water") | 0,
    color: "#6F91AB",
    class: ".fa-bottle-water",
  },
  {
    title: "wifi",
    value: localStorage.getItem("wifi") | 0,
    color: "#C7D5C3",
    class: ".fa-wifi",
  },
  {
    title: "house",
    value: localStorage.getItem("house") | 0,
    color: "#B38041",
    class: ".fa-house",
  },
  {
    title: "medical",
    value: localStorage.getItem("medical") | 0,
    color: "#EC5051",
    class: ".fa-kit-medical",
  },
  {
    title: "supplies",
    value: localStorage.getItem("supplies") | 0,
    color: "#DCB8B0",
    class: ".fa-supple",
  },
  {
    title: "restaurant",
    value: localStorage.getItem("restaurant") | 0,
    color: "#ec5051",
    class: ".fa-burger",
  },
  {
    title: "cloth",
    value: localStorage.getItem("cloth") | 0,
    color: "#A8D0E3",
    class: ".fa-utensils",
  },
  {
    title: "sports",
    value: localStorage.getItem("sports") | 0,
    color: "#f68684",
    class: ".fa-shirt",
  },
  {
    title: "food",
    value: localStorage.getItem("food") | 0,
    color: "#ECB46F",
    class: ".fa-dumbbell",
  },
  {
    title: "cafe",
    value: localStorage.getItem("cafe") | 0,
    color: "#77bae5",
    class: ".fa-mug-saucer",
  },
  {
    title: "taxi",
    value: localStorage.getItem("taxi") | 0,
    color: "#3D3E54",
    class: ".fa-taxi",
  },
  {
    title: "shopping",
    value: localStorage.getItem("shopping") | 0,
    color: "#983232",
    class: ".fa-cart-shopping",
  },
];

for (i = 0; i < AllVars.length; i++) {
  Total += AllVars[i].value;
}

for (i = 0; i < AllVars.length; i++) {
  xValues.push(AllVars[i].title);
  yValues.push(AllVars[i].value);
  barColors.push(AllVars[i].color);
  document.querySelector(AllVars[i].class).style.color = AllVars[i].color;
  // Total += AllVars[i].value;
  document.querySelector(`.${AllVars[i].title}`).innerText =
    ((+AllVars[i].value / Total) * 100).toFixed() + "%";
  if (AllVars[i].value < 1) {
    document.querySelector(`.${AllVars[i].title}`).style.visibility = "hidden";
  }
}

document.getElementById("balance").innerText = Total;

new Chart("myChart", {
  type: "doughnut",
  data: {
    // labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    // title: {
    //   display: true,
    //   text: "Expanses"
    // }
    rotation: 1.3,
  },
});

function AddFunction() {
  var x = document.getElementById("FormAdd");
  var target = [];
  var i;
  for (i = 0; i < x.length; i++) {
    target.push(x.elements[i].value);
  }
  if (
    target[1] == "" ||
    target[1] == "Open this select menu" ||
    target[0] <= 0
  ) {
    document.querySelector(".alert").style.display = "block";
  } else {
    console.log(target);
    let prev = +localStorage.getItem(target[1]);
    localStorage.setItem(target[1], +target[0] + +prev);
    document.querySelector(".formPanelAdd").style.display = "none";
  }
}

document.querySelector(".plus").addEventListener("click", function () {
  document.querySelector(".formPanelAdd").style.display = "flex";
});

document.querySelector("#cancelAdd").addEventListener("click", function () {
  document.querySelector(".formPanelAdd").style.display = "none";
  document.querySelector(".alertAdd").style.display = "none";
});

function DeleteFunction() {
  var x = document.getElementById("FormDelete");
  var target = [];
  var i;
  for (i = 0; i < x.length; i++) {
    target.push(x.elements[i].value);
  }
  if (
    target[1] == "" ||
    target[1] == "Open this select menu" ||
    target[0] <= 0
  ) {
    document.querySelector(".alert").style.display = "block";
  } else {
    let prev = +localStorage.getItem(target[1]);
    localStorage.setItem(target[1], +prev - +target[0]);
    document.querySelector(".formPanelDelete").style.display = "none";
  }
}

document.querySelector(".minus").addEventListener("click", function () {
  document.querySelector(".formPanelDelete").style.display = "flex";
});

document.querySelector(".cancelForm").addEventListener("click", function () {
  document.querySelector(".formPanelDelete").style.display = "none";
  document.querySelector(".alertDelete").style.display = "none";
});

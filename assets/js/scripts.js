let Total = 0;
var xValues = [];
var yValues = [];
var barColors = [];

let AllVars = [
  {
    title: "gift",
    value: localStorage.getItem("gift") | 5,
    color: "#ec5051",
    class: ".fa-gift",
  },
  {
    title: "phone",
    value: localStorage.getItem("phone") | 10,
    color: "#f78cb8",
    class: ".fa-phone",
  },
  {
    title: "water",
    value: localStorage.getItem("water") | 18,
    color: "#f68684",
    class: ".fa-bottle-water",
  },
  {
    title: "wifi",
    value: localStorage.getItem("wifi") | 0,
    color: "#f68684",
    class: ".fa-wifi",
  },
  {
    title: "house",
    value: localStorage.getItem("house") | 0,
    color: "#77bae5",
    class: ".fa-house",
  },
  {
    title: "medical",
    value: localStorage.getItem("medical") | 25,
    color: "#f68684",
    class: ".fa-kit-medical",
  },
  {
    title: "supplies",
    value: localStorage.getItem("supplies") | 30,
    color: "#f78cb8",
    class: ".fa-supple",
  },
  {
    title: "restaurant",
    value: localStorage.getItem("restaurant") | 15,
    color: "#ec5051",
    class: ".fa-burger",
  },
  {
    title: "cloth",
    value: localStorage.getItem("cloth") | 22,
    color: "#77bae5",
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
    value: localStorage.getItem("food") | 18,
    color: "#ec5051",
    class: ".fa-dumbbell",
  },
  {
    title: "cafe",
    value: localStorage.getItem("cafe") | 26,
    color: "#77bae5",
    class: ".fa-mug-saucer",
  },
  {
    title: "taxi",
    value: localStorage.getItem("taxi") | 14,
    color: "#ec5051",
    class: ".fa-taxi",
  },
  {
    title: "shopping",
    value: localStorage.getItem("shopping") | 50,
    color: "#77bae5",
    class: ".fa-cart-shopping",
  },
];

for (i = 0; i < AllVars.length; i++) {
  xValues.push(AllVars[i].title);
  yValues.push(AllVars[i].value);
  barColors.push(AllVars[i].color);
  document.querySelector(AllVars[i].class).style.color = AllVars[i].color;
  Total += AllVars[i].value;
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
  },
});

function myFunction() {
  var x = document.getElementById("Form");
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
    localStorage.setItem(target[1], target[0]);
    document.querySelector(".formPanel").style.display = "none";
    // location.reload(true);
  }
}

document.querySelector(".plus").addEventListener("click", function () {
  document.querySelector(".formPanel").style.display = "flex";
});

document.querySelector("#cancelAdd").addEventListener("click", function () {
  document.querySelector(".formPanel").style.display = "none";
  document.querySelector(".alert").style.display = "none";
});

//!DOM
//createElement
const heading = document.createElement("div");
const h1 = document.createElement("h1");
const p = document.createElement("p");
const container = document.createElement("div");
const calculator = document.createElement("div");
const result = document.createElement("input");
const buttonBox = document.createElement("div");
const buttonClear = document.createElement("button");
const buttonDelete = document.createElement("button");
const buttonDot = document.createElement("button");
const buttonMultiple = document.createElement("button");
const button7 = document.createElement("button");
const button8 = document.createElement("button");
const button9 = document.createElement("button");
const buttonDivision = document.createElement("button");
const button4 = document.createElement("button");
const button5 = document.createElement("button");
const button6 = document.createElement("button");
const buttonSubtract = document.createElement("button");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const buttonAdd = document.createElement("button");
const button0 = document.createElement("button");
const button00 = document.createElement("button");
const buttonEqual = document.createElement("button");
//innerHTMl
h1.innerHTML = "DOM Calculator";
p.innerHTML = "Created Calculator Using DOM Method In JavaScript";

buttonClear.innerHTML = "AC";
buttonDelete.innerHTML = "DEL";
buttonMultiple.innerHTML = "*";
buttonDivision.innerHTML = "/";
buttonSubtract.innerHTML = "-";
buttonAdd.innerHTML = "+";

button1.innerHTML = "1";
button2.innerHTML = "2";
button3.innerHTML = "3";
button4.innerHTML = "4";
button5.innerHTML = "5";
button6.innerHTML = "6";
button7.innerHTML = "7";
button8.innerHTML = "8";
button9.innerHTML = "9";
button0.innerHTML = "0";

button00.innerHTML = "00";
buttonDot.innerHTML = ".";
buttonEqual.innerHTML = "=";
//class
heading.classList.add("heading");
container.classList.add("container");
calculator.classList.add("calculator");
buttonBox.classList.add("buttonBox");
buttonClear.classList.add("btn", "main-btn");
buttonDelete.classList.add("btn", "main-btn");
buttonDot.classList.add("btn", "main-btn");
buttonMultiple.classList.add("btn", "main-btn");
button7.classList.add("btn");
button8.classList.add("btn");
button9.classList.add("btn");
buttonDivision.classList.add("btn", "main-btn");
button4.classList.add("btn");
button5.classList.add("btn");
button6.classList.add("btn");
buttonSubtract.classList.add("btn", "main-btn");
button1.classList.add("btn");
button2.classList.add("btn");
button3.classList.add("btn");
buttonAdd.classList.add("btn", "main-btn");
button0.classList.add("btn");
button00.classList.add("btn");
buttonEqual.classList.add("btn");
//id
h1.id = "title";
p.id = "description";
result.id = "result";
calculator.id = "calculatorId";
buttonClear.id = "clear";
buttonEqual.id = "equal";
buttonMultiple.id = "multiple";
buttonDivision.id = "division";
buttonSubtract.id = "subtract";
buttonAdd.id = "add";
button1.id = "1";
button2.id = "2";
button3.id = "3";
button4.id = "4";
button5.id = "5";
button6.id = "6";
button7.id = "7";
button8.id = "8";
button9.id = "9";

//attribute
result.setAttribute("type", "text");
result.setAttribute("name", "display");
result.setAttribute("placeholder", "0");
result.setAttribute("readonly", true);

buttonClear.setAttribute("data-num", "AC");
buttonDelete.setAttribute("data-num", "DEL");
buttonMultiple.setAttribute("data-num", "*");
buttonDivision.setAttribute("data-num", "/");
buttonSubtract.setAttribute("data-num", "-");
buttonAdd.setAttribute("data-num", "+");

button1.setAttribute("data-num", "1");
button2.setAttribute("data-num", "2");
button3.setAttribute("data-num", "3");
button4.setAttribute("data-num", "4");
button5.setAttribute("data-num", "5");
button6.setAttribute("data-num", "6");
button7.setAttribute("data-num", "7");
button8.setAttribute("data-num", "8");
button9.setAttribute("data-num", "9");
button0.setAttribute("data-num", "0");

button00.setAttribute("data-num", "00");
buttonDot.setAttribute("data-num", ".");
buttonEqual.setAttribute("data-num", "=");

//append
heading.append(h1, p);
buttonBox.append(
  buttonClear,
  buttonDelete,
  buttonDot,
  buttonMultiple,
  button7,
  button8,
  button9,
  buttonDivision,
  button4,
  button5,
  button6,
  buttonSubtract,
  button1,
  button2,
  button3,
  buttonAdd,
  button0,
  button00,
  buttonEqual
);
calculator.append(result, buttonBox);
container.append(calculator);
document.body.append(heading, container);

//!function

const display = document.getElementById("result");
const special = ["*", "/", "+", "-"];

calculator.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const buttonVal = e.target.dataset.num;
    if (buttonVal === "AC") {
      display.value = "";
    } else if (buttonVal === "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (buttonVal === "=" && display.value !== "") {
      display.value = eval(display.value);
    } else {
      display.value += buttonVal;
      if (display.value === "=" || special.includes(display.value))
        display.value = "";
    }
  }
});

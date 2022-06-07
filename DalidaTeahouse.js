//TeaHouse

//1. VARIABLES
const name = "Dalida's TeaParty";
const address = "Baker Street, 23";
let customer = "Mary";
let main_desert = "carrot cake";
let main_tea = "honey tea";
main_tea = "zhasmin";

//2. DATA TYPES
const owner = "Dalida"; //string
let tea_types = 15; //number
let certified = true; //boolean
let sales = null;
console.log(sales); //undefined

//3. OBJECTS
let menu = {
  tea_options: 15,
  desert_options: 10,
  coffee_options: 5,
  lunch_options: 3,
  "last-updated": "15.05.2021"
};

menu.sales = "in the evening";
delete menu.lunch_options;
let key = "main_sales";
menu[key] = "summer flower tea";

menu.display = function () {
  console.log(this.tea_options + this.desert_options + this.coffee_options);
};

//4. ARRAYS
let deserts = ["cheesecake", "apple pie", "redvelvet", "cinnabon", "chococake"];
deserts.push("jasmin tea");
deserts.pop();
deserts.shift("latte");
deserts.unshift();
let len = deserts.length;

let tea = ["green", "black", "flowers", "fruits", "eastern"];
let all_options = tea.concat(deserts);

//map
let prices = [100, 80, 200, 250];
let inflation = prices.map((x) => x * 2 + 50);

//filter
let customer_friendly = inflation.filter((x) => x < 300);

//rest
function print(...items) {
  console.log(items);
}
print(...tea);

//spread
function commonOrder(items) {
  console.log("common order: " + "pie,tea," + [...items]);
}
commonOrder(tea);

//slice
console.log(tea.slice(2));
console.log(tea.slicce(3, 4));

//5. Comparison
console.log(10 == "10"); //true
console.log(10 === "10"); //false
console.log("010" === 10); // false
console.log("0010" === 10); //false
console.log("0010" == 10); //true
console.log("00000101.0" === "101"); //false

console.log(3 > 4); //false
console.log("5" != 1); //true

console.log(23 == "12" ? "True" : "False"); //False

let customerOrder;
let finalOrder = customerOrder ?? "orange cake";
console.log(finalOrder);

let time = "20.01";
if (time) {
  console.log("closed");
} else {
  console.log("open");
}

let order = "pancakes";
switch (order) {
  case "peach pie":
    console.log("5 minutes wait");
    break;
  case "pancakes":
    console.log("25 minutes wait");
    break;
  case "creppes":
    console.log("15 minutes wait");
    break;
  case "yogurt":
    console.log("10 minutes wait");
    break;
  default:
    console.log("No such meal");
}

//6. Loops
let totalCost = 0;
for (let i = 0; i < prices.length; i++) {
  totalCost += prices[i];
}
console.log(totalCost);

while (deserts.length !== 0) {
  console.log(deserts.length + " items available for ordering");
  console.log("left items: " + [...deserts]);
  deserts.pop();
}

//7. Functions
function countMenuPositions() {
  return menu.desert_options + menu.tea_options + menu.coffee_options;
}

let highest_demand = function () {
  return menu.main_sales;
};

let countDeserts = () => deserts.length;

let employee = {
  name: "Sam",
  age: 23,
  experience: 3,
  occupation: "cashier"
};

//destructuring
function employeeSalary({ experience: e, occupation: o }) {
  if (e > 2 && o === "cashier") {
    return 200000;
  } else if (e < 2 && o === "cashier") {
    return 180000;
  } else if (e > 2 && o === "waiter") {
    return 220000;
  } else if (e < 2 && o === "waiter") {
    return 160000;
  }
}
console.log(employeeSalary(employee));

let desertsAmount = () => deserts.length;
let teaAmount = () => tea.length;
export { desertsAmount, teaAmount };
export { countMenuPositions as c };
export default tea = ["earlgray", "springy", "fancy", "honey-mist", "black"];

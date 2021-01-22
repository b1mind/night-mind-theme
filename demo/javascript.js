import { nothing } from "nothing";
export default async function unreachableCode() {
  return 10;
}

const hello = "I am never used";

doesNotExist.nope(`I'm never imported`);

nothing.call;

class Widget extends React.Component {}

Widget;

const mindArrows = () => {};
const brent = function () {};

function functionJunction(e, params, ...args) {
  e.target = this.thing;
  let args = args;
  const params = params;
  console.log(params);
}

const lastName = "Morton";
const age = 200;

console.log(brent, lastName);

let variable2 = 420;
let variable = "this is a variable";
console.log(`this is a ${variable}`);

const constant = `some things need to be colored ${variable2}`;
console.log(constant, variable);

if (age !== 40 || variable2 === 420) {
  console.log("you are not the right age");
}
const someNew = new Date().getDate();
console.log(someNew);

const myObj = {
  prop: 12,
  nested: {
    prop: 100,
  },
  arraySure: [a, b, c, d],
  initialAge: age,
  age,
  addProps: function (e, index) {
    return prop + nested.prop + e;
  },
};

myObj.addProps(age);

const turneryOps = age === 100 ? "old person" : "not that old";

turneryOps;

const wesConst = {
  age: 100,
  name: `Wes`,
};

console.log(wesConst.age);
console.log(wesConst.doesNotExist);

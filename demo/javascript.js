import { nothing } from "nothing";
export default async function unreachableCode() {
  return 10;
}

//never used
const hello = "I am never used";
doesNotExist.nope(`I'm never imported`);
nothing.call;

class Widget extends React.Component {}
Widget;

const someNew = new Date().getDate();
console.log(someNew.checking);

function mindArrows() {}
const brent = function () {};

function functionJunction(e, params, ...args) {
  params.someShit;
  e.target = this.thing;
  let args = args;
  const paramsConst = params;
  brent;
  console.log(params, paramsConst);
}

const lastName = "Morton";
const age = 200;

functionJunction();

console.log(brent, lastName);

let variable2 = 420;
let variable = "this is a variable";
console.log(`this is a ${variable}`);

const constant = `some things need to be colored ${variable2}`;

console.log(constant, variable);

if (age !== 40 || variable2 === 420) {
  console.log("you are not the right age");
}

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
  age: 120,
  name: `Brent`,
};

console.log(wesConst.age);
console.log(wesConst.doesNotExist);

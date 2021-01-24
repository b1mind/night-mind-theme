import { imported } from "nothing";
export default async function unreachableCode() {
  return 10;
}

//never used
import { nothing } from "nothing";
const hello = "I am never used";
let world = "never used";
const mindArrows = () => {};
doesNotExist.nope(`I'm never imported`);

class Widget extends React.Component {}
Widget;

imported.call("I am imported");

const someNew = new Date().getDate();
console.log(someNew.checking);

function functionJunction(e, params, ...args) {
  const paramsConst = params;
  console.log(params, paramsConst);

  if (e !== 40 || params.includes(420)) {
    let someArgs = [...args];

    const a = this.thing;
    someArgs = a;
  } else {
    let variable = params.someObject;

    console.log(`this is a ${variable}`);
  }
}

functionJunction();

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

const turneryOps = age === 100 ? "old person" : "not that old";

const brent = function () {};
let lastName = "Morton";
const age = 200;

console.log(brent, lastName, age);

let variable2 = 420;

const constant = `some things need to be colored ${variable2}`;

console.log(constant, variable);

myObj.addProps(age);

turneryOps;

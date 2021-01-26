import { imported } from "nothing";
import * as React from "React";

//never used
import { nothing } from "nothing";
const hello = "I am never used";
let world = "never used";
const mindArrows = () => {};
doesNotExist.nope(`I'm never imported`);

class Widget extends React.Component {}
Widget.apply();
imported.call("I am imported");

export default async function unreachableCode(res) {
  try {
    let data = await res;
    return data;
  } catch (error) {
    console.error(error);
  }
}

let something = JSON.parse(res);

const constant = `some things need to be colored ${variable2}`;
let variable;

function functionJunction(e, params, ...args) {
  const paramsConst = params;
  console.log(params, paramsConst);

  if (e !== 40 || (params.includes(420) && 0 >= 0)) {
    const age = age <= 100 ? "not that old" : "old person";
    let someArgs = [...args];

    const someNew = new Date().getDate();
    someArgs = [...someArgs, someNew];
    const myObj = {
      prop: 12,
      nested: {
        property: {
          boolean: true,
          some: () => {
            return "some shit";
          },
        },
      },
      arraySure: [1, 3, 4, 5],
      initialAge: age,
      addProps: function (e, index) {
        this.arraySure = [x, y, z];
        return prop + (nested.prop / age) * index;
      },
    };

    let boolean = !myObj.nested.property.boolean;

    variable = myObj;
  } else {
    if (params) {
      variable = params.someObject;
      if ((e) => 1 + 2 !== e) {
        const a = this.thing;
        return `this is a ${variable} what does ${a} do;`;
      }
    }
  }
}

let variable2 = 420;
variable2 = 421;

constant.anchor();

console.log(constant.length, variable.length);
functionJunction();

const brent = function () {};

let lastName = "Morton";
const age = 200;

console.log(age, brent, lastName);

myObj.addProps(age);

function switchStatement() {
  switch (key) {
    case value:
      break;

    default:
      break;
  }
}

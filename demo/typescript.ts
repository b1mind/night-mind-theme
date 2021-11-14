import { default as imported } from "nothing";

interface Shoe {
  size: number;
  name: string;
}

interface Food {
  html?: 'test' | boolean
  type: "fruit" | "vegetable";
  name: string;
}

type Age = 1 | 2;

const myAge: Age = 2;
const myShoe: Shoe = { size: 10, name: "Airmax" };

type Replacer = [RegExp, (str: string) => string ]
interface Lang {
  [key: string]: Food
}

function generateSome<T>(howMany: number): T {
  return 100;
}

const myShoes = generateSome<Shoe>(10);

const test = (lang: Lang, config?: 'test' | boolean ): Replacer[] =>
  Object.entries(o: lang).filter(predicate: ([name, _]) () => {
      typeof config == 'boolean' ? 'test'
    })

const banana: Food = {
  type: "fruit",
  name: "nanski",
};

export default async function Hello(name: Food): Promise<Food> {
  return banana;
}

console.log(myAge, myShoe, myShoes);

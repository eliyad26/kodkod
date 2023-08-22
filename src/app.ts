console.log("hello world!");

//1
const bigger: (n1: number, n2: number) => number = (n1, n2) => {
  if (n1 > n2) {
    return n1;
  }
  return n2;
};
console.log("1, works!" + bigger(1, 2));

//2
const biggerprint: (n1: number, n2: number) => void = (n1, n2) => {
  if (n1 > n2) {
    console.log(n1);
  }
  console.log(n2);
};

biggerprint(7, 8);

//3
const zugi: (n1: number) => string = (n1) => {
  if (n1 % 2 === 0) {
    return "is zugi!!!";
  }
  return "not zugi!!!";
};

console.log(zugi(9));

//4
const stringlength: (string1: string) => number = (string1) => {
  return string1.length;
};

console.log(stringlength("hello_Teddy"));

//5
const myfirstarray: (num1: number) => number[] = (num1) => {
  let arr1 = [];
  for (let i = 0; i < num1; i++) {
    arr1.push(i);
  }
  return arr1;
};

console.log(myfirstarray(7));

//6
const theBiggest: (arr1: number[]) => number = (arr1) => {
  let big1: number = arr1[0];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > big1) {
      big1 = arr1[i];
    }
  }
  return big1;
};

let arr1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3333];
console.log(theBiggest(arr1));

//7
interface person {
  name: string;
  age: number;
  isStudent: boolean;
}

//8
const person: person = {
  name: "eliya",
  age: 13,
  isStudent: true,
};

const printPerson: (obj1: person) => string = (obj1) => {
  const personString = JSON.stringify(obj1);
  return personString;
};

console.log(printPerson(person));

//9
const olderThen12: (obj1: person) => boolean = (obj1) => {
  let goodAge: boolean = true;
  if (obj1.age < 12) {
    goodAge = false;
    return goodAge;
  }
  return goodAge;
};

console.log(olderThen12(person));

//10
interface Book {
  Title: string;
  Author: string;
  Year: number;
}

//11
type reader = {
  person: person;
  favoriteBook: Book;
};

//12
const oldestReader: (arr1: reader[]) => reader = (arr1) => {
  let answer: reader = arr1[0];
  arr1.forEach((element) => {
    if (answer.person.age < element.person.age) {
      answer = element;
    }
  });
  return answer;
};

//13
const oldestBook: (arr1: reader[]) => reader = (arr1) => {
  let answer: reader = arr1[0];
  arr1.forEach((element) => {
    if (element.favoriteBook.Year > answer.favoriteBook.Year) {
      answer = element;
    }
  });
  return answer;
};

// Comparision Operators   ans is in true or false
// let num1 = 6;
// let num2 = 7;
// console.log(num1 < num2);

//    Ternary operators / Conditional Operators
// let age = 8;
// let drink = age >=5 ? "cofee" : "milk"
// console.log(drink)

//   And Operators

// Simple  code  and lengthy
// let firstName = "Harshit";
// let age = 16;

// if (firstName[0] === "H"){
//     console.log("Your Name start with H")
// }
// if (age > 18){
//     console.log("You are above 18")
// }

// let firstName = "Harshit";
// let age = 16;

// if (firstName[0] === "H" && age > 18) {
//   console.log("Name starts with H and above 18");
// } else {
//   console.log("inside else");
// }

// for of loop

// const fruits = ["apple", "mango", "bananan"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// for in loop

// const fruits = ["apple", "mango", "banana"];

// for (let fruit in fruits) {
//   console.log(fruit);
// }

//  spread operators /    how to clone array
// let array1 = [1, 2, 3];

// let array2 = [...array1];
// console.log(array2);

// object destructuing
// const band = {
//   bandName: "Zaman Mehmood",
//   famousSong: "lalalalal",
// };
// console.log(band);
// OR
// const band = { bandName: "hihihi", famousSong: "lalalalal" };
// console.log(band);

// hoisting

// function hello() {
//   console.log("hello world");
// }
// hello();

//  hoisting is to call function before decleration

// hello()
// function hello (){
//     console.log("Hello world and ")
// }

//   Default parameters

// function addTwo(a, b) {
//   return a + b;
// }
// const ans = addTwo(4, 8);
// console.log(ans);

//   Reduce Method
// sum of all the numbers
// const numbers = [1, 2, 3, 4, 5, 10];
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
// console.log(sum);

// accumulator  , CurrentValue ,  return
// 1                    2        3
// 3                    3        6
// 6                    4        10
// 10                   5        15
// 15                   10       25

// some method     koi number even ha k ni true or false ma return kara ga
// const numbers = [3,5,8,9]
// const ans = numbers.some((number) => number/2===0)
// console.log(ans)

// Parameters
// function(a){
//     console.lo(a)
// }

// Break Keyword
// for(let i=1; i<=10; i++){
//     if(i===4){
//         break;
//     }
//     console.log(i)
// }
// console.log("Hello there")

// continue Keyword
// for(let i=1; i<=10; i++){
//     if(i===4){
//         continue;
//       }
//     console.log(i)
// }
// console.log("Hello there")

//    While loop

// let i = 10;
// while (i <= 9) {
//   i++;
//   console.log(i);
// }

// trim()
// let firstName = "    Zaman      ";
// firstName = firstName.trim();
// console.log(firstName);

//    toUpperCase()
// let firstName = "zaman";
// firstName = firstName.toUpperCase();
// console.log(firstName);

// toLowerCase();
// let firstName = "ZAMAN MEHMOOD";
// firstName = firstName.toLowerCase();
// console.log(firstName);

// Template String
// let age = 22;
// let firstName = "Harshit";

// let aboutMe = "my name is"+ firstName+ "my name is"+ age;
// console.log(aboutMe);

// let age = 22;
// let firstName = "Harshit";
// let aboutMe = `my name is ${firstName} and my age is ${age}`;
// console.log(aboutMe);

//  Rest Parameters
// function myFunc(a,b,...c){
//     console.log('a is ${a}')
//     console.log('b is ${b}')
//     console.log('c is', c )

// }

//   myFunc(3,4,5,6,7,8,9)

//    undefined
//    let firstName;
//    console.log(typeof firstName)

//    Null
// let myVar = null;
// console.log(myVar);
// console.log(typeof myVar)     // ya ak object da ga jo k js ma galti ha

// find method
// const myArray = ["Hello", "Cat", "dog", "lion"];

// function isLength(string) {
//   return string.length === 5;
// }

// const ans = myArray.find(isLength);
// console.log(ans);

// every method

// const numbers = [2, 4, 6, 8, 10];

// function isEven(number) {
//   return number / 2 === 0;
// }
// const ans = numbers.every(isEven);
// console.log(ans);

// Proto

// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };

// const obj2 = Object.create(obj1);
// console.log(obj1);
// console.log(obj2.__proto__);

//  proototype
// give us a object that object is  called prototype

// function hello() {
//   console.log("hello world");
// }
// console.log(hello.prototype);

//    class

// class CreateUser {
//   constructor(firstName, lastName, email, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//   }
// }
// const user1 = new CreateUser("harshit", "Ali", "zaman342003@gmail.com", 22);
// console.log(user1);

// Inheritence

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Dog extends Animal {}

// const tommy = new Dog("tommy", 3);
// console.log(tommy);

//    getters     method ko ak property ki tarh use kar sakta hain
//    setters     set method sa ham firstname or lastname ki values ko set kar sakta hain
// class person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   setName(firstName, lastName) {
//     this.firstName = firstName; //  set sa ham firstName or lastName ko change kar raha hain
//     this.lastName = lastName;
//   }
// }

// const person1 = new person("zaman", "mehmood", 5);
// // console.log(person1.fullName);
// person1.setName("mohit", "sahab");
// console.log(person1.firstName);
// console.log(person1.lastName);

// dot notation vs bracket notation

// const person = {
//   name: "Zaman",
//   age: 22,
//   hobby: "Playing Cricket",
// };
// console.log(person.age);

// map method
// const colors = ["red", "green", "blue", "grapes"];
// const items = colors.map((color) => `<li>${color}</li>`);
// console.log(items);

// Callback Function

// function myFunc2() {
//   console.log("inside my Fun2");
// }

// function myFunc(a) {
//   a();
// }

// myFunc(myFunc2);

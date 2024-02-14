//console.log('Hello World!')

//var firstname  = "Tony"
//var lastname   = "Stark"
//var c = firstname + " " + lastname
//var name = '${firstnam} ${lastname}'

//console.log(name)

// FUNCTIONS

// function sum(a,b){
//     return a + b
// }

// var c = sum(1,2)
// console.log(c)

// var sumFn = (a,b) => {
//     return a + b
// }

// var d = sumFn(2 ,3)
// console.log(d)

// //Prog to print odd or even
// const oddEven = (a) => {
//     if (a % 2 == 0) {
//         return "Even"
//     } else {
//         return "Odd"
//     }
// }

// function add(a,b) {
//     return a + b
// }
// add (1,2)

// var sub = function(a,b) {
//     return a - b
// }

// console.log(add(2,3))

// var oddeven = (a) => (a % 2 == 0) ? "Even" : "Odd"

// console.log(oddeven(5))

//program to vote or not vote
// var eligibletovote = (a) => (a>=18) ? "Vote" : "Not vote"

// console.log(eligibletovote(21))

// console.log(1 == true)

// var globalVariable = 'I am a global variable';

// //Global Variable
// function printGlobalVariable(){
//     console.log(globalVsariable)
// }
// printGlobalVariable()
// console.log(globalVariable)

// BLOCK SCOPE
// if (true) {
//     var b = 20
//     console.log('inside block', b)
// }
// console.log('outside block',b)

//REASSIGNMENT AND REDECLARATION
// var a = 10
// a = 20

// console.log(a)

// var a = 10
// var a = 20

// console.log(a)

//HOISTING 
// console.log(a)

// var a = 10

// //HIGHER ORDER FUNCTI0NS
//Function as argument
// function fun1(a){
//     console.log("Executing fun");
//     a();
// }

// function fun2(){
//     console.log("function 2 is executed!");

// }

// fun1(fun2);

// //Function as return value
// function multiplyBy(factor){
//     return function (number) {
//         return 13*3;
//     };
// }

// var multiplyByTwo = multiplyBy(2);
// console.log(multiplyByTwo(5));

// var multiplyByThree = multiplyBy(3);
// console.log(multiplyByThree(5));

// //call back function
// setTimeout(() => {
//     console.log('Welcome!')
// }, 10)

// console.log('Page loaded')
//asynchronous call back
// let i = setInterval(() => {
//     console.log('Interval')
// }, 2000)

// //to stop the interval
// clearInterval(i)
// console.log('JS')

//array - collection of values

// var arr = [1, 2,3];
// var newArr = new Array(1,2,3)

//splicing
// var myArray = [0,1,2,3,4,5,6,7,8,9]
// var splice = myArray.splice(3,5)
// console.log(splice);
// console.log(myArray) // original array

// const arr = [1,2,3,4,5]

// var splice = arr.splice(0,4)
// console.log(splice);

// const arr = [0,1,2,3,4,5,6,7,8,9,10]
// arr.push(7,8,9,10)
// var splice = arr.splice(5,12)
// console.log(splice)

// //for..loop
// var arr = [11,2,30]
// for(var element of arr) {
//     console.log(element *2)
// }

// let numbers = [1,2,3,4,5];
//  let even = [];
// for(let i = 0; i < numbers.length; i++) {
//        if (numbers[i] % 2 == 0)
//        even.push(numbers[i]);
//        console.log(`Even numbers are: ${even}`);
// }

//for each
// const arr = [1,2,3,4,5]
// const newArr = []
// arr.forEach((element) => { //higher order function anonymous function
//     if(element %2 == 0) {
//         newArr.push(element)
//     }
// })

// console.log(newArr)

// x = 10; //default var data type will be taken
// console.log(x)
// var x

//iterator - increments one by one
// const array1 = ['a', 'b', 'c'];
// const iterator1 = array1[Symbol.iterator]();

// for (const value of iterator1) {
//   console.log(value);
// }

//at  - takes an integer value and returns the item at that index, allowing for positive and negative integers
// const array1 = [5, 12, 8, 130, 44];

// let index = 2;

// console.log(`An index of ${index} returns ${array1.at(index)}`);
// // Expected output: "An index of 2 returns 8"

// index = -2;

// console.log(`An index of ${index} returns ${array1.at(index)}`);

//concat - merges two or more arrays
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);

// //copyWithin() - shallow copies part of this array to another location in the same array and returns this array without modifying its length.
// const array1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(array1.copyWithin(0, 3, 4));
// console.log(array1.copyWithin(1, 3));

// // fill() - changes all elements within a range of indices in an array
// const array1 = [1, 2, 3, 4];

// console.log(array1.fill(0, 2, 4));
// console.log(array1.fill(5, 1));
// console.log(array1.fill(6));

// //every - instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));

// //filter - nstances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(result);

//find ()
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find((element) => element > 10);
// console.log(found);

// arr.forEach((element) => {
//     newArr.push(element * 2)
// })

// //const arr = {1,2,3}
// //console.log(arr.length)

// const modifiedArray = arr.map((element) => {
//     return element * 2
// })
// console.log(modifiedarray)

// const result = arr.map((el) => {return el % 2 === 0 ? el : el * 2})

// console.log(result)

// const arr = [6,5,4,3,2,1]

// arr.filter((element) => {
//     return element % 2 === 0
// })

// console.log(arr)

//sort
// arr.sort()
// console.log(arr)

// const items = [1,2,3,4,5,6,7]
// const reversedItems = items.toReversed();
// console.log(reversedItems);

// const arr = [1,2,"Tony",0,false, undefined,"Stark",null,""];
// // items.sort();
// // const reversedItems = items.toReversed();
// // console.log(reversedItems)
// // console.log(items);

// const items = arr.filter((arr) => arr.length > 6);

// console.log(items);

//object
//key - value pairs

// const obj = {
//     fname: 'Rahul', //key - string object - any datatype
//     lname: 'Dravid',
//     age: 40,
//     marks : {
//         math : 80,
//         science: 75,
//         social: 90
//     }
// }

// const sub = 'marks'
// console.log(`${obj.fname} ${obj.lname}'s age is ${obj.age}` )
// console.log(`${obj.fname} ${obj.lname}`)

// const keytoAccess = 'age'
// console.log(obj.fname)
// console.log(obj["lname"])
// console.log(obj[keytoAccess])

// const obj1 = {
//     a: 1,
//     a: 2
// }

// const obj2 ={ ...obj1} //spread operator
// obj1.a = 10
// console.log("obj1", obj1)
// console.log("obj2", obj2)

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const arr3 = [...arr1,...arr2, 7,8,9]
// console.log(arr3)

// const obj1={
//     a: 1,
//     b: 2
// }

// const obj2 = {
//     c: 3,
//     d: 4
// }

// const obj3 = {...obj1,...obj2, a: 5}
// console.log(obj3)

// //DESTRUCTURING
// const arr = [10, 20, 30, 40, 50]
// const [a, b, ...rest] = arr  // rest operator is used in destructing
// console.log(rest)

// //using objects

// const obj1 = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50
// }
// const obj2 = {a, b,...rest}
// console.log(rest)

//array of objects
// const arr = [{
//     name: "Joe",
//     age: 28,
//     height: 5.8
// }, {
//     name: "Ram",
//     age: 23,
//     height: 6.2
// }, {
//     name: "Suriya",
//     age: 25,
//     height: 6.1
// }]
// const res = arr.map((obj) =>{
//     return obj.age
// })
// console.log(res)

// const res = arr.sort((a,b) => {
//     return a.height - b.height
// })
// console.log(res)

// TASK-2

// const ageBasedSort = arr.sort((a,b) => {
//     return b.age - a.age
// })
// console.log(res)

// TASK-3

// const youngestperson = arr.sort((a,b) =>a.height - b.height)[0].name
// console.log(youngestperson)

//TASK 4
// const tallestperson = arr.sort((a,b) => b.height - a.height) [0].name
// console.log(tallestperson)

// //TASK 5
// const  res = arr.filter((person) => person.age > 24).map((el) => el.name)
// console.log(res)

//1st question
// function countWords(sentence) {
//     const words = sentence.split();
//     return words.length;
//   }
//   const sentence = "The quick brown fox";
//   const wordCount = countWords(sentence);
  
//   console.log(`The sentence '${sentence}' has ${wordCount} words.`);
  
  //2nd question
//   function capitalizeFirstLetters(sentence) {
//     const lowerCaseSentence = sentence.toLowerCase();
//     const words = lowerCaseSentence.split(/\s+/);
//     const capitalizedWords = words.map((word) => word[0].toUpperCase() + word.slice(1));

//     return capitalizedWords.join(" ");
//   }
//   const sentence = "hello world!";
//   const capitalizedSentence = capitalizeFirstLetters(sentence);
  
//   console.log(capitalizedSentence); 

//3rd question
// function reverseWords(sentence) {
//     const words = sentence.split(" ");
  
//     const reversedWords = words.reverse();
//     return reversedWords.join(" ");
//   }
//   const sentence = "The quick brown fox";
//   const reversedSentence = reverseWords(sentence);
  
//   console.log(reversedSentence);

function addTask() {
  if (seconds == 0) {
    alert('please start timer first')
  } else {}'\'
  console.log('Add Task')
  const task = document.getElementById("input-task").value
  const desc = document.getElementById("input-description").value
  console.log(task,desc)

  document.getElementById("table-body").innerHTML += `
  <tr>
      <td>${task}</td>
      <td>${desc}</td>
      <td>${seconds}</td>
  </tr>
  `
}
let seconds = 0
let minutes = 0
let interval

function starttimer() {
  interval = setInterval(() => {
    seconds++
    if (seconds > 59) {
      seconds = 0
      minutes++
    }
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '00')
  }, 10)
}

function stopTimer() {
  clearInterval(interval)

function resetTimer() {
  clearInterval(interval)
  seconds = 0
  document.getElementById('seconds').innertext = '00:00'
}
}


  

                    


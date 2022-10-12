
///10/03/2022
// ex1
// const printMessage = function (param) {
//     console.log(`You just enetred ${param}`)
// }

// //console.log(typeof printMessage);

// const newMessage  = printMessage;
// console.log(typeof newMessage)
// newMessage("Hello")
// printMessage('hello');

//ex2
// function sum(num1, num2){
//     return () => num1 + num2
// }
// const newSum = sum(10,20);

// console.log(sum(10,20));
// console.log(newSum());

//ex3
// let calculator = (num1, num2, operator) => {
//     if (operator.toLowerCase() == 'add'){
//         return num1 + num2
//     }
//     if (operator.toLowerCase() == 'sub'){
//         return num1 - num2
//     }
//         // return operator.toLowerCase() == 'add' ? num1 + num2:
//         //  operator.toLowerCase() == 'sub' ?  num1 - num2:
//         //  null;
// }

// let calculator = (num1, num2, operator) => 
// operator.toLowerCase() == 'add' ? num1 + num2: 
// operator.toLowerCase() == 'sub' ?  num1 - num2: 
// null; 
//console.log(calculator(5,6,'ADd'))

// //callback - to look for other declared function with this name  in code
// let calculator = (num1, num2, callback) => callback(num1,num2)
// const add =  (num1, num2) => num1 + num2
// const sub = (num1, num2) => num1 - num2
// console.log(calculator(2,6, sub))
// console.log(calculator(2,6, function sub(num1, num2) {return num1 - num2})) // callback in full realization


//09/28/2022
// //example_1
// function checkEven(num) {
//     // console.log(num % 2 ? false : true)
//     return num % 2 ? 'odd' : 'even'
// }

// let arr = [2, 4, 7, 5, 10]

// for (let i = 0; i < arr.length; i++) {
//     // checkEven(arr[i]);
//     // console.log(checkEven(arr[i]))
//     console.log(`${arr[i]} - ${checkEven(arr[i])}`)
// }

// // //example_2
// let name = 'Serg'

// console.log(name);
// let str = printMessage();
// console.log(str);
// console.log(name);

// function printMessage() {
//     let name = 'Anna';
//     return "Hello " + name;
// }
// console.log(printMessage())

// // //example_3
// let num = 10;
// // let arr = 1;
// // num = arr;
// function count(){
//     // let num = 10;
//     num++
//     console .log(num)
// }
// count();
// count();
// count();

// // ex_4
// function sum(num1,num2) {
//     return num1 + num2
// }
// console.log(sum(2,4) + sum(30,50))

// // ex_5 when we do not know how many parameters will be
// function sum(){
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++){
//         sum+= arguments[i]
//     }
//     return sum
// }
// // console.log(sum(10, 30, 40, 50, 60))

// let arr = [ 10,20,30,50,60,12];
// let result = sum(...arr)
// console.log(result)

//ex_6 =>function
// function sum(num1,num2) {
//     return num1 + num2
// }

// // const newSum = (num1,num2) => {
// //     return num1 + num2
// // }

// const newSum = (num1,num2) =>  num1 + num2;

// console.log(newSum(2,4) + sum(30,50))

// tasks 
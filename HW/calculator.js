
// variant 4
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

// let calculator = (num1, num2, callback) => callback(num1,num2)
// const add =  (num1, num2) => num1 + num2
// const sub = (num1, num2) => num1 - num2
// const mult = (num1, num2) => num1 * num2
// const div = (num1, num2) => num1 / num2
// console.log(calculator(2,6, sub))
//console.log(calculator(2,6, function sub(num1, num2) {return num1 - num2}))

// variant 3__ fucntion
//  let calculate = (num1,num2,sign) => {
//     if (sign == "+"){
//     return num1 + num2 
//     }
//     if (sign == "-"){
//     return num1 - num2
//     }
//     if (sign == "/" && num2 != 0) {
//     return num1 / num2
//     }
//     if (sign == "*") {
//     return num1 * num2
//     }
//  }
//  console.log(calculate(2,10,'-'));

//variant 1____ if 
// let num1, num2, result, sign;

// num1 = 2;
// num2 = 5;
// sign = "/"

// if (sign == "+"){
//   result = num1 + num2 
//   document.write(`Your sum: ${result}.`)
// }
// else if (sign == "-"){
//   result = num1 - num2
//   document.write(`Your difference: ${result}.`)
// }
// else if (sign == "/"){
// if (num2 === 0){
//   document.write("Please enter another number. Do not allow divide on 'Zero'.")
// }
//   else {
//     result = num1 / num2
//   document.write(`Your devision: ${result}.`)
// }
// }
// else if (sign == "*"){
//   result = num1 * num2
//   document.write(`Your multyplication: ${result}.`)
// }
// else {
//  document.write("Please enter correct sign ")
// }

//variant2____ switch
// switch(sign){
//   case "+": 
//     result = num1 + num2; 
//     console.log(`Your sum: ${result}.`);
//     break;
//   case "-": 
//     result = num1 - num2;
//     console.log(`Your difference: ${result}.`);
//     break;
//     case "*": 
//     result = num1 * num2;
//     console.log("Your multyplication: " + result);
//     break;
//     case "/": 
//    if (num2 === 0){
//     console.log("Please enter another number. Do not allow divide on 'Zero'.");
//     }
//     else {
//     result = num1 / num2;
//     console.log(`Your devision: ${result}.`);
// }
//     break;
//   default:
//     console.log("Please enter correct sign.");
// };


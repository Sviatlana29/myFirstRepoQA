let arr = [1, "apple", null, 4, undefined];

 console.log(typeof arr)
 console.log(arr.length);
 console.log(arr[arr.length - 1]);
 console.log(arr.flat(-1));

// first loop
 let index = 0;
 while (index < arr.length) {
    console.log(arr[index]);
    index++;
  }

// // from the end
//  let newEnd = arr.length - 1;
//  while (newEnd >= 0) {
//     console.log(arr[newEnd]);
//     newEnd--;
//  }

// //second loop
// let i = 0;
// do {
//     console.log(i)
//     i++;
// } while (i < 5);

// third loop
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) // divide without ostatka
//     {
//         sum += arr[i];
//     }
    
// }
// console.log(sum);

// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);

// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log(min);

// let str = 'Hello';
// console.log(str.length);
// console.log(str[4]);
// let sum = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == 'l') {
//         sum++; 
//     }
// }
// console.log(sum);

// forth loop
// let str = 'Hello';
// let summ = 0;

// for (let letter of str) {
//     if (letter == 'l') {
//         summ++;
//     }
// }
// console.log(summ);

// let fruits = ['apple', 'orange', 'plum'];
// for (let fruit of fruits) {
//     if (fruit == 'plum') {
//         console.log('exist');
//     }
// }
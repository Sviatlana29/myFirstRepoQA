// let arr = [1, 2, 10, -5, 7, 25, 100, 98, 15];
// let arr2 = [25, 56, 1, 25, 7, 78, 98];
// let sum = 0;
// for (let i = 0; i < arr.length + arr2.length; i++) {
//     if (i < arr.length) {
//         sum += arr[i];
//     } else {
//         sum += arr2[i - arr.length];
//     }
// }
// console.log(sum);
//
// let sum1 = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum1 += arr[i];
// }
// for (let i = 0; i < arr2.length; i++) {
//     sum1 += arr2[i];
// }
//  console.log(sum1)

// https://docs.google.com/document/d/1D03PwaxY2BHEL9sr3V4oEQOehRdaU8IOEGAdW9YAh74
// done  - Count the Monkeys!	https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
// done - Filling an array (part 1)	https://www.codewars.com/kata/571d42206414b103dc0006a1
// done - Series of integers from m to n	https://www.codewars.com/kata/5841f680c5c9b092950001ae
// done - max diff - easy	https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095
//     function maxDiff(list) {
// if ( list. length > 1 ) {
//     for (let i = 0; i < list.length - 1; i++) { 
          
//         for (let j = i + 1; j < list.length; j++){
          
//           if (list[i] > list[j]) {
//               let temp =  list[i];
//               list[i] = list[j];
//               list[j] = temp;
//               }
//           }
//       }
   
//      return list[list.length - 1] - list[0];
// }
 
//     return 0;
// }       
    
//       console.log(maxDiff([]))

// done - You only need one - Beginner	https://www.codewars.com/kata/57cc975ed542d3148f00015b
// ES6 string addition	https://www.codewars.com/kata/582e4c3406e37fcc770001ad
// Power	https://www.codewars.com/kata/562926c855ca9fdc4800005b
// Jenny's secret message	https://www.codewars.com/kata/55225023e1be1ec8bc000390
// Thinkful - Logic Drills: Traffic light	https://www.codewars.com/kata/58649884a1659ed6cb000072
// The Feast of Many Beasts	https://www.codewars.com/kata/5aa736a455f906981800360d
// Type of sum	https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba
// A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"	https://www.codewars.com/kata/562e98755e9214cd2500003d
// Find min and max	https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130
// Factorial	https://www.codewars.com/kata/57a049e253ba33ac5e000212
// Simple fibonacci strings	https://www.codewars.com/kata/5aa39ba75084d7cf45000008
// No zeros for heros	https://www.codewars.com/kata/570a6a46455d08ff8d001002
// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript

// задача. нарисовать шахматную доску 8х8. и на ней пронумеровать все ходы коня.
//предлагаю нарисовать следующий ромб:
//           1
//          121
//         12321
//        1234321
//       123454321
//      12345654321
//     1234567654321
//    123456787654321
//   12345678987654321
// 1234567890987654321
//  12345678987654321
//   123456787654321
//    1234567654321
//     12345654321
//      123454321
//       1234321
//        12321
//         121
//          1


// let n = 10;
// let str = '';
// for (let i = 1; i <= n; i++) {  
//     for (let j = 1 ; j <= n - i; j++){  
//     str += " "
//     }

//     for (let s = 1 ; s <= i; s++){   
//     str += s % 10;
//     }

//     for (let l = i - 1;  l >= 1; l--){
//             str += l % 10;
//         }
//     str += '\n'
// } 

// for (let i = n - 1; i >= 1; i--) {  
//  for (let j = 1 ; j <= n - i; j++){  
//             str += " "
//             }
//     for (let s = 1 ; s <= i; s++){   
//     str += s % 10;
//     }
//     for (let l = i - 1;  l >= 1; l--){
//         str += l % 10;
//     }
//     str += '\n'
// } 
// console.log(str);



// небольшую ёлочку:
// *
// ***
// *****
// *******
// *********

// //v_1
// let strNum = 5;

// for (let i = 0; i <= strNum; i++){
//     let tree = ''
//     for (let j = 0; j <= i; j++){
//         tree += '*'
//     }
//     console.log(tree)
// }

//v_2
//     *
//    ***
//   *****
//  *******
// *********


// vers1_Stan
//  let strNum = 15;
//  let tree = '';

// for (let i = 0; i < strNum; i++){
//     for (let j = i; j < strNum - 1; j++){
//         tree += ' '
//     }
//     for (let k = 0;  k < 2 * i + 1; k++){
//         tree += '*'
//     }
//     tree += '\n'
// } 
// console.log(tree)

// // vers2_Stan
// let strNum = 15;
// let tree = '';

// for (let i = 0; i < strNum; i++){
//     tree += '|'
//    for (let j = i; j < strNum - 1; j++){
//        tree += ' '
//    }
//    for (let k = 0;  k < 2 * i + 1; k++){
//        tree += '*'
//    }
//    for (let s = i; s < strNum - 1; s++){
//     tree += ' '
// }
//    tree += '|';
//    tree += '\n'
// } 
// console.log(tree)



// vers_T 
// let strNum = 5;

// for (let i = 0; i < strNum; i++){
//     let tree = '';

//     for (let j = 0; j < strNum - i; j++){
//         tree += ' '
//     }

//     for (let k = 0;  k < i; k++){
//         tree += '*'
//     }
//     tree += '*'

//     for (let l = 0;  l < i; l++){
//         tree += '*';
//     }
//      console.log(tree)
//     //console.log(i)
// }

 // и небольшую пирамидку:
//  1
//  12
//  123
//  1234
//  12345

// let n = 5;
// let str = '';
// for (let  i = 1; i <= n; i++) {  
// for (let j = 1 ; j <= i; j++){  
//     str += j 
// }
// str += '\n'
// } 
// console.log(str);

 // и небольшую пирамидку:
//      1
//     12
//    123
//   1234
//  12345

// let n = 5;
// let str = '';

// for (let  i = 1; i <= n; i++) {  
//     for (let j = 1 ; j <= n - i; j++){  
//     str += " "
//     }
//     for (let s = 1 ; s <= i; s++){  
//     str += s
//     }
//     str += '\n'
// } 
// console.log(str);


// и небольшую пирамидку:
// 1 
// 2 6 
// 3 7 10 
// 4 8 11 13 
// 5 9 12 14 15 

// let strNum = 5;
// let tree = '';

// for (let i = 1; i <= strNum; i++){
//     let num = i;
//     for (let j = 1; j <= i; j++){
//         tree += num + " ";
//         num += strNum - j;
//     }
//     tree += '\n'
// }

// console.log(tree)

//09/21

// function code (arr) {
//     // return arr == null ? -1 : arr.length;
//     // return arr ?  arr.length : -1;
//      return !arr ? -1 : arr.length;
//     //  return Array.isArray(arr)
// }
// const arr = [1,2,3,4];
// console.log(code(arr)) // exist array
// console.log(code()) // not exist array

////resort array
// const arr = [10, 2, 4, 67, 97, 139, 3, 7]
// const arr = [-0, 1, 2, -3, 4, 5, -6]
// const arr = [1, 2, 3, 4]
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++){
//         if ( arr[i] > arr[j]) {
//             let temp =  arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);
// console.log(arr[arr.length - 1] - arr[0]);



    // for (let i = 0; i < arr.length - 1; i++) { 
      
    //   for (let j = i + 1; j < arr.length; j++){
        
    //     if (arr[i] > arr[j]) {
    //         let temp =  arr[i];
    //         arr[i] = arr[j];
    //         arr[j] = temp;
    //         }
    //     }
    // }
    // console.log(arr);
    // console.log(arr[arr.length - 1] - arr[0]);
    // let list = [1, 2, 3, 4]


// console.log(arr[arr.length - 1]); // arr.at(-1) - max 
// console.log(arr[0]); // arr.at(0) - min 


//// words/number piramides
// let n = 5;
// let str = '';
// for (let  i = 1; i <= n; i++) {  //отвечает за количество строк
// for (let j = 1 ; j <= i; j++){  //отвечает за наполнение строки - increase order
// //for (let j = n + 1 -i ; j >= 1; j--){  // reverse order
//     str += j 
//     // str += '1'
// }
// str += '\n'
// } 
// console.log(str);

// let n = 5;
// let str = '';
// for (let  i = 1; i <= n; i++) { 
//     str += ' '.repeat(n - i);
// for (let j = 1 ; j <= i; j++){  
//     str += j 
// }
// str += '\n'
// } 
// console.log(str);

// // ////piramide
// let n = 5;
// let str = '';
// for (let  i = 1; i <= n; i++) { 
//     str += ' '.repeat(n - i);
// for (let j = 1 ; j <= i; j++){  
//     str += j 
// }
// for (let j = i - 1 ; j >= 1; j--){  
//     str += j 
// }
// str += '\n'
// } 
// console.log(str);



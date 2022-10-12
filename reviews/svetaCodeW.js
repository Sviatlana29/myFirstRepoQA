// 06/10

/// Methods strings
//ex_1 String(n)
let n  = 15.25
console.log(String(n))
console.log(n.toString())
let c = ""+ n
console.log(c)
let b = `${n}`
console.log(b)
console.log(n.toFixed(1))
let heights = [4,2,3,'1']
console.log(heights.join())
// console.log(parseInt(n)) // for this methos '.' not a number and can split until '.' if the number at the beginning string
// console.log(1 * n)



//ex2 
let leteer = ''
console.log(leteer.toUpperCase())
n.toLowerCase

//ex3 concat
let str1 = 'I'
let str2 = 'I'
string.concat('', str2, str3)


//ex4
function res(str){
    const a = str.padStart(9, 'wood')
    return a
}
console.log(res(str)) // length of the string what to the  and then at the begining os the sring 

function res(str){
    const a = str.padEnd(9, 'wood')
    return a
}
res(str)  /// end to the end of string

// //ex5 includes
// let str = ' i did not feel myself good not'
// console.log('My'.includes('my')) // find element in string 
// console.log(str.includes('not', 9)) // number from when show element  kind of index 

// // ex 6 str.indexOf(otherStr,[index]) - sensetive to the case
// let str = ' a turtle is on beach'
// console.log(str.indexOf('tutrle', 3)) // if the index does not exist return -1
// console.log(str.lastIndexOf('turtle'))

// const str = 'Hello, my dear freeend.'
// let count = 0
// let position = str.indexOf('e')

// while (position != -1){
//     count++
//     position = str.indexOf('e', position + 1)
// }
// console.log(count)

// //ex 6 substring
// let str = 'hello0'
// console.log(str.substring(0,5)) // from start and end in ()

// //ex_7 slice
// str.slice(15) // return substring from mentioned index to the end
// str.slice(-4) // from the end
// str.slice(4,5) // subtring between indexes
// str.slice() // no change

//ex.8  replace
const p = 'jfhsfjhskjhfjsdkfsjkf fds fds fds'
console.log(p.replace('fds','dog')) // change first on second
console.log(p.replaceAll(/fds/gi,'dog')) //??? change all 
return x.replace(/ /g, '')  // as replace all
// //ex.9 split()
// let str = 'I do tp 2uoyb do do '
// console.log(str.split('do')) // get array
// console.log(str.split(/\d/))
// x.split(' ').join('')  // change 


//ex 10 trim(), trimStart(), trimEnd()
const str = '*dkl1km11*'
console.log(str.trim())

//ex10 str.endsWith('ending')
str.endsWith('ending') // compare the end of the string

//done https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce/train/javascript
// done https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
// done https://www.codewars.com/kata/56f695399400f5d9ef000af5/train/javascript
//done https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
// done https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
//https://www.codewars.com/kata/5aa3af22ba1bb5209f000037/train/javascript
//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
// https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
// https://www.codewars.com/kata/57a55c8b72292d057b000594/train/javascript
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript


//Задачи: //https://www.codewars.com/kata/5a084a098ba9146690000969
//https://www.codewars.com/kata/5effa412233ac3002a9e471d
//https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript
//https://www.codewars.com/kata/52e9aa89b5acdd26d3000127/train/javascript
//https://www.codewars.com/kata/5630d1747935943168000013/train/javascript
//https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript
//https://www.codewars.com/kata/5a02e9c19f8e2dbd50000167/train/javascript
//https://www.codewars.com/kata/58d3dd53b0fe8c9ac10000b3/train/javascript
//https://www.codewars.com/kata/55ea5650fe9247a2ea0000a7/train/javascript
//https://www.codewars.com/kata/557af4c6169ac832300000ba/train/javascript
//https://www.codewars.com/kata/559011063089b0d5500001aa/train/javascript
//https://www.codewars.com/kata/5631213916d70a0979000066/train/javascript
//https://www.codewars.com/kata/5a084a098ba9146690000969/train/javascript
//https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript
//https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce/train/javascript
//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
//https://www.codewars.com/kata/56f695399400f5d9ef000af5/train/javascript
//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
//https://www.codewars.com/kata/5aa3af22ba1bb5209f000037/train/javascript
//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
// https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
// https://www.codewars.com/kata/57a55c8b72292d057b000594/train/javascript
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
//https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript
//https://www.codewars.com/kata/5892595f190ca40ad0000095/train/javascript
//https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/train/javascript
//https://www.codewars.com/kata/55d410c492e6ed767000004f/train/javascript
//https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/train/javascript
//https://www.codewars.com/kata/57fe50d000d05166720000b1/train/javascript
//https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript
//https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript
//https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript
//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
//https://www.codewars.com/kata/56f695399400f5d9ef000af5/train/javascript
//https://www.codewars.com/kata/525d9b1a037b7a9da7000905/train/javascript
//https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript
//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
//https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript
//https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
//https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript
//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
//https://www.codewars.com/kata/5868812b15f0057e05000001/train/javascript
//https://www.codewars.com/kata/5a995c2aba1bb57f660001fd/train/javascript
//https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript
//https://www.codewars.com/kata/525f039017c7cd0e1a000a26/train/javascript
//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
//codewars.com/kata/name-shuffler
//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
//https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript
//https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript
//https://www.codewars.com/kata/57a55c8b72292d057b000594/train/javascript
//https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
//https://www.codewars.com/kata/5857e8bb9948644aa1000246/train/javascript
//https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript
//https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript
//https://www.codewars.com/kata/5b4e474305f04bea11000148/train/javascript
//https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
//https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
//https://www.codewars.com/kata/5639bdcef2f9b06ce800005b/train/javascript
//https://www.codewars.com/kata/57ebdf944cde58f973000405/train/javascript
//https://www.codewars.com/kata/5963b6f8a7000805ce000064/train/javascript
//https://www.codewars.com/kata/5aa3af22ba1bb5209f000037/train/javascript
//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
//https://www.codewars.com/kata/57f8ee485cae443c4d000127/train/javascript
//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
//https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
//https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript (edited) 





//ex7
//ex_1 interview task ??
//https://leetcode.com/problems/reverse-integer/
// let a = -123 // -321
// let n = 120 // 21

//ex2
//09/29

// There are n buildings in a line. 
// You are given an integer array heights of size n that represents the heights of the buildings in the line.
// // The ocean is to the right of the buildings. 
/// A building has an ocean view if the building can see the ocean without obstructions. 
// Formally, a building has an ocean view if all the buildings to its right have a smaller height.
// // Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.

// // Input: heights = [4,2,3,1] Ocean
// // Output: [0,2,3]

// let heights = [4,2,3,1]
// //             0 1 2 3 4 5
// let ocean = []

// for (let i = 0; i <= heights.length; i++){
//   if (heights[i] >=  heights[i+1]) {
//    ocean.push(i)
//   }
// }
// console.log(ocean)


//  let arr =['mamma','my', [1,2, null, undefined, true, 'c'], 'papac','cabc']

// function search(arr) {for(let i = 0; i < arr.length; i++){
//   for(let j = 0; j< arr[i].length; j++){
//     if(arr[i][j] == 'c'){
//       console.log(arr[i])
//     }
//   }
// }
// }
// search(arr)

// // 
// let arr = [1, 'mamamama', 'my', [1,2,'abcc', 5, -20,5, 'b', 'c'], 'papac', 'abc'];
// // var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
//  const pets = ['cat', 'dog', 'bat'];
//  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//  // ex_2 where numbers

//  function findNumbers (arr) {
//   for (let i = 0; i < arr.length; i++){
//     if (typeof(arr[i]) == 'number') {
//       console.log(arr[i])
//     }
//     for(let j = 0; j < arr[i].length; j++){
//       if (typeof(arr[i][j]) == 'number') {
//         console.log (arr[i][j])
//       }
//     }
//   }
//  }

//  findNumbers(arr); 




// ex_1 longest element in array
//  function arrLongest(arr) {
//   let longest = arr[0].length
//   let num = 0;
//   for (let i = 0; i <= arr.length - 1; i++){
//     if (longest < arr[i].length) {
//       longest = arr[i].length
//       num = i
//   }
//  }
//  return longest, num;
// }
//  console.log(arrLongest(words));




// 09/22
// // check strings or array inside
// let arr =['mamma','my', [1,2, null, undefined, true, 'c'], 'papac','cabc']
// for(let i = 0; i < arr.length; i++){
//   for(let j = 0; j< arr[i].length; j++){
//     if(arr[i][j] == 'c'){
//       console.log(arr[i])
//       // console.log(arr[i][j])
//     }
//   }
// }



// //spread operators
// let part = ['shoulders', 'knees'];
// let lyrics = ['head',...part, 'and', 'toes']
// console.log(lyrics)

//Sveta codegames 09/08
// Account Settings -> Clan -> пишите туда QAForEveryone -> Update внизу
// ========== middle ===========
// https://www.codewars.com/kata/56606694ec01347ce800001b
// function isTriangle(a,b,c)
// { if(a + b > c && b + c > a && a + c > b ) {
//   return true;
// }
//    return false;
// }

// https://www.codewars.com/kata/rock-paper-scissors

// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return "Draw!" 
//   }
//   else  if(p1 == "scissors" && p2 == "paper" || p1 == "rock" && p2 == "scissors" || p1 == "paper" && p2 == "rock" ) {
//     return "Player 1 won!"
//   }
//     else {
//     return "Player 2 won!"
//   }
// };
//https://www.codewars.com/kata/55cbd4ba903825f7970000f5
//right decision 
// function getGrade (s1, s2, s3) {
//   let avgGrade = (s1 + s2 + s3) / 3
//   if (avgGrade >= 90) {
//     return "A"; 
//   } else if (avgGrade < 90 && avgGrade >= 80) {
//     return "B";
//   } else if (avgGrade < 80 && avgGrade >= 70) {
//     return "C";
//   } else if (avgGrade < 70 && avgGrade >= 60) {
//     return "D";
//   } else {
//     return "F";
//   }
// }

// better
// function getGrade (s1, s2, s3) {
//   avg = (s1+s2+s3)/3;
//   if (avg < 60)  return "F";
//     else if (avg < 70) return "D";
//     else if (avg < 80) return "C";
//     else if (avg < 90) return "B";
//     else return "A";
// }

// https://www.codewars.com/kata/training-js-number-7-if-dot-else-and-ternary-operator
// function saleHotdogs(n){
//   if ( n < 5) {
//     return n * 100
//   } else if (n >= 5 && n < 10){
//     return n * 95
//   } else{
//     return n * 90
//   }
// }
// 
// function saleHotdogs(n){
//   return n*(n<5?100:n<10?95:90);
// }

//https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript

// function elevator(left, right, call){
//   if (Math.abs(call - right) == Math.abs(call - left)) {
//     return "right";
    
//   } else if (Math.abs(call - right) < Math.abs(call - left)) {
//     return "right";
//   }
//   else 
//     return "left";  
// }

// function elevator(left, right, call){
//   return Math.abs(left - call) < Math.abs(right - call) ? "left" : 'right';
// }

// function elevator(a, b, c){
//   return (c - a) **2 < (c - b) **2 ? "left" : "right"
// }

// function elevator(left, right, call){
//   return left == right ? 'right' : left < right && left >= call ? 'left' : left > right && left <= call ? 'left' : 'right';
// }
// https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascrip


// =========== hard ========
// https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/age
 //https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript   cat / dog 1
// https://www.codewars.com/kata/be-concise-i-the-ternary-operator

// https://www.codewars.com/kata/5a6d3bd238f80014a2000187 cat / dog 2
// let encript = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';
//   let transk = '';

// for (let i = 0; i < encript.lenght; i+=3) {
//   console.log(encript[i])
//   transk += encript[i]
// }
//  console.log(transk);
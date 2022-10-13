//10/12/2022

// const obj = {'a': 'a', b: 123, 'c' :true, d : {1:1, 2:2}}
// // newObj = obj
// // console.log(obj)
// // console.log(newObj)
// // console.log(obj == newObj)

// const testObj = {}
// Object.assign(testObj, obj) // clone the obj
// console.log(testObj)
// console.log(obj == testObj)

//______ for
// const obj = {apple: 12, plum: 10, grape: 15, orange: 8}
// for (let key in obj){
//     if ( key == 'plum'){
//         console.log(`${key} --- $${obj[key]}`)
//     }
// }

//_______ change in obj
// const arr = ['st', 'fg', 'cv']
// console.log({...arr}) // create object from array
// obj = {0: 12, 1: 10, 2: 15, 3: 8}
// obj[10] = 'Nb' // add key with value
// console.log(obj)
// obj[1] = 'Nb' // change values in key
// console.log(obj)
// delete obj[1] // delete all key and value
// console.log(obj)

// const nameF = 'Anna'
// const lesson = 'JavaScript'
// const obj = {
//     [nameF]: nameF, 
//     lesson: lesson
// }
// console.log(obj)

//_____ Static methods
// const subjects = {
//     js: 'JavaScript',
//     j: "Java",
//     sql: 'SQL',
//     eng: 'English'
// }
// console.log(Object.keys(subjects)) // all keys
// console.log(Object.keys(subjects).sort((a, b) => b - a ))
// console.log(Object.values(subjects)) // all values
// console.log(Object.values(subjects).sort())
// console.log(Object.entries(subjects)) // all propreties in array

//___task
// let lastPrice = 5
// const newDiff = 3
// const fruits = {apple: lastPrice + newDiff, plum: lastPrice * 10, grape: 15, orange: 18}
// //  console.log(fruits)
//  const arr = Object.entries(fruits);
//  const newArr = arr.map(([key, value]) => [key, (value * 1.2).toFixed(2)]);
//  console.log(newArr);
// const finalFruits = Object.fromEntries(newArr)
// console.log(finalFruits)
// console.log(Object.fromEntries(newArr))

// const str = 'Hello world';
// const obj = {}
// for (let letter of str) {
//     if (letter in obj) {
//     obj[letter]++
//     } else {
//         obj[letter] = 1
//     }
// }
// console.log(obj)

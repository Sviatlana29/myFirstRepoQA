//______________________________________________________________
// 10/10/2022 ___map(el => {})
// let test1 = [28, 16, 37, 21, 17, 27, 3, 13, 0, 19, 24, 3];
// let arr1 = test1.map(el => test1.splice(0, 3) ); // it is not good practice!!!!
// console.log(arr1);

// ______Math methods________
//let arr = [28, 16, 37, 21, 17, 27]
// let min = Math.min(...arr)
// let max = Math.max(...arr)
// console.log(min, max)

//_____Math.pow(num, power) // in stepen
// console.log(Math.pow(2,4)) /// == 2 **4

// //_______ Math.sqrt(num)
// console.log(Math.sqrt(25))

//______ Math.round() , Math.floor(), Math.ceil(), Math.trunc()
//let num = -6.564
// console.log(Math.round(num)) // close to upper
// console.log(Math.floor(num)) // close to lower integer
// console.log(Math.ceil(num)) // close to upper integer
// console.log(Math.trunc(num)) //delete float part

///_______.toFixed(NUM) // NUM - numbers left after comma and round lefted
// console.log((num.toFixed(4))) // return result in string

// //______________Math.sign(num)
// console.log(Math.sign(num)) // return 1 - positive/ -1 - negative / 0 if zero

////________isFinite()
// console.log(isFinite(-5/'a')) // return true if finite, false - NaN, Infinity
// console.log(Number.isFinite(-5/'s'))

////______parseInt() , parseFloat()
// let str = '1000.89px'
// let str1 = '4A'
// console.log(parseInt(str)) // return if integer in str
// console.log(parseInt(str1, 16)) // number in ASCII
// console.log(parseFloat(str)) // return if float number in str


//__________________________________________________
// 05/10/2022
//ex1 _____ .at(-1) _____
//let arr = new Array(); // the same as let arr = []
//let arr = new Array(10);  // create 10 empty array places
//let arr = new Array(2, 5, 6, 'str', null, false);
//arr.length = 3 // cut the array and impact on real length array
// const arr1 = [1,2,3]
// arr1.length = 0 // make array empty []
// console.log(arr1)
//console.log(arr)
//? console.log(arr.at(-1)) // ==//  console.log(arr[arr.length - 1]) // to the last element

//ex_2 _____ .push and  .pop() - work faster 
//arr.push('string', 10, 65, true, [1, 2, 3], {1: 'str', 2: 'st'}) // add to the end of array
// // arr.pop()  // remove the last el
// // ? console.log(arr[4].pop()) // if array inside array
// // console.log(arr.push(100)) // count length of array after adding
// console.log(arr)

// //ex_3 _______ - shift/unshift work slower 
// arr.unshift(1,2,3) // add element at the beginning
// console.log(arr)
// arr.shift() // remove el at the beginning
// console.log(arr)

// //ex3 _______ concat
// let arr1 = [2, 3, 4, 5,];
// let arrStr = ['wr', 'rt', 're']

// let newArr = arrStr.concat(arr, arr1) // add all array in one array in order as arguments
// console.log(newArr)

// // ex4 _____ reverse
// let arr1 = [2, 3, 4, 5,'str', true, null, NaN];
// arr1.reverse() // change the order in array - from the end to begin
// console.log(arr1)

// // // ex5 ______ split(separator) and join(separator) - - only with string
// let str = 'Hello World!'
// let arr = str.split('l'); // make array from str using "l" when it will be split 
// console.log(arr);
// let newSrt = arr.join(',') // from array to massive - take  elements from array to string  using ' ' how to join
// console.log(newSrt);


// //ex 6 _______ .slice([start],[end])
// let str = 'Hello World!'
// let arr = str.split('');
// console.log(arr);
// const newArr = arr.slice(2,5); // divide array between 2 indexes - 2,3,4 indexes - 5 not iclude
// //const newArr = arr.slice(-6); // last 6 elements of array
// console.log(newArr);

//ex 7_______ - .splice(index, deleteCount, el1, el2, ..., elN) - from the index then delete and then insert new els
// let str = 'Hello World!'
// let arr = str.split('');
// console.log(arr);
// const newArr = arr.splice(1, 3, 'E', 'L','L','$', 1 ,true); // - change/replace/add the values of array from index
// console.log(newArr); // show what was deleted
// console.log(arr);

// let arr = [1, 2, 3, 3, 7]
// arr.splice(3, 0, 4, 5, 6 ) //if do not want to delete el add 0
// // arr.splice(3, 1, 4, 5, 6 ) 
// console.log(arr);

// ex.8 _______ .indexOf(item, fromIndex) - if not give value in fromIndex  - start from the 0 
// let arr = 'Hello World!'.split('')
// console.log(arr);
// //let index = arr.indexOf('l') // not find - return -1 or find - return number of index
// //console.log(index);
// // let i = arr.indexOf('l')  // if want to find several el
// // while (i != -1){
// //     console.log(i)
// //     i = arr.indexOf('l', i + 1 )
// // }

// //_____ .lastIndexOf(item, fromIndex)  - from the end start search//
// let index = arr.lastIndexOf('l',2) // not find - return -1 or find - return number of index
// console.log(index);

// //______ .includes(item)  - search of the el present//
// console.log(arr.includes('L')); // not find - return false or find - true
// arr.push(NaN)
//  console.log(arr.includes(NaN));
// console.log(NaN === NaN) // not equal 

//ex.9 ______ .find(function(element, index, array) { ...}))
// let arr =  [2, 3, 8, 10, 11]
// // console.log(arr.find(el => el % 2 != 0)) // return the first elle which equal condition in func -  if not find - undefined
//  console.log(arr.find((el, i) => i % 2 != 0 && el % 2 == 0)) // several condtions

//_____ .findIndex() 
// let arr =  [2, 3, 8, 10, 11]
// console.log(arr.findIndex(el => el % 2 != 0)) //  not find - return -1 or find - return number of index which equal condition in func

//ex.10 ______.filter((element, index, array) => { ...}))
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let arrOdd = arr.filter(el => el % 2 != 0)
// console.log(arrOdd)// return  found elemets in array
// const arr = [1, 'stry', 3, null, 5, true, 7, NaN, 9]
// let newArr = arr.filter(el => typeof(el) == 'number')
// console.log(newArr)//

// ex11 ______ .every((element, index, array) => { ...}))
//  const arr = [1, 2, 3, 4, 5, 6, -7, 8, 9])
//  console.log(arr.every(el => el > 0))///all elemenet shoud the same as in conditions - return true/false

// //______ .some() 
// console.log(arr.some(el => el > 0))//some elemenet shoud the same as in conditions

// /ex 12 _____reduce(acc, item, index, array)
// let arr = Array.from(Array(n + 1).keys()).slice(1);
//   console.log(arr)
// return arr.reduce((mult, el) => mult *= el, 1 )


///function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }
// function maxDiff(list) {
  
//     // return list.sort((a,b) => b - a).reduce((dif, el, ind, arr) => ind == 0 ? dif + el: ind == arr.length - 1 ? dif - el: dif, 0)
//    };

// 10/06/200______forEach(number, index, array => ())
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const changeSign = function(el) {
//     console.log(-el)
// }
 //arr.forEach( el => console.log(-el) ) //callback function inside for each elements but method return nothing only do inside
 arr.forEach( (el, i) => i % 2 == 0 ? console.log(-el) : console.log("odd") ) 
//  arr.forEach( (el, i) => i % 2 == 0 ? console.log(-el) : console.log("odd") ) 
 arr.forEach( (el, i, newArr) => i % 2 != 0 ? console.log((el ** 2) + newArr.length) : console.log(" ") ) 
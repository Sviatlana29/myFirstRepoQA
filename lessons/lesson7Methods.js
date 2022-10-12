//arrays
//ex_1 ___ change element in array
// let string = 'abcde'
// const array  = ['a', 'blur', 'c']
// array[2] = 'M' //change array
// console.log(array)

//ex_2 _____ split() join() - work with array
// let string = 'Hello Worlds'
// console.log(string.split(' '))
// const array  = ['a', 'blur', 'c']
// console.log(array.join(' '))

//ex_3 ______push() / pop() - change array
// let string = 'Hello Worlds'
// console.log(string.split(' '))
// string = string.split(' ')
// let c = string.push('fsds')
// console.log(string)
// // how many element in array
// let b = string.pop()
// console.log(string)
// console.log(b) // show deleted element

// //  ex_4 _____ shift/ unshift
// let string = 'Hello Worlds'
// let array = ['A', 'B', 'C']
// console.log(string.split(' '))
// string = string.split(' ')
// let c = string.unshift('Z')
// console.log(string)
// // how many element in array
// let b = string.shift() // if delete several times, use several times
// console.log(string)
// console.log(b) // show deleted element

//ex. 5 ____ ... - spread operator
// const letter = ['a', 'b', 'c']
// const bigLetters = ['A', 'B', 'C']
// console.log(letter + bigLetters) // two array in one string
// console.log(String(letter)) //convert to String

// // bigLetters.push(letter)
// // console.log(bigLetters)
// // bigLetters.push(...letter) // when want to add elements not array
// // console.log(bigLetters)
// const arr = [...letter, ...bigLetters] // when want to add 2 array in one array
// console.log(arr)
// const numbers  =  [1,2,3,6,7,10]
// console.log(Math.max(...numbers))

//ex6 ____compare array
// let arr  = [1,2]
// // let arr1 = [1,2]
// const arr1 = arr // possible

// console.log(arr === arr1) // impossible to do
// console.log (arr > arr1) // possible

// let a  = [1,2,3]
// let b = [1,2,3]
// console.log(JSON.stringify(a) == JSON.stringify(b)) // compare arrays as strings

// //ex7 ___ check
// let arr = [1, 2, 3]
// let empty = []
// console.log(String(arr), String(empty))
// console.log(Number(arr), Number(empty))
// console.log(Boolean(arr), Boolean(empty))

/// _____ Method for stings
// ______slice(start, end)

//______replace()
//  let text = 'Please'
// let nextTest = text.replace('e', 'E') // only first found // if more need to use for
// console.log(nextTest)
// let newTest = text.replaceAll('a', 'E')  // ??
// console.log(newTest)

//_______ charAt()
// let text = 'hello world'
// let letter = text.charAt(0) // find element in string
// console.log(letter)

// //______ repeat()
// let a ='HI '
// let arr = a.repeat(5)
// console.log(arr)

// //_______ trim() - delete ' ' space
// let text = '     hello  '
// let result = text.trim()
// console.log(result)
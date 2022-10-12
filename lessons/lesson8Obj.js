//________10/11/2022

//______1 {key : values, } - property
// const person = {
//     name: 'Ivan',
//     surname: "Petrov",
//     age: 33,
//     job: 'Qa ',
//     isAdmin: false,
// }

// const person2 = {
//     id: '02',
//     personalInfo:{
//         name:{
//             first: 'Jane',
//             lastname: 'Dow',
//         },
//         dob: '01/01/1990',
//         'contactInfo' : {
//             phone: 37529523344
//         },
//     },
//     purchase : [null]
// }

// console.log(typeof person2)
// console.log(person2.personalInfo.contactInfo)

// let obj = new Object()
// let user = {};

// let user = {
//     name: 'Bob',
//     'age': 21,
//     'isAdult': true,
//     'salary': undefined,
//     4: null,
//     'high school': true,
// }
// console.log(user.name)
// console.log(user['4']) // if number use in key
// console.log(user['high school']) // if 2 words in key

// let user1 = new Object() 
//  user1 = {
//     name: 'Ivan',
//     surname: "Petrov",
//     age: 33,
//     job: 'Qa ',
//     isAdmin: false,
// }

// //_____ change values
// user.age = 20
// console.log(user)

// //_________add valuse
// user.address = {
//     city: 'SA',
//     state :'CA',
//     country: 'USA'
// }
// user['isAdmin'] = false

// let name1 = 'Anna' //
// const user1 = {
//     [name1]: 17
// }
// console.log(user1)

// console.log(user)
// user.address.hello = 'Hi' // add inside obj
// console.log(user)

// //_______delete
// delete user.address.hello;
// console.log(user)

//____object inside array

// const persons = [{
//     id: '02',
//     personalInfo:{
//         name:{
//             first: 'Jane',
//             lastname: 'Dow',
//         },
//         dob: '01/01/1990',
//         'contactInfo' : {
//             phone: 37529523344,
//             email : null,
//         },
//     },
//     purchase : [null]
// },
// {
//         name: 'Ivan',
//         surname: "Petrov",
//         age: 33,
//         job: 'Qa ',
//         isAdmin: false,
//     }
// ]
// console.log(persons.length)
// console.log(persons[0])
// console.log(persons[1])
// // console.log(persons[2])
// // console.log(persons[0].personalInfo.name.first)
// // console.log(persons[0].personalInfo.name.first)
// // console.log(persons[0]['personalInfo']['contactInfo']['email'])
// console.log(persons[1].age)

//_______ check with undefined
// let user = {
//     newKey : 8,
// }
// console.log(user.age)
// console.log(user.newKey)
// console.log(user.name === undefined) // return true if this age does not exsit
// user.name = 'Anna'
// console.log(user)
// console.log(user.name === undefined)

///____ 'in object'- check keys
// let user = {
//     name: 'Bob',
//     'age': 21,
//     'isAdult': true,
//     'salary': undefined,
//     4: null,
//     'high school': null,
//     newKey : undefined,
//     undefined: false,
//     job: {name1: 'Olga', age1: 23}
// }
// // console.log('name' in user) // on first level
// // console.log('undefined' in user)
// // console.log('null' in user) 
// // console.log('age1' in user.job) // second level
// if('name' in user) {
//     console.log(user.name)
// }
// console.log(user?.name?.address) //?

///_______ loop ___ for ... in

// const person = {
//     name: 'Ivan',
//     surname: "Petrov",
//     age: 33,
//     job: 'Qa ',
//     isAdmin: false,
// }
// for (let key in person){
//     // console.log(key)
//     // console.log(person[key])
//     console.log(key + ': ' + person[key])
// }

// const salary = {
//     John: 100,
//     Bob: 160,
//     Pit: 33,
// }
// let sum = 0;
// for (let key in salary){
//     sum += salary[key] 
// }
// console.log(sum)

//___________ Methods of objs
//_______Object.keys() _____Object.values() ____Object.entries()
// const person = {
//     name: 'Ivan',
//     surname: "Petrov",
//     age: 33,
//     job: 'Qa ',
//     isAdmin: false,
// }
// // console.log(Object.keys(person)) // all keys
// // console.log(Object.values(person)) // all values
// // console.log(Object.entries(person)) // all propreties in array

// for (let val of Object.values(person)) {
//     console.log(val)
// }


// const str = 'dadsadsadsafas'
// const obj = {}
// for(let i = 0; i <str.length;i++){
//     obj[i+1] = str[i] // obj[i+1] - create keys -> str[i] - add values
// }
// console.log(obj)
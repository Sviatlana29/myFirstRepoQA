// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// let camelize = str => str.split('-').map((word, index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1)).join('')
// console.log(camelize("-webkit-transition"))

//__2
// let arr = [5, 3, 8, 1];
// let filterRange = (arr, a, b) => { return arr.filter((el) =>  el >= a && el <= b)}
// console.log(filterRange(arr, 1, 4))
//__3
let arr = [5, 3, 8, 1];
let filterRangeInPlace = (arr, a, b) => { return arr.filter((el) =>  el >= a && el <= b)}
//let filter = arr.map((el, i , arr) => {arr[i] })
console.log(filterRange(arr, 1, 4))



//  let n = 3
//  let stair = ''
//  for (let i = 1; i < n; i++){
//   stair += 'I' + '\n'
//  }
// for(let j = 0; j< n; j++){
//      stair += " "
//    }

//  console.log(stair + 'I')




//Stan tasks 08/31:


// HomeTask1:
// let firstName 
// let lastName 
// firstName = "John"
// lastName = "Adams"
//   document.write(firstName, " ", lastName, "<br>");
// firstName = "Anna"
// lastName = "Karenina"
//   document.write(firstName, " ", lastName, "<br>");

// let fname = "john"
// let admin = fname = 3
// document.write(fname)

//Review Task:  Поменять значения переменных х и у:
//1.
// let x,y;
// let z;
// z = x;
// x = y;
// y = z;

// x = 10;
// y = 5;
// document.write(x,"<br>",y);
// console.log(x,y);

// 2.
// let x,y;
// x = 10;
// y = 5;

// x = x + y; // x += y;
// y = x - y; // no possible
// x = x - y; // x -= y;
// document.write(x,"<br>",y);

// let month = 'August'
// switch (month) {
//   case "March":
//   case "April":
//   case "May":
//     console.log("Spring");
//     break;
//   case "June":
//   case "July":
//   case "August":
//      console.log("Summer");
//     break;
//   default:
//     console.log("Winter and Fall");
// }
// let season;
// let month = 11
// switch (month) {
//   case 12:
//   case 1:
//   case 2:
//     season = "Winter";
//     break;
//   case 3:
//   case 4:
//   case 5:
//     season = "Spring";
//      break;
//   case 6:
//   case 7:
//   case 8:
//     season = "Summer";
//      break;
//   case 9:
//   case 10:
//   case 11:
//     season = "Fall";
//      break;
//   default:
//      season = "The month does not exist";
// }
// console.log(season);

  // console.log((null || 2) && 3 && undefined);
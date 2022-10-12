
////_1
// let = 0;
// while (i < 3) {
//     console.log(i);
//     i++;
// }

////_2
// let sum = 0;
// let num = 0;
// do {
//     sum += num;
//     num = parseInt(prompt('Enter a number : '))
// } while (num >= 0 )
// console.log(`The sum is ${sum}`)

////_3
// for(let i = 0; i <= 10; i++) {
//     if (i == 7) break;
//     console.log(i);
// }


// //_4
// for(let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) continue;
//     console.log(i);
// }

// //_5 ternarny operator 
// let a = 7;
// (a < 5 ) ? console.log(a) : console.log('Hi');

 
////_6 inner loops

// for (let line = 1; line <= 5; line++) {
//     let str = '';
//     for (let numInLine = 1; numInLine <= line; numInLine++){
//         str += numInLine;
//     }
//     console.log(str); 
// }


///
// for (let  i = 1; i <= 5; i++) {  //отвечате за количество строк
//     let str ='';
// for (let j = 1; j <= i; j++){  //отвечает за наполнение строки
//     str += j 
// }
// // if ( i == 4) break;
// console.log(str);
// } 

/////на убывание
// for (let  i = 5; i >= 1; i--) {  //отвечате за количество строк
//     let str ='';
// for (let j = 1; j <= i; j++){  //отвечает за наполнение строки
//     str += j 
// }
// console.log(str);
// } 

////_7 достать элемент из вложенного массива
// let arr = [1,["a","b", [5,7]],3, 'Hello']
// console.log(arr[1][2][1]);
// console.log(arr[3][1]);

///_8 проверка пустой массив
let arr2 = []
if (arr2.length == 0) {
    console.log('it is empty')
}


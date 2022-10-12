
// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

// let arr = [1, "apple", null, 4, undefined];

// let index = 0;
// while (index < arr.length) {
//     console.log(arr[index]);
//     index++;
// }


// let str = 'Hello';
// let newStr = '';
// for (let i = 0; i <= 7; i++) {
//     newStr = newStr + str;
// }
// console.log(newStr);

// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//     sum = sum + i;
//     console.log(sum);
// }

// let num = 5;
// let result = 1;
// for (let i = 1; i <= 3; i++){
//     result = result * num;
// }
// console.log(result);


// let str = "javascript"
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }
// let newS = '';
// for (let i = 0; i < str.length; i++) {
//     newS = newS + str[i] + '';
//     console.log(newS);
// }



// let arr = [1, "apple", null, 4, undefined];
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


// let x = "Palindrome";

// let str2 = '';
// for(let i = x.length - 1; i >= 0; i--) {
//   str2 = str2+ x[i];
// }
// console.log(str2)

// let encript = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';
//   let transk = '';

// for (let i = 0; i < encript.lenght; i+=3) {
//   console.log(encript[i])
//   transk += encript[i]
// }
//  console.log(transk)


 //Prime number
//  let n = 5;
// let isPrime;

// for (let i = 2; i < n; i++) {
    
//     for (let j = 2; j < i; j++) {
       
//         if (i % j === 0) {
//             isPrime = false;
//             console.log("not Prime i = " + i);
//             break;
//         }
//         isPrime = true;
//         // console.log(i + " is a Prime = " + isPrime);
        
//     }
//     console.log(i + " is a Prime? = " + isPrime);
// }
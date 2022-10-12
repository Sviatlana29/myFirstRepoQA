// Home Work _4
// Выведете с помощью for цикла рецепт всех видов кофе или цену на все размеры стаканчиков, идеально и то, и другое.

// +2_ При помощи цикла for выведите чётные числа от 2 до 10
// let n = 10 ;
// for (let i = 2; i <= 10; i++){
//         if (i % 2 == 0){
//             console.log(i);
//         }
//     }



// +3_ Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его 
// делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.

///v_1
// let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let isPrime = '';
// let primeNumbers = '';

// for (let i = 0; i < num.length; i++){
//     if (num[i] == 1) {
//         isPrime = num[i] + ' is not prime'
//     }
//     else if (num[i] % 2 === 0 && num[i] != 2){
//         isPrime = num[i] + ' is not prime'
//     }
//     else if (num[i] != 3 && num[i] % 3 === 0){
//         isPrime = num[i] + ' is not prime'
//     }
//     else if (num[i] != 5 && num[i] % 5 === 0){
//         isPrime = num[i] + ' is not prime'
//     }
//     else if (num[i] != 7 && num[i] % 7 === 0){
//         isPrime = num[i] + ' is not prime'
//     } else {
//         isPrime = '       ' + num[i] + ' is prime'
//         primeNumbers = primeNumbers + num[i] +' '
//     }
//     console.log(isPrime)
// }
// console.log('These are: ', primeNumbers)

// v_2.1
// let n = 10 ;
// for (let i = 2; i <= n; i++){
//     let num = true;
//     for (let k = 2; k < i; k++){
//         if (i % k == 0){
//             num = false;
//         }
//     }
//     if (num == true){
//         console.log(i);
//     }
// }

// v_2.2
//  let n = 10 ;

// nextPrime:
// for (let i = 2; i <= n; i++){
//     for (let j = 2; j < i; j++){
//         if (i % j == 0) continue nextPrime;
//     }
//     console.log(i);
// }

// 4_Задача на смекалку
// Имеется зашифрованное предложение 
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.

//V_1
// // coder
// let shrift = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';
// let text = 'You are the best QA ever'
// let newText = ''
// let count = 0
// for (let i = 0; i < text.length; i++){

//     if (count % 2 == 0){
//         newText += text[i] + 'br'
//     }
//     count += 2
// }
// console.log(newText)

// //decoder
// let text2 = ''
// for (let i = 0; i < newText.length; i += 3) {
//     text2 += newText[i]
//   }
//    console.log(text2)

// //v_2
// let encript = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';
// let text = 'You are the best QA ever'
// let transk = '';

// for (let i = 0; i < encript.length; i += 3) {
// //   console.log(encript[i])
//   transk += encript[i]
// }
//  console.log(transk)

 
// 5_ Задачка посложнее* 
//  Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему

//v_1
// //coder
// let message = 'Work smarter, not harder! Be on time';
// let keyword = 'Be happy'
// let encriptedMessage = '';
// let countE = 0;
// let countI = 0;

// for (let i =0; i < message.length; i++){

//     for ( let e = 0; e < keyword.length; e++){

//         if ( i == e){
//             encriptedMessage += message[i] + keyword[e]
//             keyword += keyword[e]
//         }
//     }
// }
// console.log(encriptedMessage)

// // decoder
// let descriptedMessage = '';
// for(let i = 0; i < encriptedMessage.length; i += 2){
//     descriptedMessage += encriptedMessage[i]
// }
// console.log(descriptedMessage)

//v_2
// //coder
// let message2 = 'Work smarter, not harder! Be on time';
// let keyword2 = '+++'
// let encriptedMessage2 = '';
// let countE = 0;
// let countI = 0;

// for (let i =0; i < message2.length; i++){

//     for ( let e = 0; e < keyword2.length; e++){

//             encriptedMessage2 += message2[i] + keyword2[e]
//             countE++
//     }
//     countI++
// }
// console.log(countI, countE)
// console.log(encriptedMessage2)

// // decoder 
// let descriptedMessage2 = '';
// for(let i = 0; i < encriptedMessage2.length; i += 6){
//     descriptedMessage2 += encriptedMessage2[i]
// }
// console.log(descriptedMessage2)

// 6_ Задача с интервью*
// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
 
//  //V_1
// let str = ['(',')','(',')', ')'];
// let sum1 = 0;
// let sum2 = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == '(') {
//             sum1 += 1;
//             console.log()
//         }
//         else if (str[i] == ')') {
//             sum2 += 1;
//         }
//     }
//     console.log( sum1 + " opened,", sum2 + " closed")

//     if (sum1 == sum2) {
//         console.log('equal')
//     }
//     else console.log('not equal')

//v_2
// let str = ['(',')','(',')', ')'];
// let sum1 = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == '(' && str[++i] == ')') {
//             sum1 = sum1 + 1;
//             console.log(sum1 + " closed")
//         }
//         else {
//             console.log( (sum1 + 1) + " not closed")
//         }
//     }

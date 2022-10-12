


//HWOrk #4 Выведете с помощью for цикла рецепт всех видов кофе или цену на все размеры стаканчиков, идеально и то, и другое.
let coffee, cupSize;
let water = "hot water";
let drink = 'hot milk';
let sweet = 'sugar';
let price = 3;
// let smallCup = "small cup"
// let mediumCup = "medium cup";
// let largeCup = "large cup";

// let latteMacchiato = 'Latte Macchiato';
// let cappucchino = "Cappucchino";
// let americano = 'Americano';


// coffee = cappucchino;
// cupSize = smallCup;

let coffeeType = [ 'Latte Macchiato', "Cappucchino", 'Americano'];
let sizeCup = ["small cup", "medium cup",  "large cup"];
let priceCoffee = [];
let drinkType = [];

for (let c = 0; c < coffeeType.length; c++) {
  for (let s = 0; s < sizeCup.length; s++){
    // for (let p = 0; p < priceCoffee.length; p++){
      if (coffeeType[c] == 'Latte Macchiato') {
        price *= 1.5;
        if (sizeCup[s] === 'medium cup'){
          price *= 1.7;
        } else if (sizeCup[s] === 'large cup'){
          price *= 2;
        }
      }

      else if (coffeeType[c]  == 'Cappucchino') {
        let changeDrink
        changeDrink =  water;
        water = drink;
        drink = changeDrink;
        price *= 1.7;
        if (sizeCup[s] === 'medium cup'){
          price *= 1.9;
        } else if (sizeCup[s] === 'large cup'){
          price *= 2.1;
        }
      } 
      else if (coffeeType[c]  == 'Americano') {
        let changeDrink
        drink = changeDrink = 'a lit bit more hot water';
        price *= 1.8
        if (sizeCup[s] === 'medium cup'){
          price *= 2;
        } else if (sizeCup[s] === 'large cup'){
          price *= 2.2;
        }
      // } 
    }
  }
  
  console.log(sizeCup[s])
// console.log(
// `Make a ${sizeCup[s]} of ${coffeeType[c]}:\n
// 1. Take a ${sizeCup[s]}.
// 2. Open a coffee box.
// 3. Take a spoon.
// 4. Take coffee from the coffee box with spoon.
// 5. Put coffee in a ${sizeCup[s]}.
// 6. Pour ${water} in a cup with coffee.
// 7. Pour ${drink}  in a cup with coffee.
// 8. Take a ${sweet} with a spoon.
// 9. Put ${sweet} to a cup with coffee.
// 10. Stir coffee in a cup with a spoon.
// A ${sizeCup[s]} of ${coffeeType[c]} costs $${price}! \n Enjoy your ${coffeeType[c]}!
// ---------------------------------------------------------------------------------------------------------\n`)
}



// //variant 1  - with prompt
// let coffee = prompt("What kind of coffee would you like to order?");
// let size = prompt("What size of coffee would you like to order?");



// let coffeeBlack  = `${nameCoffee} <br> ${step1} <br> ${step2} <br> ${step3} <br> ${step4} <br> ${step5} <br> ${step6} <br> ${step7} <br> ${step8} <br> ${step9} <br> ${step10} <br> ${resultCoffee} <br>`;
// let coffeeLatte = `${nameCoffee} <br> ${step1} <br> ${step2} <br> ${step3} <br> ${step4} <br> ${step5} <br> ${step6} <br> ${step7} <br> ${step8} <br> ${step9} <br> ${step10} <br> ${resultCoffee} <br>`;
// let coffeeCapuchino = `${nameCoffee} <br> ${step1} <br> ${step2} <br> ${step3} <br> ${step4} <br> ${step5} <br> ${step6} <br> ${step7} <br> ${step8} <br> ${step9} <br> ${step10} <br> ${resultCoffee} <br>`;


// //with prompt
//   if (coffee === "latte") {
//       document.write(coffeeLatte)
//         console.log(nameCoffee, "\n", step1, "\n", step2, "\n", step3 , "\n",   step4, "\n", step5, "\n", step6, "\n", step7, "\n", step8, "\n", step9 , "\n", step10, "\n", resultCoffee)
//   }
// else if (coffee === "capuccino") {
//  document.write(coffeeCapuchino)
//         console.log(nameCoffee, "\n", step1, "\n", step2, "\n", step3 , "\n",   step4, "\n", step5, "\n", step6, "\n", step7, "\n", step8, "\n", step9 , "\n", step10, "\n", resultCoffee)
// }
// else if (coffee === "black coffee") {
//  document.write(coffeeBlack)
//         console.log(nameCoffee, "\n", step1, "\n", step2, "\n", step3 , "\n",   step4, "\n", step5, "\n", step6, "\n", step7, "\n", step8, "\n", step9 , "\n", step10, "\n", resultCoffee)
// }
//    else {
//      alert("You did not choose a kind of coffee.")
//      document.write("You did not choose a kind of coffee." + "<br>")
//         console.log("You did not choose a kind of coffee.", "\n")
//   };


//   if (size === "small") {
//     document.write(`Price of ${coffee} is $${price}.`)
//     console.log(`Price of ${coffee} is $${price}.`)
//   }
// else if (size === "medium") {
//   price *= 1.5
//    document.write(`Price of ${coffee} is $${price}.`)
//   console.log(`Price of ${coffee} is $${price}.`)
// }
// else if (size === "large")  {
//   price *= 2
//   document.write(`Price of ${coffee} is $${price}.`)
//   console.log(`Price of ${coffee} is $${price}.`)
// }
// else {
//   alert("You did not choose a size of coffee.")
//      document.write("You did not choose a size of coffee." + "<br>")
//         console.log( "You did not choose a size of coffee.", "\n")
// };


//addition
// document.write(nameCoffee + "<br>" + step1 + "<br>" +  step2 + "<br>" + step3 + "<br>" +  step4 + "<br>" + step5 + "<br>" +  step6 + "<br>" +  step7 + "<br>" + step8 + "<br>" +  step9 + "<br>" + step10 + "<br>" + resultCoffee + "<br>");
// console.log(nameCoffee, "\n", step1, "\n", step2, "\n", step3 , "\n",   step4, "\n", step5, "\n", step6, "\n", step7, "\n", step8, "\n", step9 , "\n", step10, "\n", resultCoffee, "\n");

// // if (coffee === "Latte") {
// //   ind = 2; в соответсвии с типом кофе коэффицент сколько ингридиентов
// // } else if (coffee = 'Capuchino') {
// //   ind = 1
// // }


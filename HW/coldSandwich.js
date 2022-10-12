let bread = "black bread";
let cheese  = "swiss cheese";
let turkey =  "smoked turkey";
let salmon = "wild salmon";
let pepperoni = "pepperoni";
let topping;
let sandwich;

let turkeySandwich = "sandwich with turkey";
let pepperoniSandwich = "sandwich with salmon";
let salmonSandwich = "sandwich with salmon";

sandwich = pepperoniSandwich;
topping = turkey;

let nameOfSandwich = `Make a cold ${sandwich}`;
let step_1 = `1. Take a piece of  ${bread}`;
let step_2 = `2. Take a piece of ${cheese}`;
let step_3 = "3. Put cheese on bread";
let step_4 = `4. Take a piece of ${topping}`;
let step_5 = `5. Put ${topping} on ${cheese} `;
const resultS = "Coffee is Ready";

console.log(nameOfSandwich, '\n' , step_1, '\n' , step_2, '\n' , step_3, '\n' , step_4, '\n' , step_5, '\n' , resultS);

let price = 10;
if (topping = salmon) {console.log("Order price is: " + price * 1.5)}
else{console.log("Order price is: " + price * 1.5)}

if(topping != turkey) {
  console.log("Sorry, we don't have this option ")
}


///4. Закрепление- Продумайте код для создания сэндвичей с 3-мя начинками и выставите цену в зависимости от вида начинки. Используйте while and do.. while loops
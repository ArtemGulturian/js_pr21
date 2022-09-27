'use strict';

function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no(); 
}

ask(
    "Вы согласны?",
    () => alert("Da"),
    () => alert("Net")
);
ask();

//---

let fruits = ["Яблоки", "Груша", "Апельсин"];

let shopingCart = fruits;
shopingCart.push("Банан");

console.log(fruits.length);
console.log(fruits);

//---

let styles = ["джаз", "блюз"];
console.log(styles);
styles.push("рок-н-ролл");
console.log(styles);
styles[1] = "класика";
console.log(styles);
styles.shift(0);
console.log(styles);
styles.unshift("рэп", "регги");
console.log(styles);

//---

let arr = ["a", "b"];
arr.push(function() {
    console.log( this );
});
console.log(arr[2]);

//---


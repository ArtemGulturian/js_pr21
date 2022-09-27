'use strict';

alert(document.body.firstElementChild);
console.log(document.body.firstElementChild);

console.log(document.body.children[1]);
console.log(document.body.lastElementChild.lastElementChild);

document.body.children[0].style.background = "red";

setTimeout(() => document.body.children[0].style.background = "", 1000);
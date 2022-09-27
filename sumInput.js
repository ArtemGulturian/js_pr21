'use strict';

function sumImput() {
    let arr = [];

    while(true) {
        let value = prompt("Введите число", 0);

        if (value === "" || value === null || !isFinite(value)) {break;}

        arr.push(value);
    }

    let sum = 0;
    for (let number of arr) {
        sum+= number;
    }
console.log(sum);
    return sum;
}

sumImput();
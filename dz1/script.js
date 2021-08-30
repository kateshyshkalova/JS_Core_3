"use strict";
let num = prompt('Введіть число');

function getArea(number) {
    let newNum = Number(number);
    if (number == '') return console.log(`Будь ласка, введіть радіус!`);
    else if (Number.isFinite(newNum)) {
        let s = Math.PI * Math.pow(newNum, 2);
        return console.log(`Площа дорівнює ${s.toFixed(2)} квадратних одиниць.`)
    }
    else return console.log(`Повинно бути числове значення.`);
};
getArea(num);
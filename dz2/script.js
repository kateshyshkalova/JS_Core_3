"use strict";
let num = prompt('Введіть число');

function getArea(number) {
    let newNum = Number(number);
    if (number == '') return console.log(`Будь ласка, введіть число!`);
    else if (number < 0) return console.log(`Введіть додатнє число.`);
    else if (Number.isFinite(newNum)) {
        let sqrtNum = Math.sqrt(number);
        return console.log(`Квадратний корінь з ${number} = ${sqrtNum.toFixed(2)}.`)
    }
    else return console.log(`Повинно бути числове значення.`);
};
getArea(num);
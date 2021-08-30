"use strict";
let MyMath = {
    PI: 3.141592653589793,
};
console.log(MyMath);


console.log(`Піднесення числа до степеня`);
MyMath.pow = function (number, degree) {
    let res = 1;
    let step;
    if (degree < 0) { step = degree * (-1); }
    else { step = degree; }

    for (let i = 1; i <= step; i++) {
        res *= number;
    }
    if (degree > 0) return res;
    else {
        res = 1 / (res);
        return res;
    }
}
let result = true;
do {
    let a = prompt('Введіть число');
    let b = prompt('Введіть степінь');
    if ((a == '') || (b == '')) {
        alert(`Будь ласка, введіть числове знвчення!`);
        result = confirm('Хочете спробувати ще раз визначити степінь числа?');
    }
    else if ((isNaN(a)) || (isNaN(b))) {
        alert(`Повинно бути числове значення.`);
        result = confirm('Хочете спробувати ще раз визначити степінь числа?');
    }
    else {
        console.log(`${a}^${a} = ${MyMath.pow(a, b)}`);
        break;
    }
} while (result == true);


console.log(`Модуль числа`);
MyMath.abs = function (number) {
    let absNum = 0;
    if (number < 0) { absNum = number * (-1); }
    return absNum;
}
let result2 = true;
do {
    let num = prompt('Введіть число');
    if (num == '') {
        alert(`Будь ласка, введіть число!`);
        result2 = confirm('Хочете спробувати ще раз визначити модуль числа?');
    }
    else if (isNaN(num)) {
        alert(`Повинно бути числове значення.`);
        result2 = confirm('Хочете спробувати ще раз визначити модуль числа?');
    }
    else {
        console.log(`|${num}| = ${MyMath.abs(num)}`);
    }
} while (result2 == true);



console.log(`Визначення найбільшого числа`);
MyMath.max = function (arg) {
    let max = arg[0];
    for (let i = 1; i < arg.length; i++) {
        if (arg[i] > max) max = arg[i];
    }
    return max;
}
let numbers = [];
let index1 = 0;
let res1 = true;
while (res1 == true) {
    numbersMin[index1] = prompt('Введіть число');

    if (numbersMin[index1] == '') {
        alert(`Будь ласка, введіть число!`);
        res1 = confirm('Ввести ще число у масив?');
    }
    else if (isNaN(numbersMin[index1])) {
        alert(`Повинно бути числове значення.`);
        res1 = confirm('Ввести ще число у масив?');
    }
    else {
        index1++;
        res1 = confirm('Ввести ще число у масив?');
    }
}
console.log(`Масив чисел ${numbers}`);
console.log(MyMath.max(numbers));


console.log(`Визначення найменшого числа`);
MyMath.min = function (arg) {
    let min = arg[0];
    for (let i = 1; i < arg.length; i++) {
        if (arg[i] < min) { min = arg[i]; }
    }
    return min;
}
let numbersMin = [];
let index2 = 0;
let res2 = true;
while (res2 == true) {
    numbersMin[index2] = prompt('Введіть число');
    if (numbersMin[index2] == '') {
        alert(`Будь ласка, введіть число!`);
        res2 = confirm('Ввести ще число у масив?');
    }
    else if (isNaN(numbersMin[index2])) {
        alert(`Повинно бути числове значення.`);
        res2 = confirm('Ввести ще число у масив?');
    }
    else {
        index2++;
        res2 = confirm('Ввести ще число у масив?');
    }
}
console.log(`Масив чисел ${numbersMin}`);
console.log(`min = ${MyMath.min(numbersMin)}`);
"use strict";
const button = document.querySelector('button');
const inp1 = document.getElementById('num1');
const inp2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+inp1.value, +inp2.value), 'jjj');
});

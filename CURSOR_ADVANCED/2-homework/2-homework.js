// Отримайте у користувача число(N) від якого ми будемо складати. 
let firstNumber = +prompt("Введите первое число");

// Перевірте, чи є передане значення N ЦІЛИМ числом.
while (!firstNumber) {
    firstNumber = +prompt("Это не число. Введите число!");
}

if (!Number.isInteger(firstNumber)) {
    firstNumber = Math.trunc(firstNumber);
}
console.log(firstNumber);

// Отримайте у користувача число(M) до якого ми будемо складати (включно).
let secondNumber = +prompt("Введите второе число");

// Перевірте, чи є передане значення M ЦІЛИМ числом.
while (!secondNumber) {
    secondNumber = +prompt("Это не число. Введите число!");
}

if (!Number.isInteger(secondNumber)) {
    secondNumber = Math.trunc(secondNumber);
}
console.log(secondNumber);

// Отримайте у користувача булевий параметр(true/false), який підкаже нам чи потрібно пропускати парні числа.
const skipEven = confirm("Пропускать парные числа?");

// Напишіть цикл, який буде складати числа від раніше отриманих N и M. 
// В циклі додайте перевірку – чи потрібно пропускати при складанні парні числа. 
const maxNumber = Math.max(firstNumber, secondNumber);
const minNumber = Math.min(firstNumber, secondNumber)

let sumOfNumbers = 0;
for (let i = minNumber; i <= maxNumber; i++) {
    if (skipEven && (i % 2 == 0)) {
        continue;
    }
    sumOfNumbers += i;
}
console.log(sumOfNumbers);

document.writeln(`Минимальное число (N): ${minNumber} <br>
Максимальное число (М): ${maxNumber} <br> 
Пропускать парные? ${skipEven} <br>
Сумма значений от N до М = ${sumOfNumbers}`)
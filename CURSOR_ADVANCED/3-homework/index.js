 // 1.Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
 function getMaxDigit(number) {
     const numberArr = number.toString().split(""); //переводим число в строку и в массив
     const maxNumber = Math.max(...numberArr) // распаковываем массив и находим максимальное число
     return maxNumber;
 }

 //  2. Створити функцію, яка визначає ступінь числа.
 function getPow(number, pow) {
     let result = 1; // вводим переменную для результата 
     if (pow > 0) { // считаем результат в положительной степени
         for (let i = 1; i <= pow; i++) {
             result = result * number;
         }
     } else if (pow === 0) {
         result = 1; // считаем результат если степень равна нулю 
     } else if (pow < 0) { // считаем результат в отрицательной степени
         pow = pow * (-1)
         for (let i = 1; i <= pow; i++) {
             result = result * number;
         }
         result = 1 / result;
     }
     return result;
 }

 //  3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. 
 function changeCaseName(inputedName) {
     let newName = inputedName.replace(/[0-9]/g, '') //удаляем все числа из полученного имени, если они там есть
     if (!newName) { // делаем проверку имени
         return `Error! Enter the correct name!`
     } else {
         return newName[0].toUpperCase() + newName.slice(1).toLowerCase() // приводим к правильному регистру
     }
 }

 // 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати
 const calculateTax = (income) => {
     if (typeof income !== "number") { // проверяем, чтобы введенный доход был числом
         return `This is not a number! Enter the number`
     } else if (income <= 0) { // делаем проверку на отрицательный и нулевой доход
         return `You don't have income. Tax = 0`
     } else {
         return income - (income * 0.18 + income * 0.015); // считаем доход с вычетом налога
     }
 }

 // 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
 function getRandomNumber(n, m) {
     if (typeof n !== "number" || typeof m !== "number") { // проверяем, чтобы введенные значения были числами
         return `Error. Enter the correct numbers`
     } else {
         const max = Math.max(n, m); // находим максимальное число
         const min = Math.min(n, m); // находим минимальное число
         return Math.round(Math.random() * (max - min) + min); // генерируем рандомное число
     }
 }

 //  6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
 const countLetter = (letter, word) => word.toLowerCase().split(letter).length - 1
     //перводим в нижний регистр, разбиваем слово на массив из букв, считаем длину массива минус 1

 //  7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
 function convertCurrency(value) {
     let checkValue = value.toLowerCase() //переводим значение в нижний регистр, чтобы от него не зависеть
     if (checkValue.includes("uah")) { // проверяем есть ли в введенном значении uah 
         let convertedMoney = Number(checkValue.split('uah').filter(Boolean).join('')) / 25; //рассчитываем деньги в долларах
         return `${convertedMoney}$`;
     } else if (checkValue.includes("$")) { // проверяем есть ли в введенном значении $
         let convertedMoney = Number(checkValue.split('$').filter(Boolean).join('')) * 25; // считаем деньги в долларах
         return `${convertedMoney}грн`;
     } else { return `Eror! Please enter the current value` } // выводим ошибку, если ввели что-то не то
 }

 //  8. Створіть функцію генерації випадкового паролю (тільки числа), 
 //  довжина встановлюється користувачем або по замовчуванню = 8 символам.
 function getRandomPassword(length = 8) { //задаем по умолчанию длину пароля 8 символов
     let randomPassword = ''; // задаем переменную в которой будем хранить пароль
     for (let i = 0; i < length; i++) { //создаем цикл, который будет добавлять к паролю рандомное число length раз
         randomPassword = randomPassword + Math.round(Math.random() * 9)
     }
     return randomPassword;
 }

 //  9. Створіть функцію, яка видаляє всі букви з речення. 
 const deleteLettersByArr = (letter, word) => { // первый вариант, через создание массива
         return word.split(letter).join('');
     }
     // первый вариант, через создание массива, у которого разделитель - это заданная буква
     // создаем массив из оставшихся букв, потом его склеиваем в строку

 const deleteLettersByReplace = (letter, word) => {
         return word.replaceAll(letter, '');
     }
     // второй вариант через метод replaceAll, который заменяет все буквы на пустую строку


 //  10. Створіть функцію, яка перевіряє, чи є слово паліндромом.
 function isPalyndrom(value) {
     let valueArr = value.toLowerCase().split(''); //переводим введенное слово в нижний регистр и в массив
     let cleanValueArr = valueArr.filter(x => x !== " "); // удаляем из массива пробелы, чтобы не мешали проверять предложения
     let reverseArr = cleanValueArr.slice().reverse(); // делаем реверсию массива, чтобы потом сравнить с исходным
     for (var i = 0; i < cleanValueArr.length; i++) { // сравниваем элементы массива посимвольно
         if (cleanValueArr[i] !== reverseArr[i]) // если какой-то символ не совпадает выводим false
             return false;
     }
     return true;
 }

 document.writeln(`Функція №1: ${getMaxDigit(56479372)} <br>
 Функція №2: ${getPow(2, 8)} <br>
 Функція №3: ${changeCaseName("вАСЫЛЬ")} <br>
 Функція №4: ${calculateTax(1000)} <br>
 Функція №5: ${getRandomNumber(2, 10)} <br>
 Функція №6: ${countLetter("а", "Асталавіста")} <br>
 Функція №7: ${convertCurrency("2500Uah")} <br>
 Функція №8: ${getRandomPassword()} <br>
 Функція №9(1): ${deleteLettersByArr('a', "blablabla")} <br>
 Функція №9(2): ${deleteLettersByReplace('a', "blablabla")} <br>
 Функція №10: ${isPalyndrom("Я несу гусеня")} <br>
 `)
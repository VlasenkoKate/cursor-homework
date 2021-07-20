// Створіть функцію, яка повертає проміс getRandomChinese(length). Функція працює таким чином:

// Запускається цикл(підказка: можна використовувати while) length раз, кожен прохід циклу 
// дивимось на останні 5 цифр результату виклику методу Date.now() Наприклад отримали const sign = 16086;.
// Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms
// Функція gerRandomChinese(length) повинна повернути рядок довжиною (length) з китайськими ієрогліфами. 
// Час роботи проміса має складати length * 50ms.
// (Якщо викликати getRandomChinese(4), отримаємо результат "촛궻簽紙" за 200ms



const getChineseSign = function() { //создаем функцию, которая генерирует дату в милисекундах
    let sign = Date.now().toString().slice(-5) //получаем 5 последних чисел от сгенерированного числа
    let chineseSign = String.fromCharCode(sign) //переводим числа в символ
    return chineseSign;
}

async function getRandomChinese(lenght) {

    let chineseText = ""; //создаем пустую строку

    for (let i = 0; i < lenght; i++) { //запускаем цикл на lenght итераций

        let getSign = new Promise(function(resolve, reject) {
            setTimeout(() => resolve(getChineseSign()), 50) // задаем таймаут запуска функции, которая генерирует значения
        })

        chineseText += await getSign; //просим подождать, пока выполниться промис и записываем результат в строку
    }
    console.log(`Рандомный текст из ${lenght} значений: ${chineseText}`);

}
getRandomChinese(10)
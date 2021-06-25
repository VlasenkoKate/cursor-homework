// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
const getRandomArray = (length, min, max) => {
    let randomArray = []; //создаем пустой массив
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.round(Math.random() * (max - min) + min)) // с помощью цикла добавляем рандомное число в массив
    }
    return randomArray;
}
console.log(`Рандомный массив:${getRandomArray(15, 1, 100)}`)


// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
const getAverage = (...numbers) => {
    const intNumbers = numbers.filter(number => Number.isInteger(number)) // фильтруем исходый массив, оставляем целые числа
    const sum = intNumbers.reduce((sum, number) => { // собираем сумму всех чисел
        return sum + number;
    }, 0)
    return sum / intNumbers.length // делим сумму на количество элементов
}
console.log(`Среднее арифметическое равно: ${getAverage(6, 2, 55, 12.8, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`)

// 4. Створіть функцію getMedian(...numbers)– яка рахує медіану всіх переданих в неї аргументів.
function getMedian(...numbers) {
    const sortedIntNumbers = numbers.filter(number => Number.isInteger(number)).sort((a, b) => a - b) // фильтруем целые числа, сортируем массив по возростанию
    if (sortedIntNumbers.length % 2 !== 0) { //считаем медиану, если количество элементов нечетное
        return sortedIntNumbers[Math.floor((sortedIntNumbers.length) / 2)];
    } else { // считаем медиану если количество элементов четное
        return (sortedIntNumbers[Math.floor((sortedIntNumbers.length) / 2)] +
            sortedIntNumbers[(Math.floor((sortedIntNumbers.length) / 2)) - 1]) / 2
    }
}
console.log(`Медиана равна: ${getMedian(7, 2, 3, 5.7, 4, 9, 80, 7, 6, 6.8)}`)


// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
function filterEvenNumbers(...numbers) {
    const evenNumbers = numbers.filter(number => number % 2 !== 0) // создаем фильтр, который фильтруе парные
    return evenNumbers;
}
console.log(`Отфильтрованные парные числа: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}`)


// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
const countPositiveNumbers = (...numbers) => {
    const positiveNumbers = numbers.filter(number => number > 0); // создаем фильт, который отсеит отрицательные
    return positiveNumbers.length // выводим длину нового массива
}
console.log(`Количество позитивных чисел: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}`)

// 7. Створіть функцію getDividedByFive(...numbers) – 
// яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
const getDividedByFive = (...numbers) => {
    const dividedByFive = numbers.filter(number => number % 5 === 0 && number !== 0); // фильтруем те что равны нулю и не делятся на 5
    return dividedByFive;
}
console.log(`Числа, которые делятся на 5: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`)
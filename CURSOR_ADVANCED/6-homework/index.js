const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

// 1. Створіть функцію, яка повертає список предметів для конкретного студента. 
const getSubjects = function(student) {
    if (student) { //проверка на наличие студента с индексом равным переданному в функцию числу
        return Object.keys(student.subjects) //получаем названия предметов
            .map(subject => {
                return (subject.charAt(0).toUpperCase() + subject.slice(1).toLowerCase()) //переводим первую букву в заглавную
                    .replace("_", " "); //меняем подчеркивания на пробел
            })
    } else console.log("Такого студента нет в списке")
}
console.log(`Предметы студента: ${getSubjects(students[0])}`)

// 2. Створіть функцію, яка поверне середню оцінку по усім предметам для переданого студента
const getAverageMark = function(student) {
    if (student) { //проверка на наличие студента с индексом равным переданному в функцию числу
        const studentMarks = Object.values(student.subjects) // получается массив с массивами оценок по предметам
            .join(',') //преобразуем массивы в строку 
            .split(",") //преобразуем строку в единый массив с оценками
        const sumOfMarks = studentMarks.reduce((sumOfMarks, mark) => { //считаем сумму оценок
            mark = +mark
            return sumOfMarks + mark;
        }, 0)
        return (sumOfMarks / studentMarks.length).toFixed(2) //считаем среднюю оценку
    } else alert("Такого студента нет в списке")
}
console.log(`Средняя оценка студента: ${getAverageMark(students[0])}`)

// 3. Створіть функцію, яка повертає інформацію загального виду по переданому студенту 
const getStudentInfo = function(student) {
    if (student) { //проверка на наличие студента с индексом равным переданному в функцию числу
        const studentInfo = { //создаем объект в который записываем данные по студенту
            name: student.name, // получаем имя
            course: student.course, // получаем номер курса
            averageMark: getAverageMark(student) //средняя оценка с предыдущего задания
        }
        console.log(`Инфо студента: name: ${studentInfo.name}, course: ${studentInfo.course}, avarageMark: ${studentInfo.averageMark}`)
    } else alert("Такого студента нет в списке")
}
getStudentInfo(students[0])

// 4. Створіть функцію, яка повертає імена студентів у алфавітному порядку.
const getStudentsNames = function(students) {
    return students.map(student => student.name).sort() //получаем массив из имен студентов и сортируем имена по алфавиту

}
console.log(`Отсортированные имена студентов: ${getStudentsNames(students)}`)

// 5. Створіть функцію яка повертає кращого студента зі списку по показнику середньої оцінки.
const getBestStudent = function(students) {
    const studentsAverageMarks = students.map((item, index) => {
        return getAverageMark(students[index]); //создаем массив со средними оценками студентов
    })
    const maxMark = Math.max(...studentsAverageMarks).toString(); //находим максимальную оценку
    const indexOfMaxMark = studentsAverageMarks.indexOf(maxMark); //получаем индекс максимальной оценки
    const bestStudent = students[indexOfMaxMark].name // получаем имя студента с таким же индексом
    console.log(`Лучший студент: ${bestStudent}. Его оценка: ${maxMark}`)
}
getBestStudent(students)

// 6. Створіть функцію, яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
const calculateWordLetters = function(word) {
    if (!word || typeof word == "number") { //проверяем, что введено слово, а не число или пустая строка
        console.log("Введите корректное слово");
    } else {
        const allLettersInWord = word.toLowerCase().replaceAll(" ", '').split('')
            //переводим в нижний регистр, удаляем пробелы, создаем массив из букв
        const calculatedLettersInWord = allLettersInWord.reduce((frequency, letter) => { //создаем объект в котором названия ключей - это буква
            if (!frequency[letter]) { // на каждой итерации проверяем повторяется ли в ключах такая буква
                frequency[letter] = 1; // если нет, то присваеваем ключу значение 1
            } else {
                frequency[letter] = frequency[letter] + 1; // а если повторяется, то добавляем к значению +1
            }
            return frequency;
        }, {});
        return calculatedLettersInWord;
    }
}
console.log(calculateWordLetters('test test test test'));
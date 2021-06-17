// Необхідно створити 3 масиви:
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
function getPairs(students) {
    const pairs = [
        [students[0], students[2]],
        [students[1], students[3]],
        [students[4], students[5]]
    ]
    return pairs;
}
const pairs = getPairs(students);
console.log(pairs);


// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
function getPairsThemes(themes, pairs) {
    let pairsAndThemes = [];
    for (let i = 0; i < themes.length; i++) {
        pairsAndThemes[i] = pairs[i].join(" і ").split(",").concat(themes[i]);
    }
    return pairsAndThemes;
}
const pairsAndThemes = getPairsThemes(themes, pairs);
console.log(pairsAndThemes);

// 3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
function getStudentMark(students, marks) {
    let studentMark = [];
    for (let i = 0; i < students.length; i++) {
        studentMark[i] = [students[i], marks[i]];
    }
    return studentMark;
}
const studentMark = getStudentMark(students, marks);
console.log(studentMark);

// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт
function getRandomMarks(pairsAndThemes) {
    let randomStudentMark = [];
    for (let i = 0; i < pairsAndThemes.length; i++) {
        randomStudentMark[i] = [pairsAndThemes[i].join(", "), Math.round(Math.random() * 4 + 1)];
    }
    return randomStudentMark;
}
const randomStudentMark = getRandomMarks(pairsAndThemes)
console.log(randomStudentMark)
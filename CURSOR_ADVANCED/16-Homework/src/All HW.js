// 1 Homework

export function sumOfPrices(chairPrice, sofaPrice, tablePrice) {
    return chairPrice + sofaPrice + tablePrice;
}

// 2 Homework

export function getSumOfNumbers(minNumber, maxNumber, skipEven) {
    let sumOfNumbers = 0;
    for (let i = minNumber; i <= maxNumber; i++) {
        if (skipEven && (i % 2 == 0)) {
            continue;
        }
        sumOfNumbers += i;
    }
    return sumOfNumbers;
}

// 3 Homework

export function changeCaseName(inputedName) {
    let newName = inputedName.replace(/[0-9]/g, '')
    if (!newName) {
        return `Error! Enter the correct name!`
    } else {
        return newName[0].toUpperCase() + newName.slice(1).toLowerCase()
    }
}

// 4 Homework

export function getPairs() {
    const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]
    const pairs = [
        [students[0], students[2]],
        [students[1], students[3]],
        [students[4], students[5]]
    ]
    return pairs;
}

// 5 Homework
export function getRandomArray(length, min, max) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.round(Math.random() * (max - min) + min))
    }
    return randomArray;
}

// 6 Homework
export const students = [{
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

export const getStudentsNames = function(students) {
    return students.map(student => student.name).sort();
}

// 7 Homework
export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
export const getMyTaxes = function(salary) {
    return salary * this.tax;
}
export const userTaxes = getMyTaxes.call(ukraine, 3000)

// 8 Homework

export class Student {
    constructor(university, course, fullName, marks = [5, 4, 4, 5]) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
    }
    getInfo() {
        return `Студент ${this.course}го курсу. ${this.university}, ${this.fullName}`
    }
}
export const ostap = new Student("Вища Школа Психотерапії м.Одеса", 1, "Остап Бендер", [5, 4, 4, 5])

// 9 Homework

export const getRandomColor = function() { // создаем функцию, которая генерирует случайный цвет rgb
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`;
}

// 11 Homework

export const getChineseSign = function() { //создаем функцию, которая генерирует дату в милисекундах
    let sign = Date.now().toString().slice(-5) //получаем 5 последних чисел от сгенерированного числа
    let chineseSign = String.fromCharCode(sign) //переводим числа в символ
    return chineseSign;
}

export async function getRandomChinese(lenght) {

    let chineseText = "";

    for (let i = 0; i < lenght; i++) {

        let getSign = new Promise(function(resolve, reject) {
            setTimeout(() => resolve(getChineseSign()), 50)
        })

        chineseText += await getSign;
    }
    return chineseText;
}

// 13 Homework

export function getPlanetsList() {
    document.body.innerHTML = null;
    let planetData = null;
    axios.get(`https://swapi.dev/api/planets/?page=1`)
        .then((response) => {
            planetData = response.data.results
            planetData.map((p, i) => {
                document.body.insertAdjacentHTML("beforeend", `<li>${p.name}</li>`)
            })
        })
}

// 14 Homework

export function* createIdGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

export const idGenerator = createIdGenerator();
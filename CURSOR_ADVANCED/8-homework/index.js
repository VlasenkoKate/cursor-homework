// У студентів повинні бути наступні властивості: university, course, fullName, вони передаються 
// при створенні студента(в конструктор).
class Student {
    constructor(university, course, fullName, marks = [5, 4, 4, 5]) {
            this.university = university;
            this.course = course;
            this.fullName = fullName;
            this.marks = marks;
        }
        // Створіть метод this.getInfo() метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
    getInfo() {
            return `Студент ${this.course}го курсу. ${this.university}, ${this.fullName}`
        }
        // Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]

    get getMarks() {
            if (this.studentExpelled) {
                return null;
            } else return this.marks;
        }
        // Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. 
        // Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
    set setMarks(mark) {
            if (this.studentExpelled) {
                return null;
            } else this.marks.push(mark);
        }
        // Створіть метод отримання середнього балу this.getAverageMark() -> 4.6

    getAvarage() {
            if (!this.studentExpelled) {
                const sum = this.marks.reduce((sum, mark) => {
                    return sum + mark;
                }, 0)
                return +(sum / this.marks.length).toFixed(1)
            } else return null;
        }
        // Cтворіть метод this.dismiss, який "виключить" студента. 
    dismiss() {
            return this.studentExpelled = true;
        }
        // Створіть метод this.recover, який дозволить поновити студента
    recover() {
        return this.studentExpelled = false;
    }
}

const ostap = new Student("Вища Школа Психотерапії м.Одеса", 1, "Остап Бендер", [5, 4, 4, 5])
console.log(`Инфо про студента: ${ostap.getInfo()}`)
console.log(`Оценки студента: ${ostap.getMarks}`)
console.log(`Новая оценка: ${ostap.setMarks = 5}`)
console.log(`Оценки студента: ${ostap.getMarks}`)
console.log(`Средняя оценка студента: ${ostap.getAvarage()}`)
console.log(`Студент исключен: ${ostap.dismiss()}`)
console.log(`Оценки студента: ${ostap.getMarks}`)
console.log(`Средняя оценка студента: ${ostap.getAvarage()}`)
console.log(`Студент исключен: ${ostap.recover()}`)
console.log(`Оценки студента: ${ostap.getMarks}`)

// Advanced

// Створіть новий клас BudgetStudent, який повністю наслідує клас Student
// Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. 
// Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії
// Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту. 
// Підказка: викликайте його в constructor
// Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
// Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно :) )


class BudgetStudent extends Student {
    constructor(university, course, fullName, marks) {
        super(university, course, fullName, marks);
        setInterval(() =>
            console.log(this.getScholarship()), 10000);
    }
    getScholarship() {
        const scholarship = 1400
        if (this.getAvarage() > 4 || this.studentExpelled) {
            return `${this.fullName} получил ${scholarship} грн. стипендії`

        } else return `${this.fullName} получил 0 грн. стипендії`
    }
}
const petro = new BudgetStudent("Вища Школа Психотерапії м.Одеса", 3, "Петро Бендер", [1, 2, 3, 5])
const stepan = new BudgetStudent("Вища Школа Психотерапії м.Одеса", 1, "Степан Бендер", [5, 4, 4, 5])
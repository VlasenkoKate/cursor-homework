const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Створіть функцію яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн

const getMyTaxes = function(country, salary) {
    return salary * this.tax;
}
const userTaxes = getMyTaxes.call(ukraine, 3000)
console.log(`Сумма налогов: ${userTaxes}`)

// 2. Створіть функцію, яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. 
const getMiddleTaxes = function(country) {
    return this.middleSalary * this.tax
}
const middleTaxes = getMiddleTaxes.call(ukraine);
console.log(`Средний размер налогов: ${middleTaxes}`)

// 3. Створіть функцію яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні

const getTotalTaxes = function(country) {
    return this.tax * this.middleSalary * this.vacancies
}
const totaltaxes = getTotalTaxes.call(ukraine);
console.log(`Сумма налогов с IT-специалистов: ${totaltaxes}`)

// 4. Створіть функцію яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. 
// Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. 
// taxes – розраховується в залежності від вибраної країни та значення salary.
const getMySalary = function(country) {
    setInterval(() => {
        const maxSalary = 2000
        const minSalary = 1500
        const userSalary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
        const userTaxes = userSalary * this.tax;
        const userProfit = userSalary - userTaxes;
        const userSalaryInfo = {
            salary: userSalary,
            taxes: userTaxes,
            profit: userProfit
        }
        console.log(userSalaryInfo)
    }, 10000)
}
getMySalary.call(ukraine)
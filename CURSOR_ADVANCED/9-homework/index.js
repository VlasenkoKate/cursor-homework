// Зродіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір. Квадрати мають розташовуватись по 5 в ряд.
// Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks();

const getRandomColor = function() { // создаем функцию, которая генерирует случайный цвет rgb
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`;
}

const blocksSquare = document.querySelector('.container') // задаем стиль и класс контейнеру, в котором будут блоки
blocksSquare.style.cssText = `
    width: 250px;
    height: 250px;
    `
const generateBlocks = function(quantity = 25) { //функция для генерации блоков
    for (let i = 0; i < quantity; i++) {
        let block = document.createElement("div"); // создаем элементы div 
        block.style.cssText = ` 
        width: 50px;
        height: 50px;
        float:left;
        background-color: ${getRandomColor()}
        ` // задаем для них стиль и рандомный цвет
        block.classList.add('block') // добавляем блокам класс 
        document.querySelector('.container').prepend(block); // и выводим их внутри контейнера
    }
}
generateBlocks()

// Advanced зробіть так, щоб квадрати змінювали колір раз на секунду.
// Щоб квадрати з'явились на сторінці та почали змінюватись, необхідно викликати функцію generateBlocksInterval();

const generateBlocksInterval = function() {
        const allBlocks = document.querySelectorAll('.block') // получаем коллекцию со всеми блоками 
        setInterval(() => allBlocks.forEach(item => item.style.backgroundColor = `${getRandomColor()}`), 1000)
    } //задаем интервал изменения цвета с помощью forEach, который меняет цвет элементов

generateBlocksInterval()
// Завдання 1:
// Створіть нескінченний генератор ідентифікаторів

function* createIdGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const idGenerator = createIdGenerator();

console.log(`Id number: ${idGenerator.next().value}`)
console.log(`Id number: ${idGenerator.next().value}`)
console.log(`Id number: ${idGenerator.next().value}`)
console.log(`Id number: ${idGenerator.next().value}`)
console.log(`Id number: ${idGenerator.next().value}`)


// Завдання 2 (advanced)
// Створіть генератор, який буде регулювати розміри шрифту для вашого сайту.


function* newFontGenerator(value) {
    while (true) {
        let arg = yield value;
        if (arg === "up") {
            value = value + 2;
        } else if (arg === "down") {
            value = value - 2
        }
    }
}

const fontGenerator = newFontGenerator(14); // 14 – стартове значення

console.log(`Font size: ${fontGenerator.next("up").value}`)
console.log(`Font size: ${fontGenerator.next("up").value}`)
console.log(`Font size: ${fontGenerator.next("up").value}`)
console.log(`Font size: ${fontGenerator.next().value}`)
console.log(`Font size: ${fontGenerator.next("down").value}`)
console.log(`Font size: ${fontGenerator.next("down").value}`)
console.log(`Font size: ${fontGenerator.next("down").value}`)
console.log(`Font size: ${fontGenerator.next().value}`)
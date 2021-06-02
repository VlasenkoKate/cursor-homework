// Створіть 3 змінних
let chairPrice = 15.678;
let sofaPrice = 123.965;
let tablePrice = 90.2345

// Виведіть максимальне число
let maxPrice = Math.max(chairPrice, sofaPrice, tablePrice);
console.log(maxPrice);

// Виведіть мінімальне число
let minPrice = Math.min(chairPrice, sofaPrice, tablePrice);
console.log(minPrice);

// Сума вартостей всіх товарів
let sumOfPrices = chairPrice + sofaPrice + tablePrice;
console.log(sumOfPrices);

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. 
let integerSumOfPrices = Math.floor(chairPrice) + Math.floor(sofaPrice) + Math.floor(tablePrice);
console.log(integerSumOfPrices);

// Виведіть суму товарів округлену до сотень.
let roundToHundredsSum = (Math.round(integerSumOfPrices / 100) * 100);
console.log(roundToHundredsSum);

// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let isEven = Math.floor(sumOfPrices) % 2
console.log(isEven == 0);

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
let changeFromPurchase = 500 - sumOfPrices;
console.log(changeFromPurchase);

// Виведіть середнє значення цін, округлене до другого знаку після коми
let meanPrice = ((sumOfPrices / 3).toFixed(2));
console.log(meanPrice);

// Створіть змінну, в якої збережіть випадкову знижку
let discountAmount = Math.trunc(Math.random() * 100);
console.log(discountAmount + '%');

// Сума знижки
let discountSum = (sumOfPrices * (discountAmount / 100)).toFixed(2)
console.log(discountSum)

// Виведіть суму до оплати округлену до 2 знаків після коми.
let amountToPay = ((sumOfPrices - discountSum).toFixed(2));
console.log(amountToPay);

// Виведіть чистий прибуток
let netProfit = ((sumOfPrices / 2) - discountSum).toFixed(2);
console.log(netProfit);

// Advanced
// Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього завдання у вигляді одного рядка
document.writeln(`1. Максимальна ціна: ${maxPrice}; <br> 
2. Мінімальна ціна: ${minPrice}; <br> 
3. Сума вартостей всіх товарів: ${sumOfPrices}; <br> 
4. Вартість всіх товарів без копійок: ${integerSumOfPrices}; <br>
5. Сума товарів округлена до сотен: ${roundToHundredsSum}; <br> 
6. Чи є сума парним числом? ${isEven}; <br>
7. Решта с 500: ${changeFromPurchase}; <br>
8. Середнє значення цін: ${meanPrice}; <br>
9. Розмір знижки: ${discountAmount}; <br>
10. Сума знижки: ${discountSum}; <br>
11. Сума до оплати: ${amountToPay}; <br>
12. Чистий прибуток: ${netProfit}. `)
import _ from 'lodash'
import "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/16-Homework/src/style.css"

import {
    sumOfPrices,
    getSumOfNumbers,
    changeCaseName,
    getPairs,
    getRandomArray,
    students,
    getStudentsNames,
    ukraine,
    getMyTaxes,
    userTaxes,
    Student,
    ostap,
    getRandomColor,
    getChineseSign,
    getRandomChinese,
    getPlanetsList,
    createIdGenerator,
    idGenerator
} from './All HW'


console.log(`Function from HW#1: Sum of prices ${sumOfPrices(15.678, 123.965, 90.2345)}`)
console.log(`Function from HW#2: Sum of numbers ${getSumOfNumbers(10, 34, true)}`)
console.log(`Function from HW#3: Changed name ${changeCaseName("vaSyl")}`)
console.log(`Function from HW#4: Pairs of students ${getPairs()}`)
console.log(`Function from HW#5: Random array ${getRandomArray(10, 2, 56)}`)
console.log(`Function from HW#6: Students names ${getStudentsNames(students)}`)
console.log(`Function from HW#7: Sum of taxes in Ukraine - ${userTaxes}`)
console.log(`Function from HW#8: Info about Student ${ostap.getInfo()}`)
console.log(`Function from HW#9: Random color ${getRandomColor()}`)
getRandomChinese(10).then(res => console.log(`Function from HW#11: Random chinese ${res}`))
getPlanetsList()
console.log(`Function from HW#14: Id generator:`)
console.log(`Id number: ${idGenerator.next().value}`)
console.log(`Id number: ${idGenerator.next().value}`)
console.log(`Id number: ${idGenerator.next().value}`)
//  константы 
const nums = document.querySelectorAll('.num')
const display = document.querySelector('#display')
const symbols = document.querySelectorAll('.symbol')
const sum = document.querySelector('.sum')
const ac = document.querySelector('.ac')
const back = document.querySelector('.back')

// объект математических вычислений
const objMath = {
    firstNum : '',
    secondNum : '',
    mathSymbol : '',
    result : ''
}

// функция для обработчки действия кнопок num
// заполняем 2 числа в objMath
function actionNum(btn){
    if(objMath.mathSymbol === ''){
        objMath.firstNum += btn.textContent
    } else if(objMath.mathSymbol !== ''){
        objMath.secondNum += btn.textContent
    }
    changeInp()
}

// добавляем символ в objMath
function actionSymbol (btn) {
    objMath.mathSymbol = btn.textContent
    changeInp()
}

// математические вычисления
function getMath() {
    if(objMath.mathSymbol === '/') {
        objMath.result = objMath.firstNum / objMath.secondNum
    } else  if(objMath.mathSymbol === '*') {
        objMath.result = objMath.firstNum * objMath.secondNum
    } else  if(objMath.mathSymbol === '+') {
        objMath.result = +objMath.firstNum + +objMath.secondNum
    } else  if(objMath.mathSymbol === '-') {
        objMath.result = objMath.firstNum - objMath.secondNum
    } else  if(objMath.mathSymbol === '%') {
        objMath.result = objMath.firstNum % objMath.secondNum
    }
    getResult()
}
// отображаем дисплей + математическая формула
function changeInp() {
    display.value = `${objMath.firstNum} ${objMath.mathSymbol} ${objMath.secondNum}`
}
// отображем результат математических действий + чистим поля объекта
function getResult(){
    display.value = objMath.result
    objMath.firstNum = objMath.result + ''
    objMath.result = ''
    objMath.mathSymbol = ''
    objMath.secondNum = ''
}
// обнуляем все
function reset(){
    display.value = ''
    objMath.firstNum = ''
    objMath.mathSymbol = ''
    objMath.secondNum = ''
    objMath.result = ''
}
// обнуляем с конца
function backDel(){
    if(objMath.secondNum !== ''){
        const arr = objMath.secondNum.split('')
        arr.pop()
        objMath.secondNum = arr.join('')
    } else if(objMath.mathSymbol !== ''){
        objMath.mathSymbol = ''
    } else {
        const arr = objMath.firstNum.split('')
        arr.pop()
        objMath.firstNum = arr.join('')
    }
    changeInp()
}

// вешаем на каждую кнопку слушатель событий
nums.forEach(btn => btn.addEventListener('click', () => actionNum(btn)))
symbols.forEach(symbol => symbol.addEventListener('click', () => actionSymbol(symbol)))
sum.addEventListener('click', getMath)
ac.addEventListener('click', reset)
back.addEventListener('click', backDel)



let displayValue  = ""
let previousValue = ""
let operatorValue = ""
let display = document.querySelector("#display")
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equal = document.getElementById("equal")
let clear = document.getElementById("clear")

function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

function operate(a,b,operation){
    return operation(a,b)
}

numbers.forEach((number) => number.addEventListener("click", function(e){
    if (display.textContent.length < 20){
        displayValue += e.target.textContent
        display.textContent = displayValue
}}))

operators.forEach((operator) => operator.addEventListener("click", function(e){
        display.textContent = "‎"
        previousValue = displayValue
        displayValue = ""
        operatorValue = e.target.textContent
}))

equal.addEventListener("click", function(){
    previousValue = Number(previousValue);
    displayValue = Number(displayValue);
    if (operatorValue == "+"){
        display.textContent = add(previousValue,displayValue)
        displayValue =  add(previousValue,displayValue)}
    if (operatorValue == "-"){
        display.textContent = subtract(previousValue,displayValue)
        displayValue =  subtract(previousValue,displayValue)}
    if (operatorValue == "x"){
        display.textContent = multiply(previousValue,displayValue)
        displayValue =  multiply(previousValue,displayValue)}
    if (operatorValue == "÷"){
        display.textContent = divide(previousValue,displayValue)
        displayValue =  divide(previousValue,displayValue)
    }})


clear.addEventListener("click", function(){
    display.textContent = "‎"
    previousValue = ""
    displayValue = ""
    operatorValue = ""
})



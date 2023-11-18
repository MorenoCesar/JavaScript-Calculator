const input = document.querySelector('#input')
const result = document.querySelector('#result')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')
const equals = document.querySelector('.equals')
const dat = document.querySelector('.dat')
const clear = document.querySelector('.clear')
const addition = document.querySelector('.addition')
const subtraction = document.querySelector('.subtraction')
const division = document.querySelector('.division')
const multiplication = document.querySelector('.multiplication')

one.addEventListener('click', function () {
    input.value = input.value + "1"
})

two.addEventListener('click', function () {
    input.value = input.value + "2"
})

three.addEventListener('click', function () {
    input.value = input.value + "3"
})

four.addEventListener('click', function () {
    input.value = input.value + "4"
})

five.addEventListener('click', function () {
    input.value = input.value + "5"
})

six.addEventListener('click', function () {
    input.value = input.value + "6"
})

seven.addEventListener('click', function () {
    input.value = input.value + "7"
})

eight.addEventListener('click', function () {
    input.value = input.value + "8"
})

nine.addEventListener('click', function () {
    input.value = input.value + "9"
})

zero.addEventListener('click', function () {
    input.value = input.value + "0"
})

subtraction.addEventListener('click', function () {
    input.value = input.value + "-"
})

multiplication.addEventListener('click', function () {
    input.value = input.value + "*"
})

division.addEventListener('click', function () {
    input.value = input.value + "/"
})

addition.addEventListener('click', function () {
    input.value = input.value + "+"
})

clear.addEventListener('click', function () {
    input.value = ""
    result.value = ""
})

dat.addEventListener('click', function () {
    input.value = input.value + "."
})

equals.addEventListener('click', function(){
    result.value = "= " + eval(input.value)
})

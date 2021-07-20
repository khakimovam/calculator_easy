// Сделайте простой калькулятор на 4 действия (сложение, вычитание, деление, умножение). 4 кнопки, по нажатию которые запрашиваются два числа и выдается результат их вычисления, соответствующий действию на кнопке.

// Сложение
function add() {
    const number1 = prompt('Введите первое слогаемое', 0);
    const number2 = prompt('Введите второе слогаемое', 0);

    alert(Number(number1) + Number(number2));
}

// Вычитание
function subtract() {
    const number1 = prompt('Введите уменьшаемое', 0);
    const number2 = prompt('Введите вычитаемое', 0);

    alert(Number(number1) - Number(number2));
}

// Умножение
function multiply() {
    const number1 = prompt('Введите первое слогаемое', 0);
    const number2 = prompt('Введите второе слогаемое', 0);

    alert(Number(number1) * Number(number2));
}

// Деление
function divide() {
    const number1 = prompt('Введите первое слогаемое', 0);
    const number2 = prompt('Введите второе слогаемое', 0);

    alert(Number(number1) / Number(number2));
}
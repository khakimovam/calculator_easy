// Сделайте простой калькулятор на 4 действия (сложение, вычитание, деление, умножение). 4 кнопки, по нажатию которые запрашиваются два числа и выдается результат их вычисления, соответствующий действию на кнопке.

// Сложение
function addition() {
    let number1 = prompt('Введите первое слогаемое', 0);
    let number2 = prompt('Введите второе слогаемое', 0);

    alert(Number(number1) + Number(number2));
}

// Вычитание
function subtraction() {
    let number1 = prompt('Введите уменьшаемое', 0);
    let number2 = prompt('Введите вычитаемое', 0);

    alert(Number(number1) - Number(number2));
}

// Умножение
function multiplication() {
    let number1 = prompt('Введите первое слогаемое', 0);
    let number2 = prompt('Введите второе слогаемое', 0);

    alert(Number(number1) * Number(number2));
}

// Деление
function division() {
    let number1 = prompt('Введите первое слогаемое', 0);
    let number2 = prompt('Введите второе слогаемое', 0);

    alert(Number(number1) / Number(number2));
}
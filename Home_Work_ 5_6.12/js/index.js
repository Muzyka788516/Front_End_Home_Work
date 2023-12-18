//ЗАДАЧА 1
// Создать 3 input поле и также 4 кнопки, каждая кнопка будет выполнять определённое действие и будет вызывать свой метод

//Создать функцию checkEquality с помощью которого проверяем равны ли все 3 значение внутри input-ов или нет
//Например если 3, 3, 3 то в результате должны получать "Все поле равны" если нет то пишем "Все поле не равны"
function checkEquality() {
    let num1 = +document.querySelector(".input-1").value
    let num2 = +document.querySelector(".input-2").value
    let num3 = +document.querySelector(".input-3").value
    if (num1 === num2 && num2 === num3) {
        console.log("Все поля равны")
    } else {
        console.log("Все поля не равны")
    }
}

//ЗАДАЧА 2
//Создать функцию hasZero с помощью которого проверяем есть ли поле которое равно 0 если есть пишем "Да, есть", если нет пишем просто "Нет"
//Например если будет 1, 2, 0 то результат будет "Да, есть", а если будет 1, 2, 3 то результат "Нет"
function hasZero() {
    let num1 = +document.querySelector(".input-1").value
    let num2 = +document.querySelector(".input-2").value
    let num3 = +document.querySelector(".input-3").value
    if (num1 === 0 || num2 === 0 || num3 === 0) {
        console.log("Да есть")
    } else {
        console.log("Нет")
    }
}

//ЗАДАЧА 3
//Создать функцию sameOne с помощью которого проверяем есть ли поле которое совпадают, если есть пишем "Да, есть", если нет пишем просто "Нет"
//Например если будет 1, 1, 0 то результат будет "Да, есть", а если будет 1, 2, 3 то результат "Нет"
function sameOne() {
    let num1 = +document.querySelector(".input-1").value
    let num2 = +document.querySelector(".input-2").value
    let num3 = +document.querySelector(".input-3").value
    if (num1 === num2 || num2 === num3) {
        console.log("Да есть")
    } else {
        console.log("Нет")
    }
}
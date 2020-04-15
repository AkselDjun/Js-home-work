"use strict";

let money = prompt("Ваш бюджет на месяц?", '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};


let que1 = prompt("Введите обязательную статью расходов в этом месяце");
let que2 = prompt("Введите обязательную статью расходов в этом месяце");
let que3 = prompt("Во сколько обойдется?");
let que4 = prompt("Во сколько обойдется?");

appData.expenses[que1] = que3;
appData.expenses[que2] = que4;


alert(appData.budget / 30);
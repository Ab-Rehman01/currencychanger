#! /usr/bin/env node
// shabang
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 278.13,
    OMR: 0.38,
    NZD: 1.69,
    SAD: 3.75,
    KUD: 0.31,
    QTR: 3.64
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "KUD", "QTR", "SAD", "NZD", "OMR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "KUD", "QTR", "SAD", "NZD", "OMR"]
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);

#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.white.bold('\n \tWelcome to Currency_converter \n'))
let exchange_rate: any ={
    "USD": 1, //U.S.Dollar (USD)
    "KWD": 0.31, //Kuwaiti Dinar (KWD)
    "BHD": 0.38, //Bahraini Dinar (BHD)
    "OMR": 0.38, //Omani Rial (OMR)
    "GBP": 0.75, //British Pound (GBP)
    "EUR": 0.89, //Euro (EUR)
    "SAR": 3.74, //Saudi Riyal (SAR)
    "PKR": 278.36, //Pakistani Rupee (PKR)
    "CNY": 7.12, //Chinese Yuan (CNY)
    "RUB": 91.47, //Russian Ruble(RUB)
    "JPY": 144.36 //Japanse Yen (JPY)

}

let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "KWD", "BHD", "OMR", "GBP", "EUR", "SAR", "PKR", "CNY","RUB", "JPY"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "KWD", "BHD", "OMR", "GBP", "EUR", "SAR", "PKR", "CNY","RUB", "JPY"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:",
    }
]);
//Perfoming currency converstion by using Formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//Formula conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

//Display the converted amount
console.log(`Converted amount = ${chalk.green(converted_amount.toFixed(3))}`);
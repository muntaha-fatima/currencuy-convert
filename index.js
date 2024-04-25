#!/user/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GPR: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GPR", "INR", "PKR"]
    },
    {
        name: "to",
        message: "enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GPR", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number",
    },
]);
let fromamunt = currency[user_answer.from];
let toamount = currency[user_answer.to];
let amount = user_answer.amount;
let baseamount = amount / fromamunt;
let convereidamunt = baseamount * toamount;
console.log(convereidamunt);

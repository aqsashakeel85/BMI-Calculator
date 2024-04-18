#! /usr/bin/env node
// shabang 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    //   { message: "Enter third number", types: "number", name: "thirdnumber"},
    {
        message: "select one of the operators to perform opretion",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "multiplication", "division"],
    },
]);
// console.log(answer);
// conditional Statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}

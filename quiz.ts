#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

const totalScore = 15;
let Score = 0;

let answer1 = "hazrat muhammad"

let quiz = await inquirer.prompt([
    {
      name : "totalQuiz",
      type : "list",
      message : "who is the last prophet? ",
      choices : ["hazrat adam" , "hazrat nooh", "hazrat yaqoob" , answer1]


    }
])

if (answer1 === quiz.totalQuiz){
  console.log(chalk.greenBright("\n\tcorrect answer\n\t"));
  Score += 5

}else{
  console.log(chalk.redBright("\n\tincorrect answer\n\t"));
}

let answer2 = "jupiter"

let quiz1 = await inquirer.prompt([

  {
    name : "totalQuiz",
    type : "list",
    message : "which is the biggest planet in solar system? ",
    choices : ["earth " , "mars", answer2 , "pluto"]

  }
])

if (answer2 === quiz1.totalQuiz){
  console.log(chalk.greenBright("\n\tcorrect answer\n\t"));
  Score += 5

}else{
  console.log(chalk.redBright("\n\tincorrect answer\n\t"));
}
  
let answer3 = "green"

let quiz2 = await inquirer.prompt([

  {
    name : "totalQuiz",
    type : "list",
    message : "what is the color of tree? ",
    choices : ["orange" , answer3, "blue" , "red"]

  }
])
  
if (answer3 === quiz2.totalQuiz){
  console.log(chalk.greenBright("\n\tcorrect answer\n\t"));
  Score += 5 

}else{
  console.log(chalk.redBright("\n\tincorrect answer\n\t"));
}

console.log(chalk.bgYellowBright(`your total score is ${totalScore}`));

console.log(chalk.bgMagentaBright(`your obtained score is ${Score}`));

let reAttempt = await inquirer.prompt([
  {
    name : "attempt",
    type : 'confirm',
    message: "do you want to reAttempt the quiz?",
    default : "true"
  }
])

if (reAttempt.attempt === false){
  console.log(chalk.blueBright("thanks for attempting the quiz...."));
}
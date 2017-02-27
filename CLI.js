//Pull in our exports of variables from other files
var basicExports = require("./basicflash.js");
var clozeExports = require("./clozeflash.js");

//Inquirer will help us create the Command Line Interface
var inquirer = require('inquirer');

//FS will let us write to text files
var fs = require('fs');

// Using inquirer prompt the user to select a flashcard type
var cardGenerator = function() {
    inquirer.prompt([{
        type: "list",
        name: "flashType",
        message: "What would you like to do?",
        choices: ["Create a Basic Flashcard", "Create a Cloze Flashcard"]
    }]).then(function(answers) {
        // console.log(answers);
        switch (answers.flashType) {
            case "Create a Basic Flashcard":
                basicCreate();
                break;

            case "Create a Cloze Flashcard":
                clozeCreate();
                break;
        }
    })
};

//Use inquirer to get the two user inputs for the basic flash card constructor
var basicCreate = function() {
    inquirer.prompt([{
            type: "input",
            message: "What text would you like to be on the front of the card?",
            name: "front",
            default: ""
        },

        {
            type: "input",
            message: "What text would you like to be on the back of the card?",
            name: "back",
            default: ""
        }

    ]).then(function(input) {
        var NewBasic = new basicExports.BasicFlash(input.front, input.back);
        NewBasic.writeBasic();
        console.log(`
    Here is the new Basic Flashcard you created:
    Front:  ${input.front}
    Back:   ${input.back}`)
    });
};

//Use inquirer to get the two user inputs for the cloze flash card constructor
var clozeCreate = function() {
    inquirer.prompt([{
            type: "input",
            message: "Please enter the entire question text including the answer",
            name: "text",
            default: ""
        },

        {
            type: "input",
            message: "Please enter the cloze answer",
            name: "cloze",
            default: ""
        }

    ]).then(function(input) {
        var NewCloze = new clozeExports.ClozeFlash(input.text, input.cloze).findCloze();
        // NewsCloze.displayCloze();
        console.log(`
        Here is the new Cloze Flashcard you created:
        Text:  ${input.text}
        Cloze: ${input.cloze}
        `)
            // I wanted to input this in the console.log function above but kept getting an unefined/not a function
            // error response with this, I am not sure how to correct my syntax. Display: ${clozeExports.displayCloze()}
    });
};
cardGenerator();
// basicCreate();
// clozeCreate();
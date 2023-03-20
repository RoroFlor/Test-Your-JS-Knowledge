const question = document.querySelector('#question');
const choices = Array.from(document.querySelector('.choice-text'));

var currentQuestion = {};
var correctChoice = true;
var availableQuestion = [];

var questions = [
    {
        // question 1
        question: 'Commonly used data types DO NOT include:',
        choice1: 'Strings',
        choice2: 'Booleans',
        choice3: 'Alerts',
        choice4: 'Numbers',
        correct: '3'

    },
    {
        // question 2
        question: 'The condition in an if/else statement is enclosed with ____.',
        choice1: 'Quotes',
        choice2: 'Curly brackets',
        choice3: 'Parenthesis',
        choice4: 'Square brackets',
        correct: '3'

    },
    {
        // question 3
        question: 'Arrays in javascriptcan be used to store ___.',
        choice1: 'Numbers and strings',
        choice2: 'Other arrays',
        choice3: 'Booleans',
        choice4: 'All of the above',
        correct: '4'
    },
    {
        // question 4
        question: 'String values must be enclosed within ___ when being assigned to variables.',
        choice1: 'Commas',
        choice2: 'Curly brackets',
        choice3: 'quotes',
        choice4: 'Parenthesis',
        correct: 3

    },
    {
        // question 5
        question: 'A very useful tool used during devolopment and debugging for printing content to the debugger is.',
        choice1: 'Javascript',
        choice2: 'Terminal/bash',
        choice3: 'For loops',
        choice4: 'Console.log',
        correct: '4'

    },
]

var lastQuestionIndex = questions.length -1;
var runningQuestionIndex = 0;

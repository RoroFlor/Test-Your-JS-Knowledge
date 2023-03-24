var questions = [
    {
        // question 1
        question: 'Commonly used data types DO NOT include:',
        choices: [
            'Strings',
            'Booleans',
            'Alerts',
            'Numbers'
        ],
        correct: 'Alerts'

    },
    {
        // question 2
        question: 'The condition in an if/else statement is enclosed with ____.',
        choices: [
         'Quotes',
         'Curly brackets',
         'Parenthesis',
         'Square brackets'
        ],
        correct: 'Parenthesis'

    },
    {
        // question 3
        question: 'Arrays in javascript can be used to store ___.',
        choices: [
        'Numbers and strings',
        'Other arrays',
        'Booleans',
        'All of the above'
        ],
        correct: 'All of the above'
    },
    {
        // question 4
        question: 'String values must be enclosed within ___ when being assigned to variables.',
        choices: [
        'Commas',
        'Curly brackets',
        'quotes',
        'Parenthesis',
        ],
        correct: 'quotes'

    },
    {
        // question 5
        question: 'A very useful tool used during devolopment and debugging for printing content to the debugger is.',
        choices: [
        'Javascript',
        'Terminal/bash',
        'For loops',
        ],
        correct: 'For loops'

    },
]

var currentQuestion = 0;
var questionElements1 = document.querySelector('.choice-text1');
var questionDiv = document.querySelector('#question');
var countEl = document.querySelector('#count')
var clock = 100
var clockTick = setInterval(timer, 1000)
var initialsEl = document.querySelector('#initials')
var submitBtn = document.querySelector('#submit')
// var choice1 = questions[0].choices[0]
// questionElements1.innerHTML = [choice1]

function quizEnd(){
    clearInterval(clockTick)
    var endScreenEl = document.querySelector('#endScreen')
    endScreenEl.removeAttribute('class')
    var finalScoreEl = document.querySelector('#finalScore')
    finalScoreEl.textContent = clock
    var quizEl = document.querySelector('#quiz')
    quizEl.setAttribute('class', 'hide')
}

function saveHighScore(){
    var initials =initialsEl.value.trim()
    if(initials !== ''){
        var highScores = JSON.parse(localStorage.getItem('highscores')) || []
        var newScore = {
            score: clock,
            initials: initials
        }
        highScores.push(newScore)
        localStorage.setItem('highscores', JSON.stringify(highScores))
        window.location.href = 'highscore.html' 
    }

}

function timer(){
    clock--
    countEl.textContent = `time: ${clock}`
    if(clock <= 0){
        quizEnd()
    }
}

function checkAnswer(){
    console.log(this.dataset.value)
    if(this.dataset.value === questions[currentQuestion].correct){
        currentQuestion++
    }else{
        clock = clock - 10
        if(clock < 0){
            clock = 0
        }
    }
    if(currentQuestion === questions.length || clock <= 0){
        quizEnd()
    }else{
        showQuestion()
    }
}

function showQuestion() {
// var currentQuestion = questions[currentQuestionIndex];
questionDiv.textContent = questions[currentQuestion].question;
for(var i = 0; i < questions[currentQuestion].choices.length; i++){
    var choiceContainer = document.createElement('div')
    var choicePrefix = document.createElement('p')
    var choiceText = document.createElement('p')
    
    choiceContainer.setAttribute('class', 'choice-container')
    choiceContainer.setAttribute('data-value', questions[currentQuestion].choices[i] )
    choicePrefix.setAttribute('class', 'choice-prefix')
    choiceText.setAttribute('class', 'choice-text')

    choiceContainer.addEventListener('click', checkAnswer)

    choicePrefix.textContent = `${i + 1}.`
    choiceText.textContent = questions[currentQuestion].choices[i]
    questionDiv.append(choiceContainer)
    choiceContainer.appendChild(choicePrefix)
    choicePrefix.append(choiceText)
}

}

showQuestion();
submitBtn.onclick = saveHighScore


{/* <div class="choice-container">
                <p class="choice-prefix">1.</p>
                <p class="choice-text" data-number="1">choice</p>
            </div> */}












// var questionElements1 = document.querySelector('.choice-text1');
// var questionElements2 = document.querySelector('.choice-text2');
// var questionElements3 = document.querySelector('.choice-text3');
// var questionElements4 = document.querySelector('.choice-text4');


// var choice1 = questions[0].choices[0]
// var choice2 = questions[0].choices[1]
// var choice3 = questions[0].choices[2]
// var choice4 = questions[0].choices[3]


// // for (var i = 0; i < questionElements.length; i++) {
//     questionElements1.innerHTML = [choice1]
// // }







// var choices2 = questions[0].choices[1];
// console.log(questions[0].choices[1]);

// var choices3 = questions[0].choices[2];
// console.log(questions[0].choices[2]);

// var choices4 = questions[0].choices[3];
// console.log(questions[0].choices[3]);

// // question.append()
// console.log(question)













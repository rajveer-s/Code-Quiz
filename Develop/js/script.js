// All the ID's & classes secleted from html
let startBtn = document.querySelector('.start-btn');
let clearBtn = document.querySelector('.reset')
let timeEl = document.querySelector('#timer');
let welcomeBox = document.querySelector('#welcome-box');
let endGameEl = document.querySelector('#endGame');
let scoreBox = document.querySelector('#Score-box');
let quizSection = document.querySelector('#quizsec');
let question = document.querySelector('#questions');
let message = document.querySelector('#dismessage');
let initialsInput = document.querySelector('#initials');
let submitBtn = document.querySelector('#submit')
let choice = document.querySelectorAll('#choices');
let timeCounter = document.querySelector('#counter');
let option1 = document.querySelector('.option1');
let option2 = document.querySelector('.option2');
let option3 = document.querySelector('.option3');
let option4 = document.querySelector('.option4');

// questions for MCQ. using the same question for testing purposes. questions will be updated later.
let questions =
    [{
        question: "Who invented JavaScript?",
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "Brendan Eich",
        rightAnswer: "c"
    },
    {
        question: "Who invented JavaScript?",
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "Brendan Eich",
        rightAnswer: "c"
    },
    {
        question: "Who invented JavaScript?",
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "Brendan Eich",
        rightAnswer: "c"
    },
    {
        question: "Who invented JavaScript?",
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "Brendan Eich",
        rightAnswer: "c"
    },
    {
        question: "Which is a JavaScript package manager?",
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: "Brendan Eich",
        rightAnswer: "c"
    },
    {
        question: "Who invented C##?",
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "Brendan Eich",
        rightAnswer: "c"
    }
    ];


// global variables 
let questionCount = 0; //question Index 
let questionLast = questions.length;
let score = 0;
let correct;
let timer;
let timerCount;


// it hides the welcome div which contains instructions and shows the questions also starts the timer 
function startGame() {
    timerCount = 50;
    welcomeBox.style.display = "none";
    endGameEl.style.display = "none";

    renderQuestion()
    quizSection.style.display = "block";

    startTimer();

}

// it displays the questions that we added on top and the choices
function renderQuestion() {
    endGameEl.style.display = "none";
    if (questionCount === questionLast) {
        return displayScore();
    }

    let ques = questions[questionCount];

    question.innerHTML = '<p>' + ques.question + '</p>';
    option1.innerHTML = ques.a;
    option2.innerHTML = ques.b;
    option3.innerHTML = ques.c;
    option4.innerHTML = ques.d;
}

// starts the timer and set interval function makes the time live countdown
function startTimer() {

    timer = setInterval(function () {
        timerCount--;
        timeCounter.textContent = timerCount;
        if (timerCount >= 0) {
            if (timerCount < 0) {
                clearInterval(timer);
            }
        }
        if (timerCount === 0 || questionCount === questionLast) {
            clearInterval(timer);
            displayScore();
        }
    }, 1000)
}

// checks for the right answer in our choices and spits out the message if its the right or the wrong answer. also 10 seconds get taken off of the timer the user answers wrong. 
function checkAns(answer) {

    correct = questions[questionCount].rightAnswer;

    if (answer === correct && questionCount !== questionLast) {
        message.textContent = "Correct Answer";
        score++;
        questionCount++;
        renderQuestion();
    } else if (answer !== correct && questionCount !== questionLast) {
        message.textContent = "Wrong Answer -10 seconds";
        timerCount -= 10;
        questionCount++;
        renderQuestion();
    } else {
        displayScore();
    }
    // still in works 
    message.style.display = "flex";
    setTimeout(function () {
        message
    }, 500)
    
}



// starts the game when the start button is pushed  
startBtn.addEventListener("click", startGame);
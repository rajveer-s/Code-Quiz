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

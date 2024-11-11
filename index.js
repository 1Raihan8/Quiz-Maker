const quizData = [
    {
        question: "What is HTML?",
        choices: ["A scripting language", "A stylesheet language", "A markup language", "A programming language"],
        answer: 2
    },
    {
        question: "What is CSS?",
        choices: ["A programming language", "A framework", "A database management system", "A stylesheet language"],
        answer: 3
    },
    {
        question: "What is Bootstrap?",
        choices: ["A content management system", "A CSS framework", "A JavaScript library", "A programming language"],
        answer: 1
    },
    {
        question: "What is JavaScript?",
        choices: ["A markup language", "A stylesheet language", "A programming language", "A CSS framework"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion(){
    let currentQuestionData = quizData[currentQuestion];

    /* Adding Question title */
    document.getElementById("question").textContent = currentQuestion + 1 + ") " + currentQuestionData.question;

    /* Adding Question Choices */
    let choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
        choice.textContent = currentQuestionData.choices[index];
        choice.style.background = "#007bff";
        choice.disabled = false;
    });

    /* Hiding the Next Button before submitting */
    document.getElementById ("nextButton").style.display = "none"
}

/* Clicking Response */
function selectAnswer(index){
    let currentQuestionData = quizData[currentQuestion];
    let choices = document.querySelectorAll(".choice");
    
    if (index === currentQuestionData.answer){
        score++;
        choices[index].style.background = "#28a745";
    }
    else {
        choices[index].style.background = "#dc3545";
        choices[currentQuestionData.answer].style.background = "#28a745";
    }

    choices.forEach((choice)=>{
        choice.disabled = true;
    })

    document.getElementById("nextButton").style.display = "block";
}

/* Loading Next Question */
function nextQuestion(){
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    }
    else {
        showScore();
    }
}

/* Showing Score */
function showScore(){
    document.getElementById("quiz").innerHTML = `
    <h2>Your Score: ${score} out of ${quizData.length} </h2>
    <button id="restartButton">Restart Quiz</button> 
    `
    
    document.getElementById("restartButton").addEventListener("click", restartQuiz);
}

function restartQuiz(){
    window.location.reload();
}

window.onload = loadQuestion();
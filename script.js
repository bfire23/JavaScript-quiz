const startBtn = document.querySelector(".start-quiz");
const timerEl = document.getElementById("time-left");
const quizArea = document.getElementById("quiz-area");
let i =1;
const questions = [
    {
        question1: "is a true or false statement a", 
        choices: ["A Boolean", "B Symbol","C Null", "D String"],
        answer: "A Boolean" 
    },
    {
        question2: "JavaScript was introduced in what year?", 
        choices: ["A 1990", "B 1985","C 1995", "D 2000"],
        answer: "c 1995" 
    },
    {
        question3: "What was JavaScript first known as?",
        choices: ["A FirstScript", "B LiveScript", "C Java", "D InterScript"],
        answer: "B LiveScript" 
    }
]




function quizTimer() {
  let timeLeft = 20;
  timerEl.textContent = timeLeft;
    const timeInterval= setInterval(function() {
        if(timeLeft === 0) {
            clearInterval(timeInterval);
        }
        timerEl.innerHTML = timeLeft;
        timeLeft--;
    }, 1000);

}

startBtn.addEventListener("click", function() {
    quizTimer()
 quizArea.textContent= questions[0].question1;
 const button = document.getElementById("button");
 for (let i = 0; i< 4; i++) {
   const button = document.createElement("button");
   button.innerHTML = "button" + i;

   
   
    
 }
 


});
   




















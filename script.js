const questions = [
    {
       question : "What does CSS stand for?",
       answers : [
        {text : "Computer Style Sheets",correct:false},
        {text : "Cascading Style Sheets",correct:true},
        {text : "Creative Style Sheets",correct:false},
        {text : "Colorful Style Sheets",correct:false}
        
       ]
    },

    

     {
        question : "In CSS, what property is used to change the background color of an element?",
        answers : [
         {text : " color",correct:false},
         {text : "background-color",correct:true},
         {text : "bgcolor",correct:false},
         {text : "background-style",correct:false}
         
        ]
     },

     {
        question : "What does flex-grow: 1; do in a Flexbox container?",
        answers : [
         {text : " Makes the item shrink when necessary",correct:false},
         {text : "Allows the item to take up all available space",correct:true},
         {text : "Centers the item",correct:false},
         {text : " Hides the item",correct:false}
         
        ]
     },

     {
        question : "Which HTML tag is used to link an external JavaScript file?",
        answers : [
         {text : "script",correct:true},
         {text : "link",correct:false},
         {text : "js",correct:false},
         {text : "javascript",correct:false}
         
        ]
     },

]

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answerbuttons");
const nextButton  = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

function  showQuestion(){
   resetState();
   let currentQuestion = questions[currentQuestionIndex];
   let questionNo = currentQuestionIndex + 1;
   questionElement.innerHTML = questionNo + "." + currentQuestion.question;

   currentQuestion.answers.forEach(answer => {

      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);

      if(answer.correct){
         button.dataset.correct = answer.correct;
      } 
      button.addEventListener('click',selectAnswer);


   });
}


function resetState(){
   nextButton.style.display = "none";
   while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
   }
}

function selectAnswer(e) {
   const selectedBtn = e.target;
   const isCorrect = selectedBtn.dataset.correct ==='true';
   if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
   } else{
      selectedBtn.classList.add("incorrect");   }

      Array.from(answerButtons.children).forEach(button =>{
         if(button.dataset.correct === 'true'){
            button.classList.add("correct");
         }
         button.disabled = true;
      });
      nextButton.style.display ="block";

}

function showScore(){
   resetState();
   questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
   nextButton.innerHTML = "Play Again";
   nextButton.style.display = "block"
}

function handleNextButton(){
   currentQuestionIndex++;
   if(currentQuestionIndex < questions.length){
      showQuestion();
   }else{
      showScore();
   }
}

nextButton.addEventListener('click', () => {
   if(currentQuestionIndex < questions.length){
      handleNextButton();
   }else{
      startQuiz();
   }

});
startQuiz();













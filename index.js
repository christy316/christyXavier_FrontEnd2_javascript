
function Questions(quesTxt, quesOptions, ans){
    this.quesTxt = quesTxt;
    this.quesOptions = quesOptions;
    this.ans = ans;
}

function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.qIndex = 0;
}

let quetionsList = [
    new Questions("JavaScrip Supports",
    ["Functions","XHTML","CSS","HTML"],
    "Functions"),
    new Questions("Which language is used for styling web pages",
    ["HTML","JQuery","CSS","XML"],
    "CSS"),
    new Questions("whihc is not a JavaScript Framework",
    ["Python script","JQuery","Django","Node.js"],
    "Django"),
    new Questions("Which is getting used to connect DB",
    ["PHP","HTML","JS","ALL"],
    "PHP"),
    new Questions("JavaScrip is a ",
    ["Language","Programming Language","Development","All"],
    "Programming Language")
]

let quiz = new Quiz(quetionsList)

Quiz.prototype.isQuzEnded = function () {
    return this.qIndex === this.questions.length
}

Quiz.prototype.getQuestionByIndex = function() {
    return this.questions[this.qIndex]
}

Quiz.prototype.checkOptionWithAnswer = function(option) {
    if(this.getQuestionByIndex().ans === option) {
        this.score++
    }
    if(quiz.isQuzEnded()){
        loadQuestions()
    }
    else{
        this.qIndex++;
    }
}

function handleChoiceBtn(butnId, option){
    let btn = document.getElementById(butnId)
    btn.onclick = function() {
        console.log(option)
        quiz.checkOptionWithAnswer(option)
        
        loadQuestions();
    }
    
   
}



function showScore(){

    let totalScore = document.getElementById("quiz")
    let result = "<h1>Result</h1>"
    result += "<hr><h2 id='score'>Your Score is "+ quiz.score + " Percentage is " + quiz.score/quiz.questions.length*100 +"% </h2>"
    totalScore.innerHTML = result
    

}


function loadQuestions(){

    if(quiz.isQuzEnded()){
        showScore();
    }
    else{
       let question = document.getElementById("question")
       question.innerHTML = quiz.getQuestionByIndex().quesTxt

       let options = quiz.getQuestionByIndex().quesOptions
       for(let i = 0; i < options.length; i++){
        let eachOption = document.getElementById("choice" + i)
        eachOption.innerText = options[i];

        handleChoiceBtn("btn" + i, options[i])
       }

       let questionNo = document.getElementById("progress")
       questionNo.innerText = `Question ${quiz.qIndex+1} of ${quiz.questions.length}`
    }

}

loadQuestions()

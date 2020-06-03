const getResources = async () => {
    const jsonResults = await fetch("questions.json");
    const response = await jsonResults.json();
    return response.questions;
};

function Question(questionText, questionAnswers, correctAnswer) {
    this.quizQuestion = questionText;
    this.possibleQuestionAnswers = questionAnswers;
    this.correctAnswer = correctAnswer;

    this.questionPrint = function () {
        console.log(`Question: ${this.quizQuestion}`);
        console.log(`Potential answers:`)
        for (let i = 0; i < this.possibleQuestionAnswers.length; i++) {
            console.log(`\t ${i + 1}) ${this.possibleQuestionAnswers[i]}`);
        };
    };
};

function Game(newQuestions) {
    this.score = 0;
    this.winningScore = 3;

    this.fillArrayWithQuestions = function(newQuestions) {
        let questionsArr = [];
        for (let i = 0; i < newQuestions.length; i++) {
            questionsArr.push(new Question(newQuestions[i].questionText, newQuestions[i].questionAnswers, newQuestions[i].correctAnswer));
        };
        return questionsArr;
    };

    this.obtainedQuestions = this.fillArrayWithQuestions(newQuestions);

    this.startGame = function() {
        while (this.score < this.winningScore) {
            const randomIndex = getRandom(0, this.obtainedQuestions.length - 1);
            const chosenQuestion = this.obtainedQuestions[randomIndex];
            chosenQuestion.questionPrint();
            const playerAnswerStr = prompt(chosenQuestion.quizQuestion);
    
            if(playerAnswerStr === null) {
                console.log(`The user has terminated the game`);
                break;
            } else if(playerAnswerStr === '') {
                alert(`Please input an answer`);
                continue;
            }
    
            let playerAnswer = parseInt(playerAnswerStr - 1);
                
            if (playerAnswer != chosenQuestion.correctAnswer) {
                console.log(`---------------------------------------------------------
    You have entered a wrong answer, please try again`);
                this.score--;
            } else {
                console.log(`---------------------------------------------------------
    You have entered the correct answer, great job!!!`);
                this.score++;
            }
            console.log(`---------------------------------------------------------
    Your score is ${this.score}`);
        };
        console.log(`---------------------------------------------------------
    You have reached the final score, the game has ended.`);
    };
};

getResources().then(res => {
    const newGame = new Game(res);
    newGame.startGame();
});
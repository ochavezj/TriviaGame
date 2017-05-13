//VARIABLES

var gameTimer = 30;

var triviaQuestions = ["who was the first president?"];
var triviaOptions 	= [["Abraham Lincoln", "George Washington", "Teddy Roosevelt", "Andrew Jackson"]];
var triviaAnswers 	= ["B. George Washington"];

var correctAnswers 		= 0;
var incorrectAnswers 	= 0;
var unanswered 			= 0;


//timer shown in HTML
var timer;

function timerStart() {

	timer = gameTimer--;
	setTimeout(timerStart, 1000);
	$("#timer").html(timer);
		if(timer === 0) {
			timerStop()
		}

}

function timerStop(){
	clearTimeout(timer);
}

timerStart()





$(documnet).ready(function () {
    function intialScreen() {
        startScreen = "<p class='text-center  main-button-container'><a class= 'btn-lg btn-block start-button' hre='#' role='button'>Start Quiz</a></p>";
        $(".main-container").html(startScreen);
    }

    initialScreen();

    $("body").on("click", ".start-button", function(event) {
        event.preventDefault(); //might not need this line
        generateHTML();

        timerWrapper();
    });




    $("body").on("click", ".answer", function(event) {     //myclick start
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswer[questionCounter]) {
            clearInterval(theClock);
            generateWin();
            //alert("win");
        }
        else {
            clearInterval(theClock);
            generateLoss();
            //alert("Lose");
        }
    });

    $("body").on("click", ".reset-button", function (event) {
        resetGame();
    });

});




function generateLossDueToTimeOut() {
    unansweredTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Out of Time! The correct answer was: " + correctAnswer[questionCounter] + "</p>";
    $(".main-container").html(gameHTML);
    setTimeout(wait, 3000);
}

function generateWin() {
    correctTally++;
    gameHTMl = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswer[questionCounter] + "</p>";
    $(".main-container").html(gameHTML);
    setTimeout(wait, 3000);

}

function generateLoss(){
    incorrectTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswer[questionCounter] + "</p>";   
    $(".main-container").html(gameHTML);
    setTimeout(wait, 3000);
}

function gererateHTML() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>10</span></p><p class='text-center'>" + myQuestions[questionsCounter] + "</p><p class='first-answer answer'>A. " + chooseAnswer[questionCounter][0] + "</p><p class='answer'>B. "+chooseAnswer[questoinCounter][1]+"</p><p class='answer'>C. "+chooseAnswer[questionCounter][2]+"</p><p class='answer'>D. "+chooseAnswer[questionCounter][3]+"</p>";
    $(".main-container").html(gameHTML);"
}




function wait() {
    if (questionCounter < 8) {
        questionCounter++;
        generateHTML();
        counter = 10;
        timerWrapper();
    }
    else {
        finalScreen();
    }
}

function timerWrapper() {
    theClock = setInterval(tenSeconds, 1000);
    function tenSeconds() {
        if (counter === 0) {
            clearInterval(theClock);
            generateLossDueToTimeOut();
        }
        if (counter > 0) {
            counter--;
        }
        $(".timer").html(counter);
    }
}





function finalScreen() {
    gameHTML = "<p class='text-center timer-p'> Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Could there be any more questions?" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary brn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz</a></p>";
    $(".main-container").html(gameHTML);
}

function resetGame() {
    questionCounter = 0;
    correctTally = 0;
    incorrectTally = 0;
    unansweredTally = 0;
    counter = 10;
    generateHTML();
    timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 10;
var myQuestions = ["To get over Ricard, what did Monica start Making?", "Monica couldn't tell time until she was what age?", "What does Ross call his Thanksgiving leftover sandwhich?", "Who did Ross talk to when he couldn't get his leather pants back on?", "Chandler's Mother writes what kinds of novels?", "What is Phoebe's twin sister's name?", "What does Ross call martial arts?", "What is the name of the coffee house"];
var chooseAnswer = [["Marmalade", "Jam", "Pancakes", "Eggs"], ["13", "14", "12", "15"], ["The Drool Maker", "Bread Heaven", "The Moist Maker", "Temptation"], ["Chandler", "Phoebe", "Monica", "Joey"], ["Fiction", "Erotic", "Mystery", "Fantasy"], ["Lisa", "Emily", "Dr. Phalange", "Ursula"], ["Unagi", "Zanshin", "Self-Defense", "Nothing"], ["Coffee Perk", "Park Perk", "Left Perk", "Central Perk"]];
var correctAnswers = ["B. Jam", "A. 13", "C. The Moist Maker", "D. Joey", "B. Erotic", "D. Ursula", "A. Unagi", "D. Central Perk"];
var questionCounter = 0;
var selectedAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unanswerTally = 0;



//var imageArray = [    
        //image: "https://media3.giphy.com/media/S8xXAO6CcLCJX9VWug/200.gif?cid=790b76114c828605933572588a868dcef78c2e18e45d3782&rid=200.gif",

        //image: "https://media3.giphy.com/media/zRsY49v1kmWe4/200w.gif?cid=790b7611137e4b9f12d14f390063fb68136326241d069ba3&rid=200w.gif",

        //image: "https://media3.giphy.com/media/l3NzV0GXRkDGXJMPIO/200.gif?cid=790b7611d6cdfa27d8426d447bc2adfff82212bb49d3d823&rid=200.gif",

        //image: "https://media3.giphy.com/media/hS4AqlRdXLklFH6FjL/200.gif?cid=790b7611bf0fdf95708137a4baa18854520d3884d89386c1&rid=200.gif",


        //image: "https://media2.giphy.com/media/YQHBoOpGwdTwuBSZKs/200.gif?cid=790b761111046eb783d2203071241c8bf290447aec3dee9b&rid=200.gif",


        //image: "https://media2.giphy.com/media/l49mvu7JWXTu6lLVid/giphy.gif?cid=790b761198b9cd3f6969478dc93e3d4e7b69a839a783eb36&rid=giphy.gif",



        //image: "https://media1.giphy.com/media/JOe7JxOiMg61ogl6fH/giphy.gif?cid=790b76110363610124f7b539a86061a30ae191f6aba502ad&rid=giphy.gif",



        //image: "https://media0.giphy.com/media/6KoHLujBN4QWk/giphy.gif?cid=790b76111be05a030d39cbc0194c8245ebb168e7d5918d05&rid=giphy.gif",
//]



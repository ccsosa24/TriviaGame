var counter = 10;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var timer;

function nextQuestion() {
  counter = 10;
  clearInterval(timer);
  timer = setInterval(countDown, 1000);

  const isQuestionOver = (quizQuestions.length - 1) === currentQuestion;
  if(isQuestionOver){
    console.log('Game Over!!!');
    displayResult();
  }
  else{
    currentQuestion++;
    loadQuestion();
  }
}




function timeUp(){
  clearInterval(timer);

  lost++;

  setTimeout(nextQuestion, 2 * 1000);
}

function countDown(){
  console.log(counter);
  console.log("below is the COUNTER")
  counter--;
  $('#time').html('Timer: ' + counter);

  if (counter === 0) {
    timeUp();
  }
}





function loadChoices(choices){
  var result = '';

  for(var i = 0; i < choices.length; i++) {
    result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>
`}
  return result;
}

function loadQuestion() {
  counter = 10;
  clearInterval(timer);
  timer = setInterval(countDown, 1000);
  console.log("below are the quiz questions -----------")
  //console.log(quizQuestions)
  const question = quizQuestions[currentQuestion].question;
  const choices = quizQuestions[currentQuestion].choices;

  $('#time').html('Timer: ' + counter);
  $('#game').html(`<h4>${question}</h4>      
    ${loadChoices(choices)}
  
  `);
}



$(document).on('click', '.choice', function() {
  clearInterval(timer);
  const selectedAnswer = $(this).attr('data-answer');
  const correctAnswer = quizQuestions[currentQuestion].correctAnswer;

  if (correctAnswer === selectedAnswer){
    score++;
    console.log('Win');
    //preloadImage();
    setTimeout(nextQuestion, 2 * 1000);
  }
  else {
    lost++;
    console.log('Lost');
    //preloadImage();
    setTimeout(nextQuestion, 2 * 1000);
  }
});

function displayResult() {
 clearInterval(timer);
  const result = `
  <p>You have ${score} questions right</p>
  <p>You missed ${lost} questions</p>
  <p>Total questions ${quizQuestions.length} question right</p>
  <button class="btn btn-primary" id="reset">Reset Game</button>`
  
  $('#game').html(result);
}


$(document).on('click', '#reset', function(){
  counter = 10;
  currentQuestion = 0;
  score = 0;
  lost = 0;
  timer = null;

  loadQuestion();
});



//function preloadImage(status) {
  //const correctAnswer = quizQuestions[currentQuestion].correctAnswer;
 // if(status === 'win') {
  //  $('#game').html(`
 //   <p class="preload-image">The correct answer is <b>${correctAnswer}</b></p>
 //   <img src="${correctAnswer}" />
 //   `)
//  }
//}



$('#start').click(function(){
  $('#start').remove();
  $('#time').html(counter);
  loadQuestion();
});
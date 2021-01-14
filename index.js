//importing and installing readLineSync package

var readLineSync = require("readline-sync")
var userName = readLineSync.question("what is your name ? ")
var score = 0;
console.log("Hello " + userName.toUpperCase() + " Welcome to 'Do You Know Me?' quiz...")

//play function
function play(question,answer){
  var userAnswer = readLineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("you are right !!!");
    score++;
  }
  else{
    console.log("you are wrong !!");
  }
  console.log("your score is "+ score);
  console.log("______________________________________");
}

//array of objects
var questions = [{
    que: "\nWhere do I belong from ?\n",
    ans: "siliguri"
  }, {
    que: "\nWhat would I choose between bike and car ?\n",
    ans: "bike"
  }, {
    que: "\nWhat is my music genre rap or pop ?\n",
    ans: "pop"
  },{
    que: "\nMy favourite sport cricket/volleyball/tabletennis?\n",
    ans: "tabletennis",
   // ans1: "table tennis"
  },{
    que: "\nWhats my favourite hobby ?\n",
    ans: "photography"
  },{
    que: "\nHow many times did I shit in my bed ? \n",
    ans: "never"
  },]

//loop of array elements
for(var i = 0 ; i < questions.length ; i++){
play(questions[i].que, questions[i].ans /*|| questions[i].ans1*/)
}

console.log("\nYAAYY you scored "+ score +" out of 6");

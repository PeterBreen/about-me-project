var userName;
var questionsArray = [];
var answersArray = [];

alert('Welcome to the Guessing Game!');
alert('Are you ready to get started?');

function yourName() {
  var pTagName = document.getElementById('ans-name');
  var questionName = 'What is your name?';
  var userName = prompt(questionName);
  questionsArray.push(questionName);
  answersArray.push(userName);
  pTagName.textContent = userName;
  console.log('User\'s name is ' + userName);
  return userName;
}

//Understanding of yes/no questions
function understandQuestion() {
  var pTagOne = document.getElementById('ans-one');
  var questionOne = 'Please answer all questions with a yes or no. Do you understand the instructions?';
  var answerOne = prompt(questionOne);
  questionsArray.push(questionOne);
  answersArray.push(answerOne);
  pTagOne.textContent = answerOne;
  answerOne = answerOne.toUpperCase();
  console.log(answerOne + ', ' + userName + ', understands instructions');
}

//Asking user to play the guessing game
function knowMore() {
  var pTagTwo = document.getElementById('ans-two');
  var questionTwo = 'Would you like to know more about me?';
  var answerTwo = prompt(questionTwo);
  questionsArray.push(questionTwo);
  answersArray.push(answerTwo);
  answerTwo = answerTwo.toUpperCase();
  if (answerTwo === 'YES') {
    pTagTwo.textContent = 'I would like to know more information';
    console.log('User would like to know more information');
  } else {
    pTagTwo.textContent = 'Too bad, I am going to tell you things anyway!';
    console.log('Too bad, I am going to tell you things anyway!');
  }
}

//Asking user if they know where I am from
function homeTown() {
  var pTagThree = document.getElementById('ans-three');
  var questionThree = 'Did you know I grew up in Chicago?';
  var answerThree = prompt(questionThree);
  questionsArray.push(questionThree);
  answersArray.push(answerThree);
  answerThree = answerThree.toUpperCase();
  if (answerThree === 'YES') {
    pTagThree.textContent = 'Yes, I grew up in Chicago!';
    console.log(userName + ' knew that I was from Chicago');
  } else {
    pTagThree.textContent = 'No, I grew up in Chicago!';
    console.log(userName + ' did not know I grew up in Chicago.');
  }
}

//Asking user what type of dog I have
function haveDog() {
  var pTagFour = document.getElementById('ans-four');
  var pTagFive = document.getElementById('ans-five');
  var questionFour = 'Do you know what type of dog I have?';
  var questionFive = 'Ok, hotshot! What type of dog do I have?';
  var answerFour = prompt(questionFour);
  questionsArray.push(questionFour);
  answersArray.push(answerFour);
  pTagFour.textContent = 'You think you know what type of dog I have.';
  answerFour = answerFour.toUpperCase();
  if (answerFour === 'YES') {
    var typeOfDog = prompt(questionFive);
    questionsArray.push(questionFive);
    answersArray.push(typeOfDog);
    typeOfDog = typeOfDog.toUpperCase();
    if (typeOfDog === 'CHIHUAHUA') {
      //alert('You got it right!');
      pTagFive.textContent = 'You got it right! I have a chihuahua.';
    } else {
      //alert('No! You are wrong!');
      pTagFive.textContent = 'No! You got it wrong. I have a chihuahua.';
    }
  } else if (answerFour === 'NO') {
    //alert('You should know that I have a chihuahua!');
    pTagFour.textContent = 'You should know that I have a chihuahua!';
  } else {
    //alert('You\'re not even trying!');
    pTagFour.textContent = 'You are not even trying!';
  }
}

yourName();
understandQuestion();
knowMore();
homeTown();
haveDog();
console.log('Game complete. Thank ' + userName + ' for playing!');

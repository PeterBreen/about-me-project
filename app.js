var userName;
var questionsArray = [];
var answersArray = [];
var correctAnswers = 0;

alert('Welcome to the Guessing Game! Are you ready to get started?');

function yourName() {
  var pTagName = document.getElementById('ans-name');
  var questionName = 'What is your name?';
  userName = prompt(questionName);
  questionsArray.push(questionName);
  answersArray.push(userName);
  pTagName.textContent = userName;
  console.log('User\'s name is ' + userName);
  return userName;
}

//Understanding of yes/no questions
function understandQuestion() {
  var pTagOne = document.getElementById('ans-one');
  var questionOne = 'Please answer all questions (unless specified) with a yes or no. Do you understand the instructions?';
  var answerOne = prompt(questionOne);
  questionsArray.push(questionOne);
  answersArray.push(answerOne);
  answerOne = answerOne.toUpperCase();
  if (answerOne === 'YES') {
    pTagOne.textContent = userName + ' understands instructions.';
  } else {
    pTagOne.textContent = userName + ' does not understand, but too bad!';
  }
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
    pTagTwo.textContent = userName + ' would like to know more information';
    console.log(userName + ' would like to know more information');
    correctAnswers++;
  } else {
    pTagTwo.textContent = 'Too bad, I am going to tell you things anyway!';
    console.log('Too bad, ' + userName + ' I am going to tell you things anyway!');
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
    correctAnswers++;
  } else {
    pTagThree.textContent = 'That is not right, I grew up in Chicago!';
    console.log(userName + ' did not know I grew up in Chicago.');
  }
}

//Asking user what type of dog I have
function haveDog() {
  var pTagFour = document.getElementById('ans-four');
  var pTagFive = document.getElementById('ans-five');
  var questionFour = 'Do you think you can guess what type of dog I have?';
  var questionFive = 'Ok, hotshot! What type of dog do I have? (for this question don\'t answer yes/no)';
  var answerFour = prompt(questionFour);
  questionsArray.push(questionFour);
  answersArray.push(answerFour);
  pTagFour.textContent = 'You think you can guess...let\'s find out.';
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
alert('Game complete. Thank you for playing!');

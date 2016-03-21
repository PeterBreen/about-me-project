alert("Welcome to the Guessing Game!");
alert("Are you ready to get started?");

var userName = prompt('What is your name?');
console.log("User's name is " + userName);

//Understanding of yes/no questions
var answerOne = prompt("Please answer all questions with a 'yes' or 'no.' Do you understand the instructions?");
answerOne = answerOne.toUpperCase();
console.log(answerOne + ", " + userName +", understands instructions");

//Asking user to play the guessing game
var answerTwo = prompt("Would you like to know more about me?");
answerTwo = answerTwo.toUpperCase();
if (answerTwo === 'YES') {
  console.log("User would like to know more information")
} else {
  console.log("Too bad, I am going to tell you things anyway!")
}

//Asking user if they know where I am from
var answerThree = prompt("Did you know I grew up in Chicago?");
answerThree = answerThree.toUpperCase();
if (answerThree === 'YES') {
  console.log(userName + " knew that I was from Chicago")
} else {
  console.log(userName + " did not know I grew up in Chicago.")
}

//Asking user what type of dog I have
var answerFour = prompt("Do you know what type of dog I have?")
answerFour = answerFour.toUpperCase();
if (answerFour === 'YES') {
  var typeOfDog = prompt("Ok, hotshot! What type of dog do I have?")
  typeOfDog = typeOfDog.toUpperCase();
    if (typeOfDog === 'CHIHUAHUA') {
      alert("You got it right!")
    } else {
      alert('No! You are wrong!')
    }
} else if (answerFour === 'NO') {
  alert("You should know that I have a chihuahua!")
} else {
  alert("You're not even trying!")
}
console.log('Game complete. Thank ' + userName + " for playing!");

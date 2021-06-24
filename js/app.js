// eslint-disable-next-line quotes
`use strict`;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function q1f(){

  let q1a= prompt('Have we ever met before, ' + username + '?').toLowerCase();

  switch(q1a) {
  case 'yes':
  case 'y':
    alert('Oh! I don\'t think I remember that, sadly!');
    break;
  case 'no':
  case 'n':
    alert('Hope we would in the future!');
    userscore++;
    break;
  default:
    alert('Please answer the next question with (yes/no).');
    break;
  }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function q2f (){

  let q2a= prompt('Do you think I like music?').toLowerCase();

  switch(q2a) {
  case 'yes':
  case 'y':
    alert('Correct! I love music!');
    userscore++;
    break;
  case 'no':
  case 'n':
    alert('Incorrect! I actually do like music!');
    break;
  default:
    alert('Please answer the next question with (yes/no).');
    break;
  }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function q3f(){

  let q3a= prompt('Do you think my favorite color is blue?').toLowerCase();

  switch(q3a) {
  case 'yes':
  case 'y':
    alert('Well, it is one of my preferred colors but not my favorte!');
    break;
  case 'no':
  case 'n':
    alert('Right! My favorite colour is Black!');
    userscore++;
    break;
  default:
    alert('Please answer the next question with (yes/no).');
    break;
  }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function q4f() {

  let q4a= prompt('Guess this one, do I spend a moderate amount of time on the internet?').toLowerCase();

  switch(q4a) {
  case 'yes':
  case 'y':
    alert('I appreciate your good will, but this isn\'t true..');
    break;
  case 'no':
  case 'n':
    alert('This is the truth, sadly..');
    userscore++;
    break;
  default:
    alert('Please answer the next question with (yes/no).');
    break;
  }
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function q5f() {

  let q5a= prompt('Finally, do you think I was ever into reading?').toLowerCase();

  switch(q5a) {
  case 'yes':
  case 'y':
    alert('Correct! But I\'m always too lazy to read..');
    userscore++;
    break;
  case 'no':
  case 'n':
    alert('Not really, but has some truth into it.');
    break;
  default:
    alert('Please answer the next question with (yes/no).');
    break;
  }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




function q6f(){

  for (let i=0; i<4 ; i++){
    let guess=Number(prompt('Guess the number I have in my mind, it is between (1-100)!'));

    if (mynumber > guess){
      alert('Incorrect, your guess is too low!' + ' You have ' + Number(3-i) + ' attempts left.');
    } else if (mynumber < guess){
      alert('Incorrect, your guess is too high!' + ' You have ' + Number(3-i) + ' attempts left.');}
    else{
      alert('Correct! Well done!');
      userscore++;
      break;
    }
  }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function q7f(){
  for (let i=0; i<5; i++){

    let guess2=Number(prompt('Can you guess any number related to me?'));

    //  if (mynumbers.includes(guess2))
    //  if (guess2 === mynumbers[0] || guess2 === mynumbers[1] || guess2 === mynumbers[2] || guess2 === mynumbers[3])

    for (let j=0; j<mynumbers.length; j++ ){


      if(guess2 === mynumbers[j]){
        alert('Correct! ' + guess2 + ' is one of them, good job!');

        userscore++;

        breaker = true;

        break;}
    }
    if (breaker === true){
      break;
    } else {alert('Incorrect, try again!' + ' You have ' + Number(5-i) + ' attempts left.');
    }
  }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


let userscore = 0;
let mynumber = 77;
let mynumbers = [12, 19, 25, 95];
let breaker = false;


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

alert('Hello! Welcome to this Webpage!');

let username= prompt('What is your name?');

alert('Hello ' + username + ', I hope you\'re well!');

alert('I will ask you few questions ' + username + ', please answer them with (yes/no).');

q1f();

q2f();

q3f();

q4f();

q5f();

alert('How about we try something else!');

q6f();

alert('The only correct answer is 77!');

alert('Okay, next question!');

q7f();

alert('The correct answers are (12 ,19, 25, and 95).');

alert('Your total score is ' + userscore +'/7');

alert('Okay ' + username + ', we\'re done for now! Thank you for taking time!');

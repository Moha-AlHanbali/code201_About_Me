`use strict`;

let userscore = 0

alert("Hello! Welcome to this Webpage!");

let username= prompt("What is your name?");

alert("Hello " + username + ", I hope you're well!");

alert("I will ask you few questions " + username + ", please answer them with (yes/no).");

let q1a= prompt("Have we ever met before, " + username + "?").toLowerCase();

switch(q1a) {
    case "yes":
    case "y":
        alert("Oh! I don't think I remember that, sadly!");
        // console.log("Oh! I don't think I remember that, sadly!");
        break;
    case "no":
    case "n":
        alert("Hope we would in the future!");
        userscore++;
        // console.log("Hope we would in the future!");
        break;
    default:
        alert("Please answer the next question with (yes/no).");
        // console.log("Please answer the next question with (yes/no).");
        break;
}

let q2a= prompt("Do you think I like music?").toLowerCase();

switch(q2a) {
    case "yes":
    case "y":
        alert("Correct! I love music!");
        userscore++;
        // console.log("Correct! I love music!");
        break;
    case "no":
    case "n":
        alert("Incorrect! I actually do like music!");
        // console.log("Incorrect! I actually do like music!");
        break;
    default:
        alert("Please answer the next question with (yes/no).");
        // console.log("Please answer the next question with (yes/no).");
        break;
}

let q3a= prompt("Do you think my favorite color is blue?").toLowerCase();

switch(q3a) {
    case "yes":
    case "y":
        alert("Well, it is one of my preferred colors but not my favorte!");
        // console.log("Well, it is one of my preferred colours but not my favorte!");
        break;
    case "no":
    case "n":
        alert("Right! My favorite colour is Black!");
        userscore++;
        // console.log("Right! My favorite colour is Black!");
        break;
    default:
        alert("Please answer the next question with (yes/no).");
        // console.log("Please answer the next question with (yes/no).");
        break;
}

let q4a= prompt("Guess this one, do I spend a moderate amount of time on the internet?").toLowerCase();

switch(q4a) {
    case "yes":
    case "y":
        alert("I appreciate your good will, but this isn't true..");
        // console.log("I appreciate your good will, but this isn't true..");
        break;
    case "no":
    case "n":
        alert("This is the truth, sadly..");
        userscore++;
        // console.log("This is the truth, sadly..");
        break;
    default:
        alert("Please answer the next question with (yes/no).");
        // console.log("Please answer the next question with (yes/no).");

        break;
}

let q5a= prompt("Finally, do you think I was ever into reading?").toLowerCase();

switch(q5a) {
    case "yes":
    case "y":
        alert("Correct! But I'm always too lazy to read..");
        userscore++;
        // console.log("Correct! But I'm always too lazy to read..");
        break;
    case "no":
    case "n":
        alert("Not really, but has some truth into it.");
        // console.log("Not really, but has some truth into it.");
        break;
    default:
        alert("Please answer the next question with (yes/no).");
         // console.log("Please answer the next question with (yes/no).");
        break;
}

alert("How about we try something else!");



let mynumber = 77;

for (i=0; i<4 ; i++){
        guess=Number(prompt("Guess the number I have in my mind, it is between (1-100)!"));

            if (mynumber > guess){
                alert("Incorrect, your guess is too low!" + " You have " + Number(3-i) + " attempts left.")
                // console.log("Incorrect, your guess is too low!" + " You have " + Number(3-i) + " attempts left.");
            } else if (mynumber < guess){
                alert("Incorrect, your guess is too high!" + " You have " + Number(3-i) + " attempts left.")} 
                // console.log("Incorrect, your guess is too high!" + " You have " + Number(3-i) + " attempts left.");
                else{
                alert("Correct! Well done!");
                // console.log("Correct! Well done!");
                userscore++;
                break;
            }
}

alert("The only correct answer is 77!");

alert("Okay, next question!");



let mynumbers = [12, 19, 25, 95];

for (i=0; i<5; i++){
    let guess2=Number(prompt("Can you guess any number related to me?"))
    //  if (mynumbers.includes(guess2))
        if (guess2 === mynumbers[0] || guess2 === mynumbers[1] || guess2 === mynumbers[2] || guess2 === mynumbers[3]){
        alert("Correct! " + guess2 + " is one of them, good job!");
        // console.log("Correct! " + guess2 + " is one of them, good job!");
        userscore++;
        break;
    } else{
        alert("Incorrect, try again!" + " You have " + Number(5-i) + " attempts left.")
    }
}

alert("The correct answers are (12 ,19, 25, and 95).");

alert("Your total score is " + userscore +"/7");

alert("Okay " + username + ", we're done for now! Thank you for taking time!");

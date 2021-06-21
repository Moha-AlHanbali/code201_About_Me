`use strict`;

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
        alert("Well, it is one of my preferred colours but not my favorte!");
        // console.log("Well, it is one of my preferred colours but not my favorte!");
        break;
    case "no":
    case "n":
        alert("Right! My favorite colour is Black!");
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

alert("Okay " + username + ", we're done for now! Thank you for taking time!");
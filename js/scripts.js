
// create a function that will take the first and last letter of the sentence, capitalize them, and return this as a new string.

function takeAndModSent() {
    word = prompt("Enter a sentence:");
    firstL = word.charAt(0).toUpperCase();
    lastL = word.slice(-1).toUpperCase();

    word = word.split(" ");

    console.log(word[0]);
    console.log(typeof(word));
    console.log(firstL);
    console.log(lastL);
}

takeAndModSent();

// $(document).ready(function() {
//   $("h1").click(function() {
//     alert("this is a heading.");
//   });
//   alert("This is a heading.");
//   alert("Are you sure you want to leave?");
//   alert("Please don't go!");
// });

// $("p").click(function() {
//   alert("This is a paragraph.");
// });

// $("img").click(function() {
//   alert("This is an image.");
// });


// function saySomething(whatToSay) {
//   alert(whatToSay);
// }

// function add(number1, number2) {
//   return number1 + number2;
// }

// saySomething("The sum is " + add(3,5) + ".");
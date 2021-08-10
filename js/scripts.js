
// create a function that will take the first and last letter of the sentence, capitalize them, and return this as a new myString.


  

    function charCap() {
      let myString = prompt("Enter a sentence:");
      console.log(myString);
      let first = myString.charAt(0).toUpperCase();
      console.log(first);
      let last = myString.charAt(myString.length - 1).toUpperCase();   
      console.log(last); 
      let myStringCap = first + last;
      let mixCap = first.concat(last); 

      function swapCaps(first, last) {
        let t = first;
        first = last;
        last = t;
        let revCap = first.concat(last);
        console.log(revCap);
      }

      swapCaps(first, last);
      
    }

    charCap();

    // Create another function that will reverse the order of these two letters and return the result.



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

// create a function that will take the first and last letter of the sentence, capitalize them, and return this as a new myString.


  
    let myString;
    function charCap() {
      let myString = prompt("Enter a sentence:");
      console.log(myString);
      let first = myString.charAt(0).toUpperCase();
      console.log(first);
      let last = myString.charAt(myString.length - 1).toUpperCase();   
      console.log(last); 
      myStringCap = first + last;
      let mixCap = first.concat(last); 

       // Create another function that will reverse the order of these two letters and return the result.
      let revCap;
      function swapCaps(first, last) {
        let t = first;
        first = last;
        last = t;
        revCap = first.concat(last);
        console.log(revCap);
      }

      swapCaps(first, last);      


      // Add code to your third function to concatenate the new two-letter string together with the original phrase. It should add the two-letter string at the end, forming the final result "I am a sentenceEI."
      let capToSent;
      function addCapToSent(myString, revCap) {
        capToSent = myString.concat(revCap);
        console.log(capToSent);        
      }
      addCapToSent(myString, revCap);

      // Create a fourth function to count the number of letters in the original sentence
      function transformString () {
        let chars = myString.split("");
        num = chars.length;
        num /= 2;
        console.log(num);
        num = Math.round(num); //delete by two, round up if needed
        console.log(num);
        indChar = chars[num];
        concatSent = indChar.concat(capToSent); //Concat this letter at original string
        console.log(concatSent);
        console.log(indChar); //output the letter at this index
      }
      
      transformString();

      // Take the final result and reverse it
      let str;
      function reverseAll (){
          str = concatSent.split("");
          str = str.reverse();
          str = str.join("");
          console.log(str);
      }
       
      reverseAll();

    }

    charCap();



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
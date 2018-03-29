(function () {

  var input = document.querySelector("#axela-input"),
      submit = document.querySelector("#axela-submit"),
      message = document.querySelector("#axela-message"),
      advancedDiv = document.querySelector("#advanced"),
      errorText = "I don't understand you.",
      dunnoText = "I don't know! Ask Telgoog!",
      picture = null,
      greetings = ["bonjour", "wassuppp", "hallo", "howdy", "hello"];

  // Add event listeners to text input and submit button below
  input.addEventListener("keypress", checkKey);
  submit.addEventListener("click", processInput);

  // This function checks if the user has pressed "ENTER" on their keyboard.
  function checkKey(event) {
    var keyCode = event.which || event.keyCode;
    if(keyCode == "13") {
      processInput();
    }
  }



  /*
   * processInput()
   * This function does the following (in order):
   * -If the advancedDiv element contains a picture, that picture is
   *  removed from the advancedDiv.
   * -Create a variable "words" that is an array of all words the user typed.
      Do so exactly like this:
      var words = input.value.toLowerCase().trim().split(" ");
   * -Clear the text area.
   * -If the length of words is 1, then the user only entered one word. Check
   *  if that word is a greeting. If so, set the innerHTML of the message
   *  element to "Greetings!". Otherwise, set it to errorText.
   * -If the lenght of words is 2, then the user entered two words. What
      happens next is based on the first word they entered. Create a switch
      statement for the expression words[0], and has the following cases: "who"
      "what" "where" "tell" "show".
   * -Each case simply calls a function with the same name as the case, with
      words[1] passed in as an argument. For example, case "who" calls
      who(words[1]). Each case should break after calling the function.
   * -At the very end of the switch statement we handle what happens if the
      user has not entered a valid first word. Create a "default" case and
      make it set the message element's innerHTML to errorText.
   * -Finally, create one final "else" that takes care of the user entering
      anything other than 1 or 2 words. This will simply set the innerHTML of
      the message element to errorText.
   */


   function processInput() {
     if (advancedDiv.contains(picture)){
       advancedDiv.removeChild(picture);
     }

     var words = input.value.toLowerCase().trim().split(" ");
     input.value = '';

     if (words.length == 1) {
       if (greetings.indexOf(words[0]) != -1) {
         message.innerHTML = "What do you want?!";
         var msg = new SpeechSynthesisUtterance("what do you want?");
         window.speechSynthesis.speak(msg);
       } else {
         message.innerHTML = errorText;
         var msg = new SpeechSynthesisUtterance(errorText);
         window.speechSynthesis.speak(msg);
       }

     }else if (words.length == 2){
        switch (words[0]) {
          case "who":
            who(words[1]);
            break;
          case "what":
            what(words[1]);
            break;
          case "where":
            where(words[1]);
            break;
          case "tell":
            tell(words[1]);
            break;
          case "show":
            show(words[1]);
            break;
          default:
            message.innerHTML = errorText;
         }
       }else {
         message.innerHTML = errorText;
       }
     }




  /*
   * who(word)
   * This function sets the innerHTML of the message element to specific text,
     based on what the "word" is. In this case the word is the second word the
     user entered (e.g., "who you" results in "I am Axela, of course").
   * To do so, create a switch statement that handles the various valid
     second words the user could have entered (e.g., "you", "president", "me").
   * After setting the innerHTML of the message element to whatever text you
     want, don't forget to break.
   * Also don't forget to add a final default case, which handles the user
     entering an invalid second word. This sets the message's innerHTML to
     dunnoText, NOT errorText (since it's not an error per se, Axela just
     doesn't know what they're referring to.)
   */

   function who(word) {
     switch(word) {
       case "you":
        message.innerHTML = "I am Googlet, of course";
        var msg = new SpeechSynthesisUtterance("I am Googlet, of course");
        window.speechSynthesis.speak(msg);
        break;
       case "me":
        message.innerHTML = "You are you";
        var msg = new SpeechSynthesisUtterance('You are you');
        window.speechSynthesis.speak(msg);
        break;
       case "cool":
        message.innerHTML = "Not Coach Wolf!";
        var msg = new SpeechSynthesisUtterance("Not Coach Wolf!");
        window.speechSynthesis.speak(msg);
        break;
       default:
        message.innerHTML = dunnoText;


     }
   }


  /*
   * what(word)
   * See above.
   */


   function what(word) {
     switch(word) {
       case "you":
        message.innerHTML = "i am artificial intelligence, human";
        var msg = new SpeechSynthesisUtterance("i am artificial intelligence, human");
        window.speechSynthesis.speak(msg);
        picture = document.createElement('img');
        picture.src = 'gifs/giphy (4).gif';
        advancedDiv.appendChild(picture);
        break;
       case "me":
        message.innerHTML = "...a human??";
        var msg = new SpeechSynthesisUtterance("...a human??");
        window.speechSynthesis.speak(msg);
        break;
       case "life":
        message.innerHTML = "the condition that distinguishes animals and plants from inorganic matter, including the capacity for growth, reproduction, functional activity, and continual change preceding death.";
        var msg = new SpeechSynthesisUtterance("the condition that distinguishes animals and plants from inorganic matter, including the capacity for growth, reproduction, functional activity, and continual change preceding death.");
        window.speechSynthesis.speak(msg);
        break;
       default:
        message.innerHTML = dunnoText;


     }
   }


  /*
   * where(word)
   * See above.
   */


   function where(word) {
     switch(word) {
       case "you":
        message.innerHTML = "In this computer";
        var msg = new SpeechSynthesisUtterance("In this computer");
        window.speechSynthesis.speak(msg);
        break;
       case "me":
        message.innerHTML = "I don't know. Ask your mom";
        var msg = new SpeechSynthesisUtterance("I don't know. Ask your mom");
        window.speechSynthesis.speak(msg);
        break;
       case "home":
        message.innerHTML = "where you live, duh";
        var msg = new SpeechSynthesisUtterance("where you live, duh");
        window.speechSynthesis.speak(msg);
        break;
       default:
        message.innerHTML = dunnoText;


     }
   }


  /*
   * tell(word)
   * See above.
   */

   function tell(word) {
     switch(word) {
       case "me":
        message.innerHTML = "tell you what?";
        var msg = new SpeechSynthesisUtterance("tell you what?");
        window.speechSynthesis.speak(msg);
        break;
       case "fact":
        message.innerHTML = "Banging your head against a wall burns 150 calories";
        var msg = new SpeechSynthesisUtterance("Banging your head against a wall burns 150 calories");
        window.speechSynthesis.speak(msg);
        break;
       case "story":
        message.innerHTML = "no";
        var msg = new SpeechSynthesisUtterance("no");
        window.speechSynthesis.speak(msg);
        break;
       default:
        message.innerHTML = dunnoText;


     }
   }



  /*
   * show(word)
   * See above.
   */

   function show(word) {
     switch(word) {
       case "me":
        message.innerHTML = "show you what?";
        var msg = new SpeechSynthesisUtterance("show you what?");
        window.speechSynthesis.speak(msg);
        break;
       case "car-fax":
        message.innerHTML = "Visit Carfax.com for that, not me";
        var msg = new SpeechSynthesisUtterance("Visit Carfax.com for that, not me");
        window.speechSynthesis.speak(msg);
        break;
       case "tell":
        message.innerHTML = "do i look like a kindergarten class to you?";
        var msg = new SpeechSynthesisUtterance("do i look like a kindergarten class to you?");
        window.speechSynthesis.speak(msg);
        break;
      case "dog":
        message.innerHTML = "here is the dog";
        var msg = new SpeechSynthesisUtterance("here is the dog");
        window.speechSynthesis.speak(msg);
        picture = document.createElement('img');
        picture.src = 'img/dog.png';
        advancedDiv.appendChild(picture);
       default:
        message.innerHTML = dunnoText;


     }
   }




})();

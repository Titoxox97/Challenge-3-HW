var specialCharacters = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ];
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCasedCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperCasedCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  
  
  
  // Function to prompt user for password options
  function getPasswordOptions() {
    var length = parseInt(
      prompt("How long would you like your password to be?")
    );
    if (isNaN(length) === true) {
      alert("Password length must be given as a numerical value");
      return;
    }
    if (length < 8) {
      alert("Password length must be a minimum of 8 characters");
      return;
    }
  
    // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
    if (length > 128) {
      alert("Password length can be a maximum of 128 characters.");
      return;
    }
  
    // Variable to store boolean regarding the inclusion of special characters
    var hasSpecialCharacters = confirm(
      "Click OK to confirm including special characters."
    );
  
    // Variable to store boolean regarding the inclusion of numeric characters
    var hasNumericCharacters = confirm(
      "Click OK to confirm including numeric characters."
    );
  
    // Variable to store boolean regarding the inclusion of lowercase characters
    var hasLowerCasedCharacters = confirm(
      "Click OK to confirm including lowercase characters."
    );
  
    // Variable to store boolean regarding the inclusion of uppercase characters
    var hasUpperCasedCharacters = confirm(
      "Click OK to confirm including uppercase characters."
    );
  
    // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
    if (
      hasSpecialCharacters === false &&
      hasNumericCharacters === false &&
      hasLowerCasedCharacters === false &&
      hasUpperCasedCharacters === false
    ) {
      alert("Must select at least one character type");
      return;
    }
  
    // Object to store user input
    var passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters,
    };
    return passwordOptions;
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
  }
  
  // Function to generate password with user input
  function generatePassword() {
    var options = getPasswordOptions();
    // Variable to store password as it's being concatenated
    var result = [];
    // Array to store types of characters to include in password
    var possibleCharacters = [];
    // Array to contain one of each type of chosen character to ensure each will be used
    var guaranteedCharacters = [];
    // Conditional statement that adds array of special characters into array of possible characters based on user input
    // Push new random special character to guaranteedCharacters
    if (options.hascharKey) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));
    }
    // Conditional statement that adds array of numeric characters into array of possible characters based on user input
    // Push new random special character to guaranteedCharacters
    if (options.hasnumKey) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      guaranteedCharacters.push(getRandom(numericCharacters));
    }
    // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
    // Push new random lower-cased character to guaranteedCharacters
    if (options.hasLowerCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
      guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }
    // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
    // Push new random upper-cased character to guaranteedCharacters
    if (options.hasUpperCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
      guaranteedCharacters.push(getRandom(upperCasedCharacters));
    }
    // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);
      result.push(possibleCharacter);
    }
  
    // Mix in at least one of each guaranteed character in the result
    for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];
    }
    // Transform the result into a string and pass into writePassword
    return result.join("");
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  // // Assignment code here
  // var upperKey = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // var lowerKey = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // var numKey = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // var charKey = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
  
  //Need to add section to store and list previous passwords. Should be in a card below the card with the generate password button.
  
  // function userChoice() {
  //   var upperYes = confirm("Would you like to include upper case letters in your generated password?");
  //   var lowerYes = confirm("Would you like to include lower case letters in your generated password?");
  //   var numYes = confirm("Would you like to include numbers in your generated password?");
  //   var charYes = confirm("Would you like to include alternate characters in your generated password?");
  
  //   if (upperYes === false && lowerYes === false && numYes === false && charYes === false) {
  //     alert("Error. You must agree to at least one of the choices.");
  //     return;
  //   }
  
  
  // var passLength = parseInt(prompt("How long would you like your password to be? (Must be between 8 and 128 characters)"));
  // // parseInt turns a string into a number
  // // isNaN makes sure a value is anything other than a number
  // if (isNaN(passLength) === true) {
  //   alert("Error. That was not a valid number. Try again.");
  //   return;
  // }
  // // retunr to question if password length enteres is not within the required parameters
  // if (passLength > 128 || passLength < 8) {
  //   alert("Try again. The number must fall within the parameters.");
  //   return;
  // }
  
  // // My first working object. It's going to keep the values from this function.
  // var userChoice = {upperYes: upperYes, lowerYes: lowerYes, numYes: numYes, charYes: charYes, passLength: passLength};
  // console.log(userChoice);
  // return userChoice;
  // // creates userChoice from this function for future use.
  // }
  
  // // At least one of each kind
  // // character was actually chosen
  // function checkPass(choices, finalPass) {
  //   var foundUpper = true;
  //   var foundLower = true;
  //   var foundNum = true;
  //   var foundSpecial = true;
  //   if (choices.upperYes) {
  //     foundUpper = finalPass.some(r=> upperKey.index0f(r) >= 0);
  //   }
  //   else {
  //     foundUpper = false;
  //   }
  //   if (choices.lowerYes) {
  //     foundLower = finalPass.some(r=> lowerKey.index0f(r) >=0);
  //   }
  //   else {
  //     foundLower = false;
  //   }
  //   if (choices.numYes) {
  //     foundNum = finalPass.some(r=> numKey.index0f(r) >=0);
  //   }
  //   else {
  //     foundNum = false;
  //   }
  //   if (choices.yesSpecial) {
  //     foundSpecial = finalPass.some(r=> charKey.index0f(r) >= 0);
  //   }
  //   else {
  //     foundSpecial = false;
  //   }
  //   var choices4 = choices.passLength;
  //   var filterCheck = {foundUpper: foundUpper, foundLower: foundLower, foundNum: foundNum, foundSpecial: foundSpecial, choices4: choices4};
  //   // filterCheck = filterCheck.push(choices[Object.keys(choices[4])]);
  //   console.log(filterCheck);
  
  //   console.log(foundNum === choices.yesNum);
  //   if ((foundUpper === choices.upperYes) && (foundLower === choices.loweYes) && (foundNum === choices.numYes) && (foundSpecial === choices.yesSpecial)) {
  //     // finalPass = finalPass.join(); // Make string without commas!!!!!!!!!!!!!!!!!!!!!!!!!!! D:<
  //     // finalPass = JSON.stringify(finalPass);
  //     return true;
  //   }
  // else {
  //   finalPass.length = 0;
  //   return false;
  // }
  
  // function generatePass(){
  //   var choices = userChooses();
  //   var fullArr = [];
  //   var finalPass = [];
  //   if (choices.upperYes) {
  //     fullArr = fullArr.concat(upperChar);
  //   }
  //   if (choices.lowerYes) {
  //     fullArr = fullArr.concat(lowerChar);
  //   }
  //   if (choices.numYes) {
  //     fullArr = fullArr.concat(numChar);
  //   }
  //   if (choices.charYes) {
  //     fullArr = fullArr.concat(specialChar);
  //   }
  //    // This for loop will take a random entry from the
  //     // combined array and place them into a new array one
  //     // by one until you have the desired amount of password characters.
  //   do {
  //     for (var i = 0; i < choices.passLength; i++) {
  //       finalPass.push(fullArr[Math.floor(Math.random() * fullArr.length)]);
  //     }
  //     console.log(finalPass);
  //   } while (checkPass(choices, finalPass) === false);
  //   return finalPass;
  //   // Where the actual password is decided
  // }
  // // get references tp the copy and generate elements
  // var copyBtn = document.querySelector(".copy");
  // var generateBtn = document.querySelector(".generate");
  
  // // Write password to the .password input
  // function writePass() {
  //   var pass = generatePass();
  //   var passText = document.querySelector(".password");
  
  //   passText.value = pass.join('');
  
  //   copyBtn.removeAttribute("disabled");
  //     copyBtn.focus();
  // }
  // function copyToClipboard() {
  //   var passText = document.querySelector(".password");
  //   passText.select();
  //   document.execCommand("copy");
  //   alert("Your password " + passText.value + " was copied to your clipboard.");
  // }
  
  // // Add event listener to generate button
  // generateBtn.addEventListener("click", writePass);
  // // Add event listener to copy button
  // copyBtn.addEventListener("click", copyToClipboard);
  
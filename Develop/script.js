// Assignment code here
function generatePassword() {
  // Chosen array of characters
  var pwCharacters = [];

  // Special characters from https://owasp.org/www-community/password-special-characters
  var specialCharStr = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // Setup password criteria variables
  var useLowercase = false;
  var useUppercase = false;
  var useNumeric = false;
  var useSpecial = false;



  // Prompt for the password length
  var pwLength = prompt("How long should the password be? Enter a whole number between 8 and 128.");

  //If pwLength is null, keep it as null, else convert to a number. This makes input validation easier.
  pwLength = (pwLength === null) ? null : Number(pwLength);

  // Test if the input is an integer between 8 and 128 and prompt if it is not
  while (!Number.isInteger(pwLength) || pwLength < 8 || pwLength > 128) {
    // Allow users to cancel password creation by pressing the cancel button at any time
    if (pwLength === null) {
      alert("Password creation has been canceled");
      // Return an empty string as no password was created
      return "";
    }
    pwLength = prompt("Invalid input received. Please enter a whole number between 8 and 128 for the password length.");

    // If pwLength is null, keep it as null, else convert to a number. This makes input validation easier.
    pwLength = (pwLength === null) ? null : Number(pwLength);
  }
  console.log(pwLength);



  // While loop to ensure at least one criteria is selected
  while (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    // Prompt for each criteria
    useLowercase = confirm("Use lowercase characters?");
    useUppercase = confirm("Use uppercase characters?");
    useNumeric = confirm("Use numbers?");
    useSpecial = confirm("Use special characters?");

    // If no criteria were selected, prompt if the user wants to try again or cancel password creation
    if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
      var tryAgain = confirm("No password criteria were selected. Do you want to try again or cancel password creaction?");

      // If the user does not want to try again, then they have canceled password creation
      if (!tryAgain) {
        alert("Password creation has been canceled");
        // Return an empty string as no password was created
        return "";
      }
    }
  }



  // Build the array of chosen characters to use in the password
  if (useLowercase) {
    // Lowercase characters are character codes 97 - 122
    for (var i = 97; i <= 122; i++) {
      pwCharacters.push(String.fromCharCode(i));
    }
  }

  if (useUppercase) {
    // Uppercase characters are character codes 65 - 90
    for (var i = 65; i <= 90; i++) {
      pwCharacters.push(String.fromCharCode(i));
    }
  }

  if (useNumeric) {
    // For numbers, it is more readable to use the toString function while looping i from 0 - 9
    for (var i = 0; i <= 9; i++) {
      pwCharacters.push(i.toString());
    }
  }

  if (useSpecial) {
    // Split the string of special characters into an array
    var specialCharArray = specialCharStr.split("");
    // Concatinate the array of special characters to the end of the pwCharacters array
    pwCharacters = pwCharacters.concat(specialCharArray);
  }

  console.log(pwCharacters);



  // Generate password, start with an empty string then add to it
  var passwordStr = "";
  // Loop to create the length of password asked for by the user
  for (var i = 0; i < pwLength; i++) {
    // Generate a random number between 0 and up to pwCharacters.length, then take the floor of that to ensure it is an integer [0 .. n-1]
    var randomIndex = Math.floor(Math.random() * pwCharacters.length);
    // Use the randomIndex to pick a random character from the pwCharacters array and add it the the final password
    passwordStr += pwCharacters[randomIndex];
  }

  // Return the final password
  return passwordStr;
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

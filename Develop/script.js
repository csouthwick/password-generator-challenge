// Assignment code here
function generatePassword() {
  //Setup password criteria variables
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

  // While loop to ensure at least on criteria is selected
  while(!useLowercase && !useUppercase && !useNumeric && !useSpecial){
    // Prompt for each criteria
    useLowercase = confirm("Use lowercase characters?");
    useUppercase = confirm("Use uppercase characters?");
    useNumeric = confirm("Use numbers?");
    useSpecial = confirm("Use special characters?");

    // If no criteria were selected, prompt if the user wants to try again or cancel password creation
    if(!useLowercase && !useUppercase && !useNumeric && !useSpecial){
      var tryAgain = confirm("No password criteria were selected. Do you want to try again or cancel password creaction?");
      
      // If the user does not want to try again, then they have canceled password creation
      if(!tryAgain){
        alert("Password creation has been canceled");
        // Return an empty string as no password was created
        return "";
      }
    }
  }


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

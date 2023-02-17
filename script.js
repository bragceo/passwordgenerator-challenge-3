// Assignment Code
//Please note I used const and let instead of var for variable declarations.
//I also asked our instructor Diego and he said it was OK.
// Define character sets
const numericCharacters = '0123456789';
const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
const specialCharacters = '@%+\/\'!#$^?:,)(}{][~`.-_';

function generatePassword() {
  // Get input and validate
  let numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128 || isNaN(numberOfCharacters)) {
    return "Please choose a valid number of characters.";
  }
  alert(`Your password will be ${numberOfCharacters} characters long.`);

  // Ask for character types
  let hasLowercase = confirm("Do you want lowercase characters?");
  let hasUppercase = confirm("Do you want uppercase characters?");
  let hasNumbers = confirm("Do you want to use numbers?");
  let hasSpecial = confirm("Do you want special characters?");

  // Check if at least one character type was selected
  if (!hasLowercase && !hasUppercase && !hasNumbers && !hasSpecial) {
    return "Please select at least one character type.";
  }

  // Concatenate selected character sets
  let possibleCharacters = '';
  if (hasLowercase) possibleCharacters += lowercaseCharacters;
  if (hasUppercase) possibleCharacters += uppercaseCharacters;
  if (hasNumbers) possibleCharacters += numericCharacters;
  if (hasSpecial) possibleCharacters += specialCharacters;

  // Generate password
  let finalPassword = '';
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng = Math.floor(Math.random() * possibleCharacters.length);
    finalPassword += possibleCharacters[rng];
  }
  return finalPassword;
};

// Get reference to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


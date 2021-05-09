//var promptCharacters = {promptUppercase, promptLowercase, promptNumbers, promptSpecialCharacters};
//console.log(promptCharacters);

//var Math.max(8, 128);Math.min


var randomNumbers = ['0','1','2','3','4','5','6','7','8', '9']
var randomSpecialCharacters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '_', '+']
var randomUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var randomLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x','y','z']

///////////////////////////////////////////////////////////////////////////////////////////

// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

///////////////////////////////////////////////////////////////////////////////////////////

var getNumbers = randomNumbers;
var getSpecial = randomSpecialCharacters;
var getUpper = randomUppercase;
var getLower = randomLowercase;

function numbers() {
  var getNumbers = randomNumbers
  getNumbers = confirm('Would you like your password to include numbers? Select "OK" for yes and "Cancel" for no.');
  //numbers = Math.floor(Math.random() + 1);
  randomNumbers = Math.floor(Math.random(/\d+/g) * 10);
  return numbers;
}
numbers();
console.log(randomNumbers);

function special(randomSpecialCharacters) {
  var getSpecial = randomSpecialCharacters
  getSpecial = confirm('Would you like your password to include special chaacters?'); 
  return randomSpecialCharacters;
}
special();
  console.log(getSpecial);

function upper(randomUppercase) {
  var getUpper = randomUppercase
  getUpper = confirm("Would you like your password to include UPPERCASE letters?");
  return randomUppercase;
}
upper();
  console.log(getUpper);

function lower(randomLowercase) {
  var getLower = randomLowercase
    getLower = confirm("Would you like your password to include lowercase letters?");
    return randomLowercase;
}
lower();
console.log(randomLowercase);

function getLength() {
//var getLength = prompt('How long would you like your password to be? Please select a number between 8 and 128.')  
    //getLength = function(min, max) {
    //var value = Math.floor(Math.random() * (max - min + 1) + min);

  //return value;
};

//console.log(getLength);

//var characterLength = function() {
  //if (length >= 8 || length <= 128) {
    //alert("Your password will be " + length + " characters long.");
  //} else {
    //length = alert('Please select a number between 8 and 128.');
  //}
    //console.log("Your password length will be " + length);
    //return length;
//};

//getPassword();
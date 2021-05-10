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



function generatePassword(input) {
var randomPassword = "";

for(let i=0; i < input.length; i++) {
randomPassword = randompassword =+ getNumbers;
randomPassword = randompassword =+ getSpecial;
randomPassword = randompassword =+ getUpper;
randomPassword = randompassword =+ getLower;
}
};



confirm('Would you like your password to include numbers? Select "OK" for yes and "Cancel" for no.');
confirm('Would you like your password to include special chacters? Select "OK" for yes and "Cancel" for no.');
confirm('Would you like your password to include UPPERCASE letters? Select "OK" for yes and "Cancel" for no.');
confirm('Would you like your password to include lowercase letters? Select "OK" for yes and "Cancel" for no.');
prompt('How long do you want your password to be? Please select a number between 8 and 128.');



function numbers() {
  
  return getNumbers[Math.floor(Math.random() * getNumbers.length)];
}
numbers();
console.log(numbers());

function special() {
  
  return getSpecial[Math.floor(Math.random() * getSpecial.length)];
}
special();
  console.log(special());

function upper() {
  
  return getUpper[Math.floor(Math.random() * getUpper.length)];
}
upper();
  console.log(upper());

function lower() {
    
    return getLower[Math.floor(Math.random() * getLower.length)];
}
lower();
console.log(lower());

function getLength() {
  console.log(getLength);
  pwLength = Math.floor(Math.random() * getLength.length)
  if (pwLength < 8 || pwLength > 128) {
  } else {
    alert("You must enter a number between 8 and 128. Please try again.");
  }

  return pwLength;
}
getLength();

var input = {
  num: getNumbers,
  spec: getSpecial,
  up: getUpper,
  lo: getLower

};
//getPassword();
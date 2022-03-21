
// user input variables
var enter;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmSpecial;
// special characters
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// numbers
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// letters
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// for uppercase conversion
space = [];
// choice(s) of user
var choices;
// converts to uppercase letters
var toUpper = function (x) {
  return x.toUpperCase();
};
// variable for uppercase conversion
letter2 = letter.map(toUpper);

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  password = generatePassword();
  document.getElementById("password").placeholder = password;
});


// Start of prompt
function generatePassword() {
  enter = parseInt(prompt("How many characters would you like your password? (between 8 and 128)"));
  // If no value is entered, then prompted that it needs value
  if (!enter) {
    alert("This needs a value");
  }   
  else if (enter < 8 || enter > 128) {
    enter = praseInt(prompt("You must choose between 8 and 128"));
  }   
  // else, confirm options
  else {
    confirmLowercase = confirm("Do you want lowercase letters?");
    confirmUppercase = confirm("Do you want uppercase letters?");
    confirmNumber = confirm("Do you want numbers?");
    confirmSpecial = confirm("Do you want special characters?");
  };  
  
  // if all 4 options not selected
  if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecial) {
    choices = alert("You must choose a criteria");
  }  

  // if all 4 options selected
  // .concat = merge arrays together
  else if (confirmLowercase && confirmUppercase && confirmNumber && confirmSpecial) {
    choices = letter.concat(letter2, number, special);
  }   

  // if 3 options selected
  else if (confirmLowercase && confirmUppercase && confirmNumber) {
    choices = letter.concat(letter2, number);
  }  
  else if (confirmLowercase && confirmUppercase && confirmSpecial) {
    choices = letter.concat(letter2, special);
  }  
  else if (confirmLowercase && confirmNumber && confirmSpecial) {
    choices = letter.concat(number, special);
  }  
  else if (confirmUppercase && confirmNumber && confirmSpecial) {
    choices = letter2.concat(number, special);
  }  
  
  // if 2 options selected 
  else if (confirmLowercase && confirmUppercase) {
    choices = letter.concat(letter2);
  }  
  else if (confirmLowercase && confirmNumber) {
    choices = letter.concat(number);
  }  
  else if (confirmLowercase && confirmSpecial) {
    choices = letter.concat(special);
  }  
  else if (confirmUppercase && confirmNumber) {
    choices = letter2.concat(number);
  }  
  else if (confirmUppercase && confirmSpecial) {
    choices = letter2.concat(special);
  }  
  else if (confirmNumber && confirmSpecial) {
    choices = number.concat(special);
  }  
  
  // if 1 option selected
  else if (confirmLowercase) {
    choices = letter;
  }  
  else if (confirmNumber) {
    choices = number;
  }  
  else if (confirmSpecial) {
    choices = special;
  }  

  // space variable for uppercase conversion
  else if (confirmUppercase) {
    choices = space.concat(letter2);
  }  
 
  // array placeholder for password length
  var password1 = [];
 
  // random selection of variables
  // .push to add elements to password value
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password1.push(pickChoices);
  }
  
  // joins password array to string
  var password = password1.join("");
  writePassword(password);
  return password;

}

// function to put password value into textbox
// used textcontent instead
function writePassword(password) {
  document.getElementById("password").textContent = password;
};

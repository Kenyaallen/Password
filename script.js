// This assigns the characters that will be used for the password
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var letter = "abcdefghijklmnopqrstuvwxyz";
var letterUpp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*-+=?/~";


// This allows you to generate the password
function writePassword() {


  // Tells the user the parameters of the password
  var userLet = prompt("The length of your password must be between 8 - 128 characters.  Type in a number between 8 and 128, Thank You! ");
  if (userLet < 8 || userLet > 128) {
    var lengthIncorrect = alert("Invalid password length!! Remember YOU MUST choose a length between 8 - 128")
  }


  // This is used to make sure the user picks a number between 8 and 128
  if (userLet >= 8 && userLet <= 128) {


    // This asks the user if they would like to have lower case letters in their password
    var userLow = confirm("Would you like your password to contain lower case letters?");
    if (userLow) {
        alert("It's been added")
       }


    // This asks if they would like to have upper case letters in their password
    var userUpp = confirm("Would you like your password to contain upper case letters?");
    if (userUpp) {
        alert("It's been added")
    }


    // This asks if they would like to have numbers in their password
    var userNum = confirm("Would you like your password to contain numbers?");
    if (userNum) {
        alert("It's been added")
    }


    // This asks if they would like to have special characters in their password
    var userSym = confirm("Would you like your password to contain special characters?");
    if (userSym) {
        alert("It's been added")
    }


    // This is used to monitor if they choose a number below 8 or above 128 for their password length
    if (userLow === false && userUpp === false && userNum === false && userSym === false) {
        alert("You HAVE to select AT LEAST ONE CHARACTER type before a password can be generated")
    }
  }


  // Based on the choices selected this will determine the random password
  passwordMakeUp = "";


  if (userLow) {
    passwordMakeUp += letter;
  }
  if (userUpp) {
    passwordMakeUp += letterUpp;
  }
  if (userNum) {
    passwordMakeUp += number;
  }
  if (userSym) {
    passwordMakeUp += symbol;
  }


  // This will display the password created
  password = "";


  for (i = 1; i <= userLet; i++) {
    var passLet = Math.round(Math.random() * passwordMakeUp.length);
    password += passwordMakeUp.charAt(passLet);


    if (userLow === true || userUpp === true || userNum === true || userSym === true) {
      passwordText.value = password;
    };
  };
};


// Event Listener
generateBtn.addEventListener("click", writePassword)

// Assignment Code
var generateBtn = document.querySelector("#generate");

//TODO: SET VALUES
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var characters = ['!','@','#','$','^','&','*'];


//Start of the function
function generatePassword(){

//store users input, and final password
var addOptions = []
var finalPassword = ""
var passwordLength = prompt ("How long would you like your password to be?")


//checks for users input and makes sure the password length meets criteria
if (passwordLength < 8 || passwordLength > 128 ){
  alert ("Please choose a password length between 8 and 128")
  generatePassword();
}

//confirms users input for (want lower case, upper case, special characters and numbers)
else{

var wantLowerCase = confirm ("Do you want lower case?")
var wantUpperCase = confirm ("Do you want upper case ?")
var wantNumbers = confirm ("Do you want numbers?")
var wantSpecial = confirm("Do you want special characters?")

//if options are confirmed, merge the existing arrays and returns a new one
if (wantSpecial){
  addOptions = addOptions.concat(characters)
}
if(wantNumbers){
  addOptions = addOptions.concat(numbers)
}
if(wantUpperCase){
   addOptions = addOptions.concat(upperCase)
}
if (wantLowerCase){
  addOptions = addOptions.concat(lowerCase)
}

//if no option is selected , alert the user and rerun the program
if (wantUpperCase == false && wantNumbers == false && wantLowerCase == false && wantSpecial == false){
  alert("YOu must choose one ")
  generatePassword()
}

//if the the password length meets the criteria - return a random password
if(passwordLength >= 8 && passwordLength <= 128){
  for (var i=0; i < passwordLength; i++){
    randomPassword = Math.floor(Math.random() * addOptions.length);
    finalPassword += addOptions[randomPassword];
  }
}
}


//writes users password in the (#password) text area
document.getElementById("password").innerHTML = finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword); 






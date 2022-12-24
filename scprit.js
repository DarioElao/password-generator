// Assignment Code
var generateBtn = document.querySelector("#generate");

//TODO: SET VALUES
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var characters = ['!','@','#','$','^','&','*'];



function generatePassword(){

var addOptions = []
var finalPassword = ""
var passwordLength = prompt ("How long you want your password?")

if (passwordLength < 8 || passwordLength > 128 ){
  alert ("please choose a password length between 8 and 128")
  generatePassword();
}
else{

var wantLowerCase = confirm ("Do you want lower case?")
var wantUpperCase = confirm ("Do you want upper case ?")
var wantNumbers = confirm ("Do you want numbers?")
var wantSpecial = confirm("Do you want special characters?")

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
if (wantUpperCase == false && wantNumbers == false && wantLowerCase == false && wantSpecial == false){
  alert("YOu must choose one ")
  generatePassword()
}
if(passwordLength >= 8 && passwordLength <= 128){
  for (var i=0; i < passwordLength; i++){
    randomPassword = Math.floor(Math.random() * addOptions.length);
    finalPassword += addOptions[randomPassword]
  }
}
}

document.getElementById("password").innerHTML = finalPassword

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword); 






// Assignment Code
var generateBtn = document.querySelector("#generate");

// letterConsonants array
var lettersConsonants="BCDFGHJKLMNPQRSTVWXYZ";
var uperCaseConsonants= lettersConsonants.split('');
var lowerCaseConsonants= lettersConsonants.toLowerCase().split('');

// letterVowels array
var lettersVowels="AEIOU";
var uperCaseVowels= lettersVowels.split('');
var lowerCaseVowels= lettersVowels.toLowerCase().split('');

// numberEven array
var numbersEven="02468";
var numArrayEven= numbersEven.split('');

// numberOdd array
var numbersOdd="13579";
var numArrayOdd= numbersOdd.split('');

// special characters array
var characters="!?.,#$%&/()=*<>-_+";
var specialCharacters = characters.split('');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  //"choicesArr" has to be filled with whatever people choose
  var choicesArr = [];

  // Prompt for password length
  // "choiceLength" variable defines how many characters the paswors is going to contain
  var choiceLength = prompt("How many characters do you want in between 8 and 128?");

  // The while loop loops through a block of code as long as a specified condition is true.
  while(choiceLength < 8 || choiceLength > 128){
    alert("Choose a number in between 8 and 128");
    choiceLength = prompt("How many characters do you want in between 8 and 128??");
  }
  
  var optionOneUperConsonants = confirm("Do you want upercase consonant leters?");
  var optionTwoLowerConsonants = confirm("Do you want lowercase consonant letters?");
  var optionThreeUperVowels = confirm("Do you want upercase vowel leters?");
  var optionFourLowerVowels = confirm("Do you want lowercase vowel letters?");
  var optionFiveNumEven = confirm("Do you want even numbers?");
  var optionSixNumOdd = confirm("Do you want odd numbers?");
  var optionSevenChar = confirm("Do you want special characters?");

  // "uperCaseConsonant" statement
  if(optionOneUperConsonants === true){
    // console.log(uperCase);
    choicesArr = choicesArr.concat(uperCaseConsonants);
  }

  // "lowerCaseConsonant" statement
  if(optionTwoLowerConsonants === true){
    choicesArr = choicesArr.concat(lowerCaseConsonants);
  }

  // "uperCaseVowel" statement
  if(optionThreeUperVowels === true){
    // console.log(uperCase);
    choicesArr = choicesArr.concat(uperCaseVowels);
  }

  // "lowerCaseVowel" statement
  if(optionFourLowerVowels === true){
    choicesArr = choicesArr.concat(lowerCaseVowels);
  }

  // "numArrayEven" statement
  if(optionFiveNumEven === true){
    choicesArr = choicesArr.concat(numArrayEven);
  }

  // "numArrayOdd" statement
  if(optionSixNumOdd === true){
    choicesArr = choicesArr.concat(numArrayOdd);
  }

  // "specialCharacters" statement
  if(optionSevenChar === true){
    choicesArr = choicesArr.concat(specialCharacters);
  }

  // print in to console "choicesArr" values
  console.log(choicesArr);

  // The "for loop" loops through a block of code a number of times, 
  // in this case it loops the times that the user says in the prompt 
  // and make a string out of that to then "return" to the front.
  randompass = "";
  for(i=0;i<parseInt(choiceLength);i++){
    randompass += choicesArr[Math.floor(Math.random() * choicesArr.length)];
  }
  return randompass//any variable here

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// copy password feauture
function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("password");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the password into clipboard: " + copyText.value);
  }
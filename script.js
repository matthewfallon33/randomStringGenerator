var alpha = "abcdefghijklmnopqrstuvxyz";
var newString = "";

function generateRandomString(str){
  for(i = 0; i <= str.length-1; i++){
    randNum = Math.round(Math.random()*(str.length - 1));
    randLet = str[randNum];
    newString += randLet;
        }
}
generateRandomString(alpha);
console.log(newString);
// upload to GitHub

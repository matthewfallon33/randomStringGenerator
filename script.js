var alpha = "abcdefghijklmnopqrstuvxyz";
var newString;

function generateRandomString(str){
  newString = "";
  for(i = 0; i <= str.length-1; i++){
    randNum = Math.round(Math.random()*(str.length - 1));
    randLet = str[randNum];
    newString += randLet;
  }
  return newString;
}
generateRandomString(alpha);



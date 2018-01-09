var getCipherCap = function(sentence) {

  var firstLetter = sentence[0].toUpperCase();
  var middle = sentence.slice(1, (sentence.length - 1));
  var lastLetter = sentence[sentence.length - 1].toUpperCase();
  var cipher = firstLetter + middle + lastLetter;
  return cipher;
}

var giveCipher = function() {

  var sentence = prompt("type something here");
  alert(getCipherCap(sentence));
}

giveCipher();

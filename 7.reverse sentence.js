function reverseSent(sentence){
    var result = "";
    var splitStr = sentence.split(" ");
  
    for (var i = splitStr.length - 1; i >= 0; i--){
    
     if (i ==splitStr.length - 1) {
            result += "";
      }
      else {
          result += " ";
      }
    
      result += splitStr[i];
      var words = result;
    }
    return '"' + words + '"';
  }

var sentence = 'Bangalore is the best Indian City';
var res = reverseSent(sentence)
res
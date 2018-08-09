//

'use strict';

function calcualteRektangels(word, width, height) {
  var letters = word.split("");
  var output = "";

  for (var a = 0; a < height; a++)
    for (var horisontal = 0; horisontal < letters.length; horisontal++) {
      if (horisontal == 0) {
        output += letters[horisontal];
        for (var i = 0; i < width; i++) {
          if (i%2 == 0) {
            for (var j = 1; j < letters.length; j++) {
              output += letters[j];
            }
          }
          else {
            for (var k = letters.length-1; k >= 1; k--) {
              output += letters[k-1];
            }
          }
          if (i == width-1)
            output += "<br>";
        }
      }
      else if (horisontal == letters.length-1) {
      //  if (a == height-1) {
          output += letters[horisontal];
          for (var i = 0; i < width; i++) {
            if (i%2 == 0) {
              for (var j = 1; j < letters.length; j++) {
                output += letters[j] ;
              }
            }
            else {
              for (var k = letters.length-1; k >= 1; k--) {
                output += letters[k-1];
              }
            }
            if (i == width-1)
              output += "<br>";
          }
      //  }
      }
      else {
        output += letters[horisontal];
        for (var n = 0; n < width; n ++) {
          for (var m = 1; m < letters.length; m++) {
            if (m == letters.length-1) {
              if (n%2 == 0)
                output += letters[letters.length-horisontal-1];
              else
                output += letters[horisontal];
            }
            else
              output += " - ";
          }
          if (n == width-1)
             output += "<br>";
        }
      }
    }

    document.write(output);

}

calcualteRektangels("HELLO", 5, 3);

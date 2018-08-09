// en ruta funkar

function calcualteRektangels(word, width, height) {
  var letters = word.split("");
  var output = "";

  for (var horisontal = 0; horisontal < letters.length; horisontal++) {
    if(horisontal == 0)
      for (var k = 0; k < letters.length; k++) {
        if (k == letters.length-1)
          output += letters[k] + "<br>";
        else
          output += letters[k];
      }
    else if (horisontal == letters.length-1) {
      for (var l = letters.length-1; l >= 0; l--) {
        if (l == letters.length-1)
          output += letters[l]; // bottom line
        else
          output += letters[l]; // bottom line
      }
    }
    else {
      for (var m = 0; m < letters.length; m++) {
        if (m == 0)
          output += letters[horisontal];
        else if (m == letters.length-1)
          output += letters[letters.length-horisontal-1] + "<br>";
        else
          output += " . ";
      }
    }
  }
  document.write(output);
}

calcualteRektangels("WORD", 2, 2);

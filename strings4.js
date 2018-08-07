function tripleCounter (stringToCheck) {
  var counter = 0;

  for (var i = 0; i < stringToCheck.length; i++) {
    if (stringToCheck[i-1] == stringToCheck[i] && stringToCheck[i+1] == stringToCheck[i])
      counter++;
  }

  document.write(counter);
}

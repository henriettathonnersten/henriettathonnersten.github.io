var anArrayOfNumbers = ['one', 'two', 'three'];

for (var i = 0; i < anArrayOfNumbers.length; i++) {
  document.write(anArrayOfNumbers[i] + " ");
}

anArrayOfNumbers.push("four");
document.write("<br>");

for (var i = 0; i < anArrayOfNumbers.length; i++) {
  document.write(anArrayOfNumbers[i] + " ");
}

anArrayOfNumbers.splice(anArrayOfNumbers.length-1, 1);
document.write("<br>");

for (var i = 0; i < anArrayOfNumbers.length; i++) {
  document.write(anArrayOfNumbers[i] + " ");
}

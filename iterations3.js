function fizzbuzz(number, divBy3, divBy5) {

  for (var i = 1; i <= number; i++) {
    if (i%3 == 0 && i%5 == 0)
      document.write(i + " " + divBy3 + divBy5 + " <br>");
    else if (i%3 == 0)
      document.write(i + " " + divBy3 + " <br>");
    else if (i%5 == 0)
      document.write(i + " " + divBy5 + " <br>");

  }
}

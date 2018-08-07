function divider (number) {
  document.write("The selected number is " + number + ".<br>");

do {
    if(number%3 == 0) {
      number = number/3;
      document.write("The number was divided by 3 and is now " + number + ".<br>");
    }
    else {
      if ((number+1)%3 == 0) {
        number += 1;
        document.write("1 was added. Number is now " + number + ".<br>");
      }
      else  {
        number -= 1;
        document.write("1 was subtracted. Number is now " + number + ".<br>");
      }
    }
} while (number != 1);
}

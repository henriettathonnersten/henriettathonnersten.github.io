var person = new Object();

function addName(newName) {
  person.name = newName;
  produceOutput();
}

function addAge(newAge) {
  person.age = newAge;
  produceOutput();
}

function addOccupation(newOccupation) {
  person.occupation = newOccupation;
  produceOutput();
}

function produceOutput() {
  document.getElementById("output").innerHTML = person.name + " is " + person.age + " years of age and works as a " + person.occupation + ".<br>";
}

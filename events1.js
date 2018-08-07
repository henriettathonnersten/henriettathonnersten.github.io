var person = {name: "Name", age: 13, occupation: "Student"};

document.write(person.name + " is " + person.age + " years of age.<br>");

function makeOlder() {
  person.age +=1;
  document.write(person.name + " is NOW " + person.age + " years of age.<br>");
}

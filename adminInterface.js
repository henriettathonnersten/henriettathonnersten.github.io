var garage = [];
var splitCommand = new Array();

function handleCommand(command) {
  splitCommand = command.split(" ");

  if (command.includes("create") || command.includes("Create"))
    createCar(splitCommand[2], splitCommand[3], splitCommand[4], splitCommand[5]);
  else if (command.includes("check in") || command.includes("Check in"))
    checkInCar(splitCommand[2]);
  else if (command.includes("check out") || command.includes("Check out"))
    checkOutCar(splitCommand[2]);
  else if (command.includes("calculate") || command.includes("Calculate"))
    calculateCar(splitCommand[1]);
  else if (command.includes("display") || command.includes("Display"))
    displayContent();
  else {
    document.getElementById("output").innerHTML = "Command not recognised, please try again."
  }
}

function createCar(regNo, brand, wheels, faults) {
  garage.push({"regNo": regNo, "brand": brand, "wheels": wheels, "faults": faults, "status": "in"});
  document.getElementById("output").innerHTML = "A car with reg number " + regNo + " was added to the system.";
}

function checkInCar(regNo) {
  for (var car in garage) {
    if (garage[car].regNo == regNo) {
      garage[car].status = "in";
    }
  }
  document.getElementById("output").innerHTML = "Car with reg number " + regNo + " was checked in.";
}

function checkOutCar(regNo) {
  for (var car in garage) {
    if (garage[car].regNo == regNo) {
      garage[car].status = "out";
    }
  }
  document.getElementById("output").innerHTML = "Car with reg number " + regNo + " was checked out.";
}

function calculateCar(regNo) {
  for (var car in garage) {
    if (garage[car].regNo == regNo) {
      document.getElementById("output").innerHTML = "Repair the car will cost: &#163;" + garage[car].faults*3.55 + ". ";
    }
  }
}

function displayContent() {
  var carInfo = "There are " + garage.length + " cars in the garage: <br>";
  for (var car in garage) {
    if (garage[car].status == "in") {
      carInfo += "Reg number: " + garage[car].regNo + ". ";
      carInfo += "Brand: " + garage[car].brand + ". ";
      carInfo += "Number of wheels: " + garage[car].wheels + ". ";
      carInfo += "Number of faults: " + garage[car].faults + ". <br>";
      document.getElementById("output").innerHTML = carInfo;
    }
  }
}

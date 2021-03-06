var garage = [];

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

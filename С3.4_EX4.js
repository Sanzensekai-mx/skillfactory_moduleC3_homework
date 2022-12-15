function ElectricThing(name, powerConsumption) {
    this.name = name;
    this.powerConsumption = powerConsumption;
    this.isPlugged = false;
    this.isOnline = false;
}

ElectricThing.prototype.plugIn = function() {
    if (this.isPlugged) {
        console.log(this.name + " is already plugged");
        return;
    }
    this.isPlugged = true;
    console.log(this.name + " is plugged");
}

ElectricThing.prototype.plugOut = function() {
    if (!this.isPlugged) {
        console.log(this.name + " is already unplugged");
        return;
    }
    this.isPlugged = false;
    console.log(this.name + " is unplugged");
    if (this.isOnline) {
        this.isOnline = false;
        console.log(this.name + " hard turn off ");
    }
}

ElectricThing.prototype.turnOn = function() {
    if (this.isOnline) {
        console.log(this.name + "is already turned on");
        return;
    }
    if (this.isPlugged) {
        this.isOnline = true;
        console.log(this.name + " turn on");
    } else {
        console.log(this.name + " is not plugged, please turn on first");
    }
}

ElectricThing.prototype.turnOff = function() {
    if (!this.isOnline) {
        console.log(this.name + " is already turned off");
        return;
    }
    this.isOnline = false;
    console.log(this.name + " turn off");
}

function TableLamp(name, powerConsumption, brand, color) {
    this.name = name;
    this.powerConsumption = powerConsumption;
    this.brand = brand;
    this.color = color;
}

TableLamp.prototype = new ElectricThing();

function Computer(name, powerConsuption, type, CPU, GPU, RAM) {
    this.name = name;
    this.powerConsumption = powerConsuption;
    this.type = type;
    this.CPU = CPU;
    this.GPU = GPU;
    this.RAM = RAM;
}

Computer.prototype = new ElectricThing();

Computer.prototype.getInfoAboutPC = function() {
    if (this.isPlugged && this.isOnline) {
        console.log(`
Tech info about PC: ${this.name}\n
CPU - ${this.CPU} 
GPU - ${this.GPU}
RAM - ${this.RAM}`);
    } else {
        console.log('The computer is not working, turn it on first')
    }
}

const tableLamp = new TableLamp("Lamp X4134", 5, "Xiaomi", 'yellow');

const homePC = new Computer('WIN-8724XHJ', 120, 'notebook', 'i5 8400', 'Intel HD Graphics', 8);


tableLamp.turnOn();
tableLamp.turnOff();
tableLamp.plugOut();

tableLamp.plugIn();
tableLamp.plugIn();
tableLamp.turnOn();
tableLamp.turnOn();
tableLamp.plugOut();

tableLamp.plugOut();
tableLamp.turnOff();

homePC.plugIn();
homePC.turnOn();
homePC.getInfoAboutPC();
class ElectricThing {
    constructor(name, powerConsumption) {
        this.name = name;
        this.powerConsumption = powerConsumption;
        this.isPlugged = false;
        this.isOnline = false;
    }

    plugIn() {
        if (this.isPlugged) {
        console.log(this.name + " is already plugged");
        return;
        }
        this.isPlugged = true;
        console.log(this.name + " is plugged");
    }

    plugOut() {
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

    turnOn() {
        if (this.isOnline) {
            console.log(this.name + " is already turned on");
            return;
        }
        if (this.isPlugged) {
            this.isOnline = true;
            console.log(this.name + " turn on");
        } else {
            console.log(this.name + " is not plugged, please turn on first");
        }        
    }

    turnOff() {
        if (!this.isOnline) {
            console.log(this.name + " is already turned off");
            return;
        }
        this.isOnline = false;
        console.log(this.name + " turn off"); 
    }
}

class TableLamp extends ElectricThing {
    constructor(name, powerConsumption, brand, color) {
        super(name, powerConsumption);
        this.brand = brand;
        this.color = color;
    }
}

class Computer extends ElectricThing {
    constructor(name, powerConsumption, type, CPU, GPU, RAM) {
        super(name, powerConsumption);
        this.type = type;
        this.CPU = CPU;
        this.GPU = GPU;
        this.RAM = RAM;
    }

    getInfoAboutPC() {
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

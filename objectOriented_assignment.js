// Task 1: Code a Person class
class Person{
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
        console.log("Energy increased, current level: ", this.energy);
    }
    doSomethingFun() {
        this.energy -= 10;
        console.log("Energy decreased, current level: ", this.energy);
        
    }
}

// Task 2: Code a Worker class
class Worker extends Person{
constructor(name, age, energy,xp = 0,hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    sleep() {
        super.sleep();
    }
     doSomethingFun() {
        super.doSomethingFun();
     }
    goToWork() {
        this.xp += 10;
        console.log("Experience increased, current level: ", this.xp);
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var newInter = new Worker('Bob', 21, 110, 0, 10);
    newInter.goToWork();
    return newInter;
}

// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker('Alice', 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager;
}

intern();
manager()
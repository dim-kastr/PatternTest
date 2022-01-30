interface Animal {
    howDoIMove(): string;
}

class Person implements Animal {

    myMoveLogic: IMoveLogic;

    constructor(myMoveLogic: IMoveLogic) {
        this.myMoveLogic = myMoveLogic;
    }

    howDoIMove(): string {
        return this.myMoveLogic.move();
    }
}

class Bird implements Animal {

    myMoveLogic: IMoveLogic;

    constructor(myMoveLogic: IMoveLogic) {
        this.myMoveLogic = myMoveLogic;
    }

    howDoIMove(): string {
        return this.myMoveLogic.move();
    }
}

interface IMoveLogic {
    move(): string;
}

class Walk implements IMoveLogic {
    move(): string {
        return 'Поочерёдное перемещение ног';
    }
}

class Fly implements IMoveLogic {
    move(): string {
        return 'Взмах крыльев'
    }
}


function clientCode(animal: Animal) {
    console.log(animal.howDoIMove());
}

let myMoveLogic = new Fly();
let animal = new Bird(myMoveLogic);
clientCode(animal);

myMoveLogic = new Walk();
animal = new Person(myMoveLogic);
clientCode(animal);
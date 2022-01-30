var Person = /** @class */ (function () {
    function Person(myMoveLogic) {
        this.myMoveLogic = myMoveLogic;
    }
    Person.prototype.howDoIMove = function () {
        return this.myMoveLogic.move();
    };
    return Person;
}());
var Bird = /** @class */ (function () {
    function Bird(myMoveLogic) {
        this.myMoveLogic = myMoveLogic;
    }
    Bird.prototype.howDoIMove = function () {
        return this.myMoveLogic.move();
    };
    return Bird;
}());
var Walk = /** @class */ (function () {
    function Walk() {
    }
    Walk.prototype.move = function () {
        return 'Поочерёдное перемещение ног';
    };
    return Walk;
}());
var Fly = /** @class */ (function () {
    function Fly() {
    }
    Fly.prototype.move = function () {
        return 'Взмах крыльев';
    };
    return Fly;
}());
function clientCode(animal) {
    console.log(animal.howDoIMove());
}
var myMoveLogic = new Fly();
var animal = new Bird(myMoveLogic);
clientCode(animal);
myMoveLogic = new Walk();
animal = new Person(myMoveLogic);
clientCode(animal);

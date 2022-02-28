// INTERFACE
/*
Definition: An interface describe an object in other words,
Interface tell what the object looks like.It is also know as custom type.
syntax:
interface Name{
    prop1: datatype;
    prop2: datatype;
    func1(): returnType;
    ....
}
an interface can have properties as well as methods  too but no assigning of value nor definition
 of methods in interfaces
you can not assign value in interface(concrete value)
*/
var userOne;
userOne = {
    name: "User 1",
    age: 23,
    greet: function (phrase) {
        console.log(phrase + " " + this.name);
    }
};
userOne.greet("Hello there,");
var User = /** @class */ (function () {
    function User(n) {
        this.ageUser = 23;
        this.name = n;
    }
    User.prototype.greet = function (phrase) {
        console.log(phrase + "\t" + this.name);
    };
    return User;
}());
var objU = new User("John Doe");
objU.greet("Good Morning,");
console.log(objU);
var User1 = /** @class */ (function () {
    function User1(n) {
        this.age = 23;
        this.name = n;
    }
    User1.prototype.greetable = function (phrase) {
        console.log(phrase + "\t" + this.name);
    };
    return User1;
}());
var obj1;
obj1 = new User1("Alex");
obj1.greetable("Good Evening! ");
// below class is implementing an interface that inherits another interface
var ClassA = /** @class */ (function () {
    function ClassA(n) {
        this.name = n;
    }
    ClassA.prototype.greetMe = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return ClassA;
}());
var Test = /** @class */ (function () {
    function Test(n, a) {
        this.age = a;
        this.name = n;
    }
    return Test;
}());
var addd;
addd = function (n1, n2) {
    return n1 + n2;
};
var ABCclass = /** @class */ (function () {
    function ABCclass(ch, lng, len) {
        // since length is optional then parameter of length is optional too above
        this.character = ch;
        this.language = lng;
        if (len)
            this.length = len;
    }
    return ABCclass;
}());
// Conclusion
/*
-Interface is purely used in TS and during compilation Interfaces disappear
-It forces class to follow the structure defined in it
-Interface can have function types
-it can have optional properties/methods


*/

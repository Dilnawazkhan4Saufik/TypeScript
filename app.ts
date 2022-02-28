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

// Example 1:
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let userOne: Person;

userOne = {
  name: "User 1",
  age: 23,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

userOne.greet("Hello there,");

// interface with class
// a class can implements one or more than one interfaces

interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class User implements Greetable {
  name: string;
  ageUser = 23;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + "\t" + this.name);
  }
}

const objU: Greetable = new User("John Doe");
objU.greet("Good Morning,");
console.log(objU);

// Why do we use Interface?
/*
We use interface because interface allows us to define the structure of properties and methods at one place and
 then whichever class implements it or variable uses it should follow that structure
 we can make multiple classes follow certain structure using interface and in this way we can make
 sure that every class would have to have the structure defined property plus method in it

*/

// READ ONLY in INTERFACE
interface Person1 {
  readonly name: string;

  greetable(phrase: string): void;
}

class User1 implements Person1 {
  name: string;
  age: number = 23;

  constructor(n: string) {
    this.name = n;
  }

  greetable(phrase: string): void {
    console.log(phrase + "\t" + this.name);
  }
}

let obj1: Person1;
obj1 = new User1("Alex");
obj1.greetable("Good Evening! ");

// obj1.name = 'New Name cant be assign because interface set it as readonly which means
//it is only one time assignable'

// Inheritance in Interface

// A class can implements more than one interfaces and a interface can inherit other interface
interface Named {
  name: string;
}

interface greet extends Named {
  greetMe(phrase: string): void;
}

// below class is implementing an interface that inherits another interface
class ClassA implements greet {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
  greetMe(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

// More one interface is implemented in CLASS Test
interface A {
  name: string;
}
interface B {
  age: number;
}

class Test implements A, B {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.age = a;
    this.name = n;
  }
}

// interfaces as function types;

/*
Recall: 
type AddFn = (a: number, b: number) => number;

function can be typed using this syntax but below is given example of interface as function type
*/

interface AddFn {
  (a: number, b: number): number;
  // (a:number[]): number;
}

let addd: AddFn;

addd = (n1: number, n2: number) => {
  return n1 + n2;
};

// Optional Parameters and Properties:

// Optional property in interface means that any class extending a interface that has
// optional property doesn't need to specify that optional property
// Example 1:
interface Abc {
  character: string;
  length?: number; //question mark here indicates that length is optional
  language: string;
  printUs?(s: string): void;
}

class ABCclass implements Abc {
  character: string;
  language: string;
  length?: number;

  constructor(ch: string, lng: string, len?: number) {
    // since length is optional then parameter of length is optional too above
    this.character = ch;
    this.language = lng;
    if (len) this.length = len;
  }
}

// Conclusion

/*
-Interface is purely used in TS and during compilation Interfaces disappear
-It forces class to follow the structure defined in it
-Interface can have function types
-it can have optional properties/methods


*/

// Classes
abstract class Department {
  // properties can also be created in static way
  /*
  static Note: you can not access static property or method in class using this keyword because this refers to 
  instantiation rather you can access via using Class Name like Department.fiscalYear
 */

  static fiscalYear = 2022;
  //   private id: string;
  //   public name: string;
  protected employee: string[] = [];

  //   1st way of defining Constructor
  //   constructor(n: string) {
  //     this.name = n;
  //   }

  // 2nd way with shorthand technique
  constructor(protected readonly id: string, public name: string) {}

  static createEmp = (name: string) => {
    return { name: name };
  };

  abstract describe(this: Department): void; //definition in here is not allowed
  //   {
  //     // console.log(`Department ${this.id}: ${this.name}`);
  //   }

  addEmployee(name: string) {
    // this.id = 'yz' // ready only can't be changed
    this.employee.push(name);
  }

  printEmpInfo() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT"); //child class super(...) method should be at beginning in constructor in order  to avoid error
  }

  describe() {
    console.log("Department:- ID: ", this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
    console.log("Accounting: -ID", this.id);
  }

  get getRecentReport() {
    if (this.lastReport) {
      return console.log("Last Report: ", this.lastReport);
    } else throw Error("No Report Found");
  }

  set setReccentReport(value: string) {
    if (!value) return;
    this.addReports(value);
  }

  addEmployee(name: string): void {
    if (name === "Ali") return;
    this.employee.push(name);
  }

  addReports(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }
  printReports() {
    console.log(this.reports);
  }
}

// static Methods are accessed without new className();
const emp1 = Department.createEmp("Testing Static");
console.log(emp1, Department.fiscalYear);

const it = new ITDepartment("it-01", ["Ali Hassan"]);
it.describe(); // Department: Accounting
it.addEmployee("Ali");
it.addEmployee("Sahil");
console.log(it, "IT CLASS");

const accounting = new AccountingDepartment("acc-01", []);
accounting.describe();
accounting.addReports("Reports of finance");
accounting.setReccentReport = "Inventory Report"; // setters are always called as property and assigned value with using =(equal sign)
accounting.getRecentReport; // getters are always called as property instead of methods
accounting.printReports();

class SingletonClass {
  private static instance: SingletonClass;
  private constructor(private name: string, private id: number) {}

  static getInstance() {
    if (SingletonClass.instance) {
      return this.instance;
    }
    this.instance = new SingletonClass("instantiated from Class", 101);
    return this.instance;
  }
}

const singletonObj = SingletonClass.getInstance();
const singletonObj1 = SingletonClass.getInstance();

console.log(singletonObj, "--->first object");
console.log(singletonObj1, "--->second object");

// without the keyword private in front of employees we can assign values to class like shown below
//accounting.employee[2] = 'New Empl' //this make employee not accessible outside the class

// const copyAcct = { describee: accounting.describe };
// console.log(copyAcct);
// copyAcct.describee(); //undefined because name doesn't exists

/*
Abstract: this mean that you create any method in parent class with abstract key word in front of it and force it's child to 
must define that particular method body. any class having even a single abstract method should have abstract before class key word where we 
define className and abstract class can't be instantiated 
see Department class's describe method for example;
*/

/*
Singleton & Private Constructor:
Singleton means a class can have only one instance and in case of creating more than one instance result into an error.
to achieve this we make our constructor private and to see the example check singletonClass above
*/

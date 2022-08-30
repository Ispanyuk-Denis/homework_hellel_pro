"use strict";

//1

class Person {

  constructor (firstName, lastName, age, birthDayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDayDate = birthDayDate;
  }

  celebrate () {
    if (calcDayOfWeek(this.birthDayDate) === 0 || calcDayOfWeek(this.birthDayDate) === 6) {
      return console.log (`Happy Birthday, let’s celebrate`)
    }
    return console.log (`Happy Birthday, but I need to work`)
  }

}

class Employee extends Person {

  constructor (jobPosition, salary, firstName, lastName, age, birthDayDate) {
    super(firstName, lastName, age, birthDayDate);
    this.jobPosition = jobPosition;
    this.salary = salary;
  }

  #salary = 0;

  getSalary () {
    this.#salary = this.salary;
    return this.#salary;
  }

  getSalaryOfYear() {
    console.log (`Salary of year ${this.getSalary() * 12}`);
  }

}

function calcDayOfWeek (valueDate) {
  const inputDate = new Date(valueDate);
  const dayOfWeek = inputDate.getDay();
  return dayOfWeek
}

const person = new Person('Taras', 'Shevchenko', 30, '1989-02-05');
const employee = new Employee('QA', 1000, 'Ivan', 'Franko', 25, '1989-02-06');
console.log (employee);
person.celebrate();
employee.celebrate();
employee.getSalaryOfYear();

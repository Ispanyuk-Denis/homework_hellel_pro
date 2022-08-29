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
    return console.log (`Happy Birthday, let’s celebrate`)
  }

}

class Employee extends Person {

  constructor (jobPosition, firstName, lastName, age, birthDayDate) {
    super(firstName, lastName, age, birthDayDate);
    this.jobPosition = jobPosition;
  }

  #salary = 1000;

  get employeeSalary () {
    return this.#salary
  }

  getSalaryOfYear() {
    console.log (`Salary of year ${this.employeeSalary * 12}`);
  }

  celebrate () {
    if (calcDayOfWeek(this.birthDayDate) === 0 || calcDayOfWeek(this.birthDayDate) === 6) {
      return console.log (`Happy Birthday, let’s celebrate`)
    }
    return console.log (`Happy Birthday, but I need to work`)
  }
}

function calcDayOfWeek (valueDate) {
  const inputDate = new Date(valueDate);
  const dayOfWeek = inputDate.getDay();
  return dayOfWeek
}

const person = new Person('Taras', 'Shevchenko', 30, '1989-02-06');
const employee = new Employee('QA', 'Ivan', 'Franko', 25, '1989-02-06');
person.celebrate();
employee.celebrate();
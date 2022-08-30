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
    return isWeekend (this.birthDayDate);
  }

}

class Employee extends Person {

  constructor (jobPosition, salary, firstName, lastName, age, birthDayDate) {
    super(firstName, lastName, age, birthDayDate);
    this.jobPosition = jobPosition;
    this.#salary = salary;
  }

  #salary;

  getSalaryOfYear() {
    console.log (`Salary of year ${this.#salary * 12}`);
  }

  celebrate () {
    const birthDayInThisYear = new Date();
    const birthDay = new Date(this.birthDayDate);
    birthDayInThisYear.setMonth(birthDay.getMonth(), birthDay.getDate());
    return isWeekend(birthDayInThisYear);
  }

}

function isWeekend (valueDate) {
  const inputDate = new Date(valueDate);
  const dayOfWeek = inputDate.getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return console.log (`Happy Birthday, let’s celebrate`)
  }
  return console.log (`Happy Birthday, but I need to work`)
}

const person = new Person('Taras', 'Shevchenko', 30, '1989-02-03');
const employee = new Employee('QA', 1000, 'Ivan', 'Franko', 25, '1989-08-28');
console.log (employee);
person.celebrate();
employee.celebrate();
employee.getSalaryOfYear();

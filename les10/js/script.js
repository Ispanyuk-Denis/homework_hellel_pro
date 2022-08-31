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
      return console.log ('Happy Birthday, let’s celebrate');
  }

}

class Employee extends Person {

  constructor (jobPosition, salary, firstName, lastName, age, birthDayDate) {
    super(firstName, lastName, age, birthDayDate);
    this.jobPosition = jobPosition;
    this.#salary = salary;
  }

  #salary;

  get salaryEmployee () {
    return this.#salary;
  }

  getSalaryOfYear() {
    console.log (`Salary of year ${this.salaryEmployee * 12}`);
  }

  celebrate () {
    const todayDate = new Date();
    const birthDayInThisYear = new Date(this.birthDayDate);
    birthDayInThisYear.setFullYear(todayDate.getFullYear());
    if (isWeekend (birthDayInThisYear)) {
      return super.celebrate();
    }
    return console.log ('Happy Birthday, but I need to work');
  }

}

function isWeekend (date) {
    const inputDate = new Date(date);
    const dayOfWeek = inputDate.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6 
}

const person = new Person('Taras', 'Shevchenko', 30, '1989-02-03');
const employee = new Employee('QA', 1000, 'Ivan', 'Franko', 25, '1989-08-29');
console.log (employee);
person.celebrate();
employee.celebrate();
console.log (employee.salaryEmployee);
employee.getSalaryOfYear();

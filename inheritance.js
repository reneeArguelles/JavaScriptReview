// PROTOTYPES
let Person = function() {};
Person.prototype.initialize = function(firstName, lastName, dateOfBirth){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
}

let Employee = function() {};
Employee.prototype = new Person();

Employee.prototype.addProperties = function(employeeNumber, startDate, salary){
    this.employeeNumber = employeeNumber;
    this.startDate = startDate;
    this.salary = salary;
}

// CREATE THE ARRAY OF EMPLOYEES
const employeeArray = [];

let newEmployee01 = new Employee();
newEmployee01.initialize("John", "Acosta", new Date("1989, 12, 21"));
newEmployee01.addProperties(1000 + Math.ceil(Math.random() * 100), new Date("2022, 3, 17"), Math.ceil(Math.random() * 100) * 10000);
employeeArray.push(newEmployee01);

let newEmployee02 = new Employee();
newEmployee02.initialize("Leila", "Sigrid", new Date("1989, 7, 14"));
newEmployee02.addProperties(1000 + Math.ceil(Math.random() * 100), new Date("2022, 12, 5"), Math.ceil(Math.random() * 100) * 10000);
employeeArray.push(newEmployee02);

let newEmployee03 = new Employee();
newEmployee03.initialize("Karen", "Park", new Date("1969, 2, 29"));
newEmployee03.addProperties(1000 + Math.ceil(Math.random() * 100), new Date("2022, 7, 12"), Math.ceil(Math.random() * 100) * 10000);
employeeArray.push(newEmployee03);

let newEmployee04 = new Employee();
newEmployee04.initialize("Princess", "Kim", new Date("1999, 9, 2"));
newEmployee04.addProperties(1000 + Math.ceil(Math.random() * 100), new Date("2022, 12, 5"), Math.ceil(Math.random() * 100) * 10000);
employeeArray.push(newEmployee04);

let newEmployee05 = new Employee();
newEmployee05.initialize("Mark", "Monton", new Date("2001, 5, 8"));
newEmployee05.addProperties(1000 + Math.ceil(Math.random() * 100), new Date("2022, 10, 19"), Math.ceil(Math.random() * 100) * 10000);
employeeArray.push(newEmployee05);

let newEmployee06 = new Employee();
newEmployee06.initialize("Finn", "Manapat", new Date("2001, 5, 8"));
newEmployee06.addProperties(1000 + Math.ceil(Math.random() * 100), new Date("2022, 10, 19"), Math.ceil(Math.random() * 100) * 10000);
employeeArray.push(newEmployee06);

let newEmployee07 = new Employee();
newEmployee07.initialize("Stacy", "Pelito", new Date("2001, 5, 8"));
newEmployee07.addProperties(1000 + Math.ceil(Math.random() * 100), new Date("2022, 10, 19"), Math.ceil(Math.random() * 100) * 10000);
employeeArray.push(newEmployee07);

let newEmployee08 = new Employee();
newEmployee08.initialize("Aaron", "Magno", new Date("2001, 5, 8"));
newEmployee08.addProperties(1000 + Math.ceil(Math.random() * 100), new Date("2022, 10, 19"), Math.ceil(Math.random() * 100) * 10000);
employeeArray.push(newEmployee08);

let newEmployee09 = new Employee();
newEmployee09.initialize("Renee", "Arguelles", new Date("2001, 5, 8"));
newEmployee09.addProperties(1000 + Math.ceil(Math.random() * 100), new Date("2022, 10, 19"), Math.ceil(Math.random() * 100) * 10000);
employeeArray.push(newEmployee09);

let newEmployee10 = new Employee();
newEmployee10.initialize("Johnny", "Estilles", new Date("2001, 5, 8"));
newEmployee10.addProperties(1000 + Math.ceil(Math.random() * 100), new Date("2022, 10, 19"), Math.ceil(Math.random() * 100) * 10000);
employeeArray.push(newEmployee10);

console.table(employeeArray);


// FUNCTION TO COMPARE SALARIES
const checkSalary = (employeeList, targetSalary) => {
    let employeeWithGreaterSalary = [];

    employeeList.forEach((employee) => {
        if(employee.salary > targetSalary) employeeWithGreaterSalary.push(employee);
    });

    return employeeWithGreaterSalary;
}

console.table(checkSalary(employeeArray, 500000));
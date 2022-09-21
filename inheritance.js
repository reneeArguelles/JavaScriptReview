// PROTOTYPES
function Person(firstName, lastName, dateOfBirth){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
}

function Employee(firstName, lastName, dateOfBirth, employeeNumber, startDate, salary) {
    Person.call(this, firstName, lastName, dateOfBirth);
    this.employeeNumber = employeeNumber;
    this.startDate = startDate;
    this.salary = salary;
}

Employee.prototype = new Person();


// CREATE THE ARRAY OF EMPLOYEES
let employeeArray = [];

employeeArray.push(new Employee("John", "Acosta", new Date("1989, 12, 21"),1000 + Math.ceil(Math.random() * 100), new Date("2022, 3, 17"), Math.ceil(Math.random() * 100) * 10000));
employeeArray.push(new Employee("Leila", "Sigrid", new Date("1989, 7, 14"), 1000 + Math.ceil(Math.random() * 100), new Date("2022, 12, 5"), Math.ceil(Math.random() * 100) * 10000));
employeeArray.push(new Employee("Karen", "Park", new Date("1969, 2, 29"), 1000 + Math.ceil(Math.random() * 100), new Date("2022, 7, 12"), Math.ceil(Math.random() * 100) * 10000));
employeeArray.push(new Employee("Princess", "Kim", new Date("1999, 9, 2"), 1000 + Math.ceil(Math.random() * 100), new Date("2022, 12, 5"), Math.ceil(Math.random() * 100) * 10000));
employeeArray.push(new Employee("Mark", "Monton", new Date("2001, 5, 8"), 1000 + Math.ceil(Math.random() * 100), new Date("2022, 10, 19"), Math.ceil(Math.random() * 100) * 10000));
employeeArray.push(new Employee("Finn", "Manapat", new Date("2001, 5, 8"), 1000 + Math.ceil(Math.random() * 100), new Date("2022, 10, 19"), Math.ceil(Math.random() * 100) * 10000));
employeeArray.push(new Employee("Stacy", "Pelito", new Date("2001, 5, 8"), 1000 + Math.ceil(Math.random() * 100), new Date("2022, 10, 19"), Math.ceil(Math.random() * 100) * 10000));
employeeArray.push(new Employee("Aaron", "Magno", new Date("2001, 5, 8"), 1000 + Math.ceil(Math.random() * 100), new Date("2022, 10, 19"), Math.ceil(Math.random() * 100) * 10000));
employeeArray.push(new Employee("Renee", "Arguelles", new Date("2001, 5, 8"), 1000 + Math.ceil(Math.random() * 100), new Date("2022, 10, 19"), Math.ceil(Math.random() * 100) * 10000));
employeeArray.push(new Employee("Johnny", "Estilles", new Date("2001, 5, 8"), 1000 + Math.ceil(Math.random() * 100), new Date("2022, 10, 19"), Math.ceil(Math.random() * 100) * 10000));

console.table(employeeArray);


// FUNCTION TO COMPARE SALARIES
const checkSalary = (employeeList, targetSalary) => employeeList.filter((employee) => employee.salary > targetSalary);

console.table(checkSalary(employeeArray, 500000));
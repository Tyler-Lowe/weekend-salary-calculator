let employee = [

]

function newEmployee(firstName, lastName, ID, JobTitle, annualSalary) {
    // console.log(employee);
    employee.push({firstName, lastName, ID, JobTitle, annualSalary} )
    // console.log(employee);
}


newEmployee('Tyler', 'Lowe', 4521, 'Developer', 120000);
newEmployee('sarah', 'trud', 3434, 'HR', 50000);
newEmployee('steve', 'dunker', 2222, 'Waterboy', 200000);
console.log(employee);
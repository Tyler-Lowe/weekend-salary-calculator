let employee = [];
let totalAnnualSalary = 0;

function addToEmployeeTable(event) {
    event.preventDefault();

    let employeeFirstName = document.querySelector('#first-name').value;
    let employeeLasttName = document.querySelector('#last-name').value;
    let employeeID = document.querySelector('#employeeID').value;
    let employeeTitle = document.querySelector('#title').value;
    let employeeAnnualSalary = Number(document.querySelector('#annual-salary').value);

    employee.push({employeeFirstName, employeeLasttName, employeeID, employeeTitle, employeeAnnualSalary});
    // call function pass in employee array

    newEmployee(employee)
    
    // After values are pushed to array and the function called clear input values
    employeeFirstName = document.querySelector('#first-name')
    employeeLasttName = document.querySelector('#last-name');
    employeeID = document.querySelector('#employeeID');
    employeeTitle = document.querySelector('#title');
    employeeAnnualSalary = document.querySelector('#annual-salary');
    employeeFirstName.value = ''
    employeeLasttName.value = ''
    employeeID.value = ''
    employeeTitle.value = ''
    employeeAnnualSalary.value = ''

}

function newEmployee(arr) {

    for (const employee of arr) {
        let rowAppend = document.querySelector(`#employee-table`);
        rowAppend.innerHTML += 
        `
        <tr id="employee-row">
        <td>${employee.employeeFirstName}</td>
        <td>${employee.employeeLasttName}</td>
        <td>${employee.employeeID}</td>
        <td>${employee.employeeTitle}</td>
        <td class="deduction">$${employee.employeeAnnualSalary}</td>
        <td><button onclick="removeRow(event)" id="remove">Remove</button>
        </tr>
        `
        monthlyTotalCalculator(employee.employeeAnnualSalary)
    }
  
    employee = [];

}

function monthlyTotalCalculator(employeeSalary) {
    totalAnnualSalary = (totalAnnualSalary + employeeSalary);
    monthlySalary = ((totalAnnualSalary / 12).toPrecision(4))
    let totalAppend = document.querySelector('#monthly-costs');
    totalAppend.innerHTML = `${Number(monthlySalary)}`

    if(Number(monthlySalary) > 20000){
        document.querySelector('#indicator-limit').className = "over-limit";
    }

}

function removeRow(event){
    event.target.parentElement.parentElement.remove();
    let allCells = document.querySelector('#employee-table').getElementsByClassName('deduction');
    console.log(allCells, 'typeof');
    let cellArray = [];
    let adjustedMonthlyTotal = 0;

    for (const element of allCells) {
        cellArray.push(Number(element.textContent.replace('$', '')));
        adjustedMonthlyTotal += Number(element.textContent.replace('$', ''));
    }

     let adjustedMonthlyTotalAppend = document.querySelector('#monthly-costs');
     adjustedMonthlyTotalAppend.innerHTML = `$${(Math.floor(Number(adjustedMonthlyTotal / 12)))}`
     totalAnnualSalary = adjustedMonthlyTotal;

     if(Number(adjustedMonthlyTotal / 12) < 20000) {
        document.querySelector('#indicator-limit').className = "no-color";
     }

}
let employee = [

]
let counter = 1;
let totalAnnualSalary = 0;
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
<td id="deduction">${employee.employeeAnnualSalary}</td>
<td><button onclick="removeRow(event)" id="remove">Remove</button>
</tr>
`

totalAnnualSalary = totalAnnualSalary + Number(employee.employeeAnnualSalary);
}
totalAppend = document.querySelector('#monthly-costs');
totalAppend.innerHTML = `${Number(totalAnnualSalary)}`
if(Number(totalAnnualSalary) > 20000){
    document.querySelector('#indicator-limit').className = "over-limit";
}
employee = [];
    
}



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


function removeRow(event){
    let salaryDeduction = event.target.parentElement.parentElement.querySelector('#deduction').innerHTML
    console.log(Number(salaryDeduction));
    let currentTotal = document.querySelector('#monthly-costs').innerHTML;
    totalAnnualSalary = Number(currentTotal) - Number(salaryDeduction)

    totalAppend = document.querySelector('#monthly-costs');
    totalAppend.innerHTML = `${Number(totalAnnualSalary)}`

    if(Number(totalAnnualSalary) > 20000){
        document.querySelector('#indicator-limit').className = "over-limit";
    } else {
        document.querySelector('#indicator-limit').className = "under-limit";
        setTimeout(() => {
            document.querySelector('#indicator-limit').className = "no-color";
        }
        ,1000);
    }
    

    console.log(currentTotal);
    console.log(event.target.parentElement.parentElement.remove());
    // console.log(event.target.parentElement.parentElement.querySelector('#deduction').innerHTML);
}
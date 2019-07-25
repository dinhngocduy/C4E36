const context={
    employees:  null,
}

window.onload=async()=>{
await getEmployees()
renderEmployees()
employeeSalary()
}

const getEmployees= async() =>{
    const res = await fetch("http://dummy.restapiexample.com/api/v1/employees")
    const employees = await res.json()
    context.employees= employees
    
}
const renderEmployees=()=>{
    let list = document.getElementById("list")
    context.employees.forEach((employee,index)=>{
        let employeesElement = `<li>${employee.employee_name}</li>`
        list.innerHTML+=employeesElement
    })
}
const employeeSalary=() =>{
    const listEmployees = document.getElementById("list")
    const employee_salary=document.getElementById("employee_salary")
    for (let i = 0; i < context.employees.length; i++) {

        listEmployees.children[i].onmouseover=()=>{
            let salary=`<p>The salary of ${context.employees[i].employee_name}: ${context.employees[i].employee_salary}</p>`
            employee_salary.innerHTML+=salary
        }
        listEmployees.children[i].onmouseout=()=>{
            employee_salary.innerHTML=""
        }
    }
}
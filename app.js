const inquirer = require('inquirer');
const addQueries = require('./addQueries');
const viewQueries = require('./viewQueries');
// You'll need a database connection here (e.g., using SQLite, MySQL, or any other database of your choice)

// Function to display main menu
async function mainMenu() {
    const { choice } = await inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit',
        ],
    });

    switch (choice) {
        case 'View all departments':
            try {
                const departments = await viewQueries.viewDepartments();
                console.table(departments);
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
            break;

        case 'View all roles':
            try {
                const roles = await viewQueries.viewRoles();
                console.table(roles);
            } catch (error) {
                console.error('Error fetching roles:', error);
            }
            break;

        case 'View all employees':
            try {
                const employee = await viewQueries.viewEmployees();
                console.table(employee);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
            break;

        case 'Add a department':
            try {
                const { departmentName } = await inquirer.prompt({
                    type: 'input',
                    name: 'departmentName',
                    message: 'Enter the name of the department:',
                });

                await addQueries.addDepartment(departmentName);
                console.log('Department added successfully!');
            } catch (error) {
                console.error('Error adding department:', error);
            }
            break;

        case 'Add a role':
            try {
                const { title, salary, departmentId } = await inquirer.prompt([
                    { type: 'input', name: 'title', message: 'Enter the title of the role:' },
                    { type: 'input', name: 'salary', message: 'Enter the salary for the role:' },
                    { type: 'input', name: 'departmentId', message: 'Enter the department ID for the role:' },
                ]);

                await addQueries.addRole(title, salary, departmentId);
                console.log('Role added successfully!');
            } catch (error) {
                console.error('Error adding role:', error);
            }
            break;


        case 'Add an employee':
            try {
                const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
                    { type: 'input', name: 'firstName', message: 'Enter the first name of the employee:' },
                    { type: 'input', name: 'lastName', message: 'Enter the last name of the employee:' },
                    { type: 'input', name: 'roleId', message: 'Enter the role ID for the employee:' },
                    { type: 'input', name: 'managerId', message: 'Enter the manager ID for the employee (if any):' },
                ]);

                await addQueries.addEmployee(firstName, lastName, roleId, managerId);
                console.log('Employee added successfully!');
            } catch (error) {
                console.error('Error adding employee:', error);
            }
            break;

        case 'Update an employee role':
            try {
                const employees = await viewQueries.viewEmployees(); // Implement viewEmployees function to fetch employee data
                const employeeChoices = employees.map(employee => ({ name: `${employee.first_name} ${employee.last_name}`, value: employee.id }));

                const { employeeId, newRoleId } = await inquirer.prompt([
                    { type: 'list', name: 'employeeId', message: 'Select an employee to update:', choices: employeeChoices },
                    { type: 'input', name: 'newRoleId', message: 'Enter the new role ID for the employee:' },
                ]);

                await addQueries.updateEmployeeRole(employeeId, newRoleId);
                console.log('Employee role updated successfully!');
            } catch (error) {
                console.error('Error updating employee role:', error);
            }
            break;

        case 'Exit':
            console.log('Exiting application');
            process.exit(0);

        default:
            console.log('Invalid choice');
    }

    // Calling mainMenu recursively to keep the application running
    mainMenu();
};

mainMenu();

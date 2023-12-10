const inquirer = require('inquirer');
const Queries = require('./queries');
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
            const departments = await Queries.viewDepartments();
            console.table(departments);
          } catch (error) {
            console.error('Error fetching departments:', error);
          }
      break;

    case 'View all roles':
        try {
            const roles = await Queries.viewRoles();
            console.table(roles);
          } catch (error) {
            console.error('Error fetching roles:', error);
          }
          break;

    case 'View all employees':
        try {
            const employee = await Queries.viewEmployees();
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
        
            await Queries.addDepartment(departmentName);
            console.log('Department added successfully!');
          } catch (error) {
            console.error('Error adding department:', error);
          }
          break;

    case 'Add a role':
        try {
            const { newRole } = await inquirer.prompt({
              type: 'input',
              name: 'newRole',
              message: 'Enter the name of the new role:',
            });
        
            await Queries.addRole(newRole);
            console.log('New Role added successfully!');
          } catch (error) {
            console.error('Error adding a new role:', error);
          }
          break;

    case 'Add an employee':
        try {
            const { employeeName } = await inquirer.prompt({
              type: 'input',
              name: 'employeeName',
              message: 'Enter the name of the new employee:',
            });
        
            await Queries.addEmployee(employeeName);
            console.log('Employee added successfully!');
          } catch (error) {
            console.error('Error adding new employee:', error);
          }
          break;

    case 'Update an employee role':
        try {
            const { updatedRole } = await inquirer.prompt({
              type: 'input',
              name: 'updatedRole',
              message: 'Enter the updated employee role:',
            });
        
            await Queries.updateRole(updatedRole);
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

  // Call mainMenu recursively to keep the application running
  mainMenu();
}
// Example viewDepartments function
async function viewDepartments() {
    // Fetch department data from the database
    // Display formatted table
  }
  
  // Example addDepartment function
  async function addDepartment() {
    const { departmentName } = await inquirer.prompt({
      type: 'input',
      name: 'departmentName',
      message: 'Enter the name of the department:',
    });
  
    // Insert new department into the database
  }
  
  
// Implement the main application logic here
mainMenu();

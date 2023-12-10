const connection = require('./db');

class Queries {
  static viewDepartments() {
    const query = 'SELECT * FROM department';
    return new Promise((resolve, reject) => {
      connection.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
  static addDepartment(departmentName) {
    const query = 'INSERT INTO department (name) VALUES (?)';
    return new Promise((resolve, reject) => {
      connection.query(query, [departmentName], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
 }
 static addEmployee(firstName, lastName, roleId, managerId) {
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
    return new Promise((resolve, reject) => {
      connection.query(query, [firstName, lastName, roleId, managerId], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
  static addRole(title, salary, departmentId) {
    const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
    return new Promise((resolve, reject) => {
      connection.query(query, [title, salary, departmentId], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
  static updateEmployeeRole(employeeId, newRoleId) {
    const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
      connection.query(query, [newRoleId, employeeId], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

}

module.exports = Queries;

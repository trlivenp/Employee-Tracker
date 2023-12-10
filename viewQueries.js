const connection = require('./db');

// Queries for viewing departments, roles, and employees
class ViewQueries {
    static viewDepartments() {
        const query = 'SELECT * FROM department';
        return new Promise((resolve, reject) => {
            connection.query(query, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }
    static viewRoles() {
        const query = 'SELECT * FROM role';
        return new Promise((resolve, reject) => {
          connection.query(query, (err, result) => {
            if (err) reject(err);
            resolve(result);
          });
        });
      }
    
      static viewEmployees() {
        const query = 'SELECT * FROM employee';
        return new Promise((resolve, reject) => {
          connection.query(query, (err, result) => {
            if (err) reject(err);
            resolve(result);
          });
        });
      }
    } 

module.exports = ViewQueries;

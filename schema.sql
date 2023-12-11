DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

INSERT INTO department (id, name) VALUES
  (1, 'Department1'),
  (2, 'Department2');

-- Insert sample roles
INSERT INTO role (id, title, salary, department_id) VALUES
  (1, 'Role1', 50000, 1),
  (2, 'Role2', 60000, 2);

-- Insert sample employees
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
  (1, 'John', 'Doe', 1, NULL),
  (2, 'Jane', 'Smith', 2, 1);

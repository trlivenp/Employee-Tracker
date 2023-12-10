INSERT INTO department (name) VALUES ('Department1'), ('Department2');

INSERT INTO role (title, salary, department_id) VALUES
  ('Role1', 50000, 1),
  ('Role2', 60000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1);

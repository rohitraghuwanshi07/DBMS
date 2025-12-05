-- Part 1
-- 1. Employees in Marketing
SELECT e.emp_name
FROM Employees e
JOIN Departments d ON e.dept_id = d.dept_id
WHERE d.dept_name = 'Marketing';

-- 2. Employees earning more than company average
SELECT emp_name, salary
FROM Employees
WHERE salary > (SELECT AVG(salary) FROM Employees);

-- 3. Employees assigned to Project Phoenix
SELECT e.emp_name
FROM Employees e
JOIN Assignments a ON e.emp_id = a.emp_id
JOIN Projects p ON a.proj_id = p.proj_id
WHERE p.proj_name = 'Project Phoenix';

-- 4. Employees not assigned to any project
SELECT e.emp_name
FROM Employees e
WHERE e.emp_id NOT IN (SELECT emp_id FROM Assignments);

-- 5. Employees earning more than ANY in Marketing
SELECT emp_name
FROM Employees
WHERE salary > ANY (
    SELECT salary
    FROM Employees e
    JOIN Departments d ON e.dept_id = d.dept_id
    WHERE d.dept_name = 'Marketing'
);

-- 6. Employees earning more than ALL in Marketing
SELECT emp_name
FROM Employees
WHERE salary > ALL (
    SELECT salary
    FROM Employees e
    JOIN Departments d ON e.dept_id = d.dept_id
    WHERE d.dept_name = 'Marketing'
);

-- Part 2
-- 1. Employees hired in 2023
SELECT emp_name, hire_date
FROM Employees
WHERE strftime('%Y', hire_date) = '2023';

-- 2. Employees without a manager
SELECT emp_name
FROM Employees
WHERE manager_id IS NULL;

-- 3. Employees with last name Smith or Williams
SELECT emp_name
FROM Employees
WHERE emp_name LIKE '%Smith'
   OR emp_name LIKE '%Williams';

-- 4. Employees hired in last 2 years
SELECT emp_name, hire_date
FROM Employees
WHERE hire_date >= date('now', '-2 years');
-
-- Part 3
-- 1. Highest-paid employee in each department
SELECT d.dept_name, e.emp_name, e.salary
FROM Employees e
JOIN Departments d ON e.dept_id = d.dept_id
WHERE e.salary = (
    SELECT MAX(salary)
    FROM Employees
    WHERE dept_id = e.dept_id
);

-- 2. Engineering employees not on Project Neptune
SELECT e.emp_name
FROM Employees e
JOIN Departments d ON e.dept_id = d.dept_id
WHERE d.dept_name = 'Engineering'
  AND e.emp_id NOT IN (
      SELECT a.emp_id
      FROM Assignments a
      JOIN Projects p ON a.proj_id = p.proj_id
      WHERE p.proj_name = 'Project Neptune'
  );

-- 3. Departments with average salary > overall avg
SELECT d.dept_name
FROM Departments d
JOIN Employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_name
HAVING AVG(e.salary) > (SELECT AVG(salary) FROM Employees);

-- Part 4
-- 1. Add email column
ALTER TABLE Employees ADD COLUMN email TEXT;

-- 2. Update email for Engineering employees
UPDATE Employees
SET email = LOWER(REPLACE(emp_name, ' ', '')) || '@engineering.com'
WHERE dept_id = (SELECT dept_id FROM Departments WHERE dept_name = 'Engineering');

-- 3. Create HighEarners table & insert data
CREATE TABLE HighEarners (
    emp_id INTEGER PRIMARY KEY,
    emp_name TEXT NOT NULL
);

INSERT INTO HighEarners (emp_id, emp_name)
SELECT emp_id, emp_name
FROM Employees
WHERE salary > 95000;    









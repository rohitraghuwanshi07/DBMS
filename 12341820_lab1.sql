-- lab1.sql
-- [Rohit Raghuwanshi 12341820]


-- 1. CREATE TABLE
 
-- Create Students table
CREATE TABLE IF NOT EXISTS Students (
  StudentID INTEGER PRIMARY KEY,
  FirstName TEXT NOT NULL,
  LastName TEXT NOT NULL,
  Discipline TEXT
);

-- Create Faculty table
CREATE TABLE IF NOT EXISTS Faculty (
  FacultyID INTEGER PRIMARY KEY,
  FirstName TEXT NOT NULL,
  LastName TEXT NOT NULL,
  Department TEXT
);


-- 2. INSERT INTO

-- Insert records into Students table
INSERT INTO Students (StudentID, FirstName, LastName, Discipline) VALUES
  (1, 'Rishi', 'Gupta', 'CSE'),
  (2, 'Rohit', 'Raghu', 'DSAI'),
  (3, 'Shashank', 'Yadav', 'MSME');

-- Insert records into Faculty table
INSERT INTO Faculty (FacultyID, FirstName, LastName, Department) VALUES
  (1, 'Ankur', 'Roy', 'CSE'),
  (2, 'Saurav', 'Sharma', 'Physics'),
  (3, 'Chetan', 'Patel', 'CSE');


-- 3. SELECTION (WHERE Clause)

-- Find all students with discipline 'CSE'
SELECT * FROM Students
WHERE Discipline = 'CSE';

-- Find all faculty in the 'CSE' department
SELECT * FROM Faculty
WHERE Department = 'CSE';


-- 4. PROJECTION (SELECT Specific Columns)

-- List the first and last names of all students
SELECT FirstName, LastName FROM Students;

-- List the last names and departments of all faculty
SELECT LastName, Department FROM Faculty;

-- 5. UNION

-- List all unique first names of both students and faculty
SELECT FirstName FROM Students
UNION
SELECT FirstName FROM Faculty;

-- List all unique last names of both students and faculty
SELECT LastName FROM Students
UNION
SELECT LastName FROM Faculty;

-- 6. INTERSECT

-- Find all first names that are common to both students and faculty
SELECT FirstName FROM Students
INTERSECT
SELECT FirstName FROM Faculty;

-- Find all last names that are common to both students and faculty
SELECT LastName FROM Students
INTERSECT
SELECT LastName FROM Faculty;




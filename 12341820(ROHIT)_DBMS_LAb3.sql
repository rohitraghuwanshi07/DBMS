-- Part 1:Joins and Outer Joins
--1.List courses and faculty who teach them
SELECT c.cname AS course, f.fname AS faculty
FROM Courses c
JOIN Faculty f ON c.instructor_fid = f.fid;

--2.Students enrolled in a course taught by Prof.Sharma
SELECT DISTINCT s.sname
FROM Students s
JOIN Enrolled e ON s.sid = e.sid
JOIN Courses c ON e.cid = c.cid
JOIN Faculty f ON c.instructor_fid = f.fid
WHERE f.fname = 'Prof. Sharma';

--3.All students with course if enrolled
SELECT s.sname, c.cname
FROM Students s
LEFT JOIN Enrolled e ON s.sid = e.sid
LEFT JOIN Courses c ON e.cid = c.cid
ORDER BY s.sname;

--4.All faculty and the courses they teach
SELECT f.fname, c.cname
FROM Faculty f
LEFT JOIN Courses c ON f.fid = c.instructor_fid
ORDER BY f.fname;

--Part 2:Advanced Conditions and Functions
--1.Students whose name contains a(case-insensitive)
SELECT sname
FROM Students
WHERE sname LIKE '%a%' COLLATE NOCASE;

--2.Students with no discipline(NULL)
SELECT sid, sname
FROM Students
WHERE discip IS NULL;

--3.Students registered in 2022
SELECT sname, registration_date
FROM Students
WHERE strftime('%Y', registration_date) = '2022';

--4.Students registered in August 2022 (BETWEEN)
SELECT sname
FROM Students
WHERE registration_date BETWEEN '2022-08-01' AND '2022-08-31';

--Part 3:Subqueries and Set Operations
--1.Students with GPA > average GPA
SELECT sname, gpa
FROM Students
WHERE gpa > (SELECT AVG(gpa) FROM Students)
ORDER BY gpa DESC;

--2.CSE students not enrolled in Databases CSL303 using EXCEPT
SELECT sname
FROM Students
WHERE discip = 'CSE'

EXCEPT

SELECT s.sname
FROM Students s
JOIN Enrolled e ON s.sid = e.sid
WHERE s.discip = 'CSE' AND e.cid = 'CSL303';

--3.Courses with at least one student enrolled (EXISTS)
SELECT c.cname
FROM Courses c
WHERE EXISTS (
    SELECT 1
    FROM Enrolled e
    WHERE e.cid = c.cid
);

--4.Students with highest GPA in their discipline (correlated subquery)
SELECT s1.sname, s1.discip, s1.gpa
FROM Students s1
WHERE gpa = (
    SELECT MAX(s2.gpa)
    FROM Students s2
    WHERE s2.discip = s1.discip
)
ORDER BY s1.discip;

-- Part 4:Data Manipulation Language (DML)
--1.Insert new student Ravi
INSERT INTO Students (sid, sname, discip, gpa, registration_date)
VALUES (201, 'Ravi', 'EE', 8.0, '2023-09-01');

--2.GPA boost for students with 'A' in Databases taught by Prof. Sharma
UPDATE Students
SET gpa = gpa * 1.10
WHERE sid IN (
    SELECT e.sid
    FROM Enrolled e
    JOIN Courses c ON e.cid = c.cid
    JOIN Faculty f ON c.instructor_fid = f.fid
    WHERE c.cid = 'CSL303'
      AND e.grade = 'A'
      AND f.fname = 'Prof. Sharma'
);

--3.Delete enrollments for Linear Algebra MAL251
DELETE FROM Enrolled
WHERE cid = 'MAL251';

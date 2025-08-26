
-- Part 1: Simple Retrieval
-- 1. Names and GPA of all students in discipline Physics
SELECT sname, gpa
FROM Students
WHERE discipline = 'Physics';

-- 2. Course names and their credit values for all courses worth 4 credits
SELECT cname, credits
FROM Courses
WHERE credits = 4;

-- 3. Student ID and course ID for all enrollments where the grade is 'F'
SELECT sid, cid
FROM Enrolled
WHERE grade = 'F';

-- 4. All student names and their discipline, sorted by discipline, then by name
SELECT sname, discipline
FROM Students
ORDER BY discipline ASC, sname ASC;


-- Part 2: Joins

-- 1. Names of all students who are enrolled in Databases(CSL303)
SELECT DISTINCT s.sname
FROM Students s
JOIN Enrolled e ON s.sid = e.sid
JOIN Courses c ON e.cid = c.cid
WHERE c.cname = 'Databases' OR c.cid = 'CSL303';

-- 2. Names of all courses that Ben Taylor is enrolled in
SELECT c.cname
FROM Courses c
JOIN Enrolled e ON c.cid = e.cid
JOIN Students s ON e.sid = s.sid
WHERE s.sname = 'Ben Taylor';

-- 3. Name of each student and the name of each course they are enrolled in, along with their grade
SELECT s.sname, c.cname, e.grade
FROM Students s
JOIN Enrolled e ON s.sid = e.sid
JOIN Courses c ON e.cid = c.cid;

-- 4. Names of all students who are not enrolled in any courses
SELECT s.sname
FROM Students s
LEFT JOIN Enrolled e ON s.sid = e.sid
WHERE e.cid IS NULL;

-- 5. Names of all students who received a 'B' in a 3-credit course
SELECT DISTINCT s.sname
FROM Students s
JOIN Enrolled e ON s.sid = e.sid
JOIN Courses c ON e.cid = c.cid
WHERE e.grade = 'B' AND c.credits = 3;


-- Part 3: Aggregation and Grouping

-- 1. For each discipline, number of students in it
SELECT discipline, COUNT(*) AS student_count
FROM Students
GROUP BY discipline;

-- 2. Number of courses grouped by number of credits
SELECT credits, COUNT(*) AS course_count
FROM Courses
GROUP BY credits;

-- 3. For each course, number of students enrolled (course name + student count)
SELECT c.cname, COUNT(e.sid) AS student_count
FROM Courses c
LEFT JOIN Enrolled e ON c.cid = e.cid
GROUP BY c.cname;

-- 4. cid of all courses with more than 2 students having a grade 'A'
SELECT cid
FROM Enrolled
WHERE grade = 'A'
GROUP BY cid
HAVING COUNT(sid) > 2;

-- Part 4: Challenge Queries

-- 1. Names of all students enrolled in 'Data Structures' (CSL211) using subquery
SELECT sname
FROM Students
WHERE sid IN (
    SELECT sid
    FROM Enrolled
    WHERE cid = 'CSL211'
);

-- 2. Names of courses with at least one student enrolled and at least one student with grade 'F'
SELECT cname
FROM Courses
WHERE cid IN (
    SELECT cid
    FROM Enrolled
    GROUP BY cid
    HAVING COUNT(sid) > 0
)
AND cid IN (
    SELECT cid
    FROM Enrolled
    WHERE grade = 'F'
);

-- 3. Names of students enrolled in both Intro to Programming (CSL100) and Databases (CSL303)
SELECT sname
FROM Students
WHERE sid IN (
    SELECT sid
    FROM Enrolled
    WHERE cid = 'CSL100'
)
AND sid IN (
    SELECT sid
    FROM Enrolled
    WHERE cid = 'CSL303'
);

-- Part 5: Data Update
UPDATE Enrolled
SET cid = 'CSL100'
WHERE cid = 'CSL101';

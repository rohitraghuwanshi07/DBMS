-- 1
CREATE TABLE enrolled (
    student_id INTEGER,
    course_id INTEGER,
    grade TEXT,
    PRIMARY KEY(student_id, course_id),
    FOREIGN KEY(student_id) REFERENCES Students(student_id),
    FOREIGN KEY(course_id) REFERENCES Courses(course_id)
);

-- 2
INSERT INTO enrolled (student_id, course_id, grade)
SELECT student_id, course_id, grade
FROM Enrollments;

-- 3
UPDATE Students
SET department = 'Philosophy'
WHERE name LIKE '%i%';

-- 4
ALTER TABLE Students
ADD COLUMN email TEXT;

-- 5
UPDATE Students
SET email = LOWER(name) || '@iitbhilai.ac.in';

-- 6
SELECT name
FROM Students
WHERE department = 'Computer Science';

-- 7
SELECT name
FROM Students
WHERE name IN (SELECT course_name FROM Courses);

-- 8
SELECT s.name, c.course_name
FROM enrolled e
JOIN Students s on e.student_id = s.student_id
JOIN Courses c on e.course_id = c.course_id
ORDER BY c.course_name ASC;

-- 9
SELECT s.name, c.course_name
FROM Students s
LEFT JOIN enrolled e ON s.student_id = e.student_id
LEFT JOIN Courses c ON e.course_id = c.course_id;


-- 10
SELECT name
FROM Students
NAME LIKE 'A%';

-- 11
SELECT DISTINCT s.name
FROM Students s
JOIN enrolled e ON s.student_id = e.student_id
JOIN Courses c ON e.course_id = c.course_id
WHERE c.credits > 3;

-- 12
SELECT s.name
FROM Students s
LEFT JOIN enrolled e ON s.student_id = e.student_id
WHERE e.course_id IS NULL;

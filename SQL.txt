SELECT
Students.firstName, Students.lastName
COUNT aacount
FROM
Students JOIN Exams
ON 
Students.StudentId=Exam.StudentId
WHERE
Exams.Result<3
GROUP BY studentId
HAVING
Exams.Result<3

SELECT
Group
COUNT (*) as amount
FROM Students
GROUP BY Group
HAVING amount >10
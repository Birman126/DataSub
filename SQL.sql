-- Задание 2

-- Таблица Students имеет поля StudentId, FirstName, LastName, Group и содержит информацию о студентах института.
--  Таблица Exams имеет поля StudentId, ExamName, Result и содержит результаты экзаменов студентов.
-- a) написать SQL запрос, который выводит имена и фамилии студентов у которых больше двух экзаменов с результатом меньше 3.
-- b) написать SQL запрос, который выводит название групп, в которых таких студентов больше 10

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
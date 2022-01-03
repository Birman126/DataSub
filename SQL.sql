-- Задание 2

-- Таблица Students имеет поля StudentId, FirstName, LastName, Group и содержит информацию о студентах института.
-- Таблица Exams имеет поля StudentId, ExamName, Result и содержит результаты экзаменов студентов.
-- a) написать SQL запрос, который выводит имена и фамилии студентов у которых больше двух экзаменов с результатом меньше 3.
-- b) написать SQL запрос, который выводит название групп, в которых таких студентов больше 10

SELECT
Students.firstName, Students.lastName
COUNT (Student.StudentId) as aacount
FROM
Students INNER JOIN Exams
ON 
Students.StudentId=Exam.StudentId
WHERE
Exams.Result<3
GROUP BY Students.StudentId
HAVING
aacount >= 2

SELECT
student.Group
COUNT(*) as amount --подсчет строк по столбцу Groupe
FROM
(
  SELECT
  Student.FirstName, Student.LastName, Student.StudentId, COUNT(*) as amount1 
  FROM
  Student INNER JOIN Exams --объединение двух таблиц по столбцу StudentId
  ON
  Student.StudentId = Exams.StudentId
  WHERE
  Exams.Result < 3
  GROUP BY 
  Student.StudentId HAVING amount1 >= 2
  )
GROUP BY Group --группировка по Group
HAVING  amount > 10;


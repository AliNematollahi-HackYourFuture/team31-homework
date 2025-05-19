-- 1. Add a task
INSERT INTO tasks (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Buy groceries', 'Buy milk, eggs, and bread', '2025-04-29', '2025-04-29', '2025-05-01', 1, 2);

-- 2. Change the title of the task (id = 36)
UPDATE tasks
SET title = 'Buy weekly groceries'
WHERE id = 36;

-- 3. Change the due date of the task (id = 36)
UPDATE tasks
SET due_date = '2025-05-05'
WHERE id = 36;

-- 4. Change the status of the task (id = 36) (e.g., to status_id = 2)
UPDATE tasks
SET status_id = 2
WHERE id = 36;

-- 5. Mark the task (id = 36) as complete (e.g., status_id = 3)
UPDATE tasks
SET status_id = 3
WHERE id = 36;

-- 6. Delete the task (id = 36)
DELETE FROM tasks
WHERE id = 36;

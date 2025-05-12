-- 1. CREATE TABLES

CREATE TABLE meals (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  description TEXT,
  location VARCHAR(255),
  when_date DATETIME,
  max_reservations INT,
  price DECIMAL(6,2),
  created_date DATE
);

CREATE TABLE reservations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  number_of_guests INT,
  meal_id INT,
  created_date DATE,
  contact_phonenumber VARCHAR(20),
  contact_name VARCHAR(255),
  contact_email VARCHAR(255),
  FOREIGN KEY (meal_id) REFERENCES meals(id)
);

CREATE TABLE reviews (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  description TEXT,
  stars INT CHECK (stars BETWEEN 1 AND 5),
  meal_id INT,
  created_date DATE,
  FOREIGN KEY (meal_id) REFERENCES meals(id)
);

-- 2. CRUD QUERIES FOR MEALS

-- Get all meals
SELECT * FROM meals;

-- Add a new meal
INSERT INTO meals (title, description, location, when_date, max_reservations, price, created_date)
VALUES ('Pizza Night', 'Wood oven pizza with drinks', 'Copenhagen', '2025-05-10 18:00:00', 10, 75.00, '2025-05-01');

-- Get a meal with id = 1
SELECT * FROM meals WHERE id = 1;

-- Update a meal with id = 1
UPDATE meals SET title = 'Updated Pizza Night', price = 80.00 WHERE id = 1;

-- Delete a meal with id = 1
DELETE FROM meals WHERE id = 1;

-- 3. CRUD QUERIES FOR RESERVATIONS

-- Get all reservations
SELECT * FROM reservations;

-- Add a new reservation
INSERT INTO reservations (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (2, 1, '2025-05-02', '12345678', 'John Doe', 'john@example.com');

-- Get a reservation with id = 1
SELECT * FROM reservations WHERE id = 1;

-- Update a reservation with id = 1
UPDATE reservations SET number_of_guests = 3 WHERE id = 1;

-- Delete a reservation with id = 1
DELETE FROM reservations WHERE id = 1;

-- 4. CRUD QUERIES FOR REVIEWS

-- Get all reviews
SELECT * FROM reviews;

-- Add a new review
INSERT INTO reviews (title, description, stars, meal_id, created_date)
VALUES ('Great meal!', 'Loved the food and people', 5, 1, '2025-05-03');

-- Get a review with id = 1
SELECT * FROM reviews WHERE id = 1;

-- Update a review with id = 1
UPDATE reviews SET stars = 4, description = 'Still good but room for improvement' WHERE id = 1;

-- Delete a review with id = 1
DELETE FROM reviews WHERE id = 1;

-- 5. FUNCTIONALITY QUERIES

-- Meals cheaper than a specific price
SELECT * FROM meals WHERE price < 90;

-- Meals with available reservations
SELECT meals.*
FROM meals
LEFT JOIN (
  SELECT meal_id, SUM(number_of_guests) AS total_reserved
  FROM reservations
  GROUP BY meal_id
) AS r ON meals.id = r.meal_id
WHERE COALESCE(total_reserved, 0) < meals.max_reservations;

-- Meals with title match
SELECT * FROM meals WHERE title LIKE '%rød grød med%';

-- Meals created between two dates
SELECT * FROM meals WHERE created_date BETWEEN '2025-05-01' AND '2025-05-31';

-- Limit number of meals
SELECT * FROM meals LIMIT 5;

-- Meals with good reviews (4 or 5 stars)
SELECT DISTINCT meals.*
FROM meals
JOIN reviews ON meals.id = reviews.meal_id
WHERE reviews.stars >= 4;

-- Reservations for a specific meal ordered by created date
SELECT * FROM reservations WHERE meal_id = 1 ORDER BY created_date;

-- Sort meals by average review stars
SELECT meals.*, AVG(reviews.stars) AS avg_rating
FROM meals
LEFT JOIN reviews ON meals.id = reviews.meal_id
GROUP BY meals.id
ORDER BY avg_rating DESC;

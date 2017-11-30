CREATE TABLE food (
	id SERIAL PRIMARY KEY,
	name VARCHAR (100),
	deliciousness_rating INT NOT NULL,
	is_hot BOOLEAN NOT NULL
);

INSERT INTO food (name, deliciousness_rating, is_hot)
VALUES ('Carbonara', 99, TRUE),
('Pizza', 80, TRUE),
('Chocolate', 90, FALSE);

SELECT * FROM food;
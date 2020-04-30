CREATE TABLE contractors (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email_address VARCHAR(255) NOT NULL,
  postal_code VARCHAR(255),
  weekly_hours_available INTEGER,
  bio TEXT
);

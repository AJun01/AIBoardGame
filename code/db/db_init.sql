-- TABLE: users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    doc DATE NOT NULL
);

-- Insert sample data into the users table
INSERT INTO users (username, password, email, doc)
VALUES 
('alice', 'hashed_password1', 'alice@example.com', '2022-01-01'),
('bob', 'hashed_password2', 'bob@example.com', '2022-02-01'),
('charlie', 'hashed_password3', 'charlie@example.com', '2022-03-01');

-- Stored Procedure: Add a new user
CREATE OR REPLACE PROCEDURE add_user(
    p_username VARCHAR,
    p_password VARCHAR,
    p_email VARCHAR,
    p_doc DATE
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO users (username, password, email, doc)
    VALUES (p_username, p_password, p_email, p_doc);
END;
$$;

-- Stored Procedure: Retrieve a user's ID by email and password
CREATE OR REPLACE FUNCTION get_user_id(p_email VARCHAR, p_password VARCHAR)
RETURNS INT
LANGUAGE plpgsql
AS $$
DECLARE
    v_user_id INT;
BEGIN
    SELECT id INTO v_user_id
    FROM users
    WHERE email = p_email AND password = p_password;
    
    RETURN v_user_id;
END;
$$;

-- Sample Calls
-- Add a new user
CALL add_user('dave', 'hashed_password4', 'dave@example.com', '2022-04-01');

-- Get user ID by email and password
SELECT get_user_id('dave@example.com', 'hashed_password4');

-- Select all users
SELECT * FROM users;
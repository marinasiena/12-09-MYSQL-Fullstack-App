-- Create database.
CREATE DATABASE burgers_db;

-- Select database.
USE burgers_db;

-- Define schema for burgers table. Only burger_name will need to be specified.
CREATE TABLE burgers (
  id          INT(10) AUTO_INCREMENT              NOT NULL,
  burger_name VARCHAR(30)                         NOT NULL,
  devoured    BOOL DEFAULT FALSE                  NOT NULL,
  date        TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);

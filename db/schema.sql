DROP DATABASE IF EXISTS ecommerce_db;

CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE Category (
  id INT NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Product (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  price DECIMAL NOT NULL,
  stock INT NOT NULL DEFAULT 10,
  category_id INT,
  FOREIGN KEY (category_id) 
        REFERENCES Category(id),
  PRIMARY KEY (id)
);

CREATE TABLE Tag (
  id INT NOT NULL AUTO_INCREMENT,
  tag_name VARCHAR(50) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE ProductTag (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT,
  FOREIGN KEY (product_id) 
        REFERENCES Product(id),
  tag_id INT,
  FOREIGN KEY (tag_id) 
        REFERENCES Tag(id),
  PRIMARY KEY (id)
);

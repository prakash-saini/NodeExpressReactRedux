--for help : \?
--create Database : CREATE DATABASE database_name;
--connect to Database : \c;
--to list all database : \l
--to create table : CREATE TABLE products ( id INT, name VARCHAR(200), price INT, is_sold BOOLEAN);
--to show tables : \d
--to see structure of talbe : \d table_name
--change table
    --add column : ALTER TABLE table_name ADD COLUMN featured type boolean;
    --drop column : ALTER TABLE products DROP COLUMN featured;

--drop table
    --DROP TABLE table_name


--insert in table
    --INSERT INTO table_name(column1, column2, ...) values (value1, value2, ...);

--view data from table
    --select * from table_name

--yelp APPLICATION

--CREATE TABLE restaurants (id INt,name VARCHAR(100),location VARCHAR(100),price_range INt);
--INSERT INTO restaurants (id,name,location,price_range) values (123, 'mackdonald','new york', 20);

--with constraint
    --CREATE TABLE restaurants (id BIGSERIAL NOT NULL PRIMARY KEY, name VARCHAR(100) NOT NULL, location VARCHAR(100) NOT NULL, price_range INT NOT NULL check(price_range >=1 AND price_range<=5));




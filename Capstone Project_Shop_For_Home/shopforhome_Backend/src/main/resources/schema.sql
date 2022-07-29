CREATE SCHEMA IF NOT EXISTS shopforhomedb;
USE shopforhomedb;

DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `admin`;
DROP TABLE IF EXISTS `product`;
DROP TABLE IF EXISTS `cart`;
DROP TABLE IF EXISTS `wishlist`;
DROP TABLE IF EXISTS `orders`;
DROP TABLE IF EXISTS `discount`;

create table admin (
	email varchar(255) not null,
	password varchar(255),
	primary key (email)
    );    
create table cart (
	pid integer not null,
      	category varchar(255),
      	count integer not null,
      	email varchar(255),
      	pname varchar(255),
      	price float not null,
      	url varchar(255),
      	primary key (pid)
    );    
create table orders (
	order_id integer not null,
      	address varchar(255),
      	category varchar(255),
      	count integer not null,
      	created_date date,
      	email varchar(255),
      	name varchar(255),
      	ph_no varchar(255),
      	pid integer not null,
      	pname varchar(255),
      	price float not null,
      	total double precision not null,
     	url varchar(255),
      	primary key (order_id)
    );     
create table product (
	pid integer not null,
      category varchar(255),
      pname varchar(255),
      price float not null,
      stock integer not null,
      url varchar(255),
      primary key (pid)
    );
create table user (
	email varchar(255) not null,
      	password varchar(255),
      	primary key (email)
);    
create table wishlist (
	pid integer not null,
      	category varchar(255),
      	email varchar(255),
      	pname varchar(255),
      	price float not null,
      	url varchar(255),
      	primary key (pid)
    );
create table discount (
     discount_code varchar(255) not null,
     discount_amount float not null,
     discount_name varchar(255),
     email varchar(255),
     primary key (discount_code)
 );
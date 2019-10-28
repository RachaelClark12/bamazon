CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR (90) NOT NULL,
  department_name VARCHAR (90) NOT NULL,
  price INT NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Revlon One-Step Hair Dryer & Styler', 'Beauty', '37', '50'), 
('URPOWER Essential Oil Diffuser', 'Home', 16, 23),
('Instand Pot 7-in-1 Multi-Cooker', 'Kitchen', 80, 4),
('TruSkin Natruals Vitamin C Serum for Face', 'Beauty', 36, 17),
('Wemo Mini Smart Plug', 'Home', 22, 18), 
('YI Dome Camera', 'Home', 60, 6),
('Krups F203 Electric Spice & Coffee Grinder', 'Kitchen', 30, 70),
('Mattel Lil Gleemerz Glowzer Figure', 'Toys', 17, 120),
('iRobot Roomba 890 Robot Vacuum Cleaner', 'Home', 475, 39),
('Stealth 600 Wireless Gaming Headset', 'Electronics', 129, 30);



SELECT * FROM products;

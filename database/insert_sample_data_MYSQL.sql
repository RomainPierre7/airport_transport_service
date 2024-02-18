/*==============================================================*/
/* DBMS name:      MySQL 8.0                                    */
/* Created on:     17/02/2024 16:39:21                          */
/*==============================================================*/

/* Tables:
| CUSTOMERS   
| RESERVATIONS
| ROUTES      
| SCHEDULE    
| STOPS       
| TOHAVE      
| TRIPS       
| VEHICLES
*/

-- Remove all existing data

DELETE FROM CUSTOMERS;
DELETE FROM RESERVATIONS;
DELETE FROM ROUTES;
DELETE FROM SCHEDULE;
DELETE FROM STOPS;
DELETE FROM TOHAVE;
DELETE FROM TRIPS;
DELETE FROM VEHICLES;

-- Insert data into the CUSTOMERS table

INSERT INTO CUSTOMERS (CUSTOMERID, CUSTOMERLOGIN, CUSTOMERPASSWORD, CUSTOMERNAME, CUSTOMERSURNAME, CUSTOMERBIRTHDATE) 
VALUES 
(1, 'hello823', 'Azerty7', 'Romain', 'Pierre', '2002-01-08'),
(2, 'em13', 'password', 'Enid', 'Muharemi', '2002-05-15'),
(3, 'jane_doe', 'secure123', 'Jane', 'Doe', '1998-08-22');

-- Insert data into the RESERVATIONS table

INSERT INTO RESERVATIONS (RESERVATIONID, CUSTOMERID, STOPID,TRIPID, RESERVATIONTIME, RESERVATIONPRICE, SALETIME)
VALUES
(1, 1, 1, 1, '2024-07-17 08:00:00', 5.00, '2024-02-17 16:39:21'),
(2, 2, 2, 2, '2024-08-10 16:30:00', 10.00, '2024-02-14 16:39:21');

-- Insert data into the ROUTES table

/* INSERT INTO ROUTES (ROUTEID, ROUTENUMBER, ROUTECOLOR, ROUTEMAINSTARTSTOP, ROUTEMAINENDSTOP)
VALUES
(1, 1, 'Red', 'National library', 'Riga airport'),
(2, 2, 'Blue', 'Train Station', 'Riga airport'); */
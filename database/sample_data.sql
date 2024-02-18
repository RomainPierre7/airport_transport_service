/*==============================================================*/
/* DBMS name:      MySQL 8.0                                    */
/* Created on:     17/02/2024 16:39:21                          */
/*==============================================================*/

/* Tables:
| CUSTOMERS   OK
| RESERVATIONS
| ROUTES      OK
| SCHEDULE    
| STOPS       OK
| TOHAVE      OK
| TRIPS       NOK
| VEHICLES  OK
*/

-- Remove all existing data

SET foreign_key_checks = 0;

DELETE FROM CUSTOMERS;
DELETE FROM RESERVATIONS;
DELETE FROM ROUTES;
DELETE FROM SCHEDULE;
DELETE FROM STOPS;
DELETE FROM TOHAVE;
DELETE FROM TRIPS;
DELETE FROM VEHICLES;

SET foreign_key_checks = 1;

-- Insert data into the CUSTOMERS table

INSERT INTO CUSTOMERS (CUSTOMERID, CUSTOMERLOGIN, CUSTOMERPASSWORD, CUSTOMERNAME, CUSTOMERSURNAME, CUSTOMERBIRTHDATE) 
VALUES 
(1, 'hello823', 'Azerty7', 'Romain', 'Pierre', '2002-01-08'),
(2, 'em13', 'password', 'Enid', 'Muharemi', '2002-05-15'),
(3, 'jane_doe', 'secure123', 'Jane', 'Doe', '1998-08-22');

-- Insert data into the ROUTES table

INSERT INTO ROUTES (ROUTEID, ROUTENUMBER, ROUTECOLOR)
VALUES 
(1, 1, 'Red'),
(2, 2, 'Blue'),
(3, 3, 'Green');

-- Insert data into the STOPS table

INSERT INTO STOPS (STOPID, STOPNAME, STOPLOCATION, STOPLATITUDE, STOPLONGITUDE, PRMACCESS)
VALUES 
(1, 'Riga Airport', 'P133, Mārupe', 56.923077, 23.981182, 1),
(2, 'National library', 'Mūkusalas iela 3', 56.942476, 24.096964, 0),
(3, 'Train station', 'Stacijas laukums 2', 56.947652, 24.119885, 1),
(4, 'R.T.U.', 'Āzenes iela 12/1', 56.951545, 24.078475, 0),
(5, 'Freedom Monument', 'District central', 56.951968, 24.113529, 0),
(6, 'Riga Arena', 'Skanstes iela 21', 56.969407, 24.119432, 1);

-- Insert data into the TOHAVE table

INSERT INTO TOHAVE (STOPID, ROUTEID, STOPORDER)
VALUES 
(6, 1, 1),
(5, 1, 2),
(1, 1, 3),
(4, 2, 1),
(1, 2, 2),
(3, 3, 1),
(2, 3, 2),
(1, 3, 3);

-- Insert data into the VECHICLES table

INSERT INTO VEHICLES (VEHICLEID, VEHICLEMODEL, VEHICLEBRAND, VEHICLETYPE, VEHICLELICENSE, VEHICLECAPACITY)
VALUES 
(1, 'Citaro', 'Mercedes', 'Bus', 'AB1234', 50),
(2, 'Citaro', 'Mercedes', 'Bus', 'AZERTY', 50),
(3, 'Citaro', 'Mercedes', 'Bus', 'QWERTY', 50),
(4, '7900', 'Volvo', 'Bus', 'IMABUS', 40),
(5, '7900', 'Volvo', 'Bus', 'WHYNOT', 40),
(6, '7900', 'Volvo', 'Bus', 'RIGALV', 40);

-- Insert data into the TRIPS table

INSERT INTO TRIPS (TRIPID, ROUTEID, VEHICLEID, TRIPMAINDIRECTION)
VALUES 
(1, 1, 1, 1),
(2, 1, 2, 0),
(3, 2, 3, 1),
(4, 2, 4, 0),
(5, 3, 5, 1),
(6, 3, 6, 0); 

-- Insert data into the SCHEDULE table

INSERT INTO SCHEDULE (SCHEDULEID, TRIPID, STOPID, SCHEDULETIME)
VALUES
(1, 1, 6, '2024-02-18 08:00:00'),
(2, 1, 5, '2024-02-18 08:10:00'),
(3, 1, 1, '2024-02-18 08:20:00'),
(4, 2, 1, '2024-02-18 09:00:00'),
(5, 2, 5, '2024-02-18 09:10:00'),
(6, 2, 6, '2024-02-18 09:20:00'),
(7, 3, 6, '2024-02-18 10:00:00'),
(8, 3, 5, '2024-02-18 10:10:00'),
(9, 3, 1, '2024-02-18 10:20:00'),
(10, 4, 1, '2024-02-18 11:00:00'),
(11, 4, 5, '2024-02-18 11:10:00'),
(12, 4, 6, '2024-02-18 11:20:00'),
(13, 5, 6, '2024-02-18 12:00:00'),
(14, 5, 5, '2024-02-18 12:10:00'),
(15, 5, 1, '2024-02-18 12:20:00'),
(16, 6, 1, '2024-02-18 13:00:00'),
(17, 6, 5, '2024-02-18 13:10:00'),
(18, 6, 6, '2024-02-18 13:20:00');

/* -- Insert data into the RESERVATIONS table

INSERT INTO RESERVATIONS (RESERVATIONID, CUSTOMERID, STOPID, TRIPID, RESERVATIONTIME, RESERVATIONPRICE, SALETIME)
VALUES 
(1, 1, 1, 1, '2024-02-17 16:39:21', 10.00, '2024-02-17 16:39:21'),
(2, 2, 2, 2, '2024-02-17 16:39:21', 10.00, '2024-02-17 16:39:21'),
(3, 3, 3, 3, '2024-02-17 16:39:21', 10.00, '2024-02-17 16:39:21'); */
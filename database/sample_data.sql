/*==============================================================*/
/* DBMS name:      MySQL 8.0                                    */
/* Created on:     17/02/2024 16:39:21                          */
/*==============================================================*/

/* Tables:
| CUSTOMERS   
| ROUTES      
| STOPS       
| TOHAVE      
| VEHICLES  
| TRIPS       
| SCHEDULES       
| RESERVATIONS
*/

-- Remove all existing data
SET SQL_SAFE_UPDATES = 0;
SET foreign_key_checks = 0;

DELETE FROM CUSTOMERS;
DELETE FROM RESERVATIONS;
DELETE FROM ROUTES;
DELETE FROM SCHEDULES;
DELETE FROM STOPS;
DELETE FROM TOHAVE;
DELETE FROM TRIPS;
DELETE FROM VEHICLES;

ALTER TABLE CUSTOMERS AUTO_INCREMENT = 1;
ALTER TABLE RESERVATIONS AUTO_INCREMENT = 1;
ALTER TABLE ROUTES AUTO_INCREMENT = 1;
ALTER TABLE SCHEDULES AUTO_INCREMENT = 1;
ALTER TABLE STOPS AUTO_INCREMENT = 1;
ALTER TABLE TOHAVE AUTO_INCREMENT = 1;
ALTER TABLE TRIPS AUTO_INCREMENT = 1;
ALTER TABLE VEHICLES AUTO_INCREMENT = 1;

SET foreign_key_checks = 1;
SET SQL_SAFE_UPDATES = 1;

-- Insert data into the CUSTOMERS table

INSERT INTO CUSTOMERS (CUSTOMERID, CUSTOMERLOGIN, CUSTOMERPASSWORD, CUSTOMERNAME, CUSTOMERSURNAME, CUSTOMERBIRTHDATE) 
VALUES 
(1, 'hello823', 'ab6c07692c75cf1b5659fc7b0f489188028eb8d6ededfab188dd5cfe6ce3f9a176d84ef07a46b100eda5ed07620812df', 'Romain', 'Pierre', '2002-01-08') /* Azerty7 */,
(2, 'em13', '36113c6f0bbdbae71a14b303e239a0fc2a8f6637563cdb4922588e0830d3a058f2614472bbe0c32231d299d01ae11a13', 'Enid', 'Muharemi', '2002-05-15') /* password */,
(3, 'jane_doe', '9de3688519487314bbd6e866bae0a3234756f6f998c21eb7974f488b34564bae9133f275d16d719884bde7e72406a00e', 'Jane', 'Doe', '1998-08-22');

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

DELIMITER //

DROP PROCEDURE IF EXISTS InsertTripsSampleData;

CREATE PROCEDURE InsertTripsSampleData()
BEGIN
    DECLARE trip_id1 INT DEFAULT 1;
    DECLARE trip_id2 INT DEFAULT 2;
    DECLARE trip_id3 INT DEFAULT 3;
    DECLARE trip_id4 INT DEFAULT 4;
    DECLARE trip_id5 INT DEFAULT 5;
    DECLARE trip_id6 INT DEFAULT 6;

    DECLARE i INT DEFAULT 0;

    WHILE i < 4380 DO
        INSERT INTO TRIPS (TRIPID, ROUTEID, VEHICLEID, TRIPMAINDIRECTION)
        VALUES
        (trip_id1, 1, 1, 1),
        (trip_id2, 1, 2, 0),
        (trip_id3, 2, 3, 1),
        (trip_id4, 2, 4, 0),
        (trip_id5, 3, 5, 1),
        (trip_id6, 3, 6, 0); 
        
        SET trip_id1 = trip_id1 + 6;
        SET trip_id2 = trip_id2 + 6;
        SET trip_id3 = trip_id3 + 6;
        SET trip_id4 = trip_id4 + 6;
        SET trip_id5 = trip_id5 + 6;
        SET trip_id6 = trip_id6 + 6;

        SET i = i + 1;
    END WHILE;
END //

DELIMITER ;

CALL InsertTripsSampleData();

-- Insert data into the SCHEDULES table

DELIMITER //

DROP PROCEDURE IF EXISTS InsertSchedulesSampleData;

CREATE PROCEDURE InsertSchedulesSampleData()
BEGIN
    DECLARE i INT DEFAULT 0;
    DECLARE j INT DEFAULT 0;

    DECLARE trip_id1 INT DEFAULT 1;
    DECLARE trip_id2 INT DEFAULT 2;
    DECLARE trip_id3 INT DEFAULT 3;
    DECLARE trip_id4 INT DEFAULT 4;
    DECLARE trip_id5 INT DEFAULT 5;
    DECLARE trip_id6 INT DEFAULT 6;

    DECLARE day_trip DATE DEFAULT CURDATE();

    DECLARE time_trip1 TIME DEFAULT '08:00:00';
    DECLARE time_trip2 TIME DEFAULT '08:00:00';
    DECLARE time_trip3 TIME DEFAULT '09:00:00';
    DECLARE time_trip4 TIME DEFAULT '09:00:00';
    DECLARE time_trip5 TIME DEFAULT '10:00:00';
    DECLARE time_trip6 TIME DEFAULT '10:00:00';
        
    WHILE i < 365 DO
        WHILE j < 12 DO

            INSERT INTO SCHEDULES (TRIPID, STOPID, SCHEDULETIME)
            VALUES
            (trip_id1, 6, CONCAT(day_trip, ' ', time_trip1)),
            (trip_id1, 5, CONCAT(day_trip, ' ', ADDTIME(time_trip1, '00:10:00'))),
            (trip_id1, 1, CONCAT(day_trip, ' ', ADDTIME(time_trip1, '00:30:00'))),
            (trip_id2, 1, CONCAT(day_trip, ' ', time_trip2)),
            (trip_id2, 5, CONCAT(day_trip, ' ', ADDTIME(time_trip2, '00:20:00'))),
            (trip_id2, 6, CONCAT(day_trip, ' ', ADDTIME(time_trip2, '00:30:00'))),
            (trip_id3, 4, CONCAT(day_trip, ' ', time_trip3)),
            (trip_id3, 1, CONCAT(day_trip, ' ', ADDTIME(time_trip3, '00:15:00'))),
            (trip_id4, 1, CONCAT(day_trip, ' ', time_trip4)),
            (trip_id4, 4, CONCAT(day_trip, ' ', ADDTIME(time_trip4, '00:15:00'))),
            (trip_id5, 3, CONCAT(day_trip, ' ', time_trip5)),
            (trip_id5, 2, CONCAT(day_trip, ' ', ADDTIME(time_trip5, '00:05:00'))),
            (trip_id5, 1, CONCAT(day_trip, ' ', ADDTIME(time_trip5, '00:20:00'))),
            (trip_id6, 1, CONCAT(day_trip, ' ', time_trip6)),
            (trip_id6, 2, CONCAT(day_trip, ' ', ADDTIME(time_trip6, '00:15:00'))),
            (trip_id6, 3, CONCAT(day_trip, ' ', ADDTIME(time_trip6, '00:20:00')));

            SET time_trip1 = ADDTIME(time_trip1, '01:00:00');
            SET time_trip2 = ADDTIME(time_trip2, '01:00:00');
            SET time_trip3 = ADDTIME(time_trip3, '01:00:00');
            SET time_trip4 = ADDTIME(time_trip4, '01:00:00');
            SET time_trip5 = ADDTIME(time_trip5, '01:00:00');
            SET time_trip6 = ADDTIME(time_trip6, '01:00:00');

            SET trip_id1 = trip_id1 + 6;
            SET trip_id2 = trip_id2 + 6;
            SET trip_id3 = trip_id3 + 6;
            SET trip_id4 = trip_id4 + 6;
            SET trip_id5 = trip_id5 + 6;
            SET trip_id6 = trip_id6 + 6;

            SET j = j + 1;
        END WHILE;
        SET j = 0;
        SET i = i + 1;
        SET day_trip = DATE_ADD(day_trip, INTERVAL 1 DAY);
        SET time_trip1 = '08:00:00';
        SET time_trip2 = '08:00:00';
        SET time_trip3 = '09:00:00';
        SET time_trip4 = '09:00:00';
        SET time_trip5 = '10:00:00';
        SET time_trip6 = '10:00:00';
    END WHILE;
END //

DELIMITER ;

CALL InsertSchedulesSampleData();

-- Insert data into the RESERVATIONS table

INSERT INTO RESERVATIONS (RESERVATIONID, CUSTOMERID, STOPID, TRIPID, RESERVATIONTIME, RESERVATIONPRICE)
VALUES 
(1, 1, 6, 1, CONCAT(DATE_ADD(CURDATE(), INTERVAL 30 DAY), ' 08:00:00'), 7.50),
(2, 2, 4, 3, CONCAT(DATE_ADD(CURDATE(), INTERVAL 25 DAY), ' 09:00:00'), 5.50),
(3, 3, 3, 5, CONCAT(DATE_ADD(CURDATE(), INTERVAL 60 DAY), ' 10:00:00'), 6.50);
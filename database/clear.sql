/*==============================================================*/
/* DBMS name:      MySQL 8.0                                    */
/* Created on:     17/02/2024 16:39:21                          */
/*==============================================================*/

-- Remove all existing data

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
/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     18/02/2024 12:58:42                          */
/*==============================================================*/


alter table CUSTOMERS 
   drop foreign key FK_CUSTOMER_SPONSOR_CUSTOMER;

alter table RESERVATIONS 
   drop foreign key FK_RESERVAT_RELATEDBY_STOPS;

alter table RESERVATIONS 
   drop foreign key FK_RESERVAT_RELATEDBY_TRIPS;

alter table RESERVATIONS 
   drop foreign key FK_RESERVAT_TORESERVE_CUSTOMER;

alter table SCHEDULES 
   drop foreign key FK_SCHEDULES_BEPLANNED_STOPS;

alter table SCHEDULES 
   drop foreign key FK_SCHEDULES_REFERTO_TRIPS;

alter table TOHAVE 
   drop foreign key FK_TOHAVE_TOHAVE_STOPS;

alter table TOHAVE 
   drop foreign key FK_TOHAVE_TOHAVE2_ROUTES;

alter table TRIPS 
   drop foreign key FK_TRIPS_BEPARTOF_ROUTES;

alter table TRIPS 
   drop foreign key FK_TRIPS_ISASSIGNE_VEHICLES;


alter table CUSTOMERS 
   drop foreign key FK_CUSTOMER_SPONSOR_CUSTOMER;

drop table if exists CUSTOMERS;


alter table RESERVATIONS 
   drop foreign key FK_RESERVAT_TORESERVE_CUSTOMER;

alter table RESERVATIONS 
   drop foreign key FK_RESERVAT_RELATEDBY_STOPS;

alter table RESERVATIONS 
   drop foreign key FK_RESERVAT_RELATEDBY_TRIPS;

drop table if exists RESERVATIONS;

drop table if exists ROUTES;


alter table SCHEDULES 
   drop foreign key FK_SCHEDULES_REFERTO_TRIPS;

alter table SCHEDULES 
   drop foreign key FK_SCHEDULES_BEPLANNED_STOPS;

drop table if exists SCHEDULES;

drop table if exists STOPS;


alter table TOHAVE 
   drop foreign key FK_TOHAVE_TOHAVE2_ROUTES;

alter table TOHAVE 
   drop foreign key FK_TOHAVE_TOHAVE_STOPS;

drop table if exists TOHAVE;


alter table TRIPS 
   drop foreign key FK_TRIPS_BEPARTOF_ROUTES;

alter table TRIPS 
   drop foreign key FK_TRIPS_ISASSIGNE_VEHICLES;

drop table if exists TRIPS;

drop table if exists VEHICLES;

/*==============================================================*/
/* Table: CUSTOMERS                                             */
/*==============================================================*/
create table CUSTOMERS
(
   CUSTOMERID           int not null auto_increment  comment '',
   SPONSOREDBYCUSTOMERID int  comment '',
   CUSTOMERLOGIN        varchar(20)  comment '',
   CUSTOMERPASSWORD     varchar(100)  comment '',
   CUSTOMERNAME         varchar(50)  comment '',
   CUSTOMERSURNAME      varchar(50)  comment '',
   CUSTOMERBIRTHDATE    date  comment '',
   primary key (CUSTOMERID),
   key AK_CUSTOMERSLOGINUNIQUE (CUSTOMERLOGIN)
);

/*==============================================================*/
/* Table: RESERVATIONS                                          */
/*==============================================================*/
create table RESERVATIONS
(
   RESERVATIONID        int not null auto_increment  comment '',
   CUSTOMERID           int  comment '',
   STOPID               int  comment '',
   TRIPID               int  comment '',
   RESERVATIONTIME      datetime  comment '',
   RESERVATIONPRICE     numeric(5,2)  comment '',
   SALETIME             datetime  comment '',
   primary key (RESERVATIONID)
);

/*==============================================================*/
/* Table: ROUTES                                                */
/*==============================================================*/
create table ROUTES
(
   ROUTEID              int not null auto_increment  comment '',
   ROUTENUMBER          int  comment '',
   ROUTECOLOR           varchar(15)  comment '',
   primary key (ROUTEID),
   key AK_ROUTESNUMBERUNIQUE (ROUTENUMBER)
);

/*==============================================================*/
/* Table: SCHEDULES                                              */
/*==============================================================*/
create table SCHEDULES
(
   SCHEDULEID           int not null auto_increment  comment '',
   TRIPID               int  comment '',
   STOPID               int  comment '',
   SCHEDULETIME         datetime  comment '',
   primary key (SCHEDULEID)
);

/*==============================================================*/
/* Table: STOPS                                                 */
/*==============================================================*/
create table STOPS
(
   STOPID               int not null auto_increment  comment '',
   STOPNAME             varchar(50)  comment '',
   STOPLOCATION         varchar(50)  comment '',
   STOPLATITUDE         decimal(9,6)  comment '',
   STOPLONGITUDE        decimal(9,6)  comment '',
   PRMACCESS            bool  comment '',
   primary key (STOPID)
);

/*==============================================================*/
/* Table: TOHAVE                                                */
/*==============================================================*/
create table TOHAVE
(
   STOPID               int not null  comment '',
   ROUTEID              int not null  comment '',
   STOPORDER            int  comment '',
   primary key (STOPID, ROUTEID),
   key AK_ROUTEIDSTOPIDSTOPORDERUNIQUE (STOPID, ROUTEID, STOPORDER)
);

/*==============================================================*/
/* Table: TRIPS                                                 */
/*==============================================================*/
create table TRIPS
(
   TRIPID               int not null auto_increment  comment '',
   ROUTEID              int  comment '',
   VEHICLEID            int  comment '',
   TRIPMAINDIRECTION    bool  comment '',
   primary key (TRIPID)
);

/*==============================================================*/
/* Table: VEHICLES                                              */
/*==============================================================*/
create table VEHICLES
(
   VEHICLEID            int not null auto_increment  comment '',
   VEHICLEMODEL         varchar(50)  comment '',
   VEHICLEBRAND         varchar(50)  comment '',
   VEHICLETYPE          varchar(20)  comment '',
   VEHICLELICENSE       varchar(20)  comment '',
   VEHICLECAPACITY      int  comment '',
   primary key (VEHICLEID),
   key AK_VEHICLESLICENSEUNIQUE (VEHICLELICENSE)
);

alter table CUSTOMERS add constraint FK_CUSTOMER_SPONSOR_CUSTOMER foreign key (SPONSOREDBYCUSTOMERID)
      references CUSTOMERS (CUSTOMERID) on delete restrict on update restrict;

alter table RESERVATIONS add constraint FK_RESERVAT_RELATEDBY_STOPS foreign key (STOPID)
      references STOPS (STOPID) on delete restrict on update restrict;

alter table RESERVATIONS add constraint FK_RESERVAT_RELATEDBY_TRIPS foreign key (TRIPID)
      references TRIPS (TRIPID) on delete restrict on update restrict;

alter table RESERVATIONS add constraint FK_RESERVAT_TORESERVE_CUSTOMER foreign key (CUSTOMERID)
      references CUSTOMERS (CUSTOMERID) on delete restrict on update restrict;

alter table SCHEDULES add constraint FK_SCHEDULES_BEPLANNED_STOPS foreign key (STOPID)
      references STOPS (STOPID) on delete restrict on update restrict;

alter table SCHEDULES add constraint FK_SCHEDULES_REFERTO_TRIPS foreign key (TRIPID)
      references TRIPS (TRIPID) on delete restrict on update restrict;

alter table TOHAVE add constraint FK_TOHAVE_TOHAVE_STOPS foreign key (STOPID)
      references STOPS (STOPID) on delete restrict on update restrict;

alter table TOHAVE add constraint FK_TOHAVE_TOHAVE2_ROUTES foreign key (ROUTEID)
      references ROUTES (ROUTEID) on delete restrict on update restrict;

alter table TRIPS add constraint FK_TRIPS_BEPARTOF_ROUTES foreign key (ROUTEID)
      references ROUTES (ROUTEID) on delete restrict on update restrict;

alter table TRIPS add constraint FK_TRIPS_ISASSIGNE_VEHICLES foreign key (VEHICLEID)
      references VEHICLES (VEHICLEID) on delete restrict on update restrict;


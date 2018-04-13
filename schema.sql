### Schema

DROP DATABASE IF EXISTS `out-reach-austin_db`;
CREATE DATABASE `out-reach-austin_db`;

USE `out-reach-austin_db`;

CREATE TABLE event_listing 
(
    id int NOT NULL AUTO_INCREMENT,
    event_title VARCHAR(50) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    start_time1 TIME NOT NULL,
    end_time1 TIME NOT NULL,
    start_time2 TIME,
    end_time2 TIME,
    start_time3 TIME,
    end_time3 TIME,
    is_full_day_event CHAR(1),
    is_recurring CHAR(1), 
    event_location VARCHAR(50) NOT NULL,
    event_description_long VARCHAR(500) NOT NULL,
    event_description_event_listingshort VARCHAR(250) NOT NULL,
    event_type VARCHAR(500) NOT NULL,
    registration_required TINYINT unsigned NOT NULL,
    event_link VARCHAR(50) NOT NULL,
    event_cost DECIMAL(13,2),
    event_organizer VARCHAR(50),
    created_by VARCHAR(10),
    created_date DATE, 
    image_link TEXT,
    parent_event_id int, 
    PRIMARY KEY (id)
 );


CREATE TABLE recurring_pattern
(
	event_id int,
    recurring_type_id int,
    separation_count int, 
    max_num_of_occurrences int,
    day_of_week int, 
    week_of_month int, 
    day_of_month int, 
    month_of_year int

);

CREATE TABLE recurring_type
(
	id int NOT NULL,
	recurring_type varchar(20)
);

CREATE TABLE event_instance_exception
(
	id int NOT NULL,
	event_id int, 
    is_rescheduled char(1),
    is_cancelled char(1),
    start_date date,
    end_date date,
    start_time time, 
    end_time time, 
    is_full_day_event char(1), 
    created_by varchar(10),
    created_date date
);

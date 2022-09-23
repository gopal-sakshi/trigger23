CREATE TABLE cron_table23 (
	id serial NOT NULL PRIMARY KEY,
	year integer,
    month integer,
    day integer,
    hours integer,
    minutes integer,
    type varchar
);
-----------------------------------------------------------------------------------------------------------------------------------
ALTER SEQUENCE tablename_columnname_seq RESTART WITH anynumber;
ALTER SEQUENCE cron_table23_id RESTART WITH 1001;

    -- CREATE SEQUENCE tablename_colname_seq
    --   INCREMENT 1
    --   MINVALUE 1
    --   MAXVALUE 9223372036854775807
    --   START 1 ---> here you can mention startup nummber as you need
    --   CACHE 1;

    -- CREATE TABLE tablename (
    --     colname integer NOT NULL DEFAULT nextval('tablename_colname_seq')
    -- );

    -- Ignore this for the moment... simple solution is to insert first element with certain id...
-----------------------------------------------------------------------------------------------------------------------------------
insert into cron_table23 
values 
(1001, 2022, 09, 23, 17, 15, 'testing_cron'),
(1002, 2022, 09, 24, 17, 15, 'testing_cron');

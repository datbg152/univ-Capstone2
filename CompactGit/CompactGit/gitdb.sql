drop database if exists gitdb;
create database if not exists gitdb;

use gitdb;

create table user (
    id varchar(20) not null,
    pw varchar(20) not null,
    nickname varchar(20) not null,
    primary key(id)
);

insert into user values("test", "test", "test user");
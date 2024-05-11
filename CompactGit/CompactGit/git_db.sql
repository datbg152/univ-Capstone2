drop database if exists git_db;
create database if not exists git_db;

use gitdb;

create table user (
    id varchar(100) not null,
    pw varchar(100) not null,
    nickname varchar(20) not null,
    email varchar(30) not null,
    primary key(id)
);

insert into user values("test", "n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=", "test user", "test@test.com");
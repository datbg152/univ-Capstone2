drop database if exists repo_db;
create database if not exists repo_db;

use repo_db;

create table repo (
    user_id varchar(100) not null,
    repo_name varchar(20) not null,
    description varchar(100) not null,
    is_public bool not null,
    primary key(user_id, repo_name)
);
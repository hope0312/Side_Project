/*�s�W�y�k�A�s�W�@��database �]�s�W�@�Ӹ�ƪ�A��ƪ�C_Id�ϥ�PK�A��L�����~�W�١A�ƶq*/
create database TestClient

use TestClient

create table TestShopping(
	C_Id INT PRIMARY KEY NOT NULL,
	Name varchar(50) NOT NULL,
	Quantity INT NOT NULL,
	Price INT NOT NULL
);

/*�U�誺�y�k���d�ߡB�s�W�B��s�B�R�����*/
use TestClient
select * from TestShopping

INSERT INTO TestShopping
values(1,'Light',20,5);
INSERT INTO TestShopping
values(2,'cookie',20,15);
INSERT INTO TestShopping
values(3,'BlackTea',40,35);

update TestShopping
set Quantity = 100
where C_Id = 2 

delete from TestShopping
where C_Id = 1


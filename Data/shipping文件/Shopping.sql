/*新增語法，新增一個database 也新增一個資料表，資料表中C_Id使用PK，其他為產品名稱，數量*/
create database TestClient

use TestClient

create table TestShopping(
	C_Id INT PRIMARY KEY NOT NULL,
	Name varchar(50) NOT NULL,
	Quantity INT NOT NULL,
	Price INT NOT NULL
);

/*下方的語法為查詢、新增、更新、刪除資料*/
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


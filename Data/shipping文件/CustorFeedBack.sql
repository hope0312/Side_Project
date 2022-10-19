/*新增語法，新增一個database 也新增一個資料表*/
create database TestClient

use TestClient

/* Name 姓名 E_mail E-Mail Detail 內容 Reply 回覆Y OR N*/
create table TestFeedback(
	Name varchar(50) NOT NULL,
	E_mail varchar(50) NOT NULL,
	Detail varchar(MAX) NOT NULL,
	Reply char(1) NOT NULL
);

select * from TestFeedback

INSERT INTO TestFeedback
VALUES('Peter','qwe085410@gmail.com','其實，人生的道路從來都不平坦，誰都會遭遇各種各樣的坎。要像劉翔那樣勇往直前，你就能飛躍一道又一道坎，你的人生就充滿燦爛和喜悅','N')
INSERT INTO TestFeedback
VALUES('Amy','amy0854@hotmail.com','讓那些孤獨的孩子和我們一樣茁壯成長吧，他們是祖國的花朵，是初升的太陽，祖國未來的宏圖也有屬於他們構造的一部分。','N')
INSERT INTO TestFeedback
VALUES('July','july_02915854743@yahoo.com.tw','母愛是一種無私的感情，母愛像溫暖的陽光，灑落在我們心田，雖然悄聲無息，但它讓一棵棵生命的幼苗感受到了雨後的溫暖。','N')
INSERT INTO TestFeedback
VALUES('Rockman','rockman@hot123.com.tw','田園中，秋風吹過，五穀飄香，那一片片莊稼，遠看，好似翻滾著錢層波浪，稻穀笑彎了腰，玉米了開了懷。田園中也挺熱鬧的。','N')
INSERT INTO TestFeedback
VALUES('Zero','black_zero8471152ray5285@yahoo.com.tw','秋天的稻田裡可熱鬧了！高粱紅著臉笑了，一陣微風吹過，高粱發出嘩嘩的響聲，好像是在歡迎秋姑娘呢！','N')


UPDATE TestFeedback
SET Reply = 'N'
WHERE Name = 'Maru' and E_mail = 'zry8594@gmail.com'

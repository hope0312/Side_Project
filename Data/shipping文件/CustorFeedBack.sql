/*�s�W�y�k�A�s�W�@��database �]�s�W�@�Ӹ�ƪ�*/
create database TestClient

use TestClient

/* Name �m�W E_mail E-Mail Detail ���e Reply �^��Y OR N*/
create table TestFeedback(
	Name varchar(50) NOT NULL,
	E_mail varchar(50) NOT NULL,
	Detail varchar(MAX) NOT NULL,
	Reply char(1) NOT NULL
);

select * from TestFeedback

INSERT INTO TestFeedback
VALUES('Peter','qwe085410@gmail.com','���A�H�ͪ��D���q�ӳ������Z�A�ֳ��|�D�J�U�ئU�˪����C�n���B�����˫i�����e�A�A�N�୸�D�@�D�S�@�D���A�A���H�ʹN�R������M�߮�','N')
INSERT INTO TestFeedback
VALUES('Amy','amy0854@hotmail.com','�����ǩt�W���Ĥl�M�ڭ̤@�˭_�������a�A�L�̬O���ꪺ�ᦷ�A�O��ɪ��Ӷ��A���ꥼ�Ӫ����Ϥ]���ݩ�L�̺c�y���@�����C','N')
INSERT INTO TestFeedback
VALUES('July','july_02915854743@yahoo.com.tw','���R�O�@�صL�p���P���A���R���ŷx�������A�x���b�ڭ̤ߥСA���M���n�L���A�������@�ʴʥͩR�����]�P����F�B�᪺�ŷx�C','N')
INSERT INTO TestFeedback
VALUES('Rockman','rockman@hot123.com.tw','�ж餤�A��j�L�A���\�ƭ��A���@�������[�A���ݡA�n��½�u�ۿ��h�i���A�_�\���s�F�y�A�ɦ̤F�}�F�h�C�ж餤�]�����x���C','N')
INSERT INTO TestFeedback
VALUES('Zero','black_zero8471152ray5285@yahoo.com.tw','��Ѫ��_�и̥i���x�F�I���d�����y���F�A�@�}�L���j�L�A���d�o�X�M�M���T�n�A�n���O�b�w���h�Q�O�I','N')


UPDATE TestFeedback
SET Reply = 'N'
WHERE Name = 'Maru' and E_mail = 'zry8594@gmail.com'

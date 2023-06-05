create database sealSolution;

use sealSolution;

create table usuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar(45),
tipo varchar(45),
nivel_acesso varchar(45),
email varchar(45),
senha varchar(45),
cpf char(11),
fkEmpresa int, 
	foreign key (fkEmpresa) references empresa(idEmpresa)
);

select * from usuario;

create table empresa(
idempresa int primary key auto_increment,
nome varchar(45),
cnpj char(14),
descricao varchar(45)
);

select * from empresa;

insert into empresa values 
	(null, 'a', '33333', 'Ñ');


create table caminhao (
	
	idCaminhao INT PRIMARY KEY auto_increment,
    fk_idEmpresa INT,
    marca VARCHAR(45),
    placa CHAR(7),
    tipoCaminhao VARCHAR(20),
    sensor varchar(45),
	FOREIGN KEY (fk_idEmpresa) REFERENCES empresa(idEmpresa)
);

insert into caminhao values
	(null, 1, 'wol', 'bbb3333', 'com roda', 'dht11');


create table sensor(

	idSensor INT PRIMARY KEY AUTO_INCREMENT,
    fk_idEmpresa INT,
    tipo varchar(45),
    sensor varchar(45),
    FOREIGN KEY (fk_idEmpresa) REFERENCES empresa(idEmpresa)
);

insert into sensor values
	(null, 1, 'temperatura e umidade', 'dht11'); 
    
select * from sensor;

truncate table sensor;

create table dadossensor(
	dtHora DATETIME PRIMARY KEY,
    fk_idSensor INT,
    temperatura DOUBLE,
    umidade DOUBLE,
    FOREIGN KEY (fk_idSensor) REFERENCES sensor(idSensor)
);

INSERT INTO dadossensor values
	('2023-03-10 10:10:02', 22, '9', '85');

create table motorista(

	idMotorista INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    cpf VARCHAR(11),
    dtNascto DATE,
    cnh VARCHAR(12)
);

insert into motorista values
	(null, 'carl', '9999999', '2022-01-01', '000000000');

create table viagem(

	idViagem INT AUTO_INCREMENT,
	fk_caminhao INT,
    fk_motorista INT,
    fk_remessa INT,       
    dtViagem DATE,
    FOREIGN KEY (fk_caminhao) REFERENCES caminhao(idCaminhao),
    FOREIGN KEY (fk_motorista) REFERENCES motorista(idMotorista),
    CONSTRAINT chkComposta PRIMARY KEY (idViagem, fk_caminhao, fk_motorista)
);


insert into viagem values
	(null, 1, 1, 1, '2022-01-01');
    
create table remessa(
	idRemessa INT PRIMARY KEY AUTO_INCREMENT,
    qtd_tomate INT,
    valor DECIMAL(7,2));
    
    insert into remessa values
		(null, 100, '2.5');
    
insert into viagem values
	(null, 2, 2, '2023-06-05', 600, 3);

-- Cadastro userPomodoro
create user 'userPomodoro'@'localhost' identified by '123';
grant all privileges on sealSolution.* to 'userPomodoro'@'localhost';
flush privileges;
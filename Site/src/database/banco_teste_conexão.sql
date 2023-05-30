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

create table empresa(
idempresa int primary key auto_increment,
nome varchar(45),
cnpj char(14),
descricao varchar(45)
);


create table caminhao (
	
	idCaminhao INT PRIMARY KEY auto_increment,
    fk_idEmpresa INT,
    marca VARCHAR(45),
    placa CHAR(7),
    tipoCaminhao VARCHAR(20),
    sensor varchar(45),
	FOREIGN KEY (fk_idEmpresa) REFERENCES empresa(idEmpresa)
);


create table sensor(

	idSensor INT PRIMARY KEY AUTO_INCREMENT,
    fk_idEmpresa INT,
    tipo varchar(45),
    sensor varchar(45),
    FOREIGN KEY (fk_idEmpresa) REFERENCES empresa(idEmpresa)
);

create table dadossensor(

	dtHora DATETIME PRIMARY KEY,
    fk_idSensor INT,
    temperatura DOUBLE,
    umidade DOUBLE,
    FOREIGN KEY (fk_idSensor) REFERENCES sensor(idSensor)
);

create table motorista(

	idMotorista INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    cpf VARCHAR(11),
    idade DATE,
    cnh VARCHAR(12)
);

create table viagem(

	idViagem INT AUTO_INCREMENT,
	fk_caminhao INT,
    fk_motorista INT,
    data_viagem DATE,
    qtd_tomate INT,
    FOREIGN KEY (fk_caminhao) REFERENCES caminhao(idCaminhao),
    FOREIGN KEY (fk_motorista) REFERENCES motorista(idMotorista),
    CONSTRAINT chkComposta PRIMARY KEY (idViagem, fk_caminhao, fk_motorista)
);

-- Cadastro userPomodoro
create user 'userPomodoro'@'localhost' identified by '123';
grant all privileges on sealSolution.* to 'userPomodoro'@'localhost';
flush privileges;
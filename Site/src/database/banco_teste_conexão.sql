USE sealsolutions;

CREATE TABLE usuario (
id INT PRIMARY KEY auto_increment,
nome VARCHAR(45),
email VARCHAR(45),
cpf char(20),
senha VARCHAR(45),
nivel_acesso CHAR(6)
);

CREATE TABLE empresa (
idEmpresa INT PRIMARY KEY auto_increment,
nomeEmpresa VARCHAR(45),
cnpj char(25),
descricao VARCHAR(300),
cep varchar(25),
rua VARCHAR(45),
bairro VARCHAR(45),
cidade VARCHAR(45),
uf CHAR(2),
numero INT,
complemento VARCHAR(200)
);

DROP TABLE usuario;
DROP TABLE empresa;
SELECT * FROM usuario;
SELECT * FROM empresa;

create user 'userPomodoro'@'localhost' identified by '123';
grant all privileges on sealSolutions.* to 'userPomodoro'@'localhost';
var database = require("../database/config")
var DadosEmail = null
var DadosCnpj = null
var emailDono = null


function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrar(nome, email, cpf, senha) {
    emailDono = email
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, cpf);
    var instrucao = `
    INSERT INTO usuario (nomeUsuario, email, cpf, senha) VALUES ('${nome}', '${email}', '${cpf}' , '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar2(nomeEmpresa, cnpj, desc) {
    DadosCnpj = cnpj
    DadosEmail = nomeEmpresa
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente.");

    var instrucao2 = `
    INSERT INTO empresa (nome, cnpj, descricao) VALUES ('${nomeEmpresa}', '${cnpj}', '${desc}');
    `;


    var comp = `SET @company = (select idEmpresa from empresa where nome = 'Rick' and cnpj = '123');`
    database.executar(comp)
    var ownertoComp = `SET @ownerToCompany = (select idUsuario from usuario order by idUsuario desc limit 1);`
    database.executar(ownertoComp)
    var donoComEmp = `
    update sealsolution.usuario set fkEmpresa = @company where idUsuario = @ownerToCompany;
    `

    console.log("Executando a instrução SQL: \n" + instrucao2);
    
    database.executar(instrucao2)
    return  database.executar(donoComEmp);
}
function Funcionario(nomeFunc, funcaoFunc, nivelAcessoFunc, emailFunc, senhaFunc, cpfFunc) {
    var instrucao = `
    INSERT INTO usuario (nomeUsuario, tipo, nivel_acesso, email, senha, cpf) VALUES ('${nomeFunc}', '${funcaoFunc}', '${nivelAcessoFunc}' ,'${emailFunc}', '${senhaFunc}', '${cpfFunc}');`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    console.log(`EMail : ${DadosEmail} && cnpj: ${DadosCnpj}`)
    
    var linkFuncComSuaEmpresa = `
    update usuario set fkEmpresa = (select idEmpresa from empresa where nome = '${DadosEmail}' and cnpj = '${DadosCnpj}') where idUsuario = 1;
    `;

    return database.executar(linkFuncComSuaEmpresa) , database.executar(instrucao);
}



module.exports = {
    entrar,
    cadastrar,
    cadastrar2,
    listar,
    Funcionario
};




var database = require("../database/config")

function cadastrar(placa, marca, tipo, sensor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");

    var instrucao = `
    INSERT INTO caminhao (marca, placa, tipoCaminhao, sensor) VALUES ('${marca}', '${placa}', '${tipo}' , '${sensor}');`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function viagem(data, qtdTomate){
    var instrucao = 
    `
    insert into viagem values
        (null, fk_caminhao, fk_motorista, ${data}, ${qtdTomate})
    `
    console.log(instrucao)
    return database.executar(instrucao)
}

function motorista(nome, cpf, dtNascto ,cnh){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = 
    `
    insert into motorista (nome, cpf , dtNascto ,cnh)  values
        ('${nome}', '${cpf}', '${dtNascto}','${cnh}');
    `
    console.log(instrucao)
    
    return database.executar(instrucao)
} 
module.exports = {
    cadastrar, 
    viagem,
    motorista,
}
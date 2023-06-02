var database = require("../database/config");

function cadastrar(placa, marca, tipo, sensor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");

    var instrucao = `
    INSERT INTO caminhao (marca, placa, tipoCaminhao, sensor) VALUES ('${marca}', '${placa}', '${tipo}' , '${sensor}');`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    database.executar(instrucao)
    setTimeout(()=>
    caminhaoComComp(), 2000);
    return  database.executar('select * from caminhao')


}
function caminhaoComComp() {
    return new Promise(() => {
        database.executar(`
        SELECT idCaminhao FROM caminhao ORDER BY idCaminhao DESC LIMIT 1;
              `)
            .then((rows) => {
                const idCaminhao = rows[0].idCaminhao;
                return database.executar(`
                        update caminhao set fk_idEmpresa = (
                            select idEmpresa from empresa join usuario
                        on empresa.idEmpresa = usuario.fkEmpresa
                            where email ='${require("./usuarioModel").exportFkEmpresa()}'
                        ) where idCaminhao = ${idCaminhao};
                `);
            })
        // Executar outra consulta usando o idAtual
    }
    )
}

function viagem(data, qtdTomate) {
    var instrucao =
        `
    insert into viagem values
        (null, fk_caminhao, fk_motorista, ${data}, ${qtdTomate})
    `
    console.log(instrucao)
    return database.executar(instrucao)
}

function motorista(nome, cpf, dtNascto, cnh) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao =
        `
    insert into motorista (nome, cpf , dtNascto ,cnh)  values
        ('${nome}', '${cpf}', '${dtNascto}','${cnh}');
    `
    console.log(instrucao)

    //    console.log(`AQUI |+>-<+| ${fkEmpresa.exportFkEmpresa()}`) 
    return database.executar(instrucao)
}

module.exports = {
    cadastrar,
    viagem,
    motorista,
}
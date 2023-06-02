var caminhaoModel = require("../models/caminhaoModel");

function cadastrar(req, res){
    var marca = req.body.marcaServer;
    var placa = req.body.placaServer;
    var tipo = req.body.tipoCaminhaoServer;
    var sensor = req.body.sensorServer;

    if(marca == undefined){
        res.status(400).send("Sua marca está undefined!");
    }else if(placa == undefined){
        res.status(400).send("Sua placa está undefined!");
    }else if(tipo == undefined){
        res.status(400).send("Seu tipo Caminhão está undefined!");
    }else if (sensor == undefined){
        res.status(400).send("Seu tipo sensor está undefined!");
    }else{
        caminhaoModel.cadastrar(placa, marca, tipo, sensor)
            .then(
                function(resultado){
                    res.json(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function viagem(req, res){
    var data = req.body.dataServer;
    var qtdTomate = req.body.qtdTomateServer;

    if(data == undefined){
        res.status(400).send("Sua data está undefined!");
    }else if(qtdTomate == undefined){
        res.status(400).send("Sua marca está undefined!");
    }else{
        caminhaoModel.viagem(data, qtdTomate)
        .then(
            function(resultado){
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro da viagem! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}
function motorista(req, res){
    var nome = req.body.nomeServer;
    var cpf = req.body.cpfServer;
    var dtNascto = req.body.dtNasctoServer;
    var cnh = req.body.cnhServer;

    if(nome == undefined){
        res.status(400).send("Seu nome está undefined")
    }else if(cpf == undefined){
        res.status(400).send("Seu cpf está undefined")
    }else if(dtNascto == undefined){
        res.status(400).send("Sua data de nascimento está undefined");
    }else if(cnh == undefined){
        res.status(400).send("Sua cnh está undefined");
    }else{
        caminhaoModel.motorista(nome, cpf, dtNascto, cnh)
            .then(
                function (resultado){
                    res.json(resultado)
                }
            ).catch(function (error){
                res.json(error)
                console.log(error.sqlMessage)
                res.status(500).json(error.sqlMessage);
            });
    }
}

function plotar_caminhao(req, res) {
    caminhaoModel.plotar_caminhao()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrar,
    viagem,
    motorista,
    plotar_caminhao
}
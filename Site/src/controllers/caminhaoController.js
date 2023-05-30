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

module.exports = {
    cadastrar,
    viagem
}
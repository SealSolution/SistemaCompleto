var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");


router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrar2", function (req, res) {
    usuarioController.cadastrar2(req, res);
})

router.post("/funcionario", function (req, res) {
    usuarioController.Funcionario(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;
var express = require("express");
var router = express.Router();
var caminhaoController = require("../controllers/caminhaoController")

router.post("/cadastrar", function (req, res) {
    caminhaoController.cadastrar(req, res);
});
router.post("/viagem", function (req, res) {
    caminhaoController.cadastrar(req, res);
});
router.post("/motorista", function(req, res){
    caminhaoController.motorista(req, res);
});

module.exports = router;
var express = require("express");
var router = express.Router();
var caminhaoController = require("../controllers/caminhaoController")

/* mostra dados do caminhao*/
router.get("/plotar_caminhao", function (req, res) {
    caminhaoController.plotar_caminhao(req, res);
});
router.get("/plotar_dadoscaminhao", function (req, res) {
    caminhaoController.plotar_dadoscaminhao(req, res);
});
router.get("/plotar_motorista", function (req, res) {
    caminhaoController.plotar_motorista(req, res);
});
router.get("/plotar_remessa", function (req, res) {
    caminhaoController.plotar_remessa(req, res);
});



router.post("/cadastrar", function (req, res) {
    caminhaoController.cadastrar(req, res);
});
router.post("/viagem", function (req, res) {
    caminhaoController.viagem(req, res);
});
router.post("/motorista", function(req, res){
    caminhaoController.motorista(req, res);
});

module.exports = router;
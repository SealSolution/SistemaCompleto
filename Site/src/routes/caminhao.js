var express = require("express");
var router = express.Router();
var caminhaoController = require("../controllers/caminhaoController")

router.post("/cadastrar", function (req, res) {
    caminhaoController.cadastrar(req, res);
});

module.exports = router;
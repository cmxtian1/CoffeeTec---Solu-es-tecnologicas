var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrar_func", function (req, res) {
    usuarioController.cadastrar_func(req, res);
})

router.post("/func_login", function (req, res) {
    usuarioController.func_login(req, res);
})

router.post("/empresa_login", function (req, res) {
    usuarioController.empresa_login(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;
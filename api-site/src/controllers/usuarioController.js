var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
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

function entrar(req, res) {
    var email = req.body.email;
    var senha = req.body.senha;
    var idempresa = req.body.idempresa;



    console.log(email, senha, idempresa)

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }



}

function cadastrar(req, res) {
    var email = req.body.email;
    var cnpj = req.body.cnpj;
    var empresa = req.body.empresa;
    var repre = req.body.representante;
    var tel = req.body.telefone;
    var senha = req.body.senha;
    var idempresa = req.body.idempresa;

    usuarioModel.cadastrar(cnpj, empresa, tel, senha, email, repre, idempresa)
        .then(
            function (resultado) {
                console.log(resultado);
                res.json(resultado);
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

function empresa_login(req,res) {
    var email = req.body.email;
    var senha = req.body.senha;
    var idempresa = req.body.idempresa;

    usuarioModel.empresa_login(senha, email, idempresa)
        .then(
            function (resultado) {
                res.json(resultado);
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


function cadastrar_func(req, res) {
    var nome = req.body.nome;
    var idempresa = req.body.idempresa;
    






    usuarioModel.cadastrar_func(nome,idempresa )
        .then(
            function (resultado) {
                res.json(resultado);
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


function func_login(req, res) {
    var email = req.body.email;
    var senha = req.body.senha;
    var idfunc = req.body.idfunc;
    var idempresa = req.body.idempresa;





    usuarioModel.func_login(senha, email, idfunc, idempresa)
        .then(
            function (resultado) {
                res.json(resultado);
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

module.exports = {
    entrar,
    cadastrar,
    cadastrar_func,
    listar,
    testar,
    func_login,
    empresa_login
}

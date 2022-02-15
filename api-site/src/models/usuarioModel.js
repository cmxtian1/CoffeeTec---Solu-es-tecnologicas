var database = require("../database/config")

function listar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT * FROM login join empresa on fkempresa = idempresa  join funcionario on fkfunc=idfunc WHERE email = '${email}' AND senha = SHA2('${senha}',224);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
    SELECT * FROM login join empresa on fkempresa = idempresa  join funcionario on fkfunc=idfunc WHERE email = '${email}' AND senha = SHA2('${senha}',224);
`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function cadastrar(cnpj, empresa, tel, senha, email, representante ) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", cnpj, empresa, tel, senha, email, representante);
    var instrucao = `
    insert into Empresa (Cnpj, Nome, Telefone, Responsavel) values ('${cnpj}','${empresa}', '${tel}','${representante}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function empresa_login(senha, email, idempresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function empresa_login():" , senha, email, idempresa);
    var instrucao = `
    insert into login ( senha, Email, fkempresa) values (SHA2('${senha}',224), '${email}', '${idempresa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// insert into login ( senha, Email) values (SHA2('${senha}',224), '${email}');

function cadastrar_func(nome, idempresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_func():", nome, idempresa);
    var instrucao = `
    insert into funcionario ( nomeFunc, fkempresa) values ( '${nome}', '${idempresa}' );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function func_login(senha, email, idfunc, idempresa ) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function Func_():", senha, email,);
    var instrucao = `
    insert into login ( senha, Email, fkfunc, fkempresa ) values ( SHA2('${senha}',224), '${email}', '${idfunc}', '${idempresa}' )
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    cadastrar_func,
    listar,
    empresa_login,
    func_login,
};
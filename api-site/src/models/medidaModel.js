var database = require("../database/config");

function buscarUltimasMedidas(idestufa, limite_linhas) {
    instrucaoSql = `select 
                        Temperatura, 
                        Umidade, 
                        dtHora (momento,'%H:%i:%s') as momento_grafico
                    from dados
                    where fkestufa = ${idestufa}
                    order by idDado desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idestufa) {
    instrucaoSql = `select 
                        temperatura, 
                        umidade, 
                        dtHora(momento,'%H:%i:%s') as momento_grafico, 
                        fkestufa 
                        from dados where fkestufa = ${idestufa} 
                    order by idDados desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
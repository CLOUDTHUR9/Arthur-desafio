var teclado = require("prompt-sync")();
function validarData(dia, mes, ano) {
    var data = new Date(ano, mes - 1, dia); // O mês no Date começa de 0 (janeiro) até 11 (dezembro)
    // Verifica se a data criada é válida
    if (data.getDate() === dia &&
        data.getMonth() === mes - 1 &&
        data.getFullYear() === ano) {
        return data;
    }
    else {
        return null; // Retorna null se a data for inválida
    }
}
// Exemplo de uso
var dia = parseFloat(teclado("digite o dia: "));
var mes = parseFloat(teclado("digite o mes: "));
var ano = parseFloat(teclado("digite o ano: "));
var dataValida = validarData(dia, mes, ano);
if (dataValida !== null) {
    console.log(dataValida); // Saída: 2024-04-30T21:00:00.000Z (porque abril tem 30 dias)
}
else {
    console.log("Data inválida");
}

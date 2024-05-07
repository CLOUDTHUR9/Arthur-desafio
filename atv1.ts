/*Crie uma função que ao receber o dia, mês e ano verifica se está correta
retornando a data completa, caso não seja possível pense em uma solução (acredito que é possível),
utilizar a classe/objeto Date() do typescript para validação dos dados
Nome: Arthur Henrique Pereira Martins
*/
 
const teclado = require (`prompt-sync`)();

const dataAtual = new Date();
const diaAtual = dataAtual.getDate();
const mesAtual = dataAtual.getMonth() + 1; 
const anoAtual = dataAtual.getFullYear();

inicio();

function inicio (): void{
    console.log(`-----Respondas as perguntas a seguir para descobrir a data de hoje-----`);
    console.log(`-----------------Use somente números para responder--------------------`);
    let data: number = parseInt(teclado(`Digite o dia de hoje: `));
    let mes: number = parseInt(teclado(`Digite o mês: `));
    let ano: number = parseInt(teclado(`Digite o ano: `));
    dataCompleta(data,mes,ano);
}

function dataCompleta (data: number, mes: number, ano: number): void{
    if (data == diaAtual && mes == mesAtual && ano == anoAtual){
        console.log(`A data completa de hoje ${data}/${mes}/${ano}`);
    }
    else{
        console.log(`Suas respostas não são compatíveis com a data atual! Algo deu errado!!`)
        console.log(`A data correta de hoje ${diaAtual}/${mesAtual}/${anoAtual}`);
    }  
}
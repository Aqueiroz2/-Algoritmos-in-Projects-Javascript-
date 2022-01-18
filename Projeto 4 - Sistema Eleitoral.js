/*A ideia deste projeto é criar um programa que simule uma votação com todo o conteúdo visto no módulo até 
este momento. O programa tem que:
ok - Receber votos até que o usuário diga que não tem mais ninguém para votar; (1,0 ponto)
ok - Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional"  ou "Obrigatório"; (2,0 pontos)
ok - Ter uma função chamada votacao(autorizacao, voto) que valida  e contabiliza o voto (número entre 1 e 5) ou retorna 
a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado; (2,0 pontos) 
ok - Contabilizar os votos de acordo com os significados (3,0 pontos):
1 = Candidato 1
2 = Candidato 2
3 = Candidato 3
4 = Voto Nulo`
5 = Voto em Branco
Ter uma função chamada exibirResultados() que deve mostrar: (2,0 pontos)
ok - O total de votos para cada candidato 
ok - O total de votos nulos
ok - O total de votos em branco
ok - Qual candidato venceu a votação
 */

const prompt = require('prompt-sync')();
let nasc = 0;
function dados(){
    console.log();
    nasc = +prompt('Digite o ano de nascimento: ');
        while (nasc > 2021){
            console.log('Digite um ano válido.')
            dados();
        };
    autorizaVoto(nasc);
    console.log();
     cont = prompt('Tem mais pessoas para votar? ').toLocaleLowerCase();    
        
};

function autorizaVoto(anoNascimento){
    let voto = 2021 - nasc;    
    if (voto < 16){
        console.log();
        console.log(`Você tem ${voto} anos. Voto Negado.`);
        return 'Negado';
    } else if (voto >= 16 && voto < 18){
        console.log();
        console.log(`Você tem ${voto} anos. Seu voto é opcional, você decide se quer votar ou não.`);
        let menor = prompt('Quer votar?').toLowerCase();
            if (menor == 's') {

                votacao();
            }; 
        nasc = voto;
        return 'Opcional';
    } else if (voto >= 18 && voto < 65){
        console.log();
        console.log(`Você tem ${voto} anos. Seu voto é obrigatório. Escolha um candidato.`);
        nasc = voto;
        votacao();
        return 'Obrigatório';
    } else if (voto >= 65 && voto < 100){
        console.log();
        console.log (`Você tem ${voto} anos. Você passou da idade obrigatória para voto. Seu voto é opcional.`);
        let menor = prompt('Quer votar?').toLowerCase();
            if (menor == 's') {
                votacao();
            }; 
        nasc = voto;
        return 'Opcional';
    } else {
        console.log();
        console.log('ERRO!!!');
        
    };
};

const candi1 = {nome: 'Candidato 1', cand: 0};
const candi2 = {nome: 'Candidato 2', cand: 0};
const candi3 = {nome: 'Candidato 3', cand: 0};
const nulo = {nome: 'Nulo', cand: 0};
const brc = {nome: 'Em Branco', cand: 0};

let totalVotos = 0;
function votacao(){
    let option = 0;

    console.log();
   
    console.log('CADIDATO 1 - Opção 1.');
    console.log('CADIDATO 2 - Opção 2.');
    console.log('CADIDATO 3 - Opção 3.');
    console.log('NULO - Opção 4.');
    console.log('EM BRANCO - Opção 5.');
    console.log();
    option = parseInt(prompt('Digite o número do seu candidato: '));
        if (option == 1){
            candi1.cand++;
            totalVotos++;
       } else if (option == 2) {
            candi2.cand++;
            totalVotos++;
        } else if (option == 3) {
            candi3.cand++;
            totalVotos++;
        } else if (option == 4) {
            nulo.cand++;
            totalVotos++;
        } else if (option == 5) {
            brc.cand++;
            totalVotos++;
        } else {
            console.log();
            console.log('Você não pode votar com essa opção.');
        };
};

function exibirResultados(){
    let total = [];
    console.log();
    console.log(`O candidato 1 recebeu ${candi1.cand} votos.`);
    console.log();
    console.log(`O candidato 2 recebeu ${candi2.cand} votos.`);
    console.log();
    console.log(`O candidato 3 recebeu ${candi3.cand} votos.`);
    console.log();
    console.log(`Tiveram ${nulo.cand} votos nulos.`);
    console.log();
    console.log(`Tiveram ${brc.cand} votos em branco.`);
    console.log();
    console.log(`Foram ${totalVotos} votos validados.`);
    total.push(candi1);
    total.push(candi2);
    total.push(candi3);
    total.push(nulo);
    total.push(brc);

    total.sort(function(a,b) {
        if (a.cand > b.cand){
            return -1 
        }; 
        if(a.cand < b.cand) {
            return 1
        };
        return 0;
    });
    console.log();
    console.log('O resultado da votação foi: ');
    console.log(total);
    console.log();
    console.log(`E o vencedor da eleição foi ${total[0].nome} com ${total[0].cand} votos.`);
};

console.log('VOTAÇÃO');
console.log();
console.log(' Responda apenas com S para (sim) ou N para (não).');
console.log();

let cont = prompt('Tem pessoas para votar? ').toLowerCase();

    while (cont == 's'){
        dados();      
    };

exibirResultados();

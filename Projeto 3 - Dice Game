/* O programa tem que:

• Perguntar quantas rodadas você quer fazer; 
• Perguntar quantos jogadores vão jogar; 
• Criar um objeto pra cada jogador com nome e número tirado; 
• Guarda todos os objetos em uma lista; 
• Ordenar esses objetos, sabendo que o vencedor tirou o maior número
no dado. 
• Mostrar no final qual jogador ganhou mais rodadas e foi o grande
campeão. */

const prompt = require('prompt-sync')();

var rodadas = +prompt("Quantas rodadas deseja jogar?");
var qtdjogadores = +prompt("Haverá quantos jogadores?");
var lista = [];

console.log(` Vc escolheu ${rodadas} rodadas`);
console.log(` A quantidade é de ${qtdjogadores} jogadores `);

for (let x = 1; x <= rodadas; x++){

    for (let i = 0; i < qtdjogadores; i++){

        let jogador = {};
            jogador.nome = prompt("Qual o nome do jogador?: ");
            jogador.number = Math.floor(Math.random() * 6 +1);
            lista.push(jogador);
            console.log(lista);
        };
};

var jogadores = lista.sort(function(a, b){
    return b.number - a.number;
});

console.log(jogadores);
console.log(`A pessoa ${lista[0].nome} é a pessoa vencedora`);

/* Crie um programa que jogue pedra, papel
e tesoura (Jokenpô) com você.

O programa tem que:

Permitir que eu decida quantas rodadas iremos fazer;
Ler a minha escolha (Pedra, papel ou tesoura);
Decidir de forma aleatória a decisão do computador;
Mostrar quantas rodadas cada jogador ganhou;
Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada
um (computador e jogador);
Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de
quantidade de rodadas, se não finalize o programa. */


const prompt = require('prompt-sync')();

var name = prompt('Bem vindo usuário, informe seu nickname: ');
console.log(`Olá ${name}, bem vindo ao JokenPo`);

jokenpo();
function jokenpo(){
let count = +prompt('Quantas vezes você quer jogar? ');

if (!isNaN(count)) {
console.log(`Ok, então vamos jogar ${count} vezes.`);

    let totalUser = 0;
    let totalPc = 0;

    console.log(name+' = '+totalUser);
    console.log('Computador = '+totalPc);

    for (i=0;i<count;i++){

        let jogador = prompt('Escolha pedra, tesoura ou papel: ');
        if(jogador === 'pedra'){
            console.log(`Você escolheu ${jogador}.`);
        } else if(jogador === 'tesoura'){
            console.log(`Você escolheu ${jogador}.`);
        } else if(jogador === 'papel'){
            console.log(`Você escolheu ${jogador}.`);
        };

        let computer = Math.floor(Math.random() * 4 + 1);

        if (computer === 1){
            computer = 'pedra';
            console.log(`O computador escolheu ${computer}.`);
        } else if (computer === 2){
            computer = 'tesoura';
            console.log(`O computador escolheu ${computer}.`);
        } else if (computer === 3) {
            computer = 'papel';
            console.log(`O computador escolheu ${computer}.`);
        } else {
            computer = 'W.O.';
            console.log('O computador desistiu, você venceu.')
        };

        if (jogador === 'pedra' && computer === 'pedra') {
            console.log('Empatou, um ponto para cada!');
            totalUser ++;
            totalPc ++;
            console.log(name+' = '+totalUser);
            console.log('Computador = '+totalPc);
        
        } else if (jogador === 'pedra' && computer === 'papel') {
            console.log('Computador WINS. Ponto para ele.');
            totalPc ++;
            console.log(name+' = '+totalUser);
            console.log('Computador = '+totalPc);

        } else if (jogador === 'pedra' && computer === 'tesoura') {
            console.log('Jogador WINS. Ponto para ele.');
            totalUser ++;
            console.log(name+' = '+totalUser);
            console.log('Computador = '+totalPc);

        } else if (jogador === 'papel' && computer === 'pedra') {
            console.log('Jogador WINS. Ponto para ele.');
            totalUser ++;
            console.log(name+' = '+totalUser);
            console.log('Computador = '+totalPc);

        } else if (jogador === 'papel' && computer === 'papel') {
            console.log('Empatou, um ponto para cada!');
            totalUser ++;
            totalPc++;
            console.log(name+' = '+totalUser);
            console.log('Computador = '+totalPc);

        } else if (jogador === 'papel' && computer === 'tesoura') {
            console.log('Computador WINS. Ponto para ele.');
            totalPc ++;
            console.log(name+' = '+totalUser);
            console.log('Computador = '+totalPc);

        } else if (jogador === 'tesoura' && computer === 'pedra'){
            console.log('Computador WINS. Ponto para ele.');
            totalPc ++;
            console.log(name+' = '+totalUser);
            console.log('Computador = '+totalPc);

        } else if (jogador === 'tesoura' && computer === 'papel'){
            console.log('Jogador WINS. Ponto para ele.');
            totalUser ++;
            console.log(name+' = '+totalUser);
            console.log('Computador = '+totalPc);

        } else if (jogador ==='tesoura' && computer ==='tesoura') {
            console.log('Empatou, um ponto para cada!');
            totalUser ++;
            totalPc ++;
            console.log(name+' = '+totalUser);
            console.log('Computador = '+totalPc);

        } else if (computer === 'W.O.'){
            totalUser ++;
            console.log(name+' = '+totalUser);
            console.log('Computador = '+totalPc);

        } else {
            console.log('Jogue direito. Perdeu um ponto.')
            totalPc ++;
            console.log(name+' = '+totalUser);
            console.log('Computador = '+totalPc);

        };
       
    };
    if (totalUser > totalPc){
        console.log(`Você venceu ${totalUser} vezes e perdeu ${totalPc} vezes.`);
        console.log('CAMPEÃO!!!');
 
    } else if (totalUser < totalPc) {
        console.log(`Você venceu ${totalUser} vezes e perdeu ${totalPc} vezes.`);
        console.log('PERDEDOR!!!');

    } else {
        console.log('EMPATE!!!')

    };

    let repeat = prompt('Quer jogar novamente? Sim ou não.');
        if (repeat == 'sim' || repeat == 'Sim' || repeat == 'S' || repeat == 's') {
            jokenpo();

        } else {
            console.log('Obrigado por jogar.');
        };
} else {
    console.log('Erro retorne ao jogo imediatamente!');
};
};
 

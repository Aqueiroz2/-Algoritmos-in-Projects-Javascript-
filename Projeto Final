/* Crie um jogo de ficção interativa que simule a rotina diária de um personagem. Você pode escolher entre rotinas matinais, 
rotinas de trabalho, rotinas de estudos, entre outras. A ideia do jogo é que o jogador faça as escolhas para o seu personagem 
e o conduza durante o seu dia. Cada escolha irá gerar uma consequência diferente para o seu personagem. O jogo acaba quando o 
dia do seu personagem acabar. Você será responsável por determinar o inicio e término do dia do seu personagem, além de avançar
 o tempo a cada escolha.É obrigatório o uso de orientação a objetos e herança, funções, laços (while/for) e condicionais 
 (if, elif, else), ou seja todo o conteúdo visto durante o módulo. Use toda sua criatividade para desenvolver uma história
  interessante e seja bem específico com relação as escolhas que precisam ser feitas, para que seu jogo seja divertido!
*/

const prompt = require('prompt-sync')();

class Pessoa{

    constructor(nome){
      this.nome = '';
 
    };

    Levantar(){
      sleep(2000);
      console.log('Você acordou bem esta manhã, parece que tudo vai correr bem.');
      console.log();
    };

    Soneca(){
      console.log('Huuuum, que preguiça. Você ficou mais um tempo na cama.')
      sleep(4000);
      console.log('Se passaram 5 min, agora você tem que se levantar, ou irá atrasar seu dia.');
      console.log();
    };

    Orar(){
      sleep(2000);
      console.log('Muito bem, a melhor maneira de começar um dia é orando.');
      console.log();
      sleep(2000);
      console.log(` 
      "Em pensamento, você orou: 'Obrigado meu Deus, pela noite que se passou e pelo dia que se iniciou.'"
      `);
      sleep(2000);
      console.log("Em pensamento, você orou: 'Obrigado meu Deus, pela noite que se passou e pelo dia que se iniciou.'");
      console.log();
    };

    NaoOrar(){
      sleep(2000);
      console.log('Ok, vamos sem orar então.');
      console.log();
    };

    TomarCafe(){
      console.log();
      sleep(2000);
      console.log('Muito bem, nada como um bom café da manhã. Aproveite.');
      console.log();
      
    };

    NaoTomar(){
      console.log();
      sleep(2000);
      console.log(`Mãe:
        Vem logo menino, não sabe que o café da manhã é a refeição mais importante do dia!!!!`)
      console.log();
      sleep(2000);
      this.TomarCafe();
    };

    Ficar(){
      sleep(2000);
      console.log('Você decidiu ficar em casa e não sair.');
      console.log();
      sleep(2000);
      console.log('30 min depois...');
      sleep(2000);
      console.log()
      console.log('Hora de ir a escola.')
//      console.log('Você ficou entediado e saiu para rua.');
//      console.log();
//      this.Sair();
    };

    Sair(){
      console.log();
      sleep(2000);
      console.log(`Você saiu de casa pela porta da frente e encontrou seu(sua) amigo(a)...`)
      sleep(2000);
      console.log('........');
      sleep(2000);
      console.log('Qual nome dele(a) mesmo?');
      amigo1.nome = prompt('Digite o nome: ').toUpperCase();
      sleep(2000);
      console.log(`Ah sim, ${amigo1.nome}.
                  ${user.nome}: Bom dia ${amigo1.nome}!!!
                  ${amigo1.nome}: Bom dia ${user.nome}.`);
      console.log();
    };

    Ir(){
      sleep(2000);
      console.log(`Seu amigo ${amigo1.nome} ficou muito feliz em estrear o jogo novo com você e mais alguns amigos.`);
      console.log();
    };

    NaoIr(){
      sleep(2000);
      console.log(`Seu amigo ${amigo1.nome} insistiu: `);
      console.log(`Deixa de ser chato(a) ${user.nome}, vamos lá. Já estamos em 3. Falta mais um para completar os jogadores.`);
      console.log();
      sleep(3000);
      console.log('Após muita insistência você aceitou e foi.')
      console.log();
      sleep(2000);
      this.Ir();
    };

    Indagar(){
      sleep(2000);
      console.log(`${user.nome}: Pessoal, vocês sentiram algo estranho?
                  ${amigo2.nome}: Você está louco? Tomou café hoje?
                    TODOS: KKKKKKKKKKKKKKKKK`);
    };

    Joystick(){
      sleep(2000);
      console.log('Você pegou o joystick em suas mãos.');
      console.log();

      sleep(2000);
      console.log()
      console.log('Logo pensou:')
      sleep(2000)
      console.log('"Nossa, que sensação estranha..."');
    };

    NaoPegar(){
      sleep(2000);
      console.log(`Poxa cara, vamos lá, o jogo é da hora...
                    Mas você quem sabe, fique só olhando então...`);
      sleep(2000);
      console.log();
      console.log(`${user.nome}: Tá bom vai. Vamos jogar...`);
      sleep(2000);
      console.log();
      user.Joystick();
    };

    Help(){
      sleep(2000);
      console.log('Você gritou: ');
      console.log('SOCORROOOOOOOOOOOOOOOO!!!!!!!!!!!!!');
    };
};

class Personagem { 

    constructor(nome, especial, genero) {
      this.nome = nome;
      this.especial = especial;
      this.genero = genero;  
    };

    Pular(){
      sleep(2000);
      console.log(`Você pulou sobre o obstáculo.`);    
    };

    Bater(){
      sleep(2000);
      console.log(`Você bateu nos adversários.
                    Você contribuiu matando diversos deles.`)
    };    

    Olhar(){
      sleep(2000);
      console.log(`Você olhou para os lados, para cima e para baixo, procurando por algo.
                    Enquanto fazia isso, sua cauda derrubou alguns inimigos.`);
    };

    Correr(){
      sleep(2000);
      console.log(`Você está correndo desesperadamente.
                    Mas levou danos durante a corrida e perdeu 30% de vida.
                    Quem sabe da próxima vez você tenha mais coragem.`)
    };

    Esconder(){
      sleep(2000);
      console.log(`Ufa! Ainda bem que encontrei esse esconderijo, senão já estaria perdido.
                    Mas infelizmente, por causa da sua falta, um de seus amigos morreu.
                    Quem sabe da próxima vez você tenha mais coragem.`);
    };

    Especial(){
      sleep(2000);
      console.log('Você usou seu poder especial e causou um dano de 40%.');
      console.log(`Especial ${persUser.especial}.`)
    };
};

class Inimigo extends Personagem { 
   
  constructor(nome, especial, genero, vida){
      super(nome, especial, genero);
      this.vida = vida;
    };
};

class Game { 
  
  constructor(nome, ano, tipo, players) {
    this.nome = nome;
    this.ano = ano;
    this.tipo = tipo;
    this.players = players;
  };

  Abduzir(){
    console.log('Começou a sair faíscas e fumaça do vídeo game.');
    console.log('O vídeo game abduziu os jogadores para dentro do jogo.');
  };

  Vencedor(){
    console.log('Seu jogo acabou. Você venceu. Parabéns.');
  };

  Perdedor(){
    console.log('GAME OVER');
  };

};
// Pessoas da vida real
var user = new Pessoa();
var amigo1 = new Pessoa();
var amigo2 = new Pessoa();
var amigo3 = new Pessoa();
// Personagens do jogo
const persUser = new Personagem ('Godzilla', 'CHAMAS', 'Humano');
const pnj1 = new Personagem ('Goku', 'KAMEHAMEHA', 'Sayajin');
const pnj2 = new Personagem ('Naruto', 'RASENGAN', 'Ninja');
const pnj3 = new Personagem ('Freeza', 'DEATH', 'Alien');
const enemy = new Inimigo ('Gidorah', 'RAIO', 'Monstro', 'Extra');

const jogo = new Game('Perdidos na floresta',2021,'Aventura', 4);


function erro(){
  console.log('Escolha uma das duas opções.');
};

function invalida(){
  console.log('Opção inválida.');
};

function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
};

function fim(){
  console.log(`O dia acabou, você está em sua casa se preparando para dormir e pensando:
              "Será que isso aconteceu mesmo??"
              E acabou pegando no sono.`);
              sleep(3000);
  console.log('OBRIGADO POR JOGAR.');

            };

console.log('======================================== Ficção Interativa =========================================');
console.log();
console.log('=======================================Perdidos na Floresta=========================================');

console.log('Loading…');
sleep(1000);
console.log(`10%`);
sleep(1200);

console.log(`30%`);
sleep(1400);

console.log(`50%`);
sleep(1600);

console.log(`80%`);
sleep(1800);

console.log(`100%`);
sleep(2000);

console.log('JOGO CARREGADO')
sleep(2000);
console.clear();

console.log();
sleep(3000);
console.log();
console.log(`PIPIPIPI, PIPIPIPI, PIPIPIPI...
            Hora de acordar ....`);
sleep(2000);
console.log('.......')
sleep(2000);            
console.log('Qual seu nome mesmo?');
user.nome = prompt('Digite seu nome: ').toUpperCase();
sleep(2000);
console.log(`Ah sim, lembrei.
            Hora de acordar ${user.nome}.`)


while (true){ 

  var desperta = prompt('Vai levantar ou tirar mais uma soneca?(Responda com L para levantar ou S para soneca)').toLowerCase();       
    if (desperta[0] == 's' || desperta[0] == 'l') {
      break;
    } else {
      invalida();
    };
};
    if (desperta[0] == 'l') {
      user.Levantar();
    } else if (desperta[0] == 's') {
      user.Soneca();
    } else {
      erro();
    };


while (true) {

  var orar = prompt('Antes de realmente se levantar, que tal uma oração?(Responda com S para sim ou N para não.)').toLowerCase();
    if (orar[0] == 's' || orar[0] == 'n'){
      break;
    } else {
      invalida();
    };
};
    if (orar[0] == 's') {
      user.Orar();
    } else if (orar[0] == 'n') {
      user.NaoOrar();
    } else {
      erro();
    };
 

console.log(`Sua mãe te gritou: ${user.nome}, venha tomar café...`);

while(true) {

  var cafe = prompt('Tomar café?(Responda com S para sim ou N para não)').toLowerCase();
    if (cafe[0] == 's' || cafe[0] == 'n'){
      break;
    } else {
      invalida();
    };
};
    if (cafe[0] == 's') {
      user.TomarCafe();
    } else if (cafe[0] == 'n') {
      user.NaoTomar();
    } else {
      erro();
      cafe = prompt('Tomar café?').toLowerCase();
    };

while(true) {

  var sair = prompt('Agora você tem que decidir se vai sair ou ficar em casa.(Digite S para sair ou F para ficar)').toLowerCase();
    if (sair[0] == 's' || sair[0] == 'f') {
      break;
    } else {
      invalida();      
    };
};
//Primeira opcao
    if (sair[0] == 's') {
      console.clear();
      console.log(`Era para você ir a escola. Como saiu de casa antes, você não foi.
                    Como toda escolha, essa terá uma consequência`);
      user.Sair();
      console.log();
      sleep(2000);
      
      console.log(`${amigo1.nome} te chamou para jogar um novo jogo em sua casa.`);
        while(true) {
          var jogar = prompt('Jogar?(Responder com S para sim ou N para não)' ).toLowerCase();
            if(jogar[0] == 's' || jogar[0] == 'n') {
              break;
            } else {
              invalida();
            };
        };
        if  (jogar[0] == 's') {
          user.Ir();
        } else if (jogar[0] == 'n') {
          user.NaoIr();
        } else {
          erro();
        };

        console.log(`Vocês chegaram a casa de ${amigo1.nome}, e lá já estavam esperando na porta mais dois amigos...
                    Quais seus nomes? `);
          amigo2.nome = prompt('Digite o nome do(a) segundo(a) amigo(a): ').toUpperCase();
          amigo3.nome = prompt('Digite o nome do(a) terceiro(a) amigo(a): ').toUpperCase();
        sleep(2000);
        console.log(`Agora a turma está completa: 
                    ${user.nome}
                    ${amigo1.nome}
                    ${amigo2.nome}
                    ${amigo3.nome}
                    Todos foram estrear o jogo novo.`);
        console.log();
        console.log(`Chegando na casa de ${amigo1.nome}, você sentiu algo estranho.`);
        console.log();
        let subir = prompt('Indagar ou não?(Pressione I se quiser indagar.)').toLowerCase();
          if (subir == 'i'){
            user.Indagar();
            console.log();
          } else {
            sleep(2000);
            console.log('Mas não deu muita importância.');
          };
        sleep(3000);
        console.log(`Todos subiram para o quarto, onde logo viram o jogo ligado.
                      ${amigo1.nome}: O jogo já está no ponto.`);
        console.log();
        sleep(2000);
        console.log(`Na tela da televisão você viu as informações do jogo:`);
        console.log();
        console.log();
          
          const tela = Object.keys(jogo);
        sleep(2000);  
          for (let i = 0; i < tela.length; i++) {
            sleep(1000);
            console.log(`${tela[i]}: ${jogo[tela[i]]}`);
            console.log();
          };
          sleep(2000);
    console.log(`${amigo1.nome}: Esse jogo é lançamento e exclusivo, recebi pelo correio para testar.
                Nem sei quem mandou, mas parece ser maneirasso.
                Ainda me mandaram mais 2 controles para interar os participantes.
                Bora jogar gente.`);
      sleep(2000);
      while (true) {
        var pegar = prompt('Responda com S para sim ou N para não.').toLowerCase();
          if(pegar[0] == 's' || pegar[0] == 'n'){
            break;
          } else {
            invalida();
          };
      };
        if (pegar[0] == 's') {
          user.Joystick();
        } else if (pegar[0] == 'n') {
          user.NaoPegar();
        } else {
          erro();
        };
  sleep(2000);
  console.log('De repente, o video game começou a sair fumaça e faíscas');
  sleep(1500);
  console.log(`${amigo2.nome}: Que isso ${amigo1.nome}? Efeitos especiais em 10D. kkkkkkkkkkkk`);
  console.log(`${amigo3.nome}: kkkkkkkkkkkk`);
  sleep(3000);
  console.log('Quando de repente, seus amigos foram puxados um a um para dentro do jogo, como se estivessem se dissolvendo.');
  sleep(2000);
  user.Help();
  sleep(2000);
  console.log('E também foi puxado para o jogo.');   
  sleep(2000);
  var conti = prompt('Pressione ENTER para continuar.');
  console.clear();
        for (let i = 0;i<20;i++){
          sleep(500);
          console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
          sleep(500);
          console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
        };
  console.clear();
  sleep(2000);
  console.log('Você e seus amigos se viram em um lugar estranho, não parecia real.');
  sleep(2000);
  console.log(`${user.nome}: Onde estamos?
              ${amigo3.nome}: ${amigo1.nome}, o que você fez com a gente?
              ${amigo2.nome}: Nossa, que lugar é esse?
              ${amigo1.nome}: Será que estamos no jogo? Esse lugar parece muito com a capa do jogo....`);
  console.log();
  sleep(7000);
  console.log('Todos analisaram o local e se viraram para conversar...');
  sleep(2000);
  console.log(`Todos gritaram: 
              "AHHHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!!!!!!!!!"
              ${user.nome}: Quem são vocês?
              ${amigo1.nome}: Somos nós mesmos, mas nos corpos dos personagens.
              ${amigo3.nome}: Tem uma espécie de botão aqui, o que ele faz?`);
  sleep(7000);
  console.log();
    console.log('Ao pressionar o botão, apareceu um tipo de holograma com algumas informações: ');
    console.log();
    const pnj3I = Object.keys(pnj3);
    sleep(2000);  
      for (let i = 0; i < pnj3I.length; i++) {
        sleep(1000);
        console.log(`${pnj3I[i]}: ${pnj3[pnj3I[i]]}`);
      };
    sleep(2000);
    console.log();
    console.log('Todos então localizaram seus botões e o pressionaram.');
    console.log();
      sleep(1000);
      const pnj1I = Object.keys(pnj1);
        
        for (let i = 0; i < pnj1I.length; i++) {
          sleep(1000);
          console.log(`${pnj1I[i]}: ${pnj1[pnj1I[i]]}`);
        };

      const pnj2I = Object.keys(pnj2);
      console.log();
      sleep(1000);  
        for (let i = 0; i < pnj2I.length; i++) {
          sleep(1000);
          console.log(`${pnj2I[i]}: ${pnj2[pnj2I[i]]}`);
        };

      const persUserI = Object.keys(persUser);
      console.log();
      sleep(1000);  
        for (let i = 0; i < persUserI.length; i++) {
          sleep(1000);
          console.log(`${persUserI[i]}: ${persUser[persUserI[i]]}`);
        };
  sleep(3000);
  console.log();
  console.log(`
                Para se identificarem, vocês falaram seus nomes:
                ${persUser.nome}: Eu sou ${user.nome}.
                ${pnj1.nome}: Eu sou ${amigo1.nome}.
                ${pnj2.nome}: Eu sou ${amigo2.nome}.
                ${pnj3.nome}: Eu sou ${amigo3.nome}.`);
  sleep(3000);
  console.log();
  console.log('Agora sim, vocês se reconhecem. E dizem: ');
  sleep(1000);
  console.log();
  console.log(`
              Que maneiro cara, olha nossa cara...
              HAHAHAHAHAHAHA`);
  sleep(2000);
  console.log(`
                Quando foram interrompidos por um estrondoso barulho:          
                RAAAAAAAAAAAAAAWWWWWWWWWWWWWWWWWWWWHHHHHHHHHHHHHH!!!!!!!!!!!!`);
  sleep(2000);
  console.log('..................................................................');
  sleep(7000);
  console.log(`
                VUUUUUUUUUUSSSSSSSSSSSHHHHHHHHHHHHHHH
                KKKABRUUUUUMMMMMMMMMMMMMMM
                CHHHHHHHHHHHHHHUUUUUUUUUUÁÁÁÁÁÁÁÁÁÁ
                KKKABRUUUUUUUUUMMMMMMMMMMMMMMMMMMMM
                AAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHH!!!!!!!!!`);
sleep(2000);
console.log();
  console.log();
  sleep(3000);
  console.log(`${pnj2.nome}(${amigo2.nome}): Que que foi isso gente?
                ${pnj1.nome}(${amigo1.nome}): Que medo...
                ${user.nome}(${user.nome}): Que tipo de coisa no mundo faz isso??
                ${pnj3.nome}(${amigo3.nome}): Olhem aquilo lá??`);
  console.log();
  sleep(1500);
  console.log(`Apontou o ${pnj3.nome} para o horizonte, lá longe....
                E vocês viram...`);
  sleep(7000);
  console.log();

  sleep(6000);
  console.log(`${persUser.nome}: Que loucura....`);
  sleep(2000);
  console.log('Quando do nada, uma voz surge falando: ');  
  sleep(1000);
  console.log(`
              Esse é seu inimigo. Vocês tem que derrotá-lo para poder vencer o jogo.
              Cada um tem apenas uma vida, se usarem com sabedoria, poderão vencer.
              Todos tem habilidades básicas, como pular, socar, etc. E cada um tem 
              uma habilidade especial. Mostrem suas habilidades neste jogo incrível. 
              BOA SORTE.`);
  sleep(8000);
  console.log('Em seguida, as informações sobre o inimigo.');
      const enemyI = Object.keys(enemy);
      console.log();
      sleep(1000);  
        for (let i = 0; i < enemyI.length; i++) {
          sleep(1000);
          console.log(`${enemyI[i]}: ${enemy[enemyI[i]]}`);
        };
    sleep(3000);
  
  console.log(`Assim que a voz silenciou, vieram vários inimigos para cima de você e seus amigos.`);
  sleep(2000);
  console.log();
  sleep(2000);
  console.log(`
                Enquanto seus amigos lutam, você tem que tomar decisões.
                P - Pular
                B - Bater 
                O - Olhar 
                C - Correr
                M - Esconder
                E - Especial`);
  
  while (true) {
    var acao = prompt('Escolha qual ação tomar: ').toLowerCase();
      if (acao[0] == 'p' || acao[0] == 'b' || acao[0] == 'o' || acao[0] == 'c' || acao[0] == 'm' || acao[0] == 'e') {
        break;
      } else {
        erro();
      };
  };              
        if (acao[0] == 'p') {
          console.log('Você está pulando de um lado para outro');
          sleep(1000);
          console.log('Você levou um tiro, perdeu 10% de vida, cuidado!');
        } else if (acao[0] == 'b') {
          persUser.Bater();
        } else if(acao[0] == 'o') {
          persUser.Olhar();
        } else if(acao[0] == 'c') {
          persUser.Correr();
        } else if(acao[0] == 'm') {
          persUser.Esconder();
        } else if(acao[0] == 'e') {
          persUser.Especial();
          console.log('Você eliminou muitos inimigos. Mas cuidado, você tem apenas mais dois especiais.');
        } else {
          invalida();
        };

  sleep(2000);
  console.log(`Vocês conseguiram passar a primeira fase.
                Pelo caminho que seguiram, encontraram diversas dificuldades.
                A primeira foi uma rocha enorme impedindo o caminho.`);
  sleep(2000);
  console.log(`
  Enquanto seus amigos lutam, você tem que tomar decisões.
  P - Pular
  B - Bater 
  O - Olhar 
  C - Correr
  M - Esconder
  E - Especial`);
  sleep(2000);
                while (true) {
                  var acao2 = prompt('Escolha qual ação tomar: ').toLowerCase();
                    if (acao2[0] == 'p' || acao2[0] == 'b' || acao2[0] == 'o' || acao2[0] == 'c' || acao2[0] == 'm') {
                      break;
                    } else {
                      erro();
                    };
                };              
                      if (acao2[0] == 'p') {
                        persUser.Pular();
                        sleep(1000);
                        console.log('Depois de muitos pulos, vocês passaram por ele.');
                      } else if (acao2[0] == 'b') {
                        console.log('Você bateu na rocha. Com algumas pancadas vocês conseguiram quebra-la e liberar a passagem.');
                      } else if(acao2[0] == 'o') {
                        console.log('Enquanto você procurava ao redor, sua cauda quebrou a pedra e vocês passaram.');
                      } else if(acao2[0] == 'c') {
                        console.log('Vocês tomaram impulso, e depois de algum tempo tentando, vocês conseguiram pular.');
                      } else if(acao2[0] == 'm') {
                        console.log(`Ao procurar abrigo, você encontrou uma passagem por baixo da pedra.
                                    Ao tentar passar, seu tamanho e força quebraram a pedra, liberando a passagem.`);
                      } else {
                        invalida();
                      };
  sleep(2000);
  console.log(`${persUser.nome}: Graças a Deus, conseguimos passar...`);
  sleep(1500);
  console.log('Mas, antes de você terminar sua frase, apareceram umas aranhas-monstro gigantes, e vocês sairam correndo.');
  sleep(3000);
  for(let i=0;i<=4;i++){
    console.log();
    sleep(1000);
  };
  sleep(7000);
  console.log(`
  Enquanto seus amigos lutam, você tem que tomar decisões.
  P - Pular
  B - Bater 
  O - Olhar 
  C - Correr
  M - Esconder
  E - Especial`);
  sleep(2000);
  while (true) {
    var acao3 = prompt('Escolha qual ação tomar: ').toLowerCase();
      if (acao3[0] == 'p' || acao3[0] == 'b' || acao3[0] == 'o' || acao3[0] == 'c' || acao3[0] == 'm') {
        break;
      } else {
        erro();
      };
  };              
        if (acao3[0] == 'p') {
          persUser.Pular();
          sleep(1000);
          console.log(`Depois de muitos pulos, dois de vocês morreram.
                        Pelo menos elas voltaram e vocês seguiram adiante`);   
        } else if (acao3[0] == 'b') {
          persUser.Bater();
        } else if(acao3[0] == 'o') {
          console.log('Enquanto você procurava algo ao redor para atacar as aranhas, sua cauda eliminou muitas delas e vocês conseguiram passar.');
        } else if(acao3[0] == 'c') {
          persUser.Correr();
        } else if(acao3[0] == 'm') {
          persUser.Esconder();
        } else {
          invalida();
        };
  sleep(2000);
  console.log(`${pnj3.nome}: Ufa, que alívio.
              ${persUser.nome}: Ainda bem que conseguimos passar. Vamos em frente.`);
  sleep(7000);
  console.log(`
  VUUUUUUUUUUSSSSSSSSSSSHHHHHHHHHHHHHHH
  CABRUUUUUMMMMMMMMMMMMMMM
  CHHHHHHHHHHHHHHUUUUUUUUUUÁÁÁÁÁÁÁÁÁÁ
  CABRUUUUUUUUUMMMMMMMMMMMMMMMMMMMM
  AAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHH!!!!!!!!!`);
sleep(2000);
console.log();
console.log();
sleep(3000);
  console.log();
sleep(7000);
console.log(`E agora, chegou o lider, ${enemy.nome}
              Ele começou atacando logo de cara, sem ao menos se apresentar.`);
enemy.Especial();
sleep(3000);
console.log('Com esse ataque, metade de vocês morreram.');
sleep(2000);
console.log(`
  Enquanto seus amigos lutam, você tem que tomar decisões.
  P - Pular
  B - Bater 
  O - Olhar 
  C - Correr
  M - Esconder
  E - Especial`);
  sleep(2000);
while (true) {
  var final = prompt('Escolha qual ação tomar: ').toLowerCase();
    if (final[0] == 'p' || final[0] == 'b' || final[0] == 'o' || final[0] == 'c' || final[0] == 'm', final[0] == 'e') {
      break;
    } else {
      erro();
    };
};              
      if (final[0] == 'p') {
        persUser.Pular();
        sleep(1000);
        console.log(`Depois de muitos pulos, um de vocês morreram.`);   
      } else if (final[0] == 'b') {
        persUser.Bater();
        console.log('Você causou danos em GIDORAH.');
      } else if(final[0] == 'o') {
        persUser.Olhar();
        console.log('Você causou danos em GIDORAH.');
      } else if(final[0] == 'c') {
        persUser.Correr();
      } else if(final[0] == 'e') {
        persUser.Especial();
      } else if (final[0] == 'm'){
        persUser.Esconder();
      } else {
        invalida();
      };
sleep(3000);
console.log(`Espere, o que é isso????
              Parece que você ganhou um bônus, seus companheiros mortos todos voltaram por mais uma rodada apenas.`);
sleep(3000);
console.log(`Gidorah está recuperando suas forças, é a chance de vocês atacarem com tudo.
            Usem o especial.`);
sleep(2000);
console.log(`
  Enquanto seus amigos lutam, você tem que tomar decisões.
  P - Pular
  B - Bater 
  O - Olhar 
  C - Correr
  M - Esconder
  E - Especial`);
  sleep(2000);
while (true) {
  var final2 = prompt('Escolha qual ação tomar: ').toLowerCase();
    if (final2[0] == 'e') {
      break;
    } else {
      erro();
    };
};              
      if(final2[0] == 'e') {
        console.log(`Muito bem, todos usaram seus especiais`);
        sleep(2000);  
        console.log(`
                    ${persUser.nome}: ${persUser.especial}
                    ${pnj1.nome}: ${pnj1.especial}
                    ${pnj2.nome}: ${pnj2.especial}
                    ${pnj3.nome}: ${pnj3.especial}`);
                    sleep(2000);
      } else {
        invalida();
      };
  sleep(2000);
  console.log(`RRRRAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHWWWWWWWWWWWWWWWWWW
                ${enemy.nome} caiu....`);
  sleep(3000);
  console.log(`YYYYYYYYRRRRRRRRRRRRRUUUUUUUUUUUUU
                Conseguimos.
                Vencemos o chefe.`);
  jogo.Vencedor();
  sleep(3000);
  for (let i = 0;i<20;i++){
    sleep(500);
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    sleep(500);
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
  };
  console.clear();
  sleep(2000);
  console.log();
  sleep(3000);
  console.log(`Todos voltaram para o quarto do ${amigo1.nome}.
                Espantados e rindo vocês conversaram até anoitecer.
                E cada um voltou para sua casa.`);
  fim();

//Segunda opcao
    } else if (sair[0] == 'f') {
      user.Ficar();
      console.log(`Você está se arrumando para ir a escola.
                    Como toda escolha, essa terá uma consequência`);
      sleep(2000);
      console.log();
      sleep(2000);
      console.log(`Você pegou o ônibus e está a caminho da escola...`);
      sleep(2000);
      console.log();
      sleep(2000);
      console.log('SCRIIIIIIIIIIIIIIIIIIIICCCCCCHHHHHHHHHHHHHHHHHH');
      sleep(7000);
      console.log();
    sleep(7000);
    console.log(`Infelizmente houve um acidente, um avião caiu na rua e em cima do ônibus que você estava.
                Não houve sobreviventes.`);
    sleep(3000);
    console.log();

    jogo.Perdedor();
    sleep(10000)
    } else {
      erro();
    };
  

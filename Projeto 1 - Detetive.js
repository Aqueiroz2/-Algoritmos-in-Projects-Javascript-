/* Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As 
 perguntas são: 
  1- "Telefonou para a vítima?"
  2- "Esteve no local do crime?"
  3- "Mora perto da vítima?"
  4- "Devia para a vítima?"
  5- "Já trabalhou com a vítima?"
  O programa deve no final emitir uma classificação sobre a participação da
  pessoa no crime.
  Se a pessoa responder positivamente a 2 questões ela deve ser classificada
  como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso
  contrário, ele será classificado como "Inocente". */

var prompt = require('prompt-sync')();

let  resposta1  =  + prompt ( 'Você telefonou para a vítima no dia do ocorrido? ' );

let  resposta2  =  + prompt ( 'Você esteve no local do crime no dia do ocorrido? ' );
  
let  resposta3  =  + prompt ( 'Você mora perto da vítima? ' );

let  resposta4  =  + prompt ( 'Você devia para a vítima? ' );

let  resposta5  =  + prompt ( 'Você já trabalhou com uma vítima? ' );

let  count  =  resposta1  +  resposta2  +  resposta3  +  resposta4  +  resposta5;
console . log ( count );

if  ( count  <=  1 ) {
  console . log ( 'Parabéns, você é INOCENTE!') ;
}  else  if  ( count  ==  2 ) {
  console . log ( 'Suspeito Formidável.') ;
}  else  if  ( count ==  3 )  {
  console . log ( 'Supeito considerado CÚMPLICE do crime.') ;
}  else  if  ( count  ==  4 ) {
  console . log ( 'Suspeito considerado CÚMPLICE do crime.') ;
}  else  if  ( count  ==  5 )  {
  console . log ( 'Suspeito considerado CULPADO do crime = ASSASSINO!')
}  else  if  ( count  >  5 )  {
  console . log ( 'Você não respondeu todas as questões corretas, faça o questionário novamente.Responda apenas com 1 para SIM e 0 para NÃO.' )
}  else  {
    console . log ( 'Você deve preencher todas informações corretamente');
}

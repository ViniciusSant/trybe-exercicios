/* Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
Implemente condicionais para que:
Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU". 

Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado :).

*/

let weekDay ="sabado"

switch(weekDay){
  case "segunda-feira":
    console.log(`Oba ${weekDay}, mais um dia de aprendizado na Trybe >:D`)
    break;
  case "terca-feira":
    console.log(`Oba ${weekDay} , mais um dia de aprendizado na Trybe >:D`)
    break;
  case "quarta-feira":
    console.log(`Oba ${weekDay} , mais um dia de aprendizado na Trybe >:D`)
    break;
  case "quinta-feira":
    console.log(`Oba ${weekDay} , mais um dia de aprendizado na Trybe >:D`)
    break;
  case "sexta-feira":
    console.log(`Oba ${weekDay} , mais um dia de aprendizado na Trybe >:D`)
    break;
  case "sabado":
    console.log(`${weekDay} FINALMENTE, descanso merecido UwU`)
    break;
  case "domingo":
    console.log(`${weekDay} FINALMENTE, descanso merecido UwU`)
    break;
  default:
    console.log("Verifique se você escreveu corretamente o dia da semana")
}
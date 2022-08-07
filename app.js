const b = document.querySelector(".app button");
let respName = "";
let respAge = 0;
let respLingProg = "";
let respOp = 0;

function iniciar() {
  respName = prompt("Qual o seu nome?", "Digite seu nome");
  respAge = prompt("Quantos anos voce tem?");
  respLingProg = prompt("Qual linguagem de programação voce esta estudando?");

  console.log(
    `Olá ${respName}, voce tem ${respAge} anos e ja esta aprendendo ${respLingProg}`
  );

  respOp = prompt(`Voce gosta de estudar ${respLingProg}? responda 1 para SIM e 2 para NAO!`);

  if(respOp == 1){
    alert('Muito bom!, continue a estudar e voce terá sucesso!' );
  } else if(respOp == 2){
    alert('Ah que pena... voce ja tentou aprender outras linguagens?');
  } else{
    alert('nao captamos uma resposta valida... favor acionar sistema para refazer as questões!');
  }
}

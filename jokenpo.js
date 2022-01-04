const prompt = require("prompt-sync")();

const jokenpo = ["PEDRA", "PAPEL", "TESOURA"];

while (true) {
  console.log("JOKENPO");
  console.log();
  let vitoriasJogador = 0;
  let vitoriasComputador = 0;
  let quantidadeRodadas = parseInt(prompt("Quantas rodadas iremos jogar? "));
  for (let i = 0; i < quantidadeRodadas; i++) {
    console.log();
    console.log("[0] PEDRA\n[1] PAPEL\n[2] TESOURA");
    const escolhaJogador = parseInt(prompt("Qual é a sua escolha? "));
    const escolhaComputador = Math.floor(Math.random() * 3);
    console.log();
    console.log(`Você escolheu ${jokenpo[escolhaJogador]}`);
    console.log(`O computador escolheu ${jokenpo[escolhaComputador]}`);
    console.log();
    if (escolhaComputador == 0) {
      if (escolhaJogador == 0) {
        console.log("EMPATOU");
      } else if (escolhaJogador == 1) {
        console.log("VOCÊ VENCEU");
        vitoriasJogador++;
      } else if (escolhaJogador == 2) {
        console.log("COMPUTADOR VENCEU");
        vitoriasComputador++;
      } else {
        console.log("OPÇÃO INVÁLIDA. NÃO FOI POSSIVEL CONTABILIZAR");
      }
    } else if (escolhaComputador == 1) {
      if (escolhaJogador == 0) {
        console.log("COMPUTADOR VENCEU");
        vitoriasComputador++;
      } else if (escolhaJogador == 1) {
        console.log("EMPATOU");
      } else if (escolhaJogador == 2) {
        console.log("VOCÊ VENCEU");
        vitoriasJogador++;
      } else {
        console.log("OPÇÃO INVÁLIDA. NÃO FOI POSSIVEL CONTABILIZAR");
      }
    } else if (escolhaComputador == 2) {
      if (escolhaJogador == 0) {
        console.log("VOCÊ VENCEU");
        vitoriasJogador++;
      } else if (escolhaJogador == 1) {
        console.log("COMPUTADOR VENCEU");
        vitoriasComputador++;
      } else if (escolhaJogador == 2) {
        console.log("EMPATOU");
      } else {
        console.log("OPÇÃO INVÁLIDA. NÃO FOI POSSIVEL CONTABILIZAR");
      }
    }
  }

  console.log(`\nO computador venceu ${vitoriasComputador} rodadas.`);
  console.log(`Você venceu ${vitoriasJogador} rodadas.`);
  if (vitoriasComputador > vitoriasJogador) {
    console.log("o grande campeão dessa partida foi o COMPUTADOR");
  } else if (vitoriasJogador > vitoriasComputador) {
    console.log("o grande campeão dessa partida foi VOCÊ");
  } else {
    console.log("Não tivemos um campeão nessa rodada. Jogue novamente!");
  }
  console.log()
  const continuar = prompt("Vamos jogar novamente? [S/N] ").toUpperCase();
  while (!(continuar == "S" || continuar == "N")) {
    const continuar = prompt("Vamos jogar novamente? [S/N] ").toUpperCase();
  }
  if (continuar == "N") {
    break;
  }
}

console.log("\nVocê finalizou o jogo.");

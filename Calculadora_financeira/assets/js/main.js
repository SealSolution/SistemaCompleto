function calcular() {

    // Entradas
    var qtdTomates = Number(ipt_QtdTomate.value)
    var precoTomate = Number(ipt_PrecoTomate.value)
    var estadoTomate = sel_estadoTomate.value

    // Calculo Sem nosso projeto
    var precoTotal = qtdTomates * precoTomate
    var perdaTomate = qtdTomates * .40
    var perdaTransporte = 0;
    var perdaDinheiro = 0;

    if (estadoTomate == "Não") {
        perdaTransporte = perdaTomate
        perdaDinheiro = precoTomate * perdaTransporte
        semNosso.innerHTML =
            `
          Preço Total de tomates : R${precoTotal}<br>
          perda de tomates no transporte: ${perdaTransporte}<br>
          Perda em dinheiro: R$${perdaDinheiro}<br>
          `

    } else if (estadoTomate == "Sim") {
        perdaTransporte = qtdTomates * .45
        perdaDinheiro = precoTomate * perdaTransporte

        semNosso.innerHTML =
            `
          Preço Total de tomates : R${precoTotal}<br>
          perda de tomates durante o transporte: ${perdaTransporte}<br>
          Perda em dinheiro: R$${perdaDinheiro}<br>
          `
    } else {
        alert("Selecione uma opção valida.")
    }

    // Calculo com nosso projeto

    var efetividadeTomate = qtdTomates * .90
    var efetividadeDinheiro = precoTomate * efetividadeTomate
    var perdaComEfetividadeTomate = qtdTomates * 0.10
    var perdaComEfetividadeDinheiro = precoTomate * perdaComEfetividadeTomate

    comNosso.innerHTML =
        `
      Preço Total de tomates : R${precoTotal}<br>
      Perda de tomates durante o transporte = ${perdaComEfetividadeTomate}<br>
      Tomates Economizados = ${efetividadeTomate}<br>
      Dinheiro Economizado = R$${efetividadeDinheiro}<br>
      Dinheiro Perdido = R$${perdaComEfetividadeDinheiro}
      `

}


function limpar() {

    document.getElementById('inputVendas').value = '';
    document.getElementById('inputEntradasTotais').value = '';
    document.getElementById('inputEntradasCaixa').value = '';
    positivo.innerHTML = '';
    negativo.innerHTML = '';
}
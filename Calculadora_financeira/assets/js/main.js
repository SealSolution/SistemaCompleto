function calcular() {

    // Entradas
    var qtdTomates = Number(ipt_QtdTomate.value)
    var precoTomate = Number(ipt_PrecoTomate.value)
    var estadoTomate = sel_estadoTomate.value

    // Calculo Sem nosso projeto
    var precoTotal = qtdTomates * precoTomate
    var perdaTomate = qtdTomates * .40
    var perdaTransporte, perdaDinheiro = 0

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

    var efetividadeTomate = qtdTomates * .90
    var efetividadeDinheiro = precoTomate * efetividadeTomate
    var perdaComEfetividadeTomate = qtdTomates * 0.10
    var perdaComEfetividadeDinheiro = precoTomate * perdaComEfetividadeTomate

    comNosso.innerHTML =
        `
      Tomates Economizados = ${efetividadeTomate}<br>
      Dinheiro Economizado = R$${efetividadeDinheiro}<br>
      Perda de tomates durante o transporte = ${perdaComEfetividadeTomate}<br>
      Dinheiro Perdido = R$${perdaComEfetividadeDinheiro}
      `

    // Calculo com nosso projeto

}


function limpar() {

    document.getElementById('inputVendas').value = '';
    document.getElementById('inputEntradasTotais').value = '';
    document.getElementById('inputEntradasCaixa').value = '';
    positivo.innerHTML = '';
    negativo.innerHTML = '';
}
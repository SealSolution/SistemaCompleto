/*chart de linhas */

let proximaAtualizacao;
function obterDadosGrafico() {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }
    fetch(`/medidas/ultimas`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`data recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGrafico(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos data p/ gráfico: ${error.message}`);
        });
}

// Esta função *plotarGrafico* usa os data capturados na função anterior para criar o gráfico
// Configura o gráfico (cores, tipo, etc), materializa-o na página e, 
// A função *plotarGrafico* também invoca a função *atualizarGrafico*
function plotarGrafico(resposta) {

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - data
    /* -- dht11Temperatura -- */
    let dados = {
        labels: labels,
        datasets: [{
            label: "Umidade",
            type: 'line',
            fill: false,
            data: [],
            backgroundColor: ['#ff7f7f'],
            borderColor: '#ff3232',
            tension: 0.1
        }, {
            label: 'Temperatura',
            type: 'line',
            fill: false,
            data: [],
            borderColor: ['#45b3e7'],
            backgroundColor: ['#89cff0']
        }]
    };


    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.momento_grafico);
        /*para ver temperature basta trocar para umidade ex dados.datasets[0].data.push(registro.umidade);*/
        dados.datasets[0].data.push(registro.umidade);
        dados.datasets[1].data.push(registro.temperatura);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'line',
        data: dados,
        options: {
            scales: {
                xAxes: [{
                    distribution: 'series',
                    ticks: {
                        beginAtZero: true
                    },
                    plugins: {}
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Graus (c°) e umidade em (%)'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            animation: {
                duration: 0
            }
        }
    };


    // Adicionando gráfico criado em div na tela
    var contextoDht11Temperatura = document.getElementById('dht11Temperatura').getContext('2d');
    contextoDht11Temperatura.canvas.width = 200;
    contextoDht11Temperatura.canvas.height = 100;
    var dht11Temperatura = new Chart(document.getElementById('dht11Temperatura').getContext('2d'),
        config
    );
    setTimeout(() => atualizarGrafico(dados, dht11Temperatura), 10000);
}


// Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
// buscando a última medida inserida em tabela contendo as capturas, 

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
function atualizarGrafico(dados, dht11Temperatura) {


    fetch(`/medidas/tempo-real`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {
                obterDadosGrafico();
                console.log(`data recebidos: ${JSON.stringify(novoRegistro)}`);
                console.log(`data atuais do gráfico:`);
                console.log(dados);


                if (novoRegistro[0].momento_grafico == dados.labels[dados.labels.length - 1]) {
                    console.log("---------------------------------------------------------------")
                    console.log("Como não há dados novos para captura, o gráfico não atualizará.")
                    console.log("Horário do novo dado capturado:")
                    console.log(novoRegistro[0].momento_grafico)
                    console.log("Horário do último dado capturado:")
                    console.log(dados.labels[dados.labels.length - 1])
                    console.log("---------------------------------------------------------------")
                } else {
                    // tirando e colocando valores no gráfico
                    dados.labels.shift(); // apagar o primeiro
                    dados.labels.push(novoRegistro[0].momento_grafico); // incluir um novo momento

                    dados.datasets[0].data.shift();  // apagar o primeiro de umidade
                    dados.datasets[0].data.push(novoRegistro[0].umidade); // incluir uma nova medida de umidade

                    dados.datasets[1].data.shift();  // apagar o primeiro de temperatura
                    dados.datasets[1].data.push(novoRegistro[0].temperatura); // incluir uma nova medida de temperatura

                    dht11Temperatura.update();
                }
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGrafico(dados, dht11Temperatura), 10000);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
            proximaAtualizacao = setTimeout(() => atualizarGrafico(dados, dht11Temperatura), 10000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}






let proximaAtualizacaoDinheiro;
function obterDadosDinheiro() {
    if (proximaAtualizacaoDinheiro != undefined) {
        clearTimeout(proximaAtualizacaoDinheiro);
    }
    fetch(`/medidas/ultimas2`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`data recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGraficoDinheiro(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos data p/ gráfico: ${error.message}`);
        });
}


function plotarGraficoDinheiro(resposta) {

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - data
    /* -- perdaDinheiro -- */
    let dados = {
        labels: ['Janeiro'],
        datasets: [{
            label: "perda",
            fill: false,
            data: [],
            backgroundColor: ['#ff7f7f'],
            borderColor: '#ff3232',
        }, {
            label: 'total',
            fill: false,
            data: [],
            borderColor: ['#45b3e7'],
            backgroundColor: ['#89cff0']
        }]
    };


    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosDinheiro" e passados para "plotarGraficoDinheiro":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        /*para ver temperature basta trocar para umidade ex dados.datasets[0].data.push(registro.umidade);*/
        dados.datasets[1].data.push(registro.total);
        dados.datasets[0].data.push(registro.perda);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'bar',
        data: dados,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Comparativo dos valores em Reais',
                    color: '#ff7782',
                    font: {
                        size: 16,
                        weight: 'bold',
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        color: '#fff'
                    }
                }, legend: {
                    labels: {
                        display: true,
                        color: '#36a2eb',
                        font: {
                            size: 14,
                            weight: 'bold',
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        }
                    }
                }, ticks: {
                    color: '#ff7782'
                }
            }
        }
    };


    // Adicionando gráfico criado em div na tela
    var contextoperdaDinheiro = document.getElementById('perdaDinheiro').getContext('2d');
    contextoperdaDinheiro.canvas.width = 200;
    contextoperdaDinheiro.canvas.height = 100;
    var perdaDinheiro = new Chart(document.getElementById('perdaDinheiro').getContext('2d'),
        config
    );
    setTimeout(() => atualizarGraficoDinheiro(dados, perdaDinheiro), 30000);
}

function atualizarGraficoDinheiro(dados, perdaDinheiro) {


    fetch(`/medidas/tempo-real2`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {
                obterDadosDinheiro();
                console.log(`data recebidos: ${JSON.stringify(novoRegistro)}`);
                console.log(`data atuais do gráfico:`);
                console.log(dados);
                console.log(dados);


                if (novoRegistro[0].momento_grafico == dados.labels[dados.labels.length - 1]) {
                    console.log("---------------------------------------------------------------")
                    console.log("Como não há dados novos para captura, o gráfico não atualizará.")
                    console.log("Horário do novo dado capturado:")
                    console.log(novoRegistro[0].momento_grafico)
                    console.log("Horário do último dado capturado:")
                    console.log(dados.labels[dados.labels.length - 1])
                    console.log("---------------------------------------------------------------")
                } else {
                    // tirando e colocando valores no gráfico
                    dados.labels.shift(); // apagar o primeiro
                    dados.labels.push(novoRegistro[0].momento_grafico); // incluir um novo momento

                    dados.datasets[1].data.shift();  // apagar o primeiro de umidade
                    dados.datasets[1].data.push(novoRegistro[0].total); // incluir uma nova medida de umidade

                    dados.datasets[0].data.shift();  // apagar o primeiro de temperatura
                    dados.datasets[0].data.push(novoRegistro[0].perda); // incluir uma nova medida de temperatura

                    perdaDinheiro.update();
                }
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacaoDinheiro =
                    setTimeout(() => atualizarGraficoDinheiro(dados, perdaDinheiro), 30000);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
            proximaAtualizacaoDinheiro =
                setTimeout(() => atualizarGraficoDinheiro(dados, perdaDinheiro), 30000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

    setTimeout(() => atualizarGraficoDinheiro(dados, perdaDinheiro), 30000);
}




// grafico donnuts

let proximaAtualizacaoTomates;
function obterDadosTomates() {
    if (proximaAtualizacaoTomates != undefined) {
        clearTimeout(proximaAtualizacaoTomates);
    }
    fetch(`/medidas/medidasDonnut`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`data recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGraficoDonnut(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos data p/ gráfico: ${error.message}`);
        });
}

function plotarGraficoDonnut(resposta) {

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - data
    /* -- chartDonnut -- */
    let dados = {
        labels: ['Mantidos', 'Perda'],
        datasets: [{
            label: "perda",
            fill: false,
            data: [],
            backgroundColor: ['#ff7f7f'],
            borderColor: '#ff3232',
        }]
    };


    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosTomates" e passados para "plotarGraficoDinheiro":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        /*para ver temperature basta trocar para umidade ex dados.datasets[0].data.push(registro.umidade);*/
        dados.datasets[0].data.push(registro.mantidos);
        dados.datasets[0].data.push(registro.perda);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config
    const configDonnut = {
        type: 'doughnut',
        data: dados,
        options: {

            plugins: {
                title: {
                    display: true,
                    text: 'Perda de tomates durante o transporte',
                    color: '#ff7782',
                    font: {
                        size: 16,
                        weight: 'bold',
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    },
                }, legend: {
                    labels: {
                        display: true,
                        color: '#36a2eb',
                        font: {
                            size: 14,
                            weight: 'bold',
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        }
                    }
                },
            }
        }
    };



    // Adicionando gráfico criado em div na tela
    var contextochartDonnut = document.getElementById('chartDonnut').getContext('2d');
    contextochartDonnut.canvas.width = 200;
    contextochartDonnut.canvas.height = 100;
    var chartDonnut = new Chart(document.getElementById('chartDonnut').getContext('2d'),
        configDonnut
    );
    setTimeout(() => atualizarGraficoTomates(dados, chartDonnut), 30000);
}

function atualizarGraficoTomates(dados, chartDonnut) {


    fetch(`/medidas/medidasTempoRealDonnut`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {
                obterDadosTomates();
                console.log(`data recebidos: ${JSON.stringify(novoRegistro)}`);
                console.log(`data atuais do gráfico:`);
                console.log(dados);
                console.log(dados);

                if (novoRegistro[0] == dados.labels[dados.labels.length - 1]) {
                    console.log("---------------------------------------------------------------")
                    console.log("Como não há dados novos para captura, o gráfico não atualizará.")
                    console.log("Horário do novo dado capturado:")
                    console.log(novoRegistro[0].momento_grafico)
                    console.log("Horário do último dado capturado:")
                    console.log(dados.labels[dados.labels.length - 1])
                    console.log("---------------------------------------------------------------")
                } else {
                    // tirando e colocando valores no gráfico
                    dados.labels.shift(); // apagar o primeiro

                    dados.datasets[0].data.shift();  // apagar o primeiro de umidade
                    dados.datasets[0].data.push(novoRegistro[0].mantidos); // incluir uma nova medida de umidade

                    dados.datasets[0].data.shift();  // apagar o primeiro de temperatura
                    dados.datasets[0].data.push(novoRegistro[0].perda); // incluir uma nova medida de temperatura

                    chartDonnut.update();
                }
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacaoTomates =
                    setTimeout(() => atualizarGraficoTomates(dados, chartDonnut), 30000);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
            proximaAtualizacaoTomates =
                setTimeout(() => atualizarGraficoTomates(dados, chartDonnut), 30000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

    setTimeout(() => atualizarGraficoTomates(dados, chartDonnut), 30000);
}




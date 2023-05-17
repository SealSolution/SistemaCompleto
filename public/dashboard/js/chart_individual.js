/* chart donnut tela funcionario */
const data_funcionario_Donnut = {
    labels: [
        'Ativos',
        'Ausente',
        
    ],
    datasets: [{
        label: 'Total de funcionários',
        data: [3, 1],
        backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)'
        ],
        hoverOffset: 4
    }]
};
const funcionario_Donnut = {
    type: 'doughnut',
    data: data_funcionario_Donnut,
    options: {

        plugins: {
            title: {
                display: true,
                text: 'Total de funcionários',
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

const func_donnut = new Chart(
    document.getElementById('Donnut_funcionario'),
    funcionario_Donnut
);



/* chart donnut tela caminhao */
const data_caminhao_Donnut = {
    labels: [
        'Ativos',
        'Manutenção',
        'Garagem',
        
    ],
    datasets: [{
        label: 'Total de funcionários',
        data: [2, 1,5],
        backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};
const caminhao_Donnut = {
    type: 'doughnut',
    data: data_caminhao_Donnut,
    options: {

        plugins: {
            title: {
                display: true,
                text: 'Total de Caminhões',
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

const camin_donnut = new Chart(
    document.getElementById('Donnut_caminhao'),
    caminhao_Donnut
);
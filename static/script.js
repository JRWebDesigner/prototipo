function updateCode() {
    const nameSelect = document.getElementById('name');
    const codeInput = document.getElementById('code');
    const codes = {
        "PCR": "PCR001",
        "Antígeno": "ANT002",
        "Anticuerpos": "ANT003"
    };
    const selectedName = nameSelect.value;
    codeInput.value = codes[selectedName] || '';
}

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('graficaEstadoAdmin');
    if (!ctx) {
        console.error("No se encontró el elemento con id 'graficaEstadoAdmin'");
        return;
    }
    const canvasContext = ctx.getContext('2d'); 
    const pacientes_por_estado = [
        { tipo_prueba: 'Prueba 1', cantidad: 12 },
        { tipo_prueba: 'Prueba 2', cantidad: 19 },
        { tipo_prueba: 'Prueba 3', cantidad: 3 },
        { tipo_prueba: 'Prueba 4', cantidad: 5 }
    ];

    const tiposPrueba = pacientes_por_estado.map(estado => estado.tipo_prueba);
    const cantidadesPacientes = pacientes_por_estado.map(estado => estado.cantidad);
    const graficaEstadoAdmin = new Chart(canvasContext, {
        type: 'bar',
        data: {
            labels: tiposPrueba,
            datasets: [{
                label: 'Cantidad de Pacientes',
                data: cantidadesPacientes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `Pacientes: ${tooltipItem.raw}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Cantidad de Pacientes'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Tipo de Prueba'
                    }
                }
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Carregando o Google Charts
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    // Função para desenhar o gráfico
    function drawChart() {
        // Verificação se a função está sendo chamada
        console.log('Desenhando gráfico');

        var data = google.visualization.arrayToDataTable([
            ['Aluno', 'Nota'],
            ['Aluno 1', 85],
            ['Aluno 2', 90],
            ['Aluno 3', 75],
            ['Aluno 4', 60],
            ['Aluno 5', 95],
            ['Aluno 6', 80],
            ['Aluno 7', 70],
            ['Aluno 8', 88],
            ['Aluno 9', 92],
            ['Aluno 10', 65],
            ['Aluno 11', 78],
            ['Aluno 12', 83],
            ['Aluno 13', 95],
            ['Aluno 14', 87],
            ['Aluno 15', 72],
            ['Aluno 16', 68],
            ['Aluno 17', 90],
            ['Aluno 18', 79],
            ['Aluno 19', 84],
            ['Aluno 20', 91],
            ['Aluno 21', 76],
            ['Aluno 22', 73],
            ['Aluno 23', 85],
            ['Aluno 24', 94],
            ['Aluno 25', 82],
            ['Aluno 26', 77],
            ['Aluno 27', 89],
            ['Aluno 28', 81],
            ['Aluno 29', 93],
            ['Aluno 30', 69]
            
]);

        var options = {
            title: 'Notas dos Alunos',
            hAxis: {title: 'Aluno', titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (role === 'instrutor') {
        window.location.href = 'instrutor.html';
    } else if (role === 'aluno') {
        window.location.href = 'aluno.html';
    }
});

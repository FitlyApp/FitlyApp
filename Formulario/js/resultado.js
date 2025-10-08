document.addEventListener('DOMContentLoaded', function() {
    const dados = JSON.parse(localStorage.getItem('dadosFitly'));

    if (!dados) {
        document.querySelector('h1').textContent = "Erro!";
        document.querySelector('.etapa').textContent = "Dados não encontrados. Por favor, preencha o formulário novamente.";
        return;
    }

    const { idade, sexo, altura, peso, atividade, objetivo, fds, condicao, nome, dieta, motivacao } = dados;

    let geb = 0;
    if (sexo === 'masculino') {
        geb = 66.5 + (13.75 * peso) + (5.003 * altura) - (6.775 * idade);
    } else if (sexo === 'feminino') {
        geb = 655.1 + (9.563 * peso) + (1.850 * altura) - (4.676 * idade);
    }

    const multiplicadores = { sedentario: 1.2, leve: 1.375, moderado: 1.55, muito_ativo: 1.725 };
    const gastoTotal = geb * multiplicadores[atividade];

    let metaCaloricaBase = gastoTotal;
    if (objetivo === 'perder_gordura') {
        metaCaloricaBase -= 500;
    } else if (objetivo === 'ganhar_massa') {
        metaCaloricaBase += 500;
    }

    const totalSemanal = metaCaloricaBase * 7;
    let caloriasSemana = metaCaloricaBase;
    let caloriasFds = metaCaloricaBase;

    const diasFdsMap = { nao: 0, apenas_sabado: 1, sabado_domingo: 2, sexta_sabado_domingo: 3 };
    const numDiasFds = diasFdsMap[fds] || 0;

    if (numDiasFds > 0) {
        caloriasSemana = totalSemanal / (7 + 0.15 * numDiasFds);
        caloriasFds = caloriasSemana * 1.15;
    }
    
    const carboidratos = (caloriasSemana * 0.40) / 4;
    const proteinas = (caloriasSemana * 0.30) / 4;
    const gorduras = (caloriasSemana * 0.30) / 9;

    document.getElementById('resultado-calorias').textContent = Math.round(caloriasSemana);
    document.getElementById('resultado-fds').textContent = Math.round(caloriasFds);
    document.getElementById('resultado-proteinas').textContent = Math.round(proteinas) + 'g';
    document.getElementById('resultado-carboidratos').textContent = Math.round(carboidratos) + 'g';
    document.getElementById('resultado-gorduras').textContent = Math.round(gorduras) + 'g';

    const listaDados = document.getElementById('lista-dados');
    const dadosParaExibir = {
        'Nome': nome,
        'Idade': `${idade} anos`,
        'Sexo': sexo,
        'Altura': `${altura} cm`,
        'Peso': `${peso} kg`,
        'Nível de Atividade': atividade.replace('_', ' '),
        'Objetivo': objetivo.replace('_', ' '),
        'Dieta': dieta,
        'Motivação': motivacao
    };

    listaDados.innerHTML = ''; // Limpa a lista antes de adicionar
    for (const [chave, valor] of Object.entries(dadosParaExibir)) {
        if (valor) {
            const p = document.createElement('p');
            p.innerHTML = `<strong>${chave}:</strong> ${valor}`;
            listaDados.appendChild(p);
        }
    }

    const disclaimerP = document.getElementById('disclaimer-text');
    if (condicao === 'sim') {
        disclaimerP.innerHTML = "<strong>Atenção:</strong> Como você indicou possuir uma condição de saúde, os valores calculados são apenas uma estimativa. É <strong>essencial</strong> que procure um médico ou nutricionista antes de iniciar qualquer plano.";
        disclaimerP.style.color = '#d9534f';
    } else {
        disclaimerP.textContent = "Atenção: Este é um valor estimado. Para um plano alimentar preciso, consulte um nutricionista.";
    }
});
function salvarEtapa(pagina) {
  const dadosFitly = JSON.parse(localStorage.getItem("dadosFitly")) || {};
  let dadosValidos = true;

  if (pagina === 1) {
    const nome = document.getElementById("nome")?.value;
    const idade = document.getElementById("idade")?.value;
    const sexo = document.querySelector('input[name="sexo"]:checked');

    if (!nome || !idade || !sexo) {
      alert("Por favor, preencha todos os campos antes de continuar.");
      dadosValidos = false;
    } else {
      const idadeNum = parseInt(idade);
      if (isNaN(idadeNum) || idadeNum < 14 || idadeNum > 120) {
        alert("Por favor, insira uma idade válida de no mínimo 14 anos");
        dadosValidos = false;
      } else {
        dadosFitly.nome = nome;
        dadosFitly.idade = idade;
        dadosFitly.sexo = sexo.value;
      }
    }
  } else if (pagina === 2) {
    const altura = document.getElementById("altura")?.value;
    const peso = document.getElementById("peso")?.value;

    if (!altura || !peso) {
      alert("Por favor, preencha todos os campos antes de continuar.");
      dadosValidos = false;
    } else {
      const pesoNum = parseFloat(peso);
      if (isNaN(pesoNum) || pesoNum < 20 || pesoNum > 1000) {
        alert("Por favor, insira um peso válido entre 20 e 1000 kg.");
        dadosValidos = false;
      } else {
        dadosFitly.altura = altura;
        dadosFitly.peso = peso;
      }
    }
  } else if (pagina === 3) {
    const atividade = document.querySelector('input[name="atividade"]:checked');
    if (!atividade) {
      alert("Por favor, selecione seu nível de atividade.");
      dadosValidos = false;
    } else {
      dadosFitly.atividade = atividade.value;
    }
  } else if (pagina === 4) {
    const objetivo = document.querySelector('input[name="objetivo"]:checked');
    if (!objetivo) {
      alert("Por favor, selecione seu objetivo.");
      dadosValidos = false;
    } else {
      dadosFitly.objetivo = objetivo.value;
    }
  } else if (pagina === 5) {
    const fds = document.querySelector('input[name="fds"]:checked');
    if (!fds) {
      alert("Por favor, selecione uma opção.");
      dadosValidos = false;
    } else {
      dadosFitly.fds = fds.value;
    }
  } else if (pagina === 6) {
    const dieta = document.querySelector('input[name="dieta"]:checked');
    if (!dieta) {
      alert("Por favor, selecione uma opção.");
      dadosValidos = false;
    } else {
      dadosFitly.dieta = dieta.value;
    }
  } else if (pagina === 7) {
    const motivacao = document.querySelector('input[name="motivacao"]:checked');
    if (!motivacao) {
      alert("Por favor, selecione uma opção.");
      dadosValidos = false;
    } else {
      dadosFitly.motivacao = motivacao.value;
    }
  } else if (pagina === 8) {
    const condicao = document.querySelector('input[name="condicao"]:checked');
    if (!condicao) {
      alert("Por favor, selecione uma opção.");
      dadosValidos = false;
    } else {
      dadosFitly.condicao = condicao.value;
    }
  }

  if (dadosValidos) {
    localStorage.setItem("dadosFitly", JSON.stringify(dadosFitly));
    return true;
  }

  return false;
}

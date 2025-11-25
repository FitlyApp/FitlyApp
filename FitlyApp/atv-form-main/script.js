

let dadosPessoa = {
    nome: "",
    sexo: "",
    idade: 0,
    peso: 0,
    altura: 0,
    frequenciaExe: "",
    objetivo: "",
    habitoFDS: "", // HABITO FINAL DE SEMANA, E NÃO HABITO FODASE
    dieta: "",
    email: "",
    condicaoMedica: false,
    motivacao: ""
}
// Aqui a gente armazená todos as informações, para depois também jogar no email da pessoa;
const pag1 = document.querySelector("section.pag1");
const pag2 = document.querySelector("section.pag2");
const pag3 = document.querySelector("section.pag3");
const pag4 = document.querySelector("section.pag4");
const pag5 = document.querySelector("section.pag5");
const pag6 = document.querySelector("section.pag6");
const pag7 = document.querySelector("section.pag7");
const pag8 = document.querySelector("section.pag8");
const pag9 = document.querySelector("section.pag9");
// QUEM FOI QUE USOU ARROW FUNCTION?????
const vaiPagina2 = () => {
    dadosPessoa.nome = document.getElementById('nome').value;
    dadosPessoa.idade = parseInt(document.getElementById('idade').value);
    dadosPessoa.sexo = document.querySelector('section.pag1 input:checked ').value;
    if (dadosPessoa.nome !== "" && dadosPessoa.nome != null && !isNaN(dadosPessoa.idade) && dadosPessoa.idade > 0 && dadosPessoa.idade < 250) {
        pag1.style.display = "none";
        pag2.style.display = "block";
    } else {
        alert(`ERRO! algum dos campos possui valor inválido!`);
    }
};
const vaiPagina3 = () => {
    dadosPessoa.altura = parseInt(document.getElementById('altura').value)
    dadosPessoa.peso = parseInt(document.getElementById('peso').value)
    if (!isNaN(dadosPessoa.altura) && !isNaN(dadosPessoa.peso) && dadosPessoa.altura > 0 && dadosPessoa.altura < 300 && dadosPessoa.peso > 0 && dadosPessoa.peso < 1000) {
        pag2.style.display = "none";
        pag3.style.display = "block";
    } else {
        alert(`ERRO! Informe valores válidos!`);
    }
};

const vaiPagina4 = () => {
    switch (document.querySelector('section.pag3 label input:checked').value) {
        case "1":
            dadosPessoa.frequenciaExe = "Sedentário(a)";
            break;
        case "2":
            dadosPessoa.frequenciaExe = "Levemente ativo(a)";
            break;
        case "3":
            dadosPessoa.frequenciaExe = "Moderadamente ativo(a)";
            break;
        case "4":
            dadosPessoa.frequenciaExe = "Ativo";
            break;
    }
    pag3.style.display = "none";
    pag4.style.display = "block";
};

const vaiPagina5 = () => {
    switch (document.querySelector('section.pag4 label input:checked').value) {
        case "1":
            dadosPessoa.objetivo = "Perder gordura (Emagrecer)";
            break;
        case "2":
            dadosPessoa.objetivo = "Manter o peso (Mais saúde e disposição)"
            break;
        case "3":
            dadosPessoa.objetivo = "Ganhar massa muscular (Hipertrofia)";
            break;
    }
    pag4.style.display = "none";
    pag5.style.display = "block";
    console.log(dadosPessoa);
};

const vaiPagina6 = () => {
    switch (document.querySelector('section.pag5 input:checked').value) {
        case "1":
            dadosPessoa.habitoFDS = "Não, tenho uma rotina consistente";
            break;
        case "2":
            dadosPessoa.habitoFDS = "Sim, no Sábado e Domingo"
            break;
        case "3":
            dadosPessoa.habitoFDS = "Sim, apenas no Sábado";
            break;
        case "4":
            dadosPessoa.habitoFDS = "Sim, na sexta, Sábado e Domingo";
            break;
    }
    pag5.style.display = "none";
    pag6.style.display = "block";
};
const vaiPagina7 = () => {
    switch (document.querySelector('section.pag6 label  input:checked').value) {
        case "1":
            dadosPessoa.dieta = "Nenhuma específica (Onívoro)";
            break;
        case "2":
            dadosPessoa.dieta = "Vegetariana"
            break;
        case "3":
            dadosPessoa.dieta = "Vegana"
            break;
    };
    pag6.style.display = "none";
    pag7.style.display = "block";
};
const vaiPagina8 = () => {
    switch (document.querySelector('section.pag7 label input:checked')){
        case "1":
            dadosPessoa.motivacao = "Melhorar a saúde e bem-estar"
            break;
        case "2": 
            dadosPessoa.motivacao = "Estética e autoconfiança"
            break;
        case "3": 
            dadosPessoa.motivacao = "Mais energia e disposição"
            break;
    }
    pag7.style.display = "none";
    pag8.style.display = "block";
};
const vaiPagina9 = () => {
    if (document.querySelector('section.pag8 label input:checked' == "2")) {
        dadosPessoa.condicaoMedica = false;
    }
    pag8.style.display = "none";
    pag9.style.display = "block";
};

      const dadosPessoa = {
        nome: "",
        sexo: "",
        idade: 0,
        peso: 0,
        altura: 0,
        email: ""
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
        pag2.style.display = "none";
        estudante = document.querySelector(".pag2 input").value;
        pag3.style.display = "block"; 
      };

      const vaiPagina4 = () => {
        pag3.style.display = "none";
        pag4.style.display = "block";
        turma = document.querySelector(".pag3 select").value;
        document.querySelector(".pag4 p span").innerHTML = turma;
      };
      const vaiPagina5 = () => {
        pag4.style.display = "none";
        pag5.style.display = "block";
      };
      const vaiPagina6 = () => {
        pag5.style.display = "none";
        pag6.style.display = "block";
      };
      const vaiPagina7 = () => {
        pag6.style.display = "none";
        pag7.style.display = "block";
      };
      const vaiPagina8 = () => {
        pag7.style.display = "none";
        pag8.style.display = "block";
      };
      const vaiPagina9 = () => {
        pag8.style.display = "none";
        pag9.style.display = "block";
      };
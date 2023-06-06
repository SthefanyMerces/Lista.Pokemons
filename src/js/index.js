
alert("Bem vindo(a) á minha Póke Lista")
const botaoAlterarTema = document.getElementById("botao-alterar-tema");


const body = document.querySelector("body");


const imagembotaoTrocaDeTema = document.querySelector(".imagem-botao")


botaoAlterarTema.addEventListener("click", () => {


    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
body.classList.toggle("modo-escuro")
    if (modoEscuroEstaAtivo) {
body.classList.remove("modo-escuro")

        imagembotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    
    } else {

        body.classList.add("modo-escuro")
        imagembotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")

    }



});

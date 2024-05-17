let menu = document.getElementById("menu")
let iconebarras = document.getElementById("icone-barras")
let iconex = document.getElementById("icone-x")

function abrirFecharMenu() {
    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")
        iconex.style.display = "inline"
        iconebarras.style.display = "none"
    }

    else {
        menu.classList.add("menu-fechado")

        iconex.style.display = "none"
        iconebarras.style.display = "inline"

    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconex.style.display = "inline"
    iconebarras.style.display = "none"
}

let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

let slideAtual = 0

let numeroSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])

function mostrarProximoSlide() {

    banner.classList.remove(slides[slideAtual])

    if ((slideAtual < numeroSlides - 1)) {
        slideAtual++
    }
    else {
        slideAtual = 0
    }

    banner.classList.add(slides[slideAtual])

}

function mostrarSlideAnterior() {

    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0) {
        slideAtual--
    }
    else {
        slideAtual = numeroSlides - 1
    }


    banner.classList.add(slides[slideAtual])

}

const selecionarSlide = (indiceSlide) => {
    slides.forEach(slide => banner.classList.remove(slide))

    slideAtual = indiceSlide

    banner.classList.add(slides[indiceSlide])
}

let listaCases = []

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    // Template Strings
    let template = ""

    listaCases.forEach( cardCase => {
        template += `<div class="card">
            <img src="${cardCase.imagem}" alt="">
            <p>${cardCase.descricao}</p>
            <button>Ver mais</button>
        </div>` 
    })

    elementoLista.innerHTML = template
}

const carregarCases = () => {
    // Método HTTP GET - Read -> Leitura
    fetch("http://localhost:3000/cases")
    .then( (resposta) => resposta.json() )
    .then( (dados) => {
        listaCases = dados
        renderizarCases()
    })
    .catch( erro => console.error(erro))
}

const solicitarOrcamento = (event) => {
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value
    
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta)
        document.querySelector("#contato form").reset()
        alert("Solicitacão cadastrada")
    })
    .catch(erro => {console.error(erro)
        alert("Erro na requisicão")
    })

    event.preventDefault()
}
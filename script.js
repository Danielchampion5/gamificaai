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

let listaCases = [
    {
        imagem: "https://unsplash.it/400?image=30",
        descricao: "Uma empresa de tecnologia lanca um desafio de gamificacão onde os funcionários devem propor e implementar ideias inovadoras"
    },

    {
        imagem: "https://unsplash.it/400?image=13",
        descricao: "Uma empresa de consultoria cria uma narrativa interativa de gamificacão para seu programa de treinamento"
    },

    {
        imagem: "https://unsplash.it/400?image=20",
        descricao: "Uma empresa de vendas implementa uma competicão gamificada entre equipes que competem pelo topo do ranking"
    },

    {
        imagem: "https://unsplash.it/400?image=43",
        descricao: "Uma empresa de saude promove o bem-estar dos funcionários através de um desafio de gamificacão de condicionamento fisico"
    }
]

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    //template Strings
    let template = ""

    listaCases.forEach(cardCase => {
        template +=
            `            
        <div class="card">

        <img src="${cardCase.imagem}" alt="">

        <p>${cardCase.descricao}</p>

        <button>Ver mais</button>

        </div>
    `
    })

    elementoLista.innerHTML = template
}
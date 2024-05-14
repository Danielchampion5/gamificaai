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

function mostrarProximoSlide() 
{

    banner.classList.remove(slides[slideAtual])

    if((slideAtual < numeroSlides - 1)) {
        slideAtual++
    }
    else {
        slideAtual = 0
    }

    banner.classList.add(slides[slideAtual])

}

function mostrarSlideAnterior() 
{

    banner.classList.remove(slides[slideAtual])

    if(slideAtual>0) {
        slideAtual--
    }
    else {
        slideAtual = numeroSlides - 1
    }


    banner.classList.add(slides[slideAtual])

}
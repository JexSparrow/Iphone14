const background = document.querySelector('.polygon')
const celular = document.querySelector('.iphone')
const header = document.querySelector('#header')
const botao = document.querySelector('button')
const h1 = document.querySelector('#h1')

const red = document.querySelector('#vermelho')
const blue = document.querySelector('#azul')
const yellow = document.querySelector('#amarelo')
const black = document.querySelector('#preto')
const white = document.querySelector('#branco')
const purple = document.querySelector('#roxo')


function mudarCor(cor) {

    background.style.background = cor
    botao.style.background = cor
    h1.style.color = cor
    header.style.borderColor = cor



}

function trocarImagem(img) {
    celular.src = img


}

function trocarBoxShadow(cor) {

    if (window.innerWidth < 710) {
        botao.style.backgroundColor = cor
        celular.style.maxWidth = '50%'
        celular.style.transform = 'rotateY(180deg)'
        header.style.boxShadow = '2px 2px 10px #32393F'


    } else {

        botao.style.backgroundColor = cor
        celular.style.maxWidth = '31%'
        celular.style.transform = 'rotateY(180deg)'
        header.style.boxShadow = '2px 2px 10px #32393F'
        header.style.borderColor = cor
    }

}

function mouseD() {

    if (window.innerWidth < 710) {

        celular.style.maxWidth = '50%'
        celular.style.transform = 'rotateY(0deg)'
        header.style.boxShadow = '1px 1px 10px #DBD7D4'

    } else {

        celular.style.maxWidth = '30%'
        celular.style.transform = 'rotateY(0deg)'
        header.style.boxShadow = '1px 1px 10px #DBD7D4'

    }



}
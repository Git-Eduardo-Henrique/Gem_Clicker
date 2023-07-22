const title = document.querySelector('title')
const spanGems = document.querySelector('span#gems')
const spanClicks = document.querySelector('span#gems-per-click')
const spanClicksPS = document.querySelector('span#gems-per-second')
const imageGem = document.querySelector('img#image')

const btPoints = document.querySelector('button#points-button')
const pPrice = document.querySelector("p#button-price")
const itemCont = document.querySelector("h1#cont-item")

const pickaxeButton = document.querySelector("button#pickaxe-button")
const pPrice2 = document.querySelector("p#button-price2")
const itemCont2 = document.querySelector("h1#cont-item-2")


let gems = 0
let gemsPerSecond = 0
// botão 1
let clicks = 1
let contitem = 0
let buttonPriceBase = 10
let buttonPrice = buttonPriceBase * Math.pow(1.2, contitem)

//botao 2
let timer = 0
let buttonPriceBase2 = 15
let buttonPrice2 = buttonPriceBase2 * Math.pow(1.2, contitem)
let contitem2 = 0

// Função para aumentar os pontos ao clicar na imagem
function increasePoints() {
  gems += clicks
  gems = Number(gems.toFixed(1))
}

function updateclicks(){
    clicks += 0.1
    clicks = Number(clicks.toFixed(1))

    contitem++
    itemCont.innerHTML = contitem

    gems -= buttonPrice
    gems = Number(gems.toFixed(1))

    buttonPrice = buttonPriceBase * Math.pow(1.5, contitem)
    buttonPrice = Math.floor(buttonPrice)
    pPrice.innerHTML = `${buttonPrice} gems`
}

function clickspersecond(){
    contitem2++
    itemCont2.innerHTML = contitem2

    timer += 100
    gemsPerSecond += 0.1

    spanClicksPS.innerHTML = gemsPerSecond

    buttonPrice2 = buttonPriceBase2 * Math.pow(1.5, contitem2)
    buttonPrice2 = Math.floor(buttonPrice2)
    pPrice2.innerHTML = `${buttonPrice2} gems`

}

const loop = setInterval( () => {
    spanGems.innerHTML = gems
    spanClicks.innerHTML = clicks

    if (gems > 0){
        title.innerHTML = `${gems} gems - Gem Clicker`
    } else {
        title.innerHTML = "Gem Clicker"
    }
    
    if (gems >= buttonPrice){
        btPoints.disabled = false
    } else {
        btPoints.disabled = true
    }

    if (gems >= buttonPrice2){
        pickaxeButton.disabled = false
    } else {
        pickaxeButton.disabled = true
    }
    
})

imageGem.addEventListener('click', increasePoints);
btPoints.addEventListener('click', updateclicks);
pickaxeButton.addEventListener('click', clickspersecond)
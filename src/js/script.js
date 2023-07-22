const title = document.querySelector('title')
const spanGems = document.querySelector('span#gems')
const spanClicks = document.querySelector('span#gems-per-click')
const imageGem = document.querySelector('img#image')
const btPoints = document.querySelector('button#points-button')
const pPrice = document.querySelector("p#button-price")
const itemCont = document.querySelector("h1#cont-item")


let gems = 0
// botão 1
let clicks = 1
let contitem = 0
let buttonPriceBase = 10
let buttonPrice = buttonPriceBase * Math.pow(1.2, contitem)


// Função para aumentar os pontos ao clicar na imagem
function increasePoints() {
  gems += clicks
  gems = Number(gems.toFixed(1))
}

function updateclicks(){
    clicks += 0.1
    clicks = Number(clicks.toFixed(1))

    contitem++
    gems -= buttonPrice
    gems = Number(gems.toFixed(1))

    buttonPrice = buttonPriceBase * Math.pow(1.5, contitem)
    buttonPrice = Math.floor(buttonPrice)
    pPrice.innerHTML = `${buttonPrice} gems`
}

const loop = setInterval( () => {
    spanGems.innerHTML = gems
    spanClicks.innerHTML = clicks
    itemCont.innerHTML = contitem

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
})

imageGem.addEventListener('click', increasePoints);
btPoints.addEventListener('click', updateclicks);

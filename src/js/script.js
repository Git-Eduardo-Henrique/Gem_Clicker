const title = document.querySelector('title')
const spanGems = document.querySelector('span#gems')
const spanClicks = document.querySelector('span#gems-per-click')
const imageGem = document.querySelector('img#image')
const btPoints = document.querySelector('button#points-button')
const spanPrice = document.querySelector("span#button-price")


let gems = 0
let clicks = 1
let buttonPrice = 10

// Função para aumentar os pontos ao clicar na imagem
function increasePoints() {
  gems += clicks
}

function updateclicks(){
    clicks++
    gems -= buttonPrice

    buttonPrice *= 3.5;
    buttonPrice = Math.floor(buttonPrice)
    spanPrice.innerHTML = buttonPrice
}

const loop = setInterval( () => {
    spanGems.innerHTML = gems
    spanClicks.innerHTML = clicks

    if (gems > 0){
        title.innerHTML = `${gems} Gems - Gem Clicker`
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

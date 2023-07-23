import { createButtons, builds, deleteButtons } from "./buildings.js"

let show = 1
createButtons()

const buildings = builds()

const title = document.querySelector('title')
const spanGems = document.querySelector('span#gems')
const spanClicks = document.querySelector('span#gems-per-click')
const spanClicksPS = document.querySelector('span#gems-per-second')
const imageGem = document.querySelector('img#image')

let gems = 0
let gemsPerSecond = 0
let clicks = 1

// Função para aumentar os pontos ao clicar na imagem
function increasePoints() {
    gems += clicks 
    gems = Number(gems.toFixed(1))
}
  

export function buildings_upgrades(upgrade = Number, index = Number, up_value = Number){
    const pPrice = document.querySelector(`p#price-${index}`)
    const cont_text = document.querySelector(`h1#item-cont-${index}`)

    switch (upgrade){
        case 1:
            buildings[index].cont_item++
            cont_text.textContent = buildings[index].cont_item

            clicks += up_value
            clicks = Number(clicks.toFixed(1))

            gems -= buildings[index].price
            gems = Number(gems.toFixed(1))

            buildings[index].price = Math.floor(
                buildings[index].init_price * Math.pow(1.3, buildings[index].cont_item)
                )
            pPrice.textContent = `${buildings[index].price} gems`
            
            break
        case 2:
            buildings[index].cont_item++
            cont_text.textContent = buildings[index].cont_item

            gems -= buildings[index].price
            gems = Number(gems.toFixed(1))

            gemsPerSecond += up_value
            gemsPerSecond = Number(gemsPerSecond.toFixed(1))

            buildings[index].price = Math.floor(
                buildings[index].init_price * Math.pow(1.3, buildings[index].cont_item)
                )
            pPrice.textContent = `${buildings[index].price} gems`

            break
    }

    if (buildings[index].cont_item == 1){
        show++
    }
}

const loop = setInterval( () => {
    spanGems.textContent = gems
    spanClicks.textContent = clicks
    spanClicksPS.textContent = gemsPerSecond

    if (gems > 0){
        title.textContent = `${gems} gems - Gem Clicker`
    } else {
        title.textContent = "Gem Clicker"
    }

    // checa se o player tem gemas suficiente para cada upgrade
    for (let index = 0; index < buildings.length; index++){
        const button = document.querySelector(`button#button-${index}`)

        if (gems >= buildings[index].price){
            button.disabled = false
        } else {
            button.disabled = true
        }

        if (index >= show){
            button.style.display = "none"
        } else {
            button.style.display = ""
        }
    }
    
})

const perscond = setInterval(() => {
    gems += gemsPerSecond
    gems = Number(gems.toFixed(1))
}, 1000)


imageGem.addEventListener('click', increasePoints);
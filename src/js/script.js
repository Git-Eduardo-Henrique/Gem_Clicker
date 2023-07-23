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
  

export function buildings_upgrades(upgrade = Number, index = Number){
    switch (upgrade){
        case 1:
            const pPrice = document.querySelector(`p#price-${index}`)
            const cont_text = document.querySelector(`h1#item-cont-${index}`)

            buildings[index].cont_item++
            cont_text.textContent = buildings[index].cont_item

            if (buildings[index].cont_item == 1){
                show++
            }

            clicks += 0.1
            clicks = Number(clicks.toFixed(1))

            gems -= buildings[index].price
            gems = Number(gems.toFixed(1))

            buildings[index].price = Math.floor(
                buildings[index].init_price * Math.pow(1.5, buildings[index].cont_item)
                )
            pPrice.textContent = `${buildings[index].price} gems`
            
            break
        case 2:
            const pPrice2 = document.querySelector(`p#price-${index}`)
            const cont_text2 = document.querySelector(`h1#item-cont-${index}`)

            buildings[index].cont_item++
            cont_text2.textContent = buildings[index].cont_item

            if (buildings[index].cont_item == 1){
                show++
            } else {
                console.log("não é")
            }

            gems -= buildings[index].price
            gems = Number(gems.toFixed(1))

            buildings[index].price = Math.floor(
                buildings[index].init_price * Math.pow(1.5, buildings[index].cont_item)
                )
            pPrice2.textContent = `${buildings[index].price} gems`

            break
    }
}

const loop = setInterval( () => {
    spanGems.innerHTML = gems
    spanClicks.innerHTML = clicks

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
imageGem.addEventListener('click', increasePoints);

// function clickspersecond(){
//     contitem2++
//     itemCont2.innerHTML = contitem2

//     timer += 100
//     gemsPerSecond += 0.1

//     spanClicksPS.innerHTML = gemsPerSecond

//     buttonPrice2 = buttonPriceBase2 * Math.pow(1.5, contitem2)
//     buttonPrice2 = Math.floor(buttonPrice2)
//     pPrice2.innerHTML = `${buttonPrice2} gems`

// }

// if (gems >= buttonPrice){
    //     btPoints.disabled = false
    // } else {
    //     btPoints.disabled = true
    // }

    // if (gems >= buttonPrice2){
    //     pickaxeButton.disabled = false
    // } else {
    //     pickaxeButton.disabled = true
    // }
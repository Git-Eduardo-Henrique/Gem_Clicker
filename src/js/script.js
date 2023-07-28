import { createButtons, builds} from "./buildings.js"
import { updateStatistics, increaseStats } from "./stats.js"

createButtons()

const buildings = builds()

const title = document.querySelector('title')
const spanGems = document.querySelector('span#gems')
const spanClicks = document.querySelector('span#gems-per-click')
const spanClicksPS = document.querySelector('span#gems-per-second')
const imgGem = document.querySelector('img#image')

let gems = 0
let gemsPerSecond = 0
let clicks = 1  // 

let show = 1  // 

function increasePoints() {
    gems += clicks
    gems = Number(gems.toFixed(1))

    increaseStats(clicks)
}
  

export function buildings_upgrades(upgrade = Number, index = Number, up_value = Number){
    const pPrice = document.querySelector(`p#price-${index}`)
    const cont_text = document.querySelector(`h1#item-cont-${index}`)

    buildings[index].cont_item++
    cont_text.textContent = buildings[index].cont_item

    increaseStats(0, true)

    if (buildings[index].cont_item == 1){
        show++
    }

    gems -= buildings[index].price
    gems = Number(gems.toFixed(1))

    buildings[index].price = Math.floor(
        buildings[index].init_price * Math.pow(1.151, buildings[index].cont_item)
        )
    pPrice.textContent = `${buildings[index].price} gems`

    switch (upgrade){
        case "click":
            clicks += up_value
            clicks = Number(clicks.toFixed(1))
            
            break
        case "persecond":
            gemsPerSecond += up_value
            gemsPerSecond = Number(gemsPerSecond.toFixed(1))

            break
    }
}

function checkbuilds(){
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
}

setInterval( () => {
    spanGems.textContent = gems
    spanClicks.textContent = clicks
    spanClicksPS.textContent = gemsPerSecond

    if (gems > 0){
        title.textContent = `${gems} gems - Gem Clicker`
    } else {
        title.textContent = "Gem Clicker"
    }

    checkbuilds()
    updateStatistics(gems, clicks, gemsPerSecond)
})

setInterval(() => {
    gems += gemsPerSecond
    gems = Number(gems.toFixed(1))

    increaseStats(gemsPerSecond)
}, 1000)

imgGem.addEventListener('click', increasePoints);
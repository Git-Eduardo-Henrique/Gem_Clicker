import { createButtons, builds} from "./buildings.js"
import { updateStatistics, increaseStats } from "./stats.js"

const title = document.querySelector('title')
const spanGems = document.querySelector('span#gems')
const spanClicksPS = document.querySelector('span#gems-per-second')
const imgGem = document.querySelector('img#image')

const buildings = builds()
createButtons()

let gems = 0
let gemsPerSecond = 0
let clicks = 1

let show = 1

function increasePoints(value = 0) {
    gems += value
    gems = Number(gems.toFixed(1))
}
  
export function buildings_upgrades(upgrade = Number, index = Number, up_value = Number){
    const pPrice = document.querySelector(`p#price-${index}`)
    const cont_text = document.querySelector(`h1#item-cont-${index}`)

    buildings[index].cont_item++
    cont_text.textContent = buildings[index].cont_item

    // Increase the building's statistics
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

function checkname(){
    if (gems > 0){
        title.textContent = `${gems} gems - Gem Clicker`
    } else {
        title.textContent = "Gem Clicker"
    }
}

const mainloop = setInterval( () => {
    spanGems.textContent = gems

    updateStatistics(clicks, gemsPerSecond)
    checkbuilds()
    checkname()
})

// gems per second loop
const gpsloop = setInterval(() => {
    increasePoints(gemsPerSecond)
    increaseStats(gemsPerSecond)
}, 1000)

imgGem.addEventListener('click', () => {
    increasePoints(clicks)
    increaseStats(clicks, false, true)
});
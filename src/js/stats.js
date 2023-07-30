const smallGemsAllTime = document.querySelector("small#stats-gems-at")
const smallGemsPerSecond = document.querySelector("small#stats-gems-ps")
const smallGemsPerClick = document.querySelector("small#stats-gems-pc")
const smallGemClicks = document.querySelector("small#stats-gems-c")
const smallBuildingsOwned = document.querySelector("small#stats-buildings-owned")

let gemsAllTime = 0
let gem_clicks = 0
let buildings_owned = 0

export function updateStatistics(gems_pc, gems_ps){
    smallGemsPerClick.textContent = gems_pc
    smallGemsPerSecond.textContent = gems_ps
    smallGemsAllTime.textContent = gemsAllTime
    smallGemClicks.textContent = gem_clicks
    smallBuildingsOwned.textContent = buildings_owned
}

export function increaseStats(gems_at = 0, increase_bo = false, increase_gc = false){
    gemsAllTime += gems_at
    gemsAllTime = Number(gemsAllTime.toFixed(1))

    if (increase_bo){
        buildings_owned++
    }

    if (increase_gc){
        gem_clicks++
    }
}
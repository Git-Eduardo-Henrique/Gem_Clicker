const smallGems = document.querySelector("small#stats-gems")
const smallGemsAllTime = document.querySelector("small#stats-gems-at")
const smallGemsPerSecond = document.querySelector("small#stats-gems-ps")
const smallGemsPerClick = document.querySelector("small#stats-gems-pc")
const smallBuildingsOwned = document.querySelector("small#stats-buildings-owned")

let gemsAllTime = 0
let buildings_owned = 0

export function updateStatistics(gems_pc, gems_ps){
    smallGemsPerClick.textContent = gems_pc
    smallGemsPerSecond.textContent = gems_ps
    smallGemsAllTime.textContent = gemsAllTime
    smallBuildingsOwned.textContent = buildings_owned
}

export function increaseStats(gems_at = 0, increase_bo = false){
    gemsAllTime += gems_at
    gemsAllTime = Number(gemsAllTime.toFixed(0))

    if (increase_bo){
        buildings_owned++
    }
}
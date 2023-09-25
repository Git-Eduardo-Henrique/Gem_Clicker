const smallGemsAllTime = document.querySelector("small#stats-gems-at")
const smallGemsPerSecond = document.querySelector("small#stats-gems-ps")
const smallGemsPerClick = document.querySelector("small#stats-gems-pc")
const smallGemClicks = document.querySelector("small#stats-gems-c")
const smallBuildingsOwned = document.querySelector("small#stats-buildings-owned")
const smallRunningTime = document.querySelector("small#stats-running-time")

let gemsAllTime = 0
let gem_clicks = 0
let buildings_owned = 0
const tempoInicio = new Date()

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

const runningTimeLoop = setInterval(() => {
    const Agora = new Date()
    const diferenca = Agora - tempoInicio

    let segundosTotais = Math.floor(diferenca / 1000)

    const num_horas = Math.floor(segundosTotais / 3600)
    segundosTotais %= 3600;
  
    const num_minutos = Math.floor(segundosTotais / 60)
    const num_segundos = segundosTotais % 60

    const str_horas = num_horas.toString().padStart(2, "0")
    const str_minutos = num_minutos.toString().padStart(2, "0")
    const str_segundos = num_segundos.toString().padStart(2, "0")

    smallRunningTime.textContent = `${str_horas}:${str_minutos}:${str_segundos}`
}, 1000)
import { return_buildings } from "./buildings.js"

const buildings = return_buildings()

{/* <button id="points-button" class="btpoints">
    <div class="button-img-info">
        <img src="src/images/icons/store-items/miner.png" alt="add-click">
        <div class="btpoints-info">
            <h1>Miner +1/s</h1>
            <p id="button-price">100 gems</p> 
        </div>
    </div>
    <h1 id="cont-item" class="cont-item">0</h1>
</button> */}
export function createButtons(show){
    const store = document.querySelector("div.store")

    for (let index = 0; index < show; index++){
    
        const button = document.createElement("button")
        button.setAttribute("class", "btBuilds")

        const itemCont = document.createElement("h1") 
        itemCont.setAttribute("class", "cont-item")
        itemCont.textContent = buildings[index].cont_item

        // div principal
        const div_img_info = document.createElement("div")
        div_img_info.setAttribute("class", "button-img-info")

        const img = document.createElement("img")
        img.src = buildings[index].image_src
        img.alt = "img-build"

        //div interna
        const div_desc = document.createElement("div")
        div_desc.setAttribute("class", "btBuilds-info")

        const h1_desc = document.createElement("h1")
        h1_desc.textContent = buildings[index].description

        const pPrice = document.createElement("p")
        pPrice.textContent = buildings[index].show_price
    
        div_desc.append(h1_desc, pPrice)
        div_img_info.append(img, div_desc)
        button.append(div_img_info, itemCont)
        store.append(button)
    }
}

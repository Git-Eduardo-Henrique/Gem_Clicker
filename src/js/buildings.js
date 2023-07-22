import { buildings_upgrades } from "./script.js"

const buildings = [
    {
        description : "Click +0.1",
        image_src : "src/images/icons/store-items/cursor.png",
        show_price : "5 gems",
        init_price: 5,
        price: 5,
        cont_item : 0,
        func: 1
    },
    {
        description : "Pickaxe +0.1/s",
        image_src : "src/images/icons/store-items/pickaxe.png",
        show_price : "15 gems",
        init_price: 15,
        price: 15,
        cont_item : 0,
        func: 2
    },
    {
        description : "Miner +1/s",
        image_src : "src/images/icons/store-items/miner.png",
        show_price : "100 gems",
        init_price: 100,
        price: 100,
        cont_item : 0,
        func: 2
    },
]

export function builds(){
    return buildings
}

export function createButtons(show){
    const store = document.querySelector("div.store")

    for (let index = 0; index < show; index++){
    
        const created_button = document.createElement("button")
        created_button.setAttribute("id", `button-${index}`)
        created_button.setAttribute("class", "btBuilds")

        const itemCont = document.createElement("h1") 
        itemCont.setAttribute("class", "cont-item")
        itemCont.setAttribute("id", `item-cont-${index}`)
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
        pPrice.setAttribute("id", `price-${index}`)
        pPrice.textContent = buildings[index].show_price
        
        div_desc.append(h1_desc, pPrice)
        div_img_info.append(img, div_desc)
        created_button.append(div_img_info, itemCont)
        store.append(created_button)

        created_button.addEventListener("click", () => {
            buildings_upgrades(buildings[index].func, index)
        })

        created_button.disabled = true
    }
}
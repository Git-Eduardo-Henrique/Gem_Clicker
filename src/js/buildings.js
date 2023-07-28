import { buildings_upgrades } from "./script.js"

const buildings = [
    {
        description : "Click +0.1",
        image_src : "src/images/icons/store-items/cursor.png",
        show_price : "5 gems",
        init_price: 5,
        price: 5,
        up_value: 0.1,
        cont_item : 0,
        func: "click"
    },
    {
        description : "Pickaxe +0.1/s",
        image_src : "src/images/icons/store-items/pickaxe.png",
        show_price : "15 gems",
        init_price: 15,
        price: 15,
        up_value: 0.1,
        cont_item : 0,
        func: "persecond"
    },
    {
        description : "Miner +1/s",
        image_src : "src/images/icons/store-items/miner.png",
        show_price : "100 gems",
        init_price: 100,
        price: 100,
        up_value: 1,
        cont_item : 0,
        func: "persecond"
    },
    {
        description : "Minecart +8/s",
        image_src : "src/images/icons/store-items/minecart.png",
        show_price : "1100 gems",
        init_price: 1100,
        price: 1100,
        up_value: 8,
        cont_item : 0,
        func: "persecond"
    },
    {
        description : "Mine +47/s",
        image_src : "src/images/icons/store-items/cave.png",
        show_price : "12000 gems",
        init_price: 12000,
        price: 12000,
        up_value: 47,
        cont_item : 0,
        func: "persecond"
    },
    {
        description : "Extraction +260/s",
        image_src : "src/images/icons/store-items/extraction.png",
        show_price : "130000 gems",
        init_price: 130000,
        price: 130000,
        up_value: 260,
        cont_item : 0,
        func: "persecond"
    },
    {
        description : "Exportation +1,400/s",
        image_src : "src/images/icons/store-items/exportation.png",
        show_price : "1400000 gems",
        init_price: 1400000,
        price: 1400000,
        up_value: 1400,
        cont_item : 0,
        func: "persecond"
    },
]

export function builds(){
    return buildings
}

export function createButtons(){
    const store = document.querySelector("section#store-column")

    for (let index = 0; index < buildings.length; index++){
    
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
            buildings_upgrades(buildings[index].func, index, buildings[index].up_value)
        })
    }
}
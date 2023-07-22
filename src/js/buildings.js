const buildings = [
    {
        id: 0,
        description : "Click +0.1",
        image_src : "src/images/icons/store-items/cursor.png",
        show_price : "5 gems",
        init_price: 5,
        price: 5,
        cont_item : 0,
        func: 1
    },
    {
        id: 1,
        description : "Pickaxe +0.1/s",
        image_src : "src/images/icons/store-items/pickaxe.png",
        show_price : "15 gems",
        init_price: 15,
        price: 15,
        cont_item : 0,
        func: 2
    },
    {
        id: 1,
        description : "Miner +1/s",
        image_src : "src/images/icons/store-items/miner.png",
        show_price : "100 gems",
        init_price: 100,
        price: 100,
        cont_item : 0,
        func: 2
    },
]
export function buildings_upgrades(gems, ){

}

export function return_buildings(){
    return buildings
}
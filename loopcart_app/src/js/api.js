export const products = [
    {
        id: 1,
        title: "Blueberry Pack",
        img: "src/imgs/blueberries.jpg",
        source: "Charmington Farms",
        price: 3.00,
        discount: "$3.50",
        color: "mint",
        size: "2 oz"
    },
    {
        id: 2,
        title: "Strawberry Pack",
        img: "src/imgs/strawberries.jpeg",
        source: "Charmington Farms",
        price: 3.50,
        discount: "",
        color: "mint",
        size: "2 oz"
    },
    {
        id: 3,
        title: "Avacado",
        img: "src/imgs/avacados.jpg",
        source: "Charmington Farms",
        price: 5.50,
        discount: "",
        color: "mint",
        size: "1 lb"
    },
    {
        id: 4,
        title: "Genesis Sunscreen",
        img: "src/imgs/sunscreen.png",
        source: "Genesis Cosmetics",
        price: 4.50,
        discount: "",
        color: "blueberry",
        size: "1 ct"
    },
    {
        id: 5,
        title: "Genesis NailPolish",
        img: "src/imgs/nail-polish.jpg",
        source: "Genesis Cosmetics",
        price: 2.50,
        discount: "",
        color: "blueberry",
        size: "1 ct"
    }
]

export const shoppingLists = [
    {
        id: 1,
        name: "Appleseed Family List",
        listItems: [
            {
                category: "Produce",
                color: "mint",
                items: [
                    {quantity: 2, title: "Blueberry Pack"},
                    {quantity: 4, title: "Avacado"},
                    {quantity: 1, title: "Strawberry Pack"}
                ]
            },
            {
                category: "Snacks",
                color: "mushroom",
                items: [
                    {quantity: 1, title: "Kale Chips"},
                    {quantity: 2, title: "Charmington Vegan Cookie Pack"},
                    {quantity: 1, title: "Sillyguys Fries"}
                ]
            },
            {
                category: "Cosmetics",
                color: "blueberry",
                items: [
                    {quantity: 2, title: "Grove Body Soap (4 pack)"},
                    {quantity: 1, title: "Genesis Nail Polish"}
                ]
            }
        ]
    },
    {
        id: 2,
        name: "My List",
        listItems : [
            {
                category: "Medicine/Vitamin",
                color: "dragonfruit",
                items: [
                    {quantity: 2, title: "Brylenol"},
                    {quantity: 1, title: "Vitamin C Bottle"}
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Some Random List"
    }
]
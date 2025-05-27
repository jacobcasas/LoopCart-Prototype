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
                    {quantity: 2, title: "Blueberry Pack", img:"src/imgs/blueberries.jpg", price: 3.00, source: "Charmington Farms"},
                    {quantity: 4, title: "Avacado", img: "src/imgs/avacados.jpg", price: 5.50},
                    {quantity: 1, title: "Strawberry Pack", img: "src/imgs/strawberries.jpeg", price: 3.50}
                ]
            },
            { 
                category: "Snacks",
                color: "mushroom",
                items: [
                    {quantity: 1, title: "Kale Chips", img:"src/imgs/kale-chips.jpeg", price: 6.00},
                    {quantity: 2, title: "Charmington Vegan Cookie Pack", img:"src/imgs/vegan-cookies.jpg", price: 8.25},
                    {quantity: 1, title: "Sillyguys Fries", img:"src/imgs/fries.jpg", price: 5.50}
                ]
            },
            {
                category: "Cosmetics",
                color: "blueberry",
                items: [
                    {quantity: 2, title: "Grove Body Soap (4 pack)", img: "src/imgs/soap-bar.jpg", price: 7.00},
                    {quantity: 1, title: "Genesis Nail Polish", img: "src/imgs/nail-polish.jpg", price: 2.50}
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
                    {quantity: 2, title: "Brylenol", price: 9.00},
                    {quantity: 1, title: "Vitamin C Bottle", price:11.00}
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Some Random List"
    }
]
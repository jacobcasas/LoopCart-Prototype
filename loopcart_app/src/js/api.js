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
        price: 3.00,
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
    },
    {
        id: 6,
        title: "Apple",
        img: "src/imgs/apples.jpg",
        source: "Organic Market",
        price: .50,
        discount: "",
        color: "mint",
        size: "100 g"
    },
    {
        id: 7,
        title: "Whole Milk",
        img: "src/imgs/whole-milk.jpg",
        source: "Dairy Market",
        price: 5.00,
        discount: "",
        color: "mint",
        size: "1 gal"
    },
    {
        id: 8,
        title: "Orange Juice",
        img: "src/imgs/orange-juice.jpeg",
        source: "Fruit Juicers",
        price: 4.75,
        discount: "",
        color: "mint",
        size: "1 gal"
    },
    {
        id: 9,
        title:"Rose Wine",
        img: "src/imgs/rose-wine.jpg",
        source: "Lovely Winery",
        price: 7.99,
        discount: "10.00",
        color: "mushroom",
        size: "1 btl"
    },
    {
        id: 10,
        title: "Blackberry Pack",
        img: "src/imgs/blackberries.jpg",
        source: "Charmington Farms",
        price: 2.50,
        discount: "",
        color: "mint",
        size: "2 oz"
    },
    {
        id: 11,
        title: "Oatmilk Creamer",
        img: "src/imgs/oatmilk-creamer.jpg",
        source: "Dairy Market",
        price: 4.50,
        discount: "",
        color: "mint",
        size: "1/2 gal"
    },
    {
        id: 12,
        title: "Lavender Hand Soap",
        img: "src/imgs/lavender-handsoap.jpg",
        source: "Genesis",
        price: 6.50,
        discount: "",
        color: "blueberry",
        size: "7.5 fl oz"
    }
]

export const searchableProducts = async (query = "") => {
    const allProducts = [
        {id: 1001, title: "Apple", price: 2.50, img: "src/imgs/apples.jpg", source: "Organic Market", color: "mint", size: "100 g"},
        {id: 1002, title: "Whole Milk", price: 5.00, img: "src/imgs/whole-milk.jpg", source: "Dairy Hub", color: "mint", size: "1 gal"},
        {id: 1003, title: "Orange Juice", price: 4.75, img: "src/imgs/orange-juice.jpeg", source: "Fruit Juicers", color:"mint", size: "1 gal"}
    ];

    if (!query) return allProducts;

    return allProducts.filter(product => 
        product.title.toLowerCase().includes(query)
    );
}

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
                    {quantity: 4, title: "Avacado", img: "src/imgs/avacados.jpg", price: 5.50, source: "Charmington Farms"},
                    {quantity: 1, title: "Strawberry Pack", img: "src/imgs/strawberries.jpeg", price: 3.50, source: "Charmington Farms"}
                ]
            },
            { 
                category: "Snacks",
                color: "mushroom",
                items: [
                    {quantity: 1, title: "Kale Chips", img:"src/imgs/kale-chips.jpeg", price: 6.00, source: "The Chippers"},
                    {quantity: 2, title: "Charmington Vegan Cookie Pack", img:"src/imgs/vegan-cookies.jpg", price: 8.25, source: "Charmington Farms"},
                    {quantity: 1, title: "Sillyguys Fries", img:"src/imgs/fries.jpg", price: 5.50, source: "Sillyguys"}
                ]
            },
            {
                category: "Cosmetics",
                color: "blueberry",
                items: [
                    {quantity: 1, title: "Grove Body Soap (4 pack)", img: "src/imgs/soap-bar.jpg", price: 7.00, source: "Grove Cosmetics"},
                    {quantity: 1, title: "Genesis Nail Polish", img: "src/imgs/nail-polish.jpg", price: 2.50, source: "Genesis Cosmetics"}
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
                    {quantity: 1, title: "Vitamin C Bottle", price: 11.00}
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Some Random List"
    }
]
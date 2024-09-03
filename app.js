let products = [
    {
        id: 1,
        name: "Nike Air Force",
        image: "./assets/images/NIKEAIR.png",
        price: 10.99,
        colors: ["blanco", "negro"],
        categories: ["Lifestyle"],
        sex: ["men", "women"]
    },
    {
        id: 2,
        name: "Nike Dunk Low Retro",
        image: "./assets/images/nike_retro.png",
        price: 203.99,
        colors: ["rojo", "negro"],
        categories: ["Jordan", "Lifestyle"],
        sex: ["men", "unisex"]
    },
    {
        id: 3,
        name: "Nike P-6000",
        image: "./assets/images/WMNS.png",
        price: 109.99,
        colors: ["blanco"],
        categories: ["Lifestyle"],
        sex: ["men", "women"]
    },
    {
        id: 4,
        name: "Nike Dunk Low",
        image: "./assets/images/NIKE+DUNK+LOW+NN.png",
        price: 119.99,
        colors: ["blanco", "negro"],
        categories: ["Lifestyle"],
        sex: ["men", "women", "unisex"]
    },
    {
        id: 5,
        name: "Nike Cortez Vintage Suede",
        image: "./assets/images/W+NIKE+CORTEZ+VNTG.jpg",
        price: 143.99,
        colors: ["blanco", "negro", "cafe"],
        categories: ["Lifestyle"],
        sex: ["women", 'unisex']
    },
    {
        id: 6,
        name: "Air Jordan 1 Low",
        image: "./assets/images/AIR+JORDAN+1+LOW.png",
        price: 303.99,
        colors: ["amarillo", "negro"],
        categories: ["Lifestyle", "Jordan"],
        sex: ["men"]
    },
    {
        id: 7,
        name: "Jordan True Flight",
        image: "./assets/images/JORDAN+TRUE+FLIGHT.png",
        price: 149.99,
        colors: ["blanco", "negro"],
        categories: ["Jordan"],
        sex: ["men"]
    },
    {
        id: 8,
        name: "Jumpman MVP",
        image: "./assets/images/JORDAN+MVP.png",
        price: 169.99,
        colors: ["blanco", "negro", "amarillo"],
        categories: ["Jordan"],
        sex: ["men"]
    },
    {
        id: 9,
        name: "Air Jordan 4 RM",
        image: "./assets/images/AIR+JORDAN+4+RM.png",
        price: 169.99,
        colors: ["blanco", "negro"],
        categories: ["Jordan"],
        sex: ["men"]
    },
    {
        id: 10,
        name: "Nike Air Max Plus Premium",
        image: "./assets/images/NIKE+AIR+MAX+PLUS+PRM.png",
        price: 209.99,
        colors: ["Azul"],
        categories: ["Jordan"],
        sex: ["men"]
    },
    {
        id: 11,
        name: "Kobe 8 prtoto",
        image: "./assets/images/KOBE+VIII+PROTRO.png",
        price: 399.99,
        colors: ["Azul"],
        categories: ["Baloncesto"],
        sex: ["men"]
    },
    {
        id: 12,
        name: "Nike g.T. Cut Cross",
        image: "./assets/images/G.T.+CUT+CROSS.png",
        price: 129.99,
        colors: ["Azul"],
        categories: ["Baloncesto"],
        sex: ["men"]
    },
    {
        id: 13,
        name: "KD17 c Jonquel Jones",
        image: "./assets/images/KD17+JJ.png",
        price: 159.99,
        colors: ["Azul"],
        categories: ["Baloncesto"],
        sex: ["men"]
    },
    {
        id: 14,
        name: "Book 1 Rattlesnake",
        image: "./assets/images/BOOK+1.png",
        price: 149.99,
        colors: ["Azul"],
        categories: ["Baloncesto"],
        sex: ["men"]
    },
    {
        id: 15,
        name: "Nike Mercurial Superfly Elite Kylian Mbappe",
        image: "./assets/images/ZM+SUPERFLY+10+ELITE+KM+FG.png",
        price: 289.99,
        colors: ["Amarillo"],
        categories: ["Futbol"],
        sex: ["men"]
    },
    {
        id: 15,
        name: "Nike Phantom Luna 2 Elite",
        image: "./assets/images/PHANTOM+LUNA+II+ELITE+FG.png",
        price: 279.99,
        colors: ["azul", "rojo", 'blanco'],
        categories: ["Futbol"],
        sex: ["men", "women", "unisex"]
    },
    {
        id: 16,
        name: "Nike Phantom GX 2 Elite Electric",
        image: "./assets/images/PHANTOM+GX+II+ELITE+FG.png",
        price: 19.99,
        colors: ["azul", "rojo", 'blanco'],
        categories: ["Futbol"],
        sex: ["men", "women", "unisex"]
    },
    {
        id: 17,
        name: "Nike Metcon 9",
        image: "./assets/images/NIKE+METCON+9.png",
        price: 119.99,
        colors: ["azul", "rojo", 'blanco'],
        categories: ["Gym y training"],
        sex: ["men", "women"]
    },
    {
        id: 18,
        name: "Nike Metcon 1 OG",
        image: "./assets/images/NIKE+METCON+1+OG.png",
        price: 159.99,
        colors: ["azul", "rojo", 'blanco'],
        categories: ["Gym y training"],
        sex: ["men", "women"]
    }
    ,
    {
        id: 19,
        name: "Nike Motiva",
        image: "./assets/images/NIKE+MOTIVA.png",
        price: 109.99,
        colors: ["negro", 'blanco'],
        categories: ["Caminar"],
        sex: ["men"]
    },
    {
        id: 20,
        name: "Nike Air Monarch IV",
        image: "./assets/images/AIR+MONARCH+IV+(4E).png",
        price: 69.99,
        colors: ['negro'],
        categories: ["Caminar"],
        sex: ["men", "women"]
    }
]

const productsContainer = document.querySelector("#products");
const checkBoxSex = document.querySelectorAll(".check_box_input_sex");
const checkBoxesPrice = document.querySelectorAll(".check_box_input_price");
const listCategories = document.querySelector("#categories");

const form = document.querySelector("#form");


function renderProducts(products) {
    productsContainer.innerHTML = ""
    products.forEach((item) => {
        const article = document.createElement("article");
        article.className = "card_product";
        const image = document.createElement("img");
        image.src = item.image
        const paragraphName = document.createElement("p");
        paragraphName.textContent = item.name;
        const spanColorsCount = document.createElement("span");
        spanColorsCount.textContent = `${item.colors.length} colores`;
        const paragraphPrice = document.createElement("p");
        paragraphPrice.textContent = item.price;

        productsContainer.append(article);
        article.append(image);
        article.append(paragraphName);
        article.append(spanColorsCount);
        article.append(paragraphPrice)
    })
}


listCategories.addEventListener("click", (e) => {
    const valueFilterCategorie = e.target.closest("button").value;
    console.log(valueFilterCategorie);
    if (valueFilterCategorie === "all") {
        renderProducts(products)
    } else {
        const filterCategories = products.filter(product => product.categories.find(category => category === valueFilterCategorie))
        renderProducts(filterCategories)
    }

})

checkBoxSex.forEach(btn => {
    btn.addEventListener("click", event => {
        console.log(event.target.value);
        const value = event.target.value;
        const filterSex = products.filter(product => product.sex.find(sex => sex === value))
        console.log(filterSex);
        renderProducts(filterSex)
        if (!btn.checked) {
            renderProducts(products)
        }
    })
})


checkBoxesPrice.forEach(item => {
    item.addEventListener("click", event => {
        console.log(event.target.value);
        const value = event.target.value;
        switch (true) {
            case value === "0-50":
                const priceOne = products.filter(product => product.price > 0 && product.price < 50)
                renderProducts(priceOne)
                break;
            case value === "50-100":
                const priceTwo = products.filter(product => product.price > 50 && product.price < 100)
                renderProducts(priceTwo)
                break;
            case value === "100-150":
                const priceThree = products.filter(product => product.price > 100 && product.price < 150)
                renderProducts(priceThree)
                break;
            case value === "150+":
                const priceFour = products.filter(product => product.price > 150)
                renderProducts(priceFour)
                break;
            default:
                break;
        }
        if (!item.checked) {
            renderProducts(products)
        }

    })
})


form.addEventListener("submit", event => {
    event.preventDefault();
    const inputSearch = document.querySelector("#input_search").value;
    console.log(inputSearch);
    const filterName = products.filter(product => product.name.toUpperCase().includes(inputSearch.toUpperCase()))
    renderProducts(filterName);
})


renderProducts(products)




let products = [
    {
        id: 1,
        name: "Nike Air Force 1'07",
        image: "./assets/images/NIKEAIR.png",
        price: 10.99,
        colors: ["blanco", "negro"],
        categories: ["Lifestyle"],
        sex: ["men", "women"]
    },
    {
        id: 2,
        name: "Nike Air Force 1'07",
        image: "./assets/images/NIKEAIR.png",
        price: 203.99,
        colors: ["rojo", "negro"],
        categories: ["Jordan"],
        sex: ["men", "unisex"]
    },
    {
        id: 3,
        name: "Nike Air Force 1'07",
        image: "./assets/images/NIKEAIR.png",
        price: 45.99,
        colors: ["blanco"],
        categories: ["Lifestyle"],
        sex: ["men", "women"]
    },
    {
        id: 4,
        name: "Nike Air Force 1'07",
        image: "./assets/images/NIKEAIR.png",
        price: 99.99,
        colors: ["blanco", "nregro"],
        categories: ["Lifestyle"],
        sex: ["men", "women", "unisex"]
    },
    {
        id: 5,
        name: "Nike Air Force 1'07",
        image: "./assets/images/NIKEAIR.png",
        price: 143.99,
        colors: ["blanco", "nregro"],
        categories: ["Lifestyle"],
        sex: ["women"]
    },
    {
        id: 6,
        name: "Nike Air Force 1'07",
        image: "./assets/images/NIKEAIR.png",
        price: 303.99,
        colors: ["blanco", "nregro"],
        categories: ["Lifestyle"],
        sex: ["men"]
    }
]

const productsContainer = document.querySelector("#products");
const checkBoxSex = document.querySelectorAll(".check_box_input_sex");
const checkBoxesPrice = document.querySelectorAll(".check_box_input_price");
console.log(checkBoxSex);


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

renderProducts(products)




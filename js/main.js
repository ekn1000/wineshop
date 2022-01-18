// let products = document.querySelectorAll(".product-item")
// let nameWine = document.querySelectorAll(".name-wine")
// function getSearch(value) {
//     for (let i = 0; i < products.length; i++) {

//         let winename = nameWine[i].innerHTML.toLowerCase()
//         let myValue = value.toLowerCase()


//         if (winename.indexOf(myValue) == -1){
//             products[i].style.display = "none"
//         }

//         else products[i].style.display = "flex"
//     }
// }







//produts objects and sort

const productspage = document.querySelector(".products")
const products = document.querySelectorAll(".product-item")
const name_wines = document.querySelectorAll(".name-wine")
const price_wines = document.querySelectorAll(".price-wine")
const image_wines = document.querySelectorAll(".product-image img")

function visitProductPage(index) {
    sessionStorage.setItem("index", parseInt(index))
}

const product = []
for (let i = 0; i < products.length; i++) {
    product[i] = {
        id: i,
        name: name_wines[i].innerHTML.trim(),
        price: parseInt(price_wines[i].innerHTML.split("<sub>")[0].slice(1)),
        img: image_wines[i].src,
        shopProductItemhtml: document.querySelectorAll(".product-item")[i]

    }
    sessionStorage.setItem(`product${i}`, JSON.stringify(product[i]))
}
console.log(product);


const sortby = document.querySelector("#sortby")


function productsSort()  {
    if (sortby.value == "Name A-Z") {
        product.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        localStorage.setItem("sortby", "Name A-Z")
    }

    if (sortby.value == "Name Z-A") {
        product.sort((a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))
        localStorage.setItem("sortby", "Name Z-A")
    }

    if (sortby.value == "Price Up") {
        product.sort(function (a, b) { return a.price - b.price });
        localStorage.setItem("sortby", "Price Up")
    }

    if (sortby.value == "Price Down") {
        product.sort(function (a, b) { return b.price - a.price });
        localStorage.setItem("sortby", "Price Down")
    }

    productspage.innerHTML = ""
    for (let i = 0; i < product.length; i++)
        productspage.appendChild(product[i].shopProductItemhtml)
}

sortby.addEventListener("change", productsSort)

if (localStorage.getItem("sortby")) {
    sortby.value = localStorage.getItem("sortby")
    productsSort()
}

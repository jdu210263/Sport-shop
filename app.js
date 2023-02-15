// import products from "./product.json" assert{type:"json"}

// const content = document.querySelector("#content");

// for(let i=0; i<products.length; i++) {
//     const item = document.createElement("div");
//     item.innerHTML =`
//     <img src="images/${products[i].image}"><br>
//     Name: ${products[i].name}<br>
//     Price:$${products[i].price}

//     `
//     content.append(item)
// }

//Cart

let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector(`.cart`)
let closeCart = document.querySelector(`#close-cart`)

cartIcon.onclick = () => {
    cart.classList.add("active");
};

// Cart working JS
if (Document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

// Making Function
function ready() {
    //Reomve Items From Cart
    var reomveCartButtons = document.getElementsByClassName('cart-remove')
    console.log(reomveCartButtons)
    for (var i = 0; i < reomveCartButtons.length; i++) {
        var button = reomveCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
}

//Reomve Items From Cart
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
}

//Update Total
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    
}
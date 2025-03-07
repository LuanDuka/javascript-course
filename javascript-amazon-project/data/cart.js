
//Get a Variable Out of a Files
//1. Add type="module"attribute

import { products } from '../data/products.js';

//2. Export
export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2
    }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1
    }];
}
//3. Import

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, quantity) {
    let matchingItem;

    cart.forEach((cartItem) => {//loop through the cart
        if (productId === cartItem.productId) {//if product exist in the cart
            matchingItem = cartItem;//save item in a variable
        }
    });

    if (matchingItem) {//truthy value
        matchingItem.quantity += quantity;
    } else {
        cart.push({
            //productId: productId,
            //quantity: quantity
            productId,
            quantity
        });
    }

    saveToStorage();
}

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}

export function calculateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {//loop through each iten in the cart
        cartQuantity += cartItem.quantity;//sum the quantity in this variable
    });

    return cartQuantity
}
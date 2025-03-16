
//Get a Variable Out of a Files
//1. Add type="module"attribute
//2. Export
import { validDeliveryOption } from './deliveryOptions.js';

class Cart {//Use PascalCase for things that generate objects
    cartItems;//shortcut for: export let cart = undefined;
    #localStorageKey;// # before make it Privet Property(field), can only be used inside the class

    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }

    #loadFromStorage() {//not use arrow function > Shortcut for: loadFroStorage: function(){}
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));

        if (!this.cartItems) {
            this.cartItems = [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
            }, {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '2'
            }];
        }
    }
    //3. Import
    saveToStorage() {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId, quantity) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {//loop through the cart
            if (productId === cartItem.productId) {//if product exist in the cart
                matchingItem = cartItem;//save item in a variable
            }
        });

        if (matchingItem) {//truthy value
            matchingItem.quantity += quantity;
        } else {
            this.cartItems.push({
                //productId: productId,
                //quantity: quantity
                productId,
                quantity,
                deliveryOptionId: '1'
            });
        }

        this.saveToStorage();
        return this.cartItems;
    }

    removeFromCart(productId) {
        const newCart = [];

        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });

        this.cartItems = newCart;

        this.saveToStorage();
    }

    calculateCartQuantity() {
        let cartQuantity = 0;

        this.cartItems.forEach((cartItem) => {//loop through each iten in the cart
            cartQuantity += cartItem.quantity;//sum the quantity in this variable
        });

        return cartQuantity
    }

    updateQuantity(productId, newQuantity) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        matchingItem.quantity = newQuantity;

        this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {//loop through the cart
            if (productId === cartItem.productId) {//if product exist in the cart
                matchingItem = cartItem;//save item in a variable
            }
        });

        if (!matchingItem) {//if we give it a productId that is not in the cart: no update, no save
            return;
        }

        if (!validDeliveryOption(deliveryOptionId)) {
            return;
        }

        matchingItem.deliveryOptionId = deliveryOptionId;

        this.saveToStorage();
    }
}

export const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');


// Add event listener outside the cart object
document.body.addEventListener('keydown', (event) => {
    // Handle keydown event here
});

console.log(cart);
console.log(businessCart);

console.log(businessCart instanceof Cart);


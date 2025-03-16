import { removeFromCart, updateDeliveryOption, loadFromStorage } from "../../data/cart.js";
import { cart } from "../../data/cart-class.js";
import { renderOrderSummary } from "../../js/checkout/orderSummary.js";
/*
Best Practice
Test each condition of an if-statement
    Test Coverage
        =how much of the code is being tested
        (try to maximaze test coverage)
Flaky Test
     =test that sometimes passes and sometimes fails
Mocks
    =lets us replace a method with a fake version
Unit Test
    =testing 1 piece of the code
Integration Test
    =tests many units/pieces of code working together
*/

describe('test suite: addToCart', () => {
    beforeEach(() => {
        cart.cartItems = []; // Reset the cart before each test
        spyOn(localStorage, 'setItem');
    });

    it('adds an existing product to the cart', () => {
        cart.cartItems = [{//Initialize the cart with one item
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }];

        const result = cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 1);

        // Assertions
        expect(result).toBeDefined(); // Ensure the function returns something
        expect(cart.cartItems.length).toEqual(1); // Ensure the cart has one item
        expect(localStorage.setItem).toHaveBeenCalledTimes(1); // Ensure localStorage is updated
        expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); // Ensure the correct product is added
        expect(cart.cartItems[0].quantity).toEqual(2); // Ensure the quantity is correct
        expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
        }]));
    });

    it('adds a new product to the cart', () => {
        // Call addToCart and check the result
        const result = cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 1);

        // Assertions
        expect(result).toBeDefined(); // Ensure the function returns something
        expect(cart.cartItems.length).toEqual(1); // Ensure the cart has one item
        expect(localStorage.setItem).toHaveBeenCalledTimes(1); // Ensure localStorage is updated
        expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }]));
        expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); // Ensure the correct product is added
        expect(cart.cartItems[0].quantity).toEqual(1); // Ensure the quantity is correct
    });

});

describe('test suite: removeFromCart', () => {
    beforeEach(() => {
        spyOn(localStorage, 'setItem');
    });

    it('removes a product from the cart', () => {
        //Initialize the cart with one item
        cart.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }];

        cart.removeFromCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems.length).toEqual(0);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([]));
    });

    it('does nothing if product is not in the cart', () => {
        //Initialize the cart with one item
        cart.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }];
        // Try to remove a non-existent product
        cart.removeFromCart('does-not-exist');
        // Assertions
        expect(cart.cartItems.length).toEqual(1);// Ensure the cart still has one item
        expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');// Ensure the correct product is still in the cart
        expect(cart.cartItems[0].quantity).toEqual(1);// Ensure the quantity is correct
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);// Ensure the quantity is correct
        expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }]));
    });

});

describe('test suite: updateDeliveryOption', () => {
    beforeEach(() => {
        cart.cartItems = [];
        spyOn(localStorage, 'setItem');
    });

    it('updates the delivery option', () => {
        // Initialize the cart with one item
        cart.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }];
        // Update the delivery option
        cart.updateDeliveryOption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', '3');
        // Assertions
        expect(cart.cartItems.length).toEqual(1);
        expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems[0].quantity).toEqual(1);
        expect(cart.cartItems[0].deliveryOptionId).toEqual('3');
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '3'
        }]));
    });

    it('does nothing if the product is not in the cart', () => {
        // Initialize the cart with one item
        cart.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }];

        cart.updateDeliveryOption('does-not-exist', '3');
        expect(cart.cartItems.length).toEqual(1);
        expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems[0].quantity).toEqual(1);
        expect(cart.cartItems[0].deliveryOptionId).toEqual('1');
        expect(localStorage.setItem).toHaveBeenCalledTimes(0);
    });

    it('does nothing if the delivery option does not exist', () => {
        // Initialize the cart with one item
        cart.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }];

        cart.updateDeliveryOption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 'does-not-exist');
        expect(cart.cartItems.length).toEqual(1);
        expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems[0].quantity).toEqual(1);
        expect(cart.cartItems[0].deliveryOptionId).toEqual('1');
        expect(localStorage.setItem).toHaveBeenCalledTimes(0);
    });
});


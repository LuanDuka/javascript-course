import { addToCart, cart, loadFromStorage, removeFromCart } from "../../data/cart.js";
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
        cart.length = 0; // Reset the cart before each test
        spyOn(localStorage, 'setItem');
    });

    it('adds an existing product to the cart', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();

        const result = addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 1);

        // Assertions
        expect(result).toBeDefined(); // Ensure the function returns something
        expect(cart.length).toEqual(1); // Ensure the cart has one item
        expect(localStorage.setItem).toHaveBeenCalledTimes(1); // Ensure localStorage is updated
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); // Ensure the correct product is added
        expect(cart[0].quantity).toEqual(2); // Ensure the quantity is correct
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
        }]));
    });

    it('adds a new product to the cart', () => {
        // Mock localStorage
        spyOn(localStorage, 'getItem').and.callFake(() => JSON.stringify([]));

        // Load the cart from localStorage
        loadFromStorage();

        // Call addToCart and check the result
        const result = addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 1);

        // Assertions
        expect(result).toBeDefined(); // Ensure the function returns something
        expect(cart.length).toEqual(1); // Ensure the cart has one item
        expect(localStorage.setItem).toHaveBeenCalledTimes(1); // Ensure localStorage is updated
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }]));
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); // Ensure the correct product is added
        expect(cart[0].quantity).toEqual(1); // Ensure the quantity is correct
    });

});

describe('test suite: removeFromCart', () => {
    beforeEach(() => {
        spyOn(localStorage, 'setItem');
    });

    it('removes a product from the cart', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();

        removeFromCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(0);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([]));
    });

    it('does nothing if product is not in the cart', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();

        removeFromCart('does-not-exist');
        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }]));
    });
});


import { cart } from "../../data/cart-class.js";
import { renderOrderSummary } from "../../js/checkout/orderSummary.js";
import { loadProductsFetch } from "../../data/products.js";
/*
2 things to test:
    1. How the page looks
    2. How the page behaves
In our tests, where does the cart get displayed?
*/
describe('test suite: renderOrderSummary', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

  beforeAll((done) => {//"done"function provid by Jasmine, don't automatically go to next step
    // Load products before running the tests
    loadProductsFetch().then(() => {//we need to wait loadProducts finish first
      done();//lets us control when to go to the next step
    });
  });

  beforeEach(() => {//Hook
    spyOn(localStorage, 'setItem');

    document.querySelector('.js-test-container').innerHTML = `
        <div class="js-order-summary"></div>
        <div class="js-payment-summary"></div>
        <div class="js-return-to-home-link"></div>
    `;
    cart.cartItems = [{
      productId: productId1,
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: productId2,
      quantity: 1,
      deliveryOptionId: '2'
    }];

    renderOrderSummary();
  });

  afterEach(() => {
    document.querySelector('.js-test-container').innerHTML = '';
  })

  it('displays the cart', () => {
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(2);
    expect(
      document.querySelector(`.js-product-quantity-${productId1}`).innerText
    ).toContain('Quantity: 2');
    expect(
      document.querySelector(`.js-product-quantity-${productId2}`).innerText
    ).toContain('Quantity: 1');
    expect(
      document.querySelector(`.js-product-name-${productId1}`).innerText
    ).toEqual('Black and Gray Athletic Cotton Socks - 6 Pairs');
    expect(
      document.querySelector(`.js-product-name-${productId2}`).innerText
    ).toEqual('Intermediate Size Basketball');
    expect(
      document.querySelector(`.js-product-price-${productId1}`).innerText
    ).toEqual('$10.90');
    expect(
      document.querySelector(`.js-product-price-${productId2}`).innerText
    ).toEqual('$20.95');

  });


  it('removes a product', () => {
    document.querySelector(`.js-delete-link[data-product-id="${productId1}"]`).click(); expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(1);
    expect(
      document.querySelector(`.js-cart-item-container${productId1}`)
    ).toEqual(null);
    expect(
      document.querySelector(`.js-cart-item-container${productId2}`)
    ).not.toEqual(null);
    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual(productId2);
    expect(
      document.querySelector(`.js-product-name-${productId2}`).innerText
    ).toEqual('Intermediate Size Basketball');
    expect(
      document.querySelector(`.js-product-price-${productId2}`).innerText
    ).toEqual('$20.95');

  });

  it('updates the delivery option', () => {
    document.querySelector(`.js-delivery-option-${productId1}-3`).click();

    expect(
      document.querySelector(`.js-delivery-option-input-${productId1}-3`).checked
    ).toEqual(true);

    expect(cart.cartItems.length).toEqual(2);
    expect(cart.cartItems[0].productId).toEqual(productId1);
    expect(cart.cartItems[0].deliveryOptionId).toEqual('3');

    expect(
      document.querySelector('.js-payment-summary-shipping').innerText
    ).toEqual('$14.98');
    expect(
      document.querySelector('.js-payment-summary-total').innerText
    ).toEqual('$63.50');
  });
});
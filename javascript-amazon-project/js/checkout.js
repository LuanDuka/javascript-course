import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';
//import '../data/backend-practice.js';
//import '../data/cart-class.js';

loadProducts()//Converted loadProducts to return a promise. A modern and cleaner approach to handling
    .then(() => {
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
    })
    .catch((error) => {
        console.error('Failed to load products:', error);
    });
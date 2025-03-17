import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart-class.js';
//import '../data/backend-practice.js';
//import '../data/cart-class.js';

//Promises
// - better way to handle asynchronous code
// - similar to done() function
// let us wait for some code to finish before going to the next step
Promise.all([//let us run multiple Promises at the same time
  loadProductsFetch(),
  // new Promise((resolve) => {//when create, it's going to run this functions immediately
  //   loadProducts(() => {
  //     resolve('value1');
  //   });
  // }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
/*
new Promises((resolve) => {//when create, it's going to run this functions immediately
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts()//Converted loadProducts to return a promise. A modern and cleaner approach to handling
  .then(() => {
    loadCart();
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  })
  .catch((error) => {
    console.error('Failed to load products:', error);
  });
  */
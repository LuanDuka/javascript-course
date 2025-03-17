import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart-class.js';
//import '../data/backend-practice.js';
//import '../data/cart-class.js';

//Async await is a shortcut for a promises
//lets us use await: lets us wait for a promise to finish before going tothe next line
async function loadPage() {//makes a function return a promise
  try {//can use try/catch with synchronous code (or normal code)
    //throw 'error1';//create an error

    await loadProductsFetch();//lets us write asynchronous code like normal code

    await new Promise((resolve, reject) => {
      //throw 'error2';
      loadCart(() => {
        //reject('error3');//reject is a function and lets us create an error in the future
        resolve('value3');
      });
    });
    //use try/catch to handle unexpected errors( code is correct, outside our control)
  } catch (error) {//whenever we get an error, it will skip the resto of the code
    console.log('Unexpected error. Please try again later.');
  }

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary()

}
loadPage();

/*Promises
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
*/

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
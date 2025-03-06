/*
Main idea of JavaScrip
1. Save the data(information about our products)
2. Gerenate the HTML
3. Make it interactive
*/
//data structure: combination of objects and arrays  
import { cart, addToCart } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';

let productsHTML = '';

//looping through the array above
products.forEach((product) => {
    //Acumulator Pattern
    productsHTML += `
        <div class="product-container">
                <div class="product-image-container">
                     <img class="product-image" src="${product.image}">
              </div>

            <div class="product-name limit-text-to-2-lines">
            ${product.name}
            </div>

            <div class="product-rating-container">
            <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
                ${product.rating.count}
            </div>
            </div>

            <div class="product-price">
            $${formatCurrency(product.priceCents)}
            </div>

            <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
            Add to Cart
            </button>
        </div>
`;
});

document.querySelector('.js-products-grid')
    .innerHTML = productsHTML;
//to control added timeout
const addedMessageTimeouts = {};//each product will have its own timeoutId

function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {//loop through each iten in the cart
        cartQuantity += cartItem.quantity;//sum the quantity in this variable
    });

    document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;//update cart quantity on html
}

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {//looping through the buttons
        button.addEventListener('click', () => {
            // const productId = button.dataset.productId;
            const { productId } = button.dataset;

            const quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

            if (quantity) {
                addToCart(productId, quantity);
                updateCartQuantity();

            }
            const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
            addedMessage.classList.add('added-to-cart-visible');//adding a class to the message

            // Check if there's a previous timeout for this product
            const previousTimeoutId = addedMessageTimeouts[productId];
            if (previousTimeoutId) {
                clearTimeout(previousTimeoutId);//If there is, we should stop it
            }

            const timeoutId = setTimeout(() => {
                addedMessage.classList.remove('added-to-cart-visible');
            }, 2000);

            // Save the timeoutId for this product so we can stop it later if we need to
            addedMessageTimeouts[productId] = timeoutId;

        });
    });

//How do we know which product to add?
//Data Attribute
//-is just another HTML  attribute
//-allows us to attach any information to an element


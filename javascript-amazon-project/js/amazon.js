/*
Main idea of JavaScrip
1. Save the data(information about our products)
2. Gerenate the HTML
3. Make it interactive
*/
console.log('hello');
//data structure: combination of objects and arrays  

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
            $${(product.priceCents / 100).toFixed(2)}
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

            <div class="added-to-cart">
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

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {//looping through the buttons
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;

            const quantitySelector = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

            if (quantitySelector) {
                let matchingItem;

                cart.forEach((item) => {//loop through the cart
                    if (productId === item.productId) {//if product exist in the cart
                        matchingItem = item;//save item in a variable
                    }
                });

                if (matchingItem) {//truthy value
                    matchingItem.quantity += quantitySelector;
                } else {
                    cart.push({
                        productId: productId,
                        quantity: quantitySelector
                    });
                }

                let cartQuantity = 0;

                cart.forEach((item) => {//loop through each iten in the cart
                    cartQuantity += item.quantity;//sum the quantity in this variable
                });

                document.querySelector('.js-cart-quantity')
                    .innerHTML = cartQuantity;//update cart quantity on html
            }


            console.log(quantitySelector);

        });
    });

//How do we know which product to add?
//Data Attribute
//-is just another HTML  attribute
//-allows us to attach any information to an element


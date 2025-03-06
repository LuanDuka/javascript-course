
//Get a Variable Out of a Files
//1. Add type="module"attribute
//2. Export
export const cart = [];
//3. Import

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
}
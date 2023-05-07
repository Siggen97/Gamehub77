let productsInCart = [];
const parentElement = document.querySelector('#addCart');
const cartSumPrice = document.querySelector('#sumPrices')
const products = document.querySelectorAll ('.XBOXgame')

XBOXgame.forEach(products => {
    products.addEventListener ('click', (e) =>{
        if(e.target.classList.contains('addCart')) {
            const cartId = e.target.cartId;
            
        }
    })
});
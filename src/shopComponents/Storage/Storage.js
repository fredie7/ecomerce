export const getFromStorage = item => {
    let product;
    if (localStorage.getItem('item') === null) {
        product = []
    } else {
        const product = JSON.parse(localStorage.getItem('item'))
        return product
    }
}

export const saveCartItems = item => {
    return localStorage.setItem('cart', JSON.stringify(item))
}
export const getCartItems = ()=> {
    let cart;
    if (localStorage.getItem('cart') === null) {
        cart = []
    } else {
        return JSON.parse(localStorage.getItem('cart'))
    }
}
        

export const saveProducts = products => {
    return localStorage.setItem('item', JSON.stringify(products))
}
export const getFromStorage = item => {
    let product;
    if (localStorage.getItem('item') === null) {
        product = []
    } else {
        const product = JSON.parse(localStorage.getItem('item'))
        return product
    }
}

export const saveCartItems = items => {
    let product;
    if (localStorage.getItem('cart') === null) {
        product = []
    } else {
        product = JSON.parse(localStorage.getItem('cart'))
    }
    product.push(items)
    localStorage.setItem('cart', JSON.stringify(product))
}
export const getCartItems = ()=> {
    return JSON.parse(localStorage.getItem('cart'))
}

export const saveProducts = products => {
    return localStorage.setItem('item', JSON.stringify(products))
}
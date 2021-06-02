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
    if (localStorage.getItem('item') === null) {
        product = []
    } else {
        product = JSON.parse(localStorage.getItem(items))
    }
    product.push(items)
    localStorage.setItem('item', JSON.stringify(product))
}

export const saveProducts = products => {
    return localStorage.setItem('item', JSON.stringify(products))
}
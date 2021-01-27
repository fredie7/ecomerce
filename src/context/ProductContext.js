import React, { useState, createContext, useEffect } from 'react';
import {allProducts, detailProduct} from '../data'

export const ProductContext = createContext();

const ProductContextProvider = props => {
    const [products, setProducts] = useState([])
    const [productDetails, setProductDetails] = useState(detailProduct)
    const [cart, setCart] = useState([])
    
    useEffect(()=> {
        setUpProducts()
    }, [])

    const setUpProducts = ()=> {
        let items = []
        allProducts.forEach(product=> {
            const singleProduct = {...product}
            items = [...items, singleProduct]
        })
        return setProducts(items)
    }

    const getProduct = id=> {
        const product = products.find(item => item.id === id)
        return product
    }

    const itemDetails = id=> {
        const product = getProduct(id);
        setProductDetails(product)
    }

    const addToCart = id => {
        const availableProducts = [...products];
        const productIndex = availableProducts.indexOf(getProduct(id));
        const product = availableProducts[productIndex];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        const newProduct = [...cart, product]
        // this new product updated but doesn't in the cart state
        // setProducts(...availableProducts);
        setCart(newProduct) // the cart still shows an empty array
        console.log(cart) // the cart still shows an empty array
        setProductDetails({...product})
    }
    console.log(cart)

    return (
        <ProductContext.Provider value={{
            products, setProducts,
            productDetails, setProductDetails,
            itemDetails,
            addToCart,
            cart, setCart,
        }}>
            { props.children }
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;
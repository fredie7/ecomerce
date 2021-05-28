import React, { useState, createContext, useEffect } from 'react';
import {allProducts, detailProduct} from '../data'

export const ProductContext = createContext();

const ProductContextProvider = props => {
    const [products, setProducts] = useState([])
    const [productDetails, setProductDetails] = useState(detailProduct)
    const [cart, setCart] = useState([])
    const [filteredProducts, setFilteredProducts] = useState(null)
    const [cartTotalDetails, setCartTotalDetails] = useState({cartCurrentTax:0, cartTax:0,cartTotals:0,subTotal:0})
    
    

    const setUpProducts = ()=> {
        let items = []
        allProducts.forEach(product=> {
            const singleProduct = {...product}
            items = [...items, singleProduct]
        })
        return setProducts(items)
    }

    useEffect(()=> {
        setUpProducts()
    }, [])

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
        console.log(newProduct)
        setProducts([...availableProducts]);
        setCart([...newProduct]) 
        console.log(cart) 

        let subTotals = 0;
        newProduct.map(cartItem => subTotals += cartItem.total)
        let currentTax = subTotals * 0.1
        let tax = parseFloat(currentTax.toFixed(2))
        let total = subTotals + tax
        setCartTotalDetails({
            cartCurrentTax: currentTax,
            cartTax: tax,
            cartTotals: total,
            subTotal: subTotals,
        })
    }
    console.log(products)
    // console.log(cartTotalDetails)

    const removeProduct = (id)=> {
        let sampleProducts = [...products]
        let sampleCart = [...cart]
        let index = sampleProducts.indexOf(getProduct(id))
        let product = sampleProducts[index]
        product.inCart = false
        product.count = 0
        product.total = 0
        product.subTotal = 0

        sampleCart = sampleCart.filter(item=>item.id !== id)
        setCart(sampleCart)
        setProducts(sampleProducts)

        let subTotals = 0;
        sampleProducts.map(cartItem => subTotals += cartItem.total)
        let currentTax = subTotals * 0.1
        let tax = parseFloat(currentTax.toFixed(2))
        let total = subTotals + tax
        setCartTotalDetails({
            cartCurrentTax: currentTax,
            cartTax: tax,
            cartTotals: total,
            subTotal: subTotals,
        })
    }

    const increment = id=> {
        let sampleProducts = [...products]
        let sampleCart = [...cart]
        console.log(sampleCart)
        let specificProduct = getProduct(id)
        console.log(specificProduct)
        let index = sampleCart.indexOf(specificProduct)
        let product = sampleCart[index]
        console.log(product)
        product.count = product.count + 1
        product.total = product.count * product.price
        setCart(sampleCart)

        let subTotals = 0;
        sampleProducts.map(cartItem => subTotals += cartItem.total)
        let currentTax = subTotals * 0.1
        let tax = parseFloat(currentTax.toFixed(2))
        let total = subTotals + tax
        setCartTotalDetails({
            cartCurrentTax: currentTax,
            cartTax: tax,
            cartTotals: total,
            subTotal: subTotals,
        })
    }

    const decrement = id=> {
        let sampleProducts = [...products]
        let sampleCart = [...cart]
        console.log(sampleCart)
        let specificProduct = getProduct(id)
        console.log(specificProduct)
        let index = sampleCart.indexOf(specificProduct)
        let product = sampleCart[index]
        console.log(product)
        product.count = product.count - 1
        if (product.count === 0) {
            removeProduct(id)
        } else {
            product.total = product.count * product.price
            setCart(sampleCart)
        }
        

        let subTotals = 0;
        sampleProducts.map(cartItem => subTotals += cartItem.total)
        let currentTax = subTotals * 0.1
        let tax = parseFloat(currentTax.toFixed(2))
        let total = subTotals + tax
        setCartTotalDetails({
            cartCurrentTax: currentTax,
            cartTax: tax,
            cartTotals: total,
            subTotal: subTotals,
        })
    }

    const clearCart = ()=> {
        setCart([])
        setCartTotalDetails({cartCurrentTax:0, cartTax:0,cartTotals:0,subTotal:0})
    }

    return (
        <ProductContext.Provider value={{
            products, setProducts,
            productDetails, setProductDetails,
            itemDetails,
            addToCart,
            cart, setCart,
            cartTotalDetails,
            clearCart,
            removeProduct,
            increment,
            decrement,
            setFilteredProducts,
            filteredProducts,
        }}>
            { props.children }
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;
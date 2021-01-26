import React, { useState, createContext, useEffect } from 'react';
import {allProducts, detailProduct} from '../data'

export const ProductContext = createContext();

const ProductContextProvider = props => {
    const [products, setProducts] = useState([])
    const [productDetails, setProductDetails] = useState(detailProduct)
    
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

    return (
        <ProductContext.Provider value={{
            products, setProducts,
            productDetails, setProductDetails,
            itemDetails,
        }}>
            { props.children }
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;
import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const ProductList = () => {
    // اطمینان حاصل کنید که state به درستی تعریف شده و مسیر Products را مشخص کنید
    const Products = useSelector((state) => state.products);

    return (
        <div>
            <h4>products</h4>
            
            {Products.map((Product) => (
                <ProductItem
                    key={Product.id}
                    Product={Product}
                />
            ))}
        </div>
    );
};

export default ProductList;

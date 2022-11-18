import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../utils/products';
import styled from 'styled-components';
import PreviewElement from './PreviewElement';

function CategoryProducts({cart, functions}) {

    const { categoryId } = useParams();
    const categoryFilter = products.filter((product) => product.categoryId === categoryId);

    const elements = categoryFilter.map((product) => {
        return <PreviewElement key={product.id} product={product} addToCart={functions.addToCart}/>
    });

    return (
        <ProductsWrapper>
            {elements}
        </ProductsWrapper>
    )
}

const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 24px;
    margin-top: 24px;
    @media (max-width: 1440px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export default CategoryProducts;
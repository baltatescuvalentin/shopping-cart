import React from 'react';
import styled from 'styled-components';
import products from '../../utils/products';
// import { categories } from '../../utils/categories';
import { useNavigate } from 'react-router-dom';

function ProductsCatalog() {

    let productsCategorySet = products.map((product) => {
        return product.categoryId;
    });

    productsCategorySet = [...new Set(productsCategorySet)];


    const categoryElems = productsCategorySet.map((category) => {
        const elem = products.find((product) => product.categoryId === category);

        return <Category key={elem.id} name={elem.categoryName} categoryId={elem.categoryId} image={elem.image1} />
    })


    return (

        <ProductsWrapper>
            {categoryElems}
        </ProductsWrapper>
    )
}

function Category({name, categoryId, image}) {

    const navigator = useNavigate();

    function navigateTo() {
        navigator(categoryId);
    }

    return (
        <CategoryWrapper>
            <Image src={image} alt={name} onClick={navigateTo}/>
            <RedirectBtn onClick={navigateTo}>{name}</RedirectBtn>
        </CategoryWrapper>
    )
}

const RedirectBtn = styled.button`
    border: none;
    border-radius: 16px;
    background-color: #1F2937;
    height: 80px;
    width: 280px;
    font-size: 32px;
    font-weight: 600;
    color: white;
    &:hover {
        cursor: pointer;
    }
`;

const Image = styled.img`
    width: 300px;
    height: 450px;
    &:hover {
        cursor: pointer;
    }
`;

const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;


const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    margin-top: 24px;
    gap: 24px;
`;

export default ProductsCatalog;
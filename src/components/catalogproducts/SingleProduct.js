import React, { useState } from 'react';
import styled from 'styled-components';
import products from '../../utils/products';
import { useNavigate, useParams } from 'react-router-dom';

function SingleProduct({cart, functions}) {

    const { productId } = useParams();

    const product = products.find((product) => product.id === productId);

    const [prod, setProd] = useState({
        id: product.id,
        name: product.name,
        image: product.image2,
        price: product.price,
        categoryId: product.categoryId,
        count: 1,
        size: 'M',
    });

    function changeSize(size) {
        setProd({
            ...prod,
            size: size,
        })
    }

    const navigator = useNavigate();


    return (
        <Wrapper>
            <Image src={`${product.image1}`} alt={product.name} />
            <Image src={`${product.image2}`} alt={product.name} />
            <OptionsWrapper>
                <Price>Price: ${product.price}</Price>
                <BuyAddBtn onClick={() => 
                    {
                        functions.addProductToCart(prod);
                        navigator('../../cart');
                    }
                }>Buy item</BuyAddBtn>
                <BuyAddBtn onClick={() => functions.addProductToCart(prod)}>Add to Bag</BuyAddBtn>
                <BackBtn onClick={() => navigator(`../${product.categoryId}`)}>Go back</BackBtn>
                <Select name='Size' onChange={(e) => changeSize(e.target.value)}>
                    <Option value='XS'>XS</Option>
                    <Option value='S'>S</Option>
                    <Option value='M'>M</Option>
                    <Option value='L'>L</Option>
                    <Option value='XL'>XL</Option>
                    <Option value='XXL'>XXL</Option>
                </Select>
            </OptionsWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 24px;
    margin-top: 24px;
    margin-right: 20px;

    @media (max-width: 720px) {
        display: flex;
        flex-direction: column;
        width: 100vw;
        align-items: center;
    }
`;

const CountWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const Select = styled.select`
    width: 280px;
    height: 56px;
    font-size: 20px;

    @media (max-width: 720px) {
        width: 250px;

        & > option {
            width: 250px;
        }
    }
`;

const Option = styled.option`
    font-size: 20px;

    @media (max-width: 720px) {
        width: 250px;
    }
`;

const Price = styled.p`
    margin-bottom: 0;
    margin-top: 0;
    font-size: 36px;
    font-weight: 600;
`;

const Image = styled.img`
    width: 350px;
    height: 550px;
`;

const OptionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    justify-content: space-between;
`;

const BuyAddBtn = styled.button`
    border: none;
    border-radius: 16px;
    background-color: #1F2937;
    height: 80px;
    width: 280px;
    font-size: 32px;
    font-weight: 600;
    color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    &:active {
        transform: scale(0.98);
    }
`;

const BackBtn = styled.button`
    border: none;
    border-radius: 16px;
    background-color: rgba(128,128,128, 1);
    height: 80px;
    width: 280px;
    font-size: 32px;
    font-weight: 600;
    color: white;
    &:hover {
        cursor: pointer;
    }
`;

export default SingleProduct;
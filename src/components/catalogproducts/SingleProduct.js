import React from 'react';
import styled from 'styled-components';
import products from '../../utils/products';
import { useNavigate, useParams } from 'react-router-dom';

function SingleProduct() {

    const navigator = useNavigate();
    const { productId } = useParams();
    // console.log(productId);

    const product = products.find((product) => product.id === productId);
    console.log(product);

    return (
        <Wrapper>
            <Image src={`../${product.image1}`} alt={product.name} />
            <Image src={`../${product.image2}`} alt={product.name} />
            <OptionsWrapper>
                <Price>Price: ${product.price}</Price>
                
                <BuyAddBtn>Buy item</BuyAddBtn>
                <BuyAddBtn>Add to Bag</BuyAddBtn>
                <BackBtn onClick={() => navigator(`../${product.categoryId}`)}>Go back</BackBtn>
                <Select name='Size'>
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

`;

const Select = styled.select`
    width: 280px;
    height: 56px;
    font-size: 20px;
`;

const Option = styled.option`
    font-size: 20px;
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
    &:hover {
        cursor: pointer;
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
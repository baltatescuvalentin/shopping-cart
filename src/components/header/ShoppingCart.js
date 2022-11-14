import React from 'react';
import { BsFillBagFill } from 'react-icons/bs';
import styled from 'styled-components';

function ShoppingCart() {

    return (
        <CartWrapper>
            <NumberOfProducts>
                10
            </NumberOfProducts>
            <BsFillBagFill size={'48px'} />
        </CartWrapper>
    )
}

const NumberOfProducts = styled.div`
    position: absolute;
    background-color: grey;
    border-radius: 50%;
    height: 24px;
    width: 24px;
    color: white;
    text-align: center;
    font-weight: 600;
    transform: translate(-35%, 125%);
`;

const CartWrapper = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

export default ShoppingCart;
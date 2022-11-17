import React from 'react';
import { BsFillBagFill } from 'react-icons/bs';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function ShoppingCart({cart}) {

    const navigator = useNavigate();

    return (
        <CartWrapper onClick={() => navigator('../cart')}>
            { cart.cart.length ? <NumberOfProducts>
                    {cart.cart.length}
                </NumberOfProducts>
             : ''}
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
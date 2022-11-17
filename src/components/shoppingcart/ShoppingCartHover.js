import React from 'react';
import ShoppingCart from './ShoppingCart';
import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function ShoppingCartHover({cart}) {

    const [hover, setHover] = useState(false);

    function handleHover() {
        setHover(h => !h);
    }

    function calculateTotal(cart) {
        let total = 0;
        cart.cart.forEach((c) => {
          const price = c.price * c.count;
          total += price;
        });
    
        return total;
      }

    const cartMap = cart.cart.map((c) => {
        return <HoverElement key={c.id} product={c} />
    })

    return (
        <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <ShoppingCart cart={cart} />
            {
                hover && 
                    <Hover>
                        {cart.cart.length ?
                        <>
                          <Info>Cart</Info>  {cartMap} <Info>Total: {' $' + calculateTotal(cart).toFixed(2)}</Info>
                        </> : <EmptyMessage>No products yet in the bag.</EmptyMessage>}
                    </Hover> 
            }
        </div>

    )
}

function HoverElement({product}) {

    const navigator = useNavigate();

    return (
        <Element>
            <Count>{product.count + ' X'}</Count>
            <Image src={`../${product.image}`} alt={product.name} />
            <Text onClick={() => navigator(`../catalog/${product.categoryId}/${product.id}`)}>{product.name}</Text>
            <Price>${product.price}</Price>
        </Element>
    )
}

const Info = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin: 8px auto;
`;

const EmptyMessage = styled.p`
    font-size: 24px;
    font-weight: 500;
    text-align: center;
`;

const Count = styled.p`
    font-size: 20px;
    margin: 0;
    text-align: center;
`;

const Hover = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 100;
    margin-top: 0px;
    list-style: none;
    border: 1px solid lightgrey;
    background-color: white;
    border-radius: 12px;
    padding: 8px 15px;
    transform: translateX(-45%);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    gap: 12px;
    @media (max-width: 1400px) {
        transform: translateX(-55%);
    }
`;

const Element = styled.div`
    display: grid;
    grid-template-columns: 0.5fr repeat(3, 1fr);
    align-items: center;
    justify-items: center;
`;

const Image = styled.img`
    width: 65px;
    height: 85px;
`;

const Price = styled.p`
    font-size: 20px;
    text-align: center;
`;

const Text = styled.p`
    font-size: 16px;
    text-align: center;
    width: 125px;
    &:hover {
        cursor: pointer;
        color: lightblue;
    }
`;

export default ShoppingCartHover;
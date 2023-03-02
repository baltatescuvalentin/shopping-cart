import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { ImCross } from 'react-icons/im'; 
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function ShoppingCartPage({cart, functions}) {

    let cartMap = '';

    if(cart.cart.length) {
        cartMap = cart.cart?.map((c) => {
            return <Product key={c.id} cartElem={c} functions={functions} />
        })
    }


    console.log(cart);
    console.log(cartMap);

    return (
        <Wrapper>
            { cart.cart.length ? <>
                <Info>
                    <InfoText>Product</InfoText>
                    <InfoText>Name</InfoText>
                    <InfoText>Size</InfoText>
                    <InfoText>Quantity</InfoText>
                    <InfoText>Price</InfoText>
                </Info>
                <Printer>{cartMap}</Printer>
                <TotalMsg>Total: {' $' + functions.calculateTotal(cart).toFixed(2)}</TotalMsg>
                <CheckoutBtn><span>Checkout</span></CheckoutBtn>
            </>
            : <EmptyMessage>No products selected yet!</EmptyMessage>
            }
        </Wrapper>
    )
}

function Printer({children}) {
    return (
        <>
            {children}
        </>
    )
}

function Product({cartElem, functions}) {

    const price =  (parseFloat(cartElem.price) * parseFloat(cartElem.count)).toFixed(2);

    const navigator = useNavigate();

    return (
        <ElementWrapper>
            <Image src={cartElem.image} alt={cartElem.name} />
            <ProductName onClick={() => navigator(`../catalog/${cartElem.categoryId}/${cartElem.id}`)}>{cartElem.name}</ProductName>
            <Select value={cartElem.size} name={cartElem.size} onChange={(e) => functions.changeSize(cartElem.id, e.target.value)}>
                <option value='XS'>XS</option>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
                <option value='XXL'>XXL</option>
            </Select>
            <Quantity>
                <FaMinus size={'20px'} style={{margin: 'auto'}} onClick={() => functions.decreaseToAProduct(cartElem.id)}/>
                <QuantityNumber>
                    {cartElem.count}
                </QuantityNumber>
                <FaPlus size={'20px'} style={{margin: 'auto'}} onClick={() => functions.addToAProduct(cartElem.id)}/>
            </Quantity>
            <Price>
                {'$' + price}
            </Price>
            <ImCross className='cart_close' onClick={() => functions.removeFromCart(cartElem.id)} />
        </ElementWrapper>
    )
}

const CheckoutBtn = styled.button`
    border: none;
    border-radius: 16px;
    width: 350px;
    height: 64px;
    background-color: #1F2937;
    margin-left: 40px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    &:active {
        transform: scale(0.98);
    }
    span {
        font-weight: 600;
        font-size: 48px;
        color: white;

        @media (max-width: 720px) {
            font-size: 24px;
        }
    }

    @media (max-width: 720px) {
        margin-left: 10px;
        width: 150px;
    }
`;

const EmptyMessage = styled.p`
    font-size: 56px;
    font-weight: 600;
    text-align: center;

    @media (max-width: 720px) {
        font-size: 24px;
    }
`;

const TotalMsg = styled.p`
    font-size: 48px;
    font-weight: 700;
    margin-left: 40px;

    @media (max-width: 720px) {
        font-size: 24px;
        margin-left: 20px;
    }
`;

const Wrapper = styled.div`
    margin: 40px 100px;
    min-height: calc(100vh - 170px - 83px - 75px);

    @media (max-width: 720px) {
        margin: 0;
        margin-top: 15px;
    }
`;

const ElementWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
    width: 80%;
    justify-items: center;
    align-items: center;
    justify-content: space-around;
    margin: 4px 16px;

    @media (max-width: 720px) {
        width: 100%;
        margin: 0;
    }
`;

const Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
    width: 80%;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    margin: 4px 16px;

    @media (max-width: 720px) {
        width: 100%;
        margin: 0;
    }
`;

const InfoText = styled.p`
    font-size: 28px;
    font-weight: 500;
    text-align: center;

    @media (max-width: 720px) {
        font-size: 16px;
    }
`;

const Image = styled.img`
    width: 65px;
    height: 85px;

    
`;

const ProductName = styled.p`
    font-size: 20px;
    color: grey;
    text-align: center;
    &:hover {
        cursor: pointer;
        color: lightblue;
    }

    @media (max-width: 720px) {
        font-size: 14px;
    }
`;

const Select = styled.select`
    width: 100px;
    height: 32px;
    font-size: 20px;
    & > * {
        font-size: 20px;
    }

    @media (max-width: 720px) {
        width: 60px;
    }
`;

const Quantity = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    width: 75px;

    @media (max-width: 720px) {
        width: 55px;
    }
`;

const QuantityNumber = styled.p`
    font-size: 28px;
    margin: auto;

    @media (max-width: 720px) {
        font-size: 22px;
    }
`;

const Price = styled.p`
    font-size: 24px;

    @media (max-width: 720px) {
        font-size: 18px;
    }
`;

export default ShoppingCartPage;
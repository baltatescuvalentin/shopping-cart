import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiConfirmed } from 'react-icons/gi';

function PreviewElement({product, addToCart}) {

    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);
    const navigator = useNavigate();

    function navigateTo() {
        navigator(product.id);
    }

    return (
        <PreviewContainer>
            { hover === false ? <FrontImage onClick={navigateTo} onMouseEnter={() => setHover(h => !h)} src={product.image1} alt={product.name}/>
                : <FrontImage onClick={navigateTo} onMouseLeave={() => setHover(h => !h)} src={product.image2} alt={product.name} />
            }
            <NameLink onClick={navigateTo} >{product.name}</NameLink>
            <p>${product.price}</p>
            <AddBtn onClick={() => 
                    {
                        addToCart(product.id);
                        setClick(true);
                    }
                }>
            Add to Bag</AddBtn>
            <AddMessage onAnimationEnd={() => setClick(false)} className={click ? 'clickedBtn' : 'notclickedBtn'}>Added to Bag {<GiConfirmed size={'18px'} style={{color: 'green'}}/>}</AddMessage>
        </PreviewContainer>
    )
}

const AddMessage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const PreviewContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    margin-bottom: 12px;
    & > * {
        margin: 0;
        font-size: 16px;
        text-align: center;
    }
`;

const NameLink = styled.p`
    &:hover {
        cursor: pointer;
    }
`;

const FrontImage = styled.img`
    width: 300px;
    height: 450px;
    &:hover {
        cursor: pointer;
    }
`;

const AddBtn = styled.button`
    border: none;
    width: 100px;
    height: 28px;
    font-size: 12px;
    background-color: rgba(128,128,128, 0.6);
    border-radius: 12px;
    color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    font-weight: 600;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    
    
`;


export default PreviewElement;
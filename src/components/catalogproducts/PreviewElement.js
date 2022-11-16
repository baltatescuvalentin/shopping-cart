import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PreviewElement({product}) {

    const [hover, setHover] = useState(false);
    const locate = useLocation();
    const parts = locate.pathname.split('/');
    console.log(`path: ${locate.pathname}`)
    let catalog = '';
    console.log(`parts: ${parts[1]}`);
    if(parts.length < 3) {
        catalog = '../catalog/';
    }
    const navigator = useNavigate();

    function navigateTo() {
        navigator(catalog + product.id);
    }

    return (
        <PreviewContainer>
            { hover === false ? <FrontImage onClick={navigateTo} onMouseEnter={() => setHover(h => !h)} src={product.image1} alt={product.name}/>
                : <FrontImage onClick={navigateTo} onMouseLeave={() => setHover(h => !h)} src={product.image2} alt={product.name} />
            }
            <NameLink onClick={navigateTo} >{product.name}</NameLink>
            <p>${product.price}</p>
            <AddBtn>Add to Bag</AddBtn>
        </PreviewContainer>
    )
}

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
    }
    
`;


export default PreviewElement;
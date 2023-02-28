import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import homephoto from '../utils/images/homephoto.jpg';
import dots from '../utils/images/dots2.png';

function Home() {

    const navigator = useNavigate();

    return (
        <HomeWrapper>
            <HomeSplitter>
                <TextWrapper>
                    <SmallText>Make YOUR OWN style!</SmallText>
                    <BigText>We got what you are looking for! WE ARE FASHION!</BigText>
                    <ProductsBtn onClick={() => navigator('catalog')}>Shop now!</ProductsBtn>
                </TextWrapper>
                <HomeImg />
            </HomeSplitter>
        </HomeWrapper>
    )
}

const ProductsBtn = styled.button`
    border: none;
    width: 350px;
    height: 96px;
    background-color: #1F2937;
    color: white;
    font-size: 42px;
    font-weight: 600;
    border-radius: 24px;
    &:hover {
        cursor: pointer;
        transform: scale(1.02);
    }
    &:active, &:focus {
        transform: scale(0.98);
    }

    @media (max-width: 720px) {
        width: 150px;
        height: 56px;
        font-size: 24px;
    }
`;

const HomeWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 170px - 83px);
    background: url(${dots});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    mix-blend-mode: color-burn;
    
    @media (max-width: 720px) {
        
    }
`;

const HomeSplitter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 100px 50px 0 50px;
    align-items: center;
    justify-items: center;
    gap: 24px;
    @media (max-width: 1250px) {
        grid-template-columns: 1fr;
        padding: 0;
        margin-top: 50px
    }

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`;

const HomeImg = styled.img`
    border-radius: 16px;
    width: 45rem;
    align-self: center;
    animation: fadeIn ease-out 2s;
    z-index: 100;
    @keyframes fadeIn {
        0% {
        opacity: 0;
        }
        100% {
        opacity: 1;
        }
    }

    @media (max-width: 720px) {
        width: 300px;
    }
`;
HomeImg.defaultProps = {
    src: homephoto,
    alt: 'people',
}

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fadeIn ease-out 2s;
    @keyframes fadeIn {
        0% {
        opacity: 0;
        }
        100% {
        opacity: 1;
        }
    }
`;

const SmallText = styled.p`
    font-size: 48px;
    color: grey;
    font-weight: 600;
    margin: 0;
    text-align: center;
    text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;

    @media (max-width: 720px) {
        font-size: 26px;
    }
`;

const BigText = styled.p`
    font-size: 72px;
    font-weight: 800;
    margin: 0;
    text-align: center;
    text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;

    @media (max-width: 720px) {
        font-size: 30px;
    }
`;

export default Home;
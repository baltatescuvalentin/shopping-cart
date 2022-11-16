import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
`;

const HomeWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 170px - 83px);
    background: url('images/dots2.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

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

const HomeSplitter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 100px 50px 0 50px;
    align-items: center;
`;

const HomeImg = styled.img`
    border-radius: 16px;
    width: 45rem;
    
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
HomeImg.defaultProps = {
    src: 'images/homephoto.jpg',
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
    text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;
`;

const BigText = styled.p`
    font-size: 72px;
    font-weight: 800;
    margin: 0;
    text-align: center;
    text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;
`;

export default Home;
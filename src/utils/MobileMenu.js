import { useSidebar } from "../contexts/SidebarContext";
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillBagFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


function MobileMenu() {

    const { handleOpenSidebar } = useSidebar();
    const navigator = useNavigate();

    return (
        <Wrapper>
            <Menu>
                <LeftMenu>
                    <Burger onClick={handleOpenSidebar}>
                        <GiHamburgerMenu size={42}/>
                    </Burger>
                    <Title>
                        eClothing
                    </Title>

                </LeftMenu>

                <RightMenu>
                    <Bag onClick={() => navigator('cart')}>
                        <BsFillBagFill size={32}/>
                    </Bag>
                </RightMenu>
            </Menu>
        </Wrapper>
    )
}

// position: absolute;
//     width: 100vw;
//     top: 140px;
//     min-height: 100vh;

const Wrapper = styled.div`
    display: block;
    

    position: sticky;
    height: 65px;
    top: 10px;

    @media (max-width: 720px) {
        display: block;
    }
`;

const Title = styled.p`
    font-size: 24px;
    font-weight: 700;
    background: linear-gradient(267deg, rgba(255,165,133,1) 10%, rgba(255,237,160,1) 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    background-color: whitesmoke;
    border-width: 4px;
    border-color: linear-gradient(267deg, rgba(255,165,133,1) 16%, rgba(255,237,160,1) 71%);
    z-index: 1000;
    margin: 10px 5px 0 5px;
`;

const Burger = styled.button`
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: none;
    background: rgba(0,0,0,0.01);
`;

const Bag = styled.div`
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LeftMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

const RightMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export default MobileMenu;
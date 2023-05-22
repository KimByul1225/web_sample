import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from "@/resources/images/commons/logo_black.png";

interface IContainer {
    isMouseEnter?: boolean;
}

const Header = () => {
    const [mouserEnter, setMouseEnter] = useState(false);
    
    return (
        <HeaderWrap>
            <Container
                isMouseEnter={mouserEnter}
            >
                <LogoWrap>
                    <Link to="/">
                        <span className="ir_so">
                            Byul's web sample 로고
                        </span>
                    </Link>
                </LogoWrap>
                <Nav
                    onMouseEnter={() => setMouseEnter(true)}
                    onMouseLeave={() => setMouseEnter(false)}
                >
                    <Depth1>
                        <li>
                            <Link to="company">
                                회사소개
                            </Link>
                            <Depth2>
                                <li>
                                    <Link to="company">
                                        회사소개
                                    </Link>
                                </li>
                                <li>
                                    <Link to="company">
                                        3333
                                    </Link>
                                </li>
                            </Depth2>
                        </li>
                        <li>
                            <Link to="introduction">
                                introduction
                            </Link>
                            <Depth2>
                                <li>
                                    <Link to="introduction">
                                        type01
                                    </Link>
                                </li>
                                <li>
                                    <Link to="introduction/type02">
                                        type02
                                    </Link>
                                </li>
                            </Depth2>
                        </li>
                        <li>
                            <Link to="sub">
                                menu3
                            </Link>
                            <Depth2>
                                <li>
                                    <Link to="sub">
                                        2222
                                    </Link>
                                </li>
                                <li>
                                    <Link to="sub">
                                        3333
                                    </Link>
                                </li>
                            </Depth2>
                        </li>
                        <li>
                            <Link to="sub">
                                menu4
                            </Link>
                            <Depth2>
                                <li>
                                    <Link to="sub">
                                        2222
                                    </Link>
                                </li>
                                <li>
                                    <Link to="sub">
                                        3333
                                    </Link>
                                </li>
                            </Depth2>
                        </li>
                    </Depth1>

                </Nav>

            </Container>
        </HeaderWrap>
    );
};

export default Header;


const HeaderWrap = styled.header`
    position: fixed; 
    width: 100%; 
    z-index: 999;
`
const Container = styled.div<IContainer>`
    display: flex;
    justify-content: space-between; 
    align-items: flex-start; 
    padding: 0 100px 0 100px; 
    background-color: #000; 
    height: 90px; 
    overflow: hidden; 
    transition:  all .3s ease;
    ${(props) => props.isMouseEnter && css`
        padding: 0 100px 40px 100px; 
        height: 370px; 
        transition: all .3s ease; 
        box-shadow: 0px 9px 24px -2px rgba(255, 255, 255, 0.15);
    `}
`

const LogoWrap = styled.h1`
    position: relative; 
    width: 260px; 
    height: 70px; 
    margin: 10px 0 10px 0;
    background: url(${Logo}) center no-repeat;
    background-size: contain;

    a{
        position: absolute; 
        top: 0; 
        bottom: 0; 
        left: 0; 
        right: 0;
        span{

        }
    }
`

const Nav = styled.nav``

const Depth1 = styled.ul`
    display: flex;
    & > li{
        text-align: center; 
        width: 165px;
        & > a{
            font: var(--b1); color: #fff; padding: 0 25px; height: 90px; line-height: 90px; display: block; border-bottom: 3.5px solid rgba(0, 0, 0, 0);
        }
        & > a:hover{
            border-bottom: 3.5px solid var(--col_acc); transition: all .2s ease;
        }
    }
`

const Depth2 = styled.ul`
    padding-top: 25px;
    li{
        a{
            font: var(--b2); color: #fff; display: block; padding: 6px 25px;
        }
        a:hover{
            color: var(--col_acc); transition: color .2s ease;
        }
    }
`

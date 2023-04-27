import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderWrap>
            <Container>
                <LogoWrap>
                    <Link to="/">
                        로고자리
                    </Link>
                </LogoWrap>
                <Nav>
                    <Depth1>
                        <li>
                            <Link to="sub">
                                menu1
                            </Link>
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
const Container = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: flex-start; 
    padding: 0 100px 0 100px; 
    background-color: #000; 
    height: 90px; 
    overflow: hidden; 
    transition:  all .3s ease;

`


const LogoWrap = styled.h1`
    position: relative; 
    width: 258px; 
    height: 50px; 
    border: 1px solid #fff;
    margin: 20px 0 20px 0;
    a{
        position: absolute; 
        top: 0; 
        bottom: 0; 
        left: 0; 
        right: 0;
    }
`

const Nav = styled.nav`
    
`

const Depth1 = styled.ul`
    display: flex;
    li{
        text-align: center; 
        width: 165px;
        a{
            font-size: 18px; color: #fff; padding: 0 25px; height: 90px; line-height: 90px; display: block; border-bottom: 3.5px solid rgba(0, 0, 0, 0);
        }
        a:hover{
            border-bottom: 3.5px solid var(--col_acc); transition: all .2s ease;
        }
    }
`

// .depth1{}
// .depth1 li{ }
// .depth1 > li > a{font: var(--b1); color: #fff; padding: 0 25px; height: 90px; line-height: 90px; display: block; border-bottom: 3.5px solid rgba(0, 0, 0, 0);}
// .depth1 > li > a:hover{border-bottom: 3.5px solid var(--col_acc); transition: all .2s ease;}
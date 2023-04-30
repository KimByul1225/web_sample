import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <FooterWrap>
            <TopArea>
                <Row>
                    <TermsWrap>
                        <LeftBox>
                            <Link to="/terms">이용약관</Link>
                            <VerticalLine/>
                            <Link to="/privacy">개인정보 취급 방침</Link>
                            <VerticalLine/>
                            <Link to="/stewardshipcode">스튜어드십코드</Link>
                            <VerticalLine/>
                            <Link to="/policy">이해상충방지</Link>
                        </LeftBox>
                        <RightBox>
                            
                        </RightBox>
                    </TermsWrap>
                </Row>
            </TopArea>
            
        </FooterWrap>
    );
};

export default Footer;

const FooterWrap = styled.footer`
    background-color: #000;
`
const Row = styled.div`
    max-width: 1200px; margin: 0 auto; height: 100%;
`

const TopArea = styled.div`
    height: 70px;
`
    

const TermsWrap = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    height: 100%; 
    border-bottom: 1px solid #222;
`
const LeftBox = styled.div`
    a{
        color: #fff; 
        font: var(--b2);
    }
    a:hover{
        color: var(--col_acc); 
        transition: color .2s ease;
    }
    
`
const VerticalLine = styled.span`
    width: 1px; 
    height: 14px; 
    background-color: #fff; 
    display: inline-block; 
    margin: 0 12px;
`

const RightBox = styled.div`
    a{
        width: 40px; height: 40px; border-radius: 10px; display: inline-block; border: 1px solid #fff; transition: all .2s ease; margin-right: 15px;
    }

`


// .footer .top{}
// .footer .top .terms_wrap{}
// .top .left_box a{}
// .top .left_box a:hover{}
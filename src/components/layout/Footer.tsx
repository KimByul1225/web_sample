import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon1 from "@/resources/icons/commons/icon_youtube.png"
import IconHover1 from "@/resources/icons/commons/icon_youtube_hover.png"
import Icon2 from "@/resources/icons/commons/icon_sns.png"
import IconHover2 from "@/resources/icons/commons/icon_sns_hover.png"
import Icon3 from "@/resources/icons/commons/icon_sns2.png"
import IconHover3 from "@/resources/icons/commons/icon_sns2_hover.png"
import Icon4 from "@/resources/icons/commons/icon_mail.png"
import IconHover4 from "@/resources/icons/commons/icon_mail_hover.png"

import Logo from "@/resources/images/commons/logo_black.png"

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
                            <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer"><span className='ir_so'>Youtube</span></a>    
                            <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer"><span className='ir_so'>Facebook</span></a>
                            <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer"><span className='ir_so'>Linkdin</span></a>
                            <a href="mailto:admin@11.com" target="_blank" rel="noopener noreferrer"><span className='ir_so'>mail</span></a>
                        </RightBox>
                    </TermsWrap>
                </Row>
            </TopArea>
            <BottomArea>
                <Row>
                    <FooterLogo>
                        <Link to="/">
                            <span className="ir_so">
                                로고 클릭시 메인페이로 이동
                            </span>
                        </Link>
                    </FooterLogo>
                    <InfoWrap>
                        <InfoLeftBox>
                            <p>
                                <span>Byul's Web Sample</span>
                                <VerticalLine/>
                                <span>사업자등록번호 : 000-00-0000 (대표이사 : 김 별)</span>
                            </p>
                            <AddressCsWrap>
                                <AddressBox>
                                    <span>주소&nbsp;&nbsp;&nbsp;<span className="mb_none">:</span>&nbsp;&nbsp;&nbsp;</span>
                                    <span>(1722) 안양시 동안구 동편로 20번길 43</span>
                                </AddressBox>
                                <CsBox>
                                    <span>전화번호&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span>
                                    <span>010-3092-1356</span>
                                </CsBox>
                            </AddressCsWrap>
                            <h5>
                                Copyright © 2023 ByulKim. All rights reserved.
                            </h5>
                        </InfoLeftBox>
                        <InfoRightBox>
                            <p>Membership &  Network</p>
                            <MemberBox>
                                <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer">Sample</a>
                                <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer">Sample</a>
                            </MemberBox>
                        </InfoRightBox>
                    </InfoWrap>
                </Row>
            </BottomArea>
            
            
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
    a:nth-child(1){
        background: #fff url(${Icon1}) center no-repeat; background-size: 40px;
        :hover{
            background: #000 url(${IconHover1}) center no-repeat; background-size: 40px;
        }
    }
    a:nth-child(2){
        background: #fff url(${Icon2}) center no-repeat; background-size: 40px;
        :hover{
            background: #000 url(${IconHover2}) center no-repeat; background-size: 40px;
        }
    }
    a:nth-child(3){
        background: #fff url(${Icon3}) center no-repeat; background-size: 40px;
        :hover{
            background: #000 url(${IconHover3}) center no-repeat; background-size: 40px;
        }
    }
    a:nth-child(4){
        background: #fff url(${Icon4}) center no-repeat; background-size: 40px;
        :hover{
            background: #000 url(${IconHover4}) center no-repeat; background-size: 40px;
        }
    }

`

const BottomArea = styled.div`
    height: 230px; padding-top: 20px;

`

const FooterLogo = styled.h2`
    width: 130px; 
    height: 35px; 
    background: url(${Logo}) center no-repeat; 
    background-size: contain; 
    position: relative;
    a{position: absolute; top: 0; bottom: 0; left: 0; right: 0;}
`

const InfoWrap = styled.div`
    display: flex; justify-content: space-between;
`

const InfoLeftBox = styled.div`
    p{
        color: #fff; font: var(--b2); margin-top: 20px;
    }
    h5{
        margin-top: 20px;
        color: #828282;
    }

`

const AddressCsWrap = styled.p`
    display: flex;
`
const AddressBox = styled.span`
    display: block;
`
const CsBox = styled.span`
    margin-left: 20px; display: block;
`

const InfoRightBox = styled.div`
    width: 478px;
    p{
        color: #fff; font: var(--b2); margin-top: 20px;
    }
`
const MemberBox = styled.div`
    display: flex; 
    justify-content: space-between;
    width: 100%;
    margin-top: 15px;
    a{
        display: block; width: 49%; height: 47px; line-height: 47px; border: 1px solid #fff; color: #fff; text-align: center;
    }
    a:hover{
        color: var(--col_acc); border: 1px solid var(--col_acc); transition: all .2s ease;
    }

`




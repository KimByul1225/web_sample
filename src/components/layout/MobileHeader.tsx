import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "@/resources/images/commons/logo_symbol.png";
import iconMenu from "@/resources/icons/commons/icon_menu.png";
import iconMenuClose from "@/resources/icons/commons/icon_mobile_menu_close.png";

const MobileHeader = () => {
    return (
        <>
            <Container>
                <button>
                    <span className="ir_so">모바일 메뉴창 열기 버튼</span>
                </button>
                <h1>
                    <Link
                        to="/"
                    >
                        <span className="ir_so">Byul's web sample 로고</span>
                    </Link>
                </h1>
                <div></div>
                {/* layout을 위한 빈 div */}
            </Container>

            <MenuWrap
                className='on'
            >
                <MenuTopArea>
                    <button>
                        <span className="ir_so">모바일 메뉴창 닫기 버튼</span>
                    </button>
                </MenuTopArea>
                <MenuBottomArea>
                    <Depth1>
                        <li>
                            <button
                                className='on'
                            >
                                기업소개
                            </button>
                            <Depth2>
                                <li>
                                    <Link to="company/introduction">
                                        기업소개
                                    </Link>
                                </li>
                                <li>
                                    <Link to="company/member">
                                        구성원
                                    </Link>
                                </li>
                                <li>
                                    <Link to="company/qna">
                                        문의
                                    </Link>
                                </li>
                            </Depth2>
                        </li>
                        <li>
                            <button>
                                소개페이지
                            </button>
                            <Depth2>
                                <li>
                                    <Link to="introduction/normalType01">
                                        일반형태 Type1
                                    </Link>
                                </li>
                                <li>
                                    <Link to="introduction/normalType02">
                                        일반형태 Type2
                                    </Link>
                                </li>
                                <li>
                                    <Link to="introduction/listType01">
                                        리스트형태 Type1
                                    </Link>
                                </li>
                                <li>
                                    <Link to="introduction/listType02">
                                        리스트형태 Type2
                                    </Link>
                                </li>
                                <li>
                                    <Link to="introduction/partners">
                                        협력사 형태
                                    </Link>
                                </li>
                            </Depth2>
                        </li>
                        <li>
                            <button>
                                게시글
                            </button>
                            <Depth2>
                                <li>
                                    <Link to="list/textType">
                                        텍스트 형태
                                    </Link>
                                </li>
                                <li>
                                    <Link to="list/imageType">
                                        이미지 형태
                                    </Link>
                                </li>
                            </Depth2>
                        </li>
                        <li>
                            <button>
                                마이페이지
                            </button>
                            <Depth2>
                                <li>
                                    <Link to="mypage/login">
                                        로그인
                                    </Link>
                                </li>
                                <li>
                                    <Link to="mypage/findid">
                                        아이디 찾기
                                    </Link>
                                </li>
                                <li>
                                    <Link to="mypage/resetpwd">
                                        비밀번호 재발급
                                    </Link>
                                </li>
                                <li>
                                    <Link to="mypage/register">
                                        회원가입
                                    </Link>
                                </li>
                            </Depth2>
                        </li>
                        <li>
                            <button>
                                기타
                            </button>
                            <Depth2>
                                <li>
                                    <Link to="etc/chartType01">
                                        차트관련
                                    </Link>
                                </li>
                            </Depth2>
                        </li>
                    </Depth1>


                </MenuBottomArea>
            </MenuWrap>
        
        </>
        
    )
}

export default MobileHeader

const Container = styled.div`
    display: flex;
    padding: 0 100px 0 100px;
    background-color: #000;
    justify-content: space-between;
    align-items: flex-start;
    height: 90px;
    overflow: hidden;
    transition: all .3s ease;
    button{
        width: 30px;
        height: 30px;
        background: url(${iconMenu}) center no-repeat;
        background-size: contain;
    }
    h1{
        position: relative;
        width: 50px;
        height: 50px;
        background: url(${logo}) center no-repeat;
        background-size: contain;
        margin: 20px 0 20px 0;
    }
    a{
        display: block;
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 1200px){
        height: 80px;
        padding: 0 20px 0 20px;
        align-items: center;
    }
    @media screen and (max-width: 768px){
        height: 60px;
        button{
            width: 20px;
            height: 20px;
        }
        h1{
            width: 40px;
            height: 40px;
        }
    }
`

const MenuWrap = styled.nav`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #fff;
    top: 0;
    left: -100%;
    transition: all .3s ease;
    &.on{
        left: 0;
        transition: all .3s ease;
    }
`
const MenuTopArea = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    button{
        width: 30px;
        height: 30px;
        background: url(${iconMenuClose}) center no-repeat;
        background-size: contain;
    }
`

const MenuBottomArea = styled.div`
    height: calc(100% - 80px);
`
const Depth1 = styled.ul`
    width: 100%;
    height: 100%;
    background: #F5F5F5;
    position: relative;
    & > li > button{
        font-size: 20px;
        font-weight: 500;
        line-height: 60px;
        color: #828282;
        padding-left: 20px;
        box-sizing: border-box;
        display: block;
        width: 38%;
        text-align: left;
        background-color: #F5F5F5;
    }
    & > li > button.on{
        color: var(--col_acc);
        font-weight: 700;
        border-left: 6px solid var(--col_acc);
        background-color: #fff;
    }
    & > li > button.on + ul{
        display: block;
    }
`



const Depth2 = styled.ul`
    width: 62%;
    height: calc(100vh - 80px);
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    display: none;
    a{
        display: inline-block;
        color: #828282;
        font-size: 18px;
        font-weight: 500;
        padding: 10px 0 10px 20px;
    }
    a.on{
        color: var(--col_acc);
    }
`
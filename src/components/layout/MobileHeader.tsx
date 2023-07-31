import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, {css} from 'styled-components';
import logo from "@/resources/images/commons/logo_symbol.png";
import iconMenu from "@/resources/icons/commons/icon_menu.png";
import iconMenuClose from "@/resources/icons/commons/icon_mobile_menu_close.png";

const MobileHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);
    
    const isActive = (path: string) => {
        const sliceLocation = location.pathname.substring(1);
        const substringLocaton = sliceLocation.split("/");
        const locationPath = substringLocaton[0];
        return path === locationPath ? "on" : ""
    }

    const depth2IsActive = (detailPath: string) => {
        const sliceLocation = location.pathname.substring(1);
        const substringLocaton = sliceLocation.split("/");
        const locationPathChild = substringLocaton[1];
        return detailPath === locationPathChild ? "on" : ""
    }

    const depth1MenuHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const deth1Menu = document.querySelectorAll(".depth1Menu li button");
        for (var n = 0; n < deth1Menu.length; ++n) {
            deth1Menu[n].classList.remove("on");
        }
        e.currentTarget.classList.add("on");
    };
    
    const mobileMenuButtonHandler = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return (
        <>
            <Container>
                <button
                    onClick={mobileMenuButtonHandler}
                >
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
                open={mobileMenuOpen}
            >
                <MenuTopArea>
                    <button
                        onClick={mobileMenuButtonHandler}
                    >
                        <span className="ir_so">모바일 메뉴창 닫기 버튼</span>
                    </button>
                </MenuTopArea>
                <MenuBottomArea>
                    <Depth1
                        className="depth1Menu"
                    >
                        <li>
                            <button
                                className={isActive("company")}
                                onClick={depth1MenuHandler}
                            >
                                기업관련
                            </button>
                            <Depth2>
                                <li>
                                    <Link 
                                        to="company/introduction"
                                        className={depth2IsActive("introduction")}
                                    >
                                        기업소개
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="company/member"
                                        className={depth2IsActive("member")}
                                    >
                                        구성원
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="company/qna"
                                        className={depth2IsActive("qna")}
                                    >
                                        문의
                                    </Link>
                                </li>
                            </Depth2>
                        </li>
                        <li>
                            <button
                                className={isActive("introduction")}
                                onClick={depth1MenuHandler}
                            >
                                소개페이지
                            </button>
                            <Depth2>
                                <li>
                                    <Link 
                                        to="introduction/normalType01"
                                        className={depth2IsActive("normalType01")}
                                    >
                                        일반형태 Type1
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="introduction/normalType02"
                                        className={depth2IsActive("normalType02")}
                                    >
                                        일반형태 Type2
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="introduction/listType01"
                                        className={depth2IsActive("listType01")}
                                    >
                                        리스트형태 Type1
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="introduction/listType02"
                                        className={depth2IsActive("listType02")}
                                    >
                                        리스트형태 Type2
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="introduction/partners"
                                        className={depth2IsActive("partners")}
                                    >
                                        협력사 형태
                                    </Link>
                                </li>
                            </Depth2>
                        </li>
                        <li>
                            <button
                                className={isActive("list")}
                                onClick={depth1MenuHandler}
                            >
                                게시글
                            </button>
                            <Depth2>
                                <li>
                                    <Link 
                                        to="list/textType"
                                        className={depth2IsActive("textType")}
                                    >
                                        텍스트 형태
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="list/imageType"
                                        className={depth2IsActive("imageType")}
                                    >
                                        이미지 형태
                                    </Link>
                                </li>
                            </Depth2>
                        </li>
                        <li>
                            <button
                                className={isActive("mypage")}
                                onClick={depth1MenuHandler}
                            >
                                마이페이지
                            </button>
                            <Depth2>
                                <li>
                                    <Link 
                                        to="mypage/login"
                                        className={depth2IsActive("login")}
                                    >
                                        로그인
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="mypage/findid"
                                        className={depth2IsActive("findid")}
                                    >
                                        아이디 찾기
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="mypage/resetpwd"
                                        className={depth2IsActive("resetpwd")}
                                    >
                                        비밀번호 재발급
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="mypage/register"
                                        className={depth2IsActive("register")}
                                    >
                                        회원가입
                                    </Link>
                                </li>
                            </Depth2>
                        </li>
                        <li>
                            <button
                                className={isActive("etc")}
                                onClick={depth1MenuHandler}
                            >
                                기타
                            </button>
                            <Depth2>
                                <li>
                                    <Link 
                                        to="etc/barChart"
                                        className={depth2IsActive("barChart")}
                                    >
                                        Bar Chart
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="etc/doughnutChart"
                                        className={depth2IsActive("doughnutChart")}
                                    >
                                        DoughnutChart Chart
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="etc/etcChart"
                                        className={depth2IsActive("etcChart")}
                                    >
                                        ETC Chart
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="etc/quickMenu"
                                        className={depth2IsActive("quickMenu")}
                                    >
                                        Quick Menu
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

const MenuWrap = styled.nav<{open: boolean}>`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #fff;
    top: 0;
    left: -100%;
    transition: all .3s ease;
    ${(props) => props.open && css`
        left: 0;
        transition: all .3s ease;           
    `}
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
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../layout/Container';
import Row from '../layout/Row';
import SubBanner from '../commons/SubBanner';
import Menu from './quickmenu/Menu';


import IconImg01 from '@/resources/icons/etc/icon_quickmenu_01.png';
import IconImg01Active from '@/resources/icons/etc/icon_quickmenu_01_active.png';
import IconImg02 from '@/resources/icons/etc/icon_quickmenu_02.png';
import IconImg02Active from '@/resources/icons/etc/icon_quickmenu_02_active.png';
import IconImg03 from '@/resources/icons/etc/icon_quickmenu_03.png';
import IconImg03Active from '@/resources/icons/etc/icon_quickmenu_03_active.png';
import IconImg04 from '@/resources/icons/etc/icon_quickmenu_04.png';
import IconImg04Active from '@/resources/icons/etc/icon_quickmenu_04_active.png';

const QuickMenu = () => {

    useEffect(() => {
        const scrollEvent = () => {
            const scrollPosition = window.scrollY;
            const sectionTop = quickMenuRef.current;
            const activeCurrent = activeRef.current;
            sectionTop.forEach((item, index) => {
                if (item.offsetTop + 400 <= scrollPosition) {
                    activeCurrent.forEach((el) =>
                        el.classList.remove("active")
                    );
                    activeCurrent[index].classList.add("active");
                }
            });
        };
        window.addEventListener("scroll", scrollEvent);
        return () => window.removeEventListener("scroll", scrollEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.scrollY]);

    const quickMenuRef = useRef<any[]>([]);
    const activeRef = useRef<any[]>([]);
    const onClickQuickMenu = (index: number) => {
        const theQuickMenuRef = quickMenuRef;
        const headerHeight = "90px";
        theQuickMenuRef.current[index].style.scrollMargin = headerHeight;
        theQuickMenuRef.current[index]?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            <SubBanner
                title="Quick Menu"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <div>
                <Row>
                    <MobileBox>
                        <p>
                            모바일에서는 퀵메뉴가 보이지 않습니다.
                        </p>
                    </MobileBox>
                    <Box
                        ref={(el: HTMLElement | null) =>
                            (quickMenuRef.current[0] = el)
                        }
                    >
                        <p>첫번째 섹션입니다.</p>
                    </Box>
                    <Box
                        ref={(el: HTMLElement | null) =>
                            (quickMenuRef.current[1] = el)
                        }
                    >
                        <p>두번째 섹션입니다.</p>
                    </Box>
                    <Box
                        ref={(el: HTMLElement | null) =>
                            (quickMenuRef.current[2] = el)
                        }
                    >
                        <p>세번째 섹션입니다.</p>
                    </Box>
                    <Box
                        ref={(el: HTMLElement | null) =>
                            (quickMenuRef.current[3] = el)
                        }
                    >
                        <p>네번째 섹션입니다.</p>
                    </Box>
                    <Menu>
                        <MenuList
                            className="active"
                            ref={(el: HTMLElement | null) =>
                                (activeRef.current[0] = el)
                            }
                        >
                            <p>1번 색션</p>
                            <button onClick={() => onClickQuickMenu(0)}></button>
                        </MenuList>
                        <MenuList
                            ref={(el: HTMLElement | null) =>
                                (activeRef.current[1] = el)
                            }
                        >
                            <p>2번 색션</p>
                            <button onClick={() => onClickQuickMenu(1)}></button>
                        </MenuList>
                        <MenuList
                            ref={(el: HTMLElement | null) =>
                                (activeRef.current[2] = el)
                            }
                        >
                            <p>3번 색션</p>
                            <button onClick={() => onClickQuickMenu(2)}></button>
                        </MenuList>
                        <MenuList
                            ref={(el: HTMLElement | null) =>
                                (activeRef.current[3] = el)
                            }
                        >
                            <p>4번 색션</p>
                            <button onClick={() => onClickQuickMenu(3)}></button>
                        </MenuList>
                    </Menu>
                </Row>
            </div>        
        </>
    )
}

export default QuickMenu


const MobileBox = styled.div`
    display: none;
    p{
        font-size: 48px;
        text-align: center;
    }
    @media screen and (max-width: 1200px){
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80vh;
    }
`

const Box = styled.div`
    height: 200vh;
    background-color: #a8fcf7;
    padding-top: 100px;
    :nth-child(2) {
        background-color: #5cfad5;
    }
    :nth-child(3) {
        background-color: #5cd0fa;
    }
    :nth-child(4) {
        background-color: #ecff90;
    }
    p{
        font-size: 120px;
        writing-mode: vertical-lr;
        margin: 0 auto;
        color: #7a7a7a;
    }
    @media screen and (max-width: 1200px){
        display: none;
    }
`


export const MenuList = styled.li`
    padding: 70px 0 10px 0;
    border-bottom: 1px solid #F2F2F2;
    background-size: 60px;
    position: relative;
    
    :first-child{
        background: url(${IconImg01}) top 10px center no-repeat;
    }
    :nth-child(2){
        background: url(${IconImg02}) top 10px center no-repeat;
    }
    :nth-child(3){
        background: url(${IconImg03}) top 10px center no-repeat;
    }
    :last-child{
        background: url(${IconImg04}) top 10px center no-repeat;
        border-bottom: none;
    }
    &.active{
        :first-child{
            background: #FF4D15 url(${IconImg01Active}) top 10px center no-repeat;
        }
        :nth-child(2){
            background: #FF4D15 url(${IconImg02Active}) top 10px center no-repeat;
        }
        :nth-child(3){
            background: #FF4D15 url(${IconImg03Active}) top 10px center no-repeat;
        }
        :last-child{
            background: #FF4D15 url(${IconImg04Active}) top 10px center no-repeat;
        }
        p{
            color: #fff;
        }
    }
    p{
        line-height: 30px;
        font-size: 14px;
        font-weight: 500;
        color: #FF4D15;
        text-align: center;
    }
    button{
        position: absolute;
        background: none;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
`
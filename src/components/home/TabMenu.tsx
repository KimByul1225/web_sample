import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../commons/SectionTitle';
import SliderType02 from './SliderType02';

const TabMenu = () => {
    const [tabMenuIndex, setTabMenuIndex] = useState(0);

    const menuArray = [
        {
            id: 1,
            menuName: "menu01",
        },
        {
            id: 2,
            menuName: "menu02",
        },
        {
            id: 3,
            menuName: "menu03",
        },
        {
            id: 4,
            menuName: "menu04",
        },
    ];

    const tabMenuHandler = (index: number) => {
        setTabMenuIndex(index);
    }

    return (
        <Wrap>
            <Row>
                <SectionTitle
                    title="탭메뉴 슬라이더 혼합 예시"
                    color="#fff"
                />
                <TabWrap>
                    {
                        menuArray.map((element, index)=>{
                            return(
                                <li key={element.id}>
                                    <button
                                        onClick={() => tabMenuHandler(index)}
                                        className={index === tabMenuIndex ? "on" : undefined}
                                    >
                                        {element.menuName}
                                    </button>
                                </li>
                            )
                        })
                    }
                </TabWrap>
                <SliderType02
                    menuIndex = {tabMenuIndex}
                />
            </Row>
            
        </Wrap>
    );
};

export default TabMenu;

const Wrap = styled.section`
    padding: 100px 0; background-color: #000;
    
    @media screen and (max-width: 1200px) {
        padding: 80px 0;
    }
    @media screen and (max-width: 768px) {
        padding: 50px 0;
    }
`

const Row = styled.div`
    max-width: 1200px; margin: 0 auto;
    @media screen and (max-width: 1200px) {
        padding: 0 20px;
    }
    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
`

const TabWrap = styled.div`
    display: flex; 
    justify-content: space-around; 
    max-width: 720px; 
    margin: 65px auto 50px auto;
    li{
        list-style-type: none;
    }
    li::-webkit-details-marker {
        display: none;
    }
    button{
        color: #fff; font: var(--b1); display: block; background-color: transparent;
    }
    button:hover{
        color: var(--col_acc); text-decoration: underline; transition: all .2s ease;
    }
    button.on{
        color: var(--col_acc); text-decoration: underline;
    }
    @media screen and (max-width: 1200px) {
        flex-wrap: wrap; 
        justify-content: space-between; 
        margin-top: 50px; 
        margin-bottom: 50px; 
        max-width: 100%;
        li{
            width: 48.5%; text-align: center;
        }
        li:nth-child(3), li:nth-child(4){
            margin-top: 20px;
        }
        button{
            width: 100%; font-size: 20px; font-weight: 500; color: #828282; background-color: #fff; display: block; height: 60px; line-height: 60px; border: 1px solid #828282; border-radius: 5px;
        }
        button:hover{
            color: #828282; text-decoration: none;
        }
        button.on{
            background-color: var(--col_acc); border: 1px solid var(--col_acc); color: #fff; font-weight: 700;
        }
    }
    @media screen and (max-width: 768px) {
        margin-top: 30px; 
        margin-bottom: 20px;
        li{
            width: 48.5%; margin-top: 0; margin-bottom: 10px;
        }
        li:nth-child(3), li:nth-child(4){
            margin-top: 0;
        }
        button{
            font-size: 14px; font-weight: 500; height: 50px; line-height: 50px;border: 1px solid #828282; border-radius: 3px;
        }
        button.on{
            font-size: 14px; font-weight: 500; height: 50px; line-height: 50px;border: 1px solid var(--col_acc); border-radius: 3px;
        }
    }
`


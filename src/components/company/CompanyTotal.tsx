import React, { useState } from 'react';
import styled from 'styled-components';
import SubBanner from '../commons/SubBanner';
import Company from './Company';
import Greetings from './Greetings';
import History from './History';
import ContactUs from './ContactUs';
import Ci from './Ci';

const CompanyTotal = () => {
    const [tabMenuIndex, setTabMenuIndex] = useState(0);
    const menuArray = [
        {
            id: 1,
            menuName: "기업소개",
        },
        {
            id: 2,
            menuName: "인사말",
        },
        {
            id: 3,
            menuName: "연혁",
        },
        {
            id: 4,
            menuName: "오시는길",
        },
        {
            id: 5,
            menuName: "CI소개",
        },
    ];

    const tabMenuHandler = (index: number) => {
        setTabMenuIndex(index);
    }

    return (
        <>
            <SubBanner
                title="기업 소개"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <TabMenuWrap>
                <div>
                    <ul>
                        {
                            menuArray.map((element, index) => {
                                return(
                                    <li key={index}>
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
                    </ul>
                </div>
            </TabMenuWrap>
            {
                tabMenuIndex === 0 && <Company/>
            }
            {
                tabMenuIndex === 1 && <Greetings/>
            }
            {
                tabMenuIndex === 2 && <History/>
            }
            {
                tabMenuIndex === 3 && <ContactUs/>
            }
            {
                tabMenuIndex === 4 && <Ci/>
            }
        </>
    );
};

export default CompanyTotal;

const TabMenuWrap = styled.div`
    background-color: #fff;
    border-bottom: 1px solid #bdbdbd;
    height: 80px;
    div{
        max-width: 1200px;
        margin: 0px auto;
    }
    ul{
        align-items: center;
        display: flex;
        height: 80px;
        justify-content: center;
        li{
            height: 100%;
            width: 20%;
        }
    }
    button{
        background: none;
        color: #000;
        font-size: 18px;
        font-weight: 500;
        height: 100%;
        width: 100%;
    }
    button.on{
        border-bottom: 3px solid #ff4d15;
        border-bottom: 3px solid var(--col_acc);
        color: #ff4d15;
        color: var(--col_acc);
    }
    

    @media screen and (max-width: 768px){
        border: none;
        height: auto;
        ul{
            flex-wrap: wrap;
            height: auto;
            li{
                border-bottom: 1px solid #bdbdbd;
                height: 80px;
            }
            li:first-child, li:nth-child(2), li:nth-child(3){
                width: 33.333%;
            }
            li:nth-child(4), li:nth-child(5){
                width: 50%;
            }
        }
        
    }
`
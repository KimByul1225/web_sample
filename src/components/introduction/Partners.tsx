import React, { useState } from 'react';
import styled from 'styled-components';
import SubBanner from '../commons/SubBanner';
import Row from '../layout/Row';
import Container from '../layout/Container';
import DecoTitle from '../commons/DecoTitle';

import PartnerSample from "@/resources/images/introduction/sample_03.png"

const Partners = () => {
    const [partnersView, setPartnersView] = useState(5);
    const [veiwMoreHidden, setViewMoreHidden] = useState(true);

    const viewMoreBtnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const clientList = document.querySelectorAll(".clientlist");
        const clientLength = clientList.length;
        const clientQuo = ~~(clientLength / 5);
        const clientRem = clientLength % 5;
        const clientMath = clientLength - clientRem;
        if(partnersView < clientQuo * 5){
            setPartnersView(partnersView + 5);
        }else if(partnersView === clientMath){
            setPartnersView(partnersView + clientRem);
        }else{
            setViewMoreHidden(false)
        }
        for (var i = 0; i < partnersView; ++i) {
            clientList[i].classList.add('on');
        }
    }

    const partnersArray = [
        {
            id: 1,
            partnerName: "중소벤처기업부",
        },
        {
            id: 2,
            partnerName: "중소벤처기업부",
        },
        {
            id: 3,
            partnerName: "중소벤처기업부",
        },
        {
            id: 4,
            partnerName: "중소벤처기업부",
        },
        {
            id: 5,
            partnerName: "중소벤처기업부",
        },
        {
            id: 6,
            partnerName: "중소벤처기업부",
        },
        {
            id: 7,
            partnerName: "중소벤처기업부",
        },
        {
            id: 8,
            partnerName: "중소벤처기업부",
        },
        {
            id: 9,
            partnerName: "중소벤처기업부",
        },
        {
            id: 10,
            partnerName: "중소벤처기업부",
        },
        {
            id: 11,
            partnerName: "중소벤처기업부",
        },
        {
            id: 12,
            partnerName: "중소벤처기업부",
        },
    ];

    return (
        <>
            <SubBanner
                title="Partners 페이지"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                <Row>
                    <DecoTitle
                        text="협력사 예시"
                    />
                    <PartnersWrap>
                        {
                            partnersArray.map((element) => {
                                return(
                                    <li key={element.id}>
                                        <a href="https://www.mss.go.kr/" target="_blank" rel="noopener noreferrer"><span className='ir_so'>{element.partnerName}</span></a>
                                    </li>
                                )
                            })
                        }
                        
                    </PartnersWrap>

                    {
                        veiwMoreHidden === true &&
                        <button 
                            type="button"
                            onClick={viewMoreBtnHandler}
                            className="btn view_more"
                        >
                            더보기
                        </button>
                    }
                </Row>
            </Container>
            
        </>
    );
};

export default Partners;


const PartnersWrap =styled.ul`
    display: flex; flex-wrap: wrap; justify-content: flex-start;
    li{
        width: 23%; height: 190px; border: 1px solid #E0E0E0; margin-right: 2.66%; margin-bottom: 40px;
    }
    li:nth-child(4n){margin-right: 0;}
    a{
        display: block; width: 100%; height: 100%; background: url(${PartnerSample}) center no-repeat; background-size: 280px 190px;
    }
    
    @media screen and (max-width:1200px) {
        li{
            width: 49%; margin-right: 0;
        }
        li:nth-child(2n){
            margin-left: 2%;
        }
        
    }
    @media screen and (max-width:768px) {
        li{
            width: 100%; display: none;
        }
        li.on{
            display: block;
        }
        li:nth-child(2n){
            margin-left: 0;
        }
    }

`


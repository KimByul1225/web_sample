import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SubBanner from '../commons/SubBanner';
import Row from '../layout/Row';
import Container from '../layout/Container';
import DecoTitle from '../commons/DecoTitle';

import PartnerSample from "@/resources/images/introduction/sample_03.png"

const Partners = () => {
    const [partnersView, setPartnersView] = useState(5);
    const [veiwMoreHidden, setViewMoreHidden] = useState(true);

    useEffect(()=>{
        const partnerList = document.querySelectorAll(".partnerslist");
        for (var i = 0; i < 5; ++i) {
            partnerList[i].classList.add('on');
        }
    },[])

    const viewMoreBtnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const partnerList = document.querySelectorAll(".partnerslist");
        const partnerLength = partnerList.length;
        const partnerQuo = ~~(partnerLength / 5);
        const partnerRem = partnerLength % 5;
        const partnerMath = partnerLength - partnerRem;
        if(partnersView < partnerQuo * 5){
            setPartnersView(partnersView + 5);
        }else if(partnersView === partnerMath){
            setPartnersView(partnersView + partnerRem);
        }else{
            setViewMoreHidden(false)
        }

        for (var i = 0; i < partnersView; ++i) {
            partnerList[i].classList.add('on');
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
                                    <li 
                                        key={element.id}
                                        className="partnerslist"
                                    >
                                        <a href="https://www.mss.go.kr/" target="_blank" rel="noopener noreferrer"><span className='ir_so'>{element.partnerName}</span></a>
                                    </li>
                                )
                            })
                        }
                        
                    </PartnersWrap>
                    <ButtonWrap>
                        {
                            veiwMoreHidden &&
                            <button 
                                type="button"
                                onClick={viewMoreBtnHandler}
                                className="btn view_more"
                            >
                                더보기
                            </button>
                        }
                        <Link to="/">
                            연혁으로보기
                        </Link>
                    </ButtonWrap>
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

const ButtonWrap = styled.div`
    margin-top: 50px; text-align: center;
    button{
        display: none;
    }
    a{
        width: 230px; height: 60px; line-height: 60px; font-size: 18px; font-weight: 500; border: 1px solid #E1E1E1; border-radius: 5px; display: inline-block; background-color: #fff; color: #000;
    }
    a:hover{
        border: 1px solid #000; background-color: #000; color: #fff; transition: all .3s ease;
    }
    @media screen and (max-width:1200px) {
        margin-top: 30px;
        a{
            width: 340px; height: 50px; line-height: 50px;
        }
    }
    @media screen and (max-width:768px) {
        margin-top: 0;
        button{
            display: inline-block; width: 100%; height: 45px; line-height: 45px; text-align: center; color: var(--col_acc); border: 1px solid var(--col_acc); background-color: #fff; font-size: 14px; font-weight: 500; border-radius: 5px; transition: all .3s ease;
        }
        a{
            width: 100%; height: 45px; line-height: 45px; font-size: 14px; margin-top: 10px;
        }

    }
`

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../layout/Container';
import Row from '../layout/Row';


interface IHistoryDetail {
    year: number,
    details: {
        text: string,
        title: string
    }[]
    
}

/**
 * @description 기업소개 탭 하위 연혁 컴포넌트
 */


const HistoryDetail = ({result}: {result: IHistoryDetail}) => { 
    return(
        <DetailBox>
            {
                result.details.map((detail, index) => {
                    return(
                        <div key={index}>
                            <p>{detail.text}</p>
                            <h4>{detail.title}</h4>
                        </div>
                    )
                })
            }
        </DetailBox>
    )
}


const History = () => {
    const [historyView, setHistoryView] = useState(3);
    const [veiwMoreHidden, setViewMoreHidden] = useState(true);
    
    const viewMoreBtnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const historyList = document.querySelectorAll(".annualWrap");
        const historyLength = historyList.length;
        const historyQuo = ~~(historyLength / 3);
        if(historyView < historyQuo * 3){
            setHistoryView(historyView + 3);
        }else{
            setViewMoreHidden(false)
        }
        for (var i = 0; i < historyView; ++i) {
            historyList[i].classList.add('on');
        }
    }

    useEffect(()=>{
        const partnerList = document.querySelectorAll(".annualWrap");
        for (var i = 0; i < 3; ++i) {
            partnerList[i].classList.add('on');
        }
    },[])
    const historyArray = [
        {
            year: 2023,
            details: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    title: "Lorem ipsum"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur2",
                    title: "Lorem ipsum2"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur3",
                    title: "Lorem ipsum3"
                },
            ]
        },
        {
            year: 2022,
            details: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    title: "Lorem ipsum"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur2",
                    title: "Lorem ipsum2"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur3",
                    title: "Lorem ipsum3"
                },
            ]
        },
        {
            year: 2021,
            details: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    title: "Lorem ipsum"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur2",
                    title: "Lorem ipsum2"
                },
            ]
        },
        {
            year: 2020,
            details: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    title: "Lorem ipsum"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur2",
                    title: "Lorem ipsum2"
                },
            ]
        },
        {
            year: 2020,
            details: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    title: "Lorem ipsum"
                }
            ]
        },
        {
            year: 2019,
            details: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    title: "Lorem ipsum"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur2",
                    title: "Lorem ipsum2"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur3",
                    title: "Lorem ipsum3"
                },
            ]
        },
        {
            year: 2018,
            details: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    title: "Lorem ipsum"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur2",
                    title: "Lorem ipsum2"
                },
            ]
        },
        {
            year: 2017,
            details: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    title: "Lorem ipsum"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur2",
                    title: "Lorem ipsum2"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur3",
                    title: "Lorem ipsum3"
                },
            ]
        },
        {
            year: 2016,
            details: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    title: "Lorem ipsum"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur2",
                    title: "Lorem ipsum2"
                }
            ]
        },
        {
            year: 2015,
            details: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    title: "Lorem ipsum"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur2",
                    title: "Lorem ipsum2"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur3",
                    title: "Lorem ipsum3"
                },
            ]
        },
        {
            year: 2014,
            details: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    title: "Lorem ipsum"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur2",
                    title: "Lorem ipsum2"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur3",
                    title: "Lorem ipsum3"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur4",
                    title: "Lorem ipsum4"
                },
            ]
        },
        {
            year: 2013,
            details: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    title: "Lorem ipsum"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur2",
                    title: "Lorem ipsum2"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur3",
                    title: "Lorem ipsum3"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur4",
                    title: "Lorem ipsum4"
                },
            ]
        },
        
    ];


    return (
        <Container>
            <Row>
                {
                    historyArray.map((element, index) => {
                        return(
                            <AnnualWrap 
                                key={index}
                                className="annualWrap"
                            >
                                <YearBox>
                                    <h3>{element.year}</h3>
                                </YearBox>
                                <HistoryDetail
                                    result={element}
                                />

                            </AnnualWrap>
                        )
                    })
                }
                <MoreButtonWrap>
                    {
                        veiwMoreHidden === true &&
                        <button 
                            type="button"
                            onClick={viewMoreBtnHandler}
                        >
                            더보기
                        </button>
                    }
                </MoreButtonWrap>
            </Row>
        </Container>
    );
};
export default History;

const AnnualWrap = styled.div`
    align-items: flex-start;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: flex-start;
    margin: 50px 0 0 0;
    padding: 20px 0 50px;
    :first-child{
        margin: 0;
    }
    @media screen and (max-width: 768px){
        display: none;
        padding: 20px 20px 30px;
        &.on{
            display: block;
        }
    }
`
const YearBox = styled.div`
    width: 270px;
    h3{
        color: #ff4d15;
        color: var(--col_acc);
        font-family: Montserrat;
        font-size: 34px;
        font-weight: 500;
        line-height: 41px;
        padding-left: 20px;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        h3{
            font-size: 28px;
            line-height: 34px;
            margin-bottom: 10px;
            padding-left: 0;
        }
    }
`
const DetailBox = styled.div`
        width: calc(100% - 270px);
        div{
            align-items: flex-start;
            display: flex;
            justify-content: flex-start;
            margin-bottom: 20px;
        }
        h4{
            color: #313131;
            font-size: 18px;
            font-weight: 500;
            padding-left: 10px;
        }
        p{
            color: #828282;
            font-size: 18px;
            font-weight: 400;
            padding-right: 10px;
            position: relative;
        }
        p::after{
            background-color: #828282;
            content: "";
            display: block;
            height: 17px;
            position: absolute;
            right: 0;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            width: 1px;
        }
        @media screen and (max-width: 1200px) {
            div{
                display: block;
            }
            h4{
                margin-top: 5px;
                padding-left: 0;
            }
            p::after{
                display: none;
            }
        }
        @media screen and (max-width: 768px) {
            width: 100%;
            h4{
                font-size: 16px;
            }
            p{
                font-size: 16px;
            }
        }
`
const MoreButtonWrap = styled.div`
    margin-top: 100px;
    text-align: center;
    button{
        display: none;
    }
    @media screen and (max-width: 1200px) {
        margin-top: 80px;
    }
    @media screen and (max-width: 768px) {
        margin-top: 0;
        button{
            background-color: #fff;
            border: 1px solid #ff4d15;
            border: 1px solid var(--col_acc);
            border-radius: 5px;
            color: #ff4d15;
            color: var(--col_acc);
            display: inline-block;
            font-size: 14px;
            font-weight: 500;
            height: 45px;
            line-height: 45px;
            text-align: center;
            transition: all .3s ease;
            width: 100%;
        }
    }

`
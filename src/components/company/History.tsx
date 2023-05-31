import React from 'react';
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
                            <AnnualWrap key={index}>
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
    :last-child{
        border-bottom: none;
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
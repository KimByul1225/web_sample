import React from 'react';
import SubBanner from '../commons/SubBanner';
import styled from 'styled-components';
import Container from '../layout/Container';
import Row from '../layout/Row';
import DecoTitle from '../commons/DecoTitle';
import SampleImg from "@/resources/images/introduction/sample_01.png";
import { Link } from 'react-router-dom';

const IntroductionListType01 = () => {
    const introductionArray = [
        {
            id: 1,
            title: "Lorem ipsum",
        },
        {
            id: 2,
            title: "Lorem ipsum",
        },
        {
            id: 3,
            title: "Lorem ipsum",
        },
        {
            id: 4,
            title: "Lorem ipsum",
        },
        {
            id: 5,
            title: "Lorem ipsum",
        },
        {
            id: 6,
            title: "Lorem ipsum",
        },
    ];

    return (
        <>
            <SubBanner
                title="소개페이지 Type01"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                <Row>
                    <DecoTitle
                        text="소개 Type01"
                    />
                    <ListWrap>
                        {
                            introductionArray.map((element)=>{
                                return(
                                    <li key={element.id}>
                                        <Link to={`/introduction/listType01/${element.id}`}>
                                            <h3>
                                                {element.id}
                                                <span className="ir_so">{element.title}</span>
                                            </h3>
                                            <p>{element.title}</p>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        
                    </ListWrap>
                </Row>
            </Container>
            
        </>
    );
};
export default IntroductionListType01;


const ListWrap = styled.ul`
    display: flex; flex-wrap: wrap; justify-content: flex-start; margin-bottom: 55px;
    
    li{
        width: 375px; height: 388px; border-radius: 60px 0px; margin-bottom: 65px; overflow: hidden; margin-right: 37.5px; background: url(${SampleImg}) center no-repeat; background-size: cover;
    }
    li:nth-child(3n){
        margin-right: 0;
    }
    a{
        display: block; width: 100%; height: 100%; padding: 50px;
    }
    h3{
        font-size: 80px; height: 98px; line-height: 98px; color: #F2F2F2; padding-bottom: 20px; position: relative; font-family: 'Montserrat';
    }
    h3::after{
        content: ''; position: absolute; bottom: 0; left: 0; width: 50px; height: 2px; background-color: #828282; border-radius: 1px;
    }
    p{
        font-size: 22px; color: #fff; margin-top: 20px;
    }
    @media screen and (max-width:1200px) {
        margin-bottom: 40px; display: flex; justify-content: space-between;
        li{
            width: 48.6%; height: 350px; margin-bottom: 40px; margin-right: 0;
        }
    }
    @media screen and (max-width:768px) {
        margin-bottom: 20px;
        li{
            width: 100%; height: 330px; margin-bottom: 20px;
        }
    }
`

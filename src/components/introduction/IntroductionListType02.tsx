import React from 'react';
import SubBanner from '../commons/SubBanner';
import styled from 'styled-components';
import Container from '../layout/Container';
import Row from '../layout/Row';
import DecoTitle from '../commons/DecoTitle';
import SampleImg from "@/resources/images/introduction/sample_02.png";
import { Link } from 'react-router-dom';

const IntroductionListType02 = () => {
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
    ];

    return (
        <>
            <SubBanner
                title="소개페이지 리스트형태 Type02"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                <Row>
                    <DecoTitle
                        text="소개 Type02"
                    />
                    <ListWrap>
                        {
                            introductionArray.map((element)=>{
                                return(
                                    <li key={element.id}>
                                        <Link to={`/introduction/listType02/${element.id}`}>
                                            <h3>
                                                {element.title}
                                                <span className="ir_so">{element.title}</span>
                                            </h3>
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
export default IntroductionListType02;


const ListWrap = styled.ul`
    li{
        width: 100%; height: 250px; border-radius: 60px 0; overflow: hidden; margin-bottom: 80px; background: url(${SampleImg}) center no-repeat; background-size: cover;
    }

    a{
        display: block; width: 100%; height: 100%;
    }
    h3{
        font-size: 40px; font-weight: 500; color: #fff; text-align: center; line-height: 250px;
    }

    @media screen and (max-width:1200px) {
        li{
            margin-bottom: 40px;
        }
    }
    @media screen and (max-width:768px) {
        li{
            height: 120px;
        }
        h3{
            line-height: 120px; font-size: 24px;
        }
    }
`



import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import SubBanner from '../commons/SubBanner';
import Container from '../layout/Container';
import Row from '../layout/Row';
import { ListDetailFaker } from '@/resources/faker/list/ListDetailFaker';

/**
 * @description 게시글 텍스트, 이미지형태 상세 페이지
 */

const ListDetail = () => {
    const [text, setText] = useState("");
    const params = useParams();
    const {detailId} = params; 
    const location = useLocation();
    const title = location.state.title;
    const date = location.state.date;
    const recommend = location.state.recommend || false;
    console.log("recommend", recommend);
    const navigate = useNavigate();
    const goListHandler = () => {
        navigate(-1)
    };
    useEffect(() => {
        const result = ListDetailFaker();
        const { resultMap } = result || {};
        if (resultMap.text) {
            setText(resultMap.text);
        }
    }, []);
    return (
        <>
            
            <SubBanner
                title={
                    recommend ? 
                        `추천 게시글 ${detailId}번 상세`
                    :
                        `게시글 ${detailId}번 상세`
                }
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                <Row>
                    <Title>
                        {title}
                    </Title>
                    <Date>
                        {date}
                    </Date>
                    <TextBox>
                        {text}
                    </TextBox>
                    <ButtonWrap>
                        <button onClick={goListHandler}>목록</button>
                    </ButtonWrap>
                </Row>

            </Container>
        
        </>
    )
}

export default ListDetail

const Title = styled.h3`
    font-size: 36px;
    font-weight: 500;
    text-align: center;
    @media screen and (max-width: 1200px){
        font-size: 34px;
    }
    @media screen and (max-width: 768px){
        font-size: 22px;
        margin-bottom: 20px;
    }
`

const Date = styled.p`
    color: #828282;
    font-size: 20px;
    font-weight: 400;
    margin-top: 40px;
    text-align: center;
    @media screen and (max-width: 1200px){
        font-size: 16px;
        margin-top: 25px;
    }
    @media screen and (max-width: 768px){
        font-size: 14px;
    }
`

const TextBox = styled.div`
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #4f4f4f;
    padding: 60px 30px;
    width: 100%;
    margin-top: 50px;
    @media screen and (max-width: 1200px){
        padding: 40px 20px;
    }
    @media screen and (max-width: 768px){
        padding: 20px 10px;
    }
`
const ButtonWrap = styled.div`
    margin-top: 60px;
    text-align: center;
    button{
        background: var(--col_acc);
        border: 1px solid var(--col_acc);
        color: #fff;
        transition: all .3s; 
        border-radius: 5px;
        display: inline-block;
        font-size: 18px;
        font-weight: 500;
        height: 60px;
        line-height: 60px;
        text-align: center;
        width: 230px;
    }
    button:hover{
        background: #fff;
        color: var(--col_acc);
        transition: all .3s ease;
    }

    @media screen and (max-width: 1200px){
        button{
            font-size: 16px;
            height: 50px;
            line-height: 50px;
            width: 205px;
        }
        button:hover{
            background: var(--col_acc);
            border: 1px solid var(--col_acc);
            color: #fff;
        }
    }
    @media screen and (max-width: 768px){
        margin-top: 25px;
        button{
            display: block;
            font-size: 14px;
            height: 45px;
            line-height: 45px;
            margin: 10px auto 0;
            width: 180px;
        }
    }

`
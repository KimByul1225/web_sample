import React from 'react';
import styled from 'styled-components';

import SubBanner from '../commons/SubBanner';
import Container from '../layout/Container';
import Row from '../layout/Row';

import searchIcon from "@/resources/icons/company/icon_faq_search.png";
import qIcon from "@/resources/icons/company/icon_q.png";
import aIcon from "@/resources/icons/company/icon_a.png";
import dropdownIcon from "@/resources/icons/company/icon_dropdown.png";
import dropdownOnIcon from "@/resources/icons/company/icon_dropdown_on.png";

const Qna = () => {
    return (
        <>
            <SubBanner
                title="QnA"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                <Row>
                    <SpaceBetween>
                        <FaqWrap>
                            <div>
                                <h4>
                                    자주하는 질문
                                </h4>
                                <FormWrap>
                                    <button>
                                        <span className="ir_so">검색버튼</span>
                                    </button>
                                    <input type="text" name="searchWord"/>
                                </FormWrap>
                                <FaqListWrap>
                                    <ul>
                                        <li>
                                            <DroppableBox>
                                                <i>
                                                    <span className="ir_so">Q icon</span>
                                                </i>
                                                <p>어쩌구 저쩌구 내용이 들어가</p>
                                                <button>
                                                    <span className="ir_so">드롭다운 버튼</span>
                                                </button>
                                            </DroppableBox>
                                            <DropdownBox
                                                className="on"
                                            >
                                                <p>- 서스틴베스트 홈페이지는 크롬, 엣지, 사파리, 파이어폭스, 오페라 브라우저를 지원하고 있습니다. 위 브라우저로 접속하셨는지 확인 부탁드립니다.</p>
                                                <p>- 서스틴베스트 홈페이지는 크롬, 엣지, 사파리, 파이어폭스, 오페라 브라우저를 지원하고 있습니다. 위 브라우저로 접속하셨는지 확인 부탁드립니다.</p>

                                            </DropdownBox>
                                        </li>
                                    </ul>

                                </FaqListWrap>

                            </div>
                        </FaqWrap>

                    </SpaceBetween>
                </Row>
            </Container>

        </>
    )
}

export default Qna

const SpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1200px){
        display: block;
        justify-content: normal;
    }
`

const FaqWrap = styled.div`
    width: 48.3%;
    h4{
        font-size: 28px;
        font-weight: 500;
    }
    @media screen and (max-width: 1200px){
        width: 100%;
    }
    @media screen and (max-width: 768px){
        h4{
            font-size: 22px;
            text-align: center;
        }
    }
`

const FormWrap = styled.div`
    margin-top: 20px;
    position: relative;
    input{
        background-color: #fff;
        border: 1px solid var(--col_acc);
        border-radius: 5px;
        font-size: 16px;
        height: 50px;
        padding-left: 60px;
        width: 100%;
    }
    button{
        background: url(${searchIcon}) center no-repeat;
        background-size: contain;
        height: 32px;
        left: 20px;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 32px;
    }
    @media screen and (max-width: 768px){
        input{
            height: 40px;
        }
        button{
            height: 24px;
            left: 10px;
            width: 24px;
        }
    }
`

const FaqListWrap = styled.div`
    border-top: 1px solid #000;
    margin-top: 40px;
    @media screen and (max-width: 768px){
        margin-top: 30px;
    }
`
const DroppableBox = styled.div`
    align-items: flex-start;
    background-color: #fff;
    border-bottom: 1px solid #bdbdbd;
    display: flex;
    justify-content: flex-start;
    padding: 22px 30px 23px 20px;
    position: relative;
    i{
        background: url(${qIcon}) 50% no-repeat;
        background-size: contain;
        display: block;
        height: 23px;
        width: 21px;
    }
    p{
        color: #4f4f4f;
        font-size: 18px;
        font-weight: 500;
        padding: 0 25px 0 10px;
        text-align: left;
        width: calc(100% - 25px);
    }
    button{
        background: url(${dropdownIcon}) top 20px right 20px no-repeat;
        background-size: 24px;
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
    }
    button.on{
        background: url(${dropdownOnIcon}) top 20px right 20px no-repeat;
        background-size: 24px;
    }
    @media screen and (max-width: 768px){
        p{
            font-size: 14px;
        }
    }
`
const DropdownBox = styled.div`
    background: #fafafa url(${aIcon}) top 35px left 40px no-repeat;
    background-size: 20px 19px;
    color: #4f4f4f;
    display: none;
    padding: 35px 50px 35px 80px;
    &.on{
        display: block;
    }
    p{
        color: #4f4f4f;
        font-size: 16px;
        font-weight: 400;
    }
    @media screen and (max-width: 768px){
        p{
            font-size: 12px;
        }
    }
`
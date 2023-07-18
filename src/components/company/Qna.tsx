import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import SubBanner from '../commons/SubBanner';
import Container from '../layout/Container';
import Row from '../layout/Row';

import searchIcon from "@/resources/icons/company/icon_faq_search.png";
import qIcon from "@/resources/icons/company/icon_q.png";
import aIcon from "@/resources/icons/company/icon_a.png";
import dropdownIcon from "@/resources/icons/company/icon_dropdown.png";
import dropdownOnIcon from "@/resources/icons/company/icon_dropdown_on.png";
import checkBoxIcon from "@/resources/icons/company/icon_checkbox_checked.png";
import { FaqFaker } from '@/resources/faker/company/FaqFaker';
import Pagination from '../list/Pagination';

interface IFaqData{
    index: number;
    title: string;
    text: string;
}

const Qna = () => {
    const [radioValue, setRadioValue] = useState<string>("");
    const [agreeValue, setAgreeValue] = useState<boolean>(false);

    const [faqData, setFaqData] = useState<IFaqData[]>([] as IFaqData[]);

     // 게시글 목록갯수 설정
    const limit = 10;
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    const dropdownHandler = (e:any) => {
        const thisBtn = e.target;
        const allBtn = document.querySelectorAll('.folding');
        const thisDropbox = e.target.parentNode.parentNode.querySelector('.dropdownBox');
        const allDropbox = document.querySelectorAll('.dropdownBox');
        if(thisDropbox.classList.contains("on")){
            thisDropbox.classList.remove("on")
            thisBtn.classList.remove("on")
        }else{
            allDropbox.forEach((allDropbox) => {
                allDropbox.classList.remove("on");
                thisDropbox.classList.add("on")
            });
            allBtn.forEach((allBtn) => {
                allBtn.classList.remove("on");
                thisBtn.classList.add("on")
            });
        }
    }
    const radioBtnHandler = (e: { target: { value: string; }; }) => {
        const {value} = e.target;
        setRadioValue(value);
    };

    const aggrCheckHandler = () => {
        setAgreeValue(!agreeValue);
    };

    useEffect(() => {
        const result = FaqFaker();
        const { resultMap } = result || {};
        if (resultMap.result) {
            setFaqData(resultMap.resultList);
        }
        
    }, []);

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
                                    <input type="text" name="searchWord" placeholder="검색 기능은 Api 연동이 필요합니다." />
                                </FormWrap>
                                <FaqListWrap>
                                    <ul>
                                        {
                                            faqData.slice(offset, offset + limit).map((item)=> {
                                                return(
                                                    <li key={item.index}>
                                                        <DroppableBox>
                                                            <i>
                                                                <span className="ir_so">Q icon</span>
                                                            </i>
                                                            <p>{item.title}</p>
                                                            <button
                                                                onClick={dropdownHandler}
                                                                className="folding"
                                                            >
                                                                <span className="ir_so">드롭다운 버튼</span>
                                                            </button>
                                                        </DroppableBox>
                                                        <DropdownBox
                                                            className="dropdownBox"
                                                        >
                                                            <p>- {item.text}</p>
                                                        </DropdownBox>
                                                    </li>
                                                )
                                            })
                                        }
                                        
                                        
                                    </ul>
                                </FaqListWrap>
                                <Pagination 
                                    total={faqData.length}
                                    limit={limit}
                                    page={page}
                                    offset={offset}
                                    setPage={setPage}
                                />
                            </div>
                        </FaqWrap>

                        <QnaWrap>
                            <QnaBox>
                                <BorderTitleBox>
                                    <h4>문의</h4>
                                    <p>* 필수입력 항목 입니다.</p>
                                </BorderTitleBox>
                                <RadioButtonTr>
                                    <div>
                                        <input type="radio" name="radioBtn" id="radio1" className="ir_so" value="1" onChange={radioBtnHandler} checked={radioValue === '1'}/>
                                        <label htmlFor="radio1">
                                            이용문의
                                        </label>
                                        <input type="radio" name="radioBtn" id="radio2" className="ir_so" value="2" onChange={radioBtnHandler} checked={radioValue === '2'}/>
                                        <label htmlFor="radio2">
                                            서비스 문의
                                        </label>
                                        <input type="radio" name="radioBtn" id="radio3" className="ir_so" value="3" onChange={radioBtnHandler} checked={radioValue === '3'}/>
                                        <label htmlFor="radio3">
                                            기타 문의
                                        </label>
                                    </div>
                                </RadioButtonTr>
                                <InputTr>
                                    <LabelArea>
                                        <label htmlFor="email" className="necessary">이메일</label>
                                    </LabelArea>
                                    <FullSizeFormWrap>
                                        <input type="text" name="email" id="email" placeholder="Api 연동이 필요합니다."/>
                                    </FullSizeFormWrap>
                                </InputTr>

                                <InputTr>
                                    <LabelArea>
                                        <label htmlFor="tel" className="necessary">전화번호</label>
                                    </LabelArea>
                                    <FullSizeFormWrap>
                                        <input type="text" name="tel" id="tel" placeholder="Api 연동이 필요합니다."/>
                                    </FullSizeFormWrap>
                                </InputTr>

                                <InputTr>
                                    <LabelArea>
                                        <label htmlFor="company">회사명</label>
                                    </LabelArea>
                                    <FullSizeFormWrap>
                                        <input type="text" name="company" id="company"  placeholder="Api 연동이 필요합니다."/>
                                    </FullSizeFormWrap>
                                </InputTr>

                                <InputTr>
                                    <LabelArea>
                                        <label htmlFor="name" className="necessary">이름</label>
                                    </LabelArea>
                                    <FullSizeFormWrap>
                                        <input type="text" name="name" id="name"  placeholder="Api 연동이 필요합니다."/>
                                    </FullSizeFormWrap>
                                </InputTr>

                                <InputTr>
                                    <LabelArea>
                                        <label htmlFor="detail" className="necessary">문의내용</label>
                                    </LabelArea>
                                    <div>
                                        <TextArea
                                            placeholder="Api 연동이 필요합니다."
                                        >
                                            
                                        </TextArea>
                                    </div>
                                </InputTr>

                                <AgreeTr>
                                    <input type="checkbox" name="agree" id="agree" className="ir_so" onChange={aggrCheckHandler} checked={agreeValue}/>
                                    <label htmlFor="agree" className="icon_checkbox"></label>
                                    <label htmlFor="agree">개인정보 수집 및 이용에 동의합니다.</label>
                                </AgreeTr>
                                <ButtonWrap>
                                    <button>
                                        문의하기
                                    </button>
                                </ButtonWrap>
                            </QnaBox>
                        </QnaWrap>
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
const QnaWrap = styled.div`
    width: 48.3%;
    @media screen and (max-width: 1200px){
        margin-top: 60px;
        width: 100%;
    }
`
const QnaBox = styled.div`
    background-color: #fafafa;
    border: 1px solid #e0e0e0;
    border-radius: 15px;
    box-shadow: 8px 8px 30px rgba(0,0,0,.1);
    padding: 40px;
    @media screen and (max-width: 768px){
        padding: 20px;
    }
`
const BorderTitleBox = styled.div`
    align-items: center;
    border-bottom: 1px dashed #bdbdbd;
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;
    h4{
        font-size: 28px;
        font-weight: 500;
    }
    p{
        color: #828282;
        font-size: 15px;
        font-weight: 400;
    }
    @media screen and (max-width: 768px){
        padding-bottom: 10px;
        h4{
            font-size: 22px;
        }
        p{
            font-size: 12px;
        }
    }
`
const RadioButtonTr = styled.div`
    margin-bottom: 10px;
    margin-top: 30px;
    div{
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
    input[type=radio]+label {
        background-color: #fff;
        border: 1px solid #d1d1d1;
        border-radius: 5px;
        color: #828282;
        cursor: pointer;
    }
    input[type=radio]+label, input[type=radio]:checked+label {
        align-items: center;
        display: inline-block;
        display: flex;
        flex-direction: column;
        height: 90px;
        justify-content: center;
        text-align: center;
        width: 150px;
    }
    input[type=radio]:checked+label {
        border: 1px solid var(--col_acc);
        border-radius: 5px;
        color: var(--col_acc);
    }
    @media screen and (max-width: 1200px){
        input[type=radio]+label, input[type=radio]:checked+label{
            width: 31%;
        }
    }
    @media screen and (max-width: 768px){
        margin: 30px 0;
        div{
            flex-direction: column;
        }
        input[type=radio]+label, input[type=radio]:checked+label{
            flex-direction: row;
            font-size: 14px;
            height: 60px;
            line-height: 60px;
            margin-bottom: 10px;
            width: 100%;
        }
    }
`
const InputTr = styled.div`
    margin-top: 20px;
`
const LabelArea = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    label{
        color: #4f4f4f;
        font-size: 18px;
        font-weight: 500;
    }
    @media screen and (max-width: 768px){
        label{
            font-size: 14px;
        }
    }

`
const FullSizeFormWrap = styled.div`
    input{
        background-color: #fff;
        border: 1px solid #e1e1e1;
        border-radius: 5px;
        font-size: 16px;
        height: 50px;
        padding-left: 15px;
        width: 100%;
    }
`
const TextArea = styled.textarea`
    width: 100%;
    background-color: #fff;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
    font-size: 16px;
    height: 150px;
    padding: 10px 15px;
    resize: none;
`
const AgreeTr = styled.div`
    align-items: center;
    display: flex;
    margin-top: 30px;
    label{
        color: #4f4f4f;
        font-size: 16px;
    }
    label:nth-child(2){
        background: #d2d2d2 url(${checkBoxIcon}) center no-repeat;
        background-size: 16px 16px;
        border-radius: 12px;
        cursor: pointer;
        display: inline-block;
        height: 24px;
        margin-right: 5px;
        width: 24px;
    }
    input[type=checkbox]:checked+label{
        background: var(--col_acc) url(${checkBoxIcon}) center no-repeat;
        background-size: 16px 16px;
        border-radius: 12px;
        display: inline-block;
        height: 24px;
        width: 24px;
    }
`
const ButtonWrap = styled.div`
    margin-top: 30px;
    text-align: center;
    button{
        background: var(--col_acc);
        border: 1px solid var(--col_acc);
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        height: 50px;
        text-align: center;
        transition: all .3s ease;
        width: 160px;
    }
    button:hover {
        background: #fff;
        color: var(--col_acc);
        transition: all .3s ease;
    }
    @media screen and (max-width: 768px){
        button {
            font-size: 14px;
            height: 40px;
            width: 100%;
        }
        button:hover{
            background-color: var(--col_acc);
            color: #fff;
        }
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
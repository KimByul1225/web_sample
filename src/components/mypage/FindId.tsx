import React, { useState } from 'react';
import styled from 'styled-components';
import iconExclamation from "@/resources/icons/mypage/icon_exclamation.png";
import iconSelect from "@/resources/icons/commons/icon_select.png"


const FindId = () => {
    const [emailAddress,  setEmailAddress] = useState<string>("");

    const inputHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target;
        setEmailAddress(value)
            
    }

    const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const {value} = e.target;
            value === "1" ? setEmailAddress("") : setEmailAddress(value);
    }

    return (
        <FindIdContainer>
            <FindIdWrap>
                <div>
                    <Icon/>
                    <FindIdTitle>
                        아이디 찾기
                    </FindIdTitle>
                    <TextWrap>
                        <p>해당 웹사이트는 레퍼런스 정리를 위한 페이지 입니다.</p>
                        <p>아이디 찾기를 위해서는 Api연동이 필요합니다.</p>
                    </TextWrap>
                    <form>
                        <InputWrap>
                            <label htmlFor="userName">이름</label>
                            <input type="text" id="userName" name="userName" placeholder="Api연동이 필요합니다."/>
                        </InputWrap>
                        <EmailWrap>
                            <label htmlFor="emailId">이메일</label>
                            <div>
                                <input type="text" id="emailId" name="email" />
                                <span>@</span>
                                <input 
                                    type="text" 
                                    id="emailAddress" 
                                    name="email" 
                                    value={emailAddress}
                                    onChange={inputHandler}
                                />
                                <select 
                                    id="emailSel" 
                                    name="emailSel"
                                    onChange={selectHandler}
                                >
                                    <option value="1">직접입력</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="hanmail.net">hanmail.net</option>
                                    <option value="hotmail.com">hotmail.com</option>
                                </select>
                            </div>
                        </EmailWrap>
                        <ButtonWrap>
                            <button>
                                아이디 찾기
                            </button>
                        </ButtonWrap>
                    </form>
                </div>

            </FindIdWrap>
        </FindIdContainer>
    )
}

export default FindId

const FindIdContainer = styled.div`
    padding: 100px 0 100px 0;
    background-color: #F1F1F1;
    min-height: calc(100vh - 300px);
    @media screen and (max-width: 768px){
        padding: 100px 0 50px 0;
        min-height: auto;
    }
`
const FindIdWrap = styled.div`
    margin: 0 auto;
    max-width: 620px;
    border: 1px solid #E0E0E0;
    padding: 60px 120px;
    background-color: #fff;
    border-radius: 20px;
    @media screen and (max-width: 768px){
        max-width: 90%;
        border: none;
        padding: 20px;
    }
`
const Icon = styled.i`
        display: block;
    width: 70px;
    height: 70px;
    background: url(${iconExclamation}) center no-repeat;
    background-size: contain;
    margin: 0 auto 10px auto;
`
const FindIdTitle = styled.div`
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 22px;
    }
`
const TextWrap = styled.div`
    margin: 5px 0 60px 0;
    p{
        font-size: 16px;
        font-weight: 400;
        color: #828282;
        text-align: center;
    }
    @media screen and (max-width: 768px){
        margin: 5px 0 50px 0;
        p{
            font-size: 12px;
        }
    }
`
const InputWrap = styled.div`
    label{
        display: block;
        font-size: 18px;
        color: #4F4F4F;
        margin-bottom: 10px;
    }
    
    input{
        width: 100%;
        height: 50px;
        border: 1px solid #E0E0E0;
        border-radius: 5px;
        padding-left: 20px;
        font-size: 16px;
        color: #828282;
    }
    input::placeholder{
        color: #BDBDBD;
    }
    @media screen and (max-width: 768px){
        label{
            font-size: 14px;
            margin-bottom: 5px;
        }
        input{
            height: 40px;
            font-size: 14px;
            padding-left: 15px;
        }
        
    }
`
const EmailWrap = styled.div`
    margin-top: 10px;
    label{
        display: block;
        font-size: 18px;
        color: #4F4F4F;
        margin-bottom: 10px;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    input{
        width: 28.5%;
        height: 50px;
        border: 1px solid #E0E0E0;
        border-radius: 5px;
        padding-left: 20px;
        font-size: 16px;
        color: #828282;
    }
    span{
        display: inline-block;
        text-align: center;
        line-height: 50px;
    }
    select{
        -webkit-appearance: none;
        appearance: none;
        width: 31%;
        height: 50px;
        border: 1px solid #E0E0E0;
        border-radius: 5px;
        padding-left: 20px;
        font-size: 16px;
        color: #828282;
        background: #fff url(${iconSelect}) center right 15px no-repeat; 
        background-size: 18px; 
    }
    @media screen and (max-width: 768px){
        label{
            font-size: 14px;
            margin-bottom: 5px;
        }
        input{
            height: 40px;
            font-size: 14px;
            padding-left: 15px;
        }
        span{
            line-height: 40px;
            font-size: 16px;
        }
        select{
            font-size: 14px;
            height: 40px;
            padding-left: 15px;
        }
    }
`

const ButtonWrap = styled.div`
    margin-top: 40px;
    button{
        width: 100%;
        height: 60px;
        background-color: #fff;
        border-radius: 5px;
        color: var(--col_acc);
        font-size: 18px;
        font-weight: 700;
        box-sizing: border-box;
        border: 1px solid var(--col_acc);
        transition: all .3s ease;
    }
    button:hover{
        background-color: var(--col_acc);
        border: 1px solid var(--col_acc);
        color: #fff;
        transition: all .3s ease;
    }
    @media screen and (max-width: 1200px){
        button{
            background: var(--col_acc);
            color: #fff;
        }
    }
    @media screen and (max-width: 768px){
        margin-top: 50px;
        button{
            height: 50px;
            font-size: 16px;
            background: var(--col_acc);
            color: #fff;
        }
    }
`
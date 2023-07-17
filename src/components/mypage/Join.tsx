import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Container from '../layout/Container';

import passwordIcon from "@/resources/icons/mypage/icon_pw.png";
import passwordCheckIcon from "@/resources/icons/mypage/icon_pwck.png";
import iconSelect from "@/resources/icons/commons/icon_select.png";
import { useSetRecoilState } from 'recoil';
import { alertState } from '@/global/modal';

import PostPopup from './PostPopup';


const Join = () => {
    const [emailAddress, setEmailAddress] = useState("");
    const [postPopup, setPostPopup] = useState(false);

    const setAlertModal = useSetRecoilState(alertState);

    const [cmpnyAddress, setCmpnyAddress] = useState({
        address:"",
        zonecode:""
    });

    const inputRef = useRef<any>([]);

    const buttonHandler = () => {
        setAlertModal({
            isShow : true,
            modalProps: {
                message: "Api 연동이 필요합니다.",
                buttonName: "확인",
            }
        })
    }

    const emailSelectHandler = (e: { target: { value: string; }; }) => {
        const {value} = e.target;
        value === "1" ?
        function(){
            inputRef.current[9].focus();
            setEmailAddress("");
        }() : setEmailAddress(value);
    };

    const emailAddressHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setEmailAddress(value);
    }

    // const companyAddressHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     const {value, name} = e.target;
    //     setCmpnyAddress({...cmpnyAddress, [name]: value})
    // };

    const postHandler = () => {
        setPostPopup(!postPopup);
    }
    // const postClose = () => {
    //     setPostPopup(false);
    // }
    

    return (
        <Container>
            <JoinWrap>
                <JoinTitle>
                    <h3>
                        회원정보입력
                    </h3>
                </JoinTitle>
                <BoxTitle>
                    <h4>
                        개인정보입력
                    </h4>
                    <p>* 필수입력 항목 입니다. </p>
                </BoxTitle>
                <JoinBox>
                    <Line>
                        <label htmlFor="joinId" className="necessary">아이디</label>
                        <FullSizeFormWrap>
                            <input 
                                type="text" 
                                id="joinId" 
                                name="id" 
                                placeholder="id"
                                ref={el => (inputRef.current[0] = el)} 
                            />
                        </FullSizeFormWrap>
                        <IdButtonWrap>
                            <button
                                onClick={buttonHandler}
                            >
                                중복확인
                            </button>
                        </IdButtonWrap>
                    </Line>
                    <Line>
                        <label htmlFor="pw" className="necessary">비밀번호</label>
                        <FullSizeFormWrap>
                            <PasswrodInput 
                                type="password" 
                                id="pw" 
                                name="pw" 
                                placeholder="비밀번호를 입력하세요."
                                ref={el => (inputRef.current[1] = el)} 
                            />
                        </FullSizeFormWrap>
                    </Line>
                    <Line>
                        <label htmlFor="pwCk" className="necessary">비밀번호</label>
                        <FullSizeFormWrap>
                            <PasswrodCheckInput 
                                type="password" 
                                id="pwCk" 
                                name="pwCk" 
                                placeholder="비밀번호를 다시 입력하세요."
                                ref={el => (inputRef.current[2] = el)} 
                            />
                        </FullSizeFormWrap>
                    </Line>
                    <Line>
                        <label htmlFor="userName" className="necessary">이름</label>
                        <FullSizeFormWrap>
                            <input 
                                type="text" 
                                id="userName" 
                                name="userName" 
                                placeholder="이름"
                                ref={el => (inputRef.current[3] = el)} 
                            />
                        </FullSizeFormWrap>
                    </Line>
                    <Line>
                        <label htmlFor="mobilePhone">휴대폰</label>
                        <PhoneTypeFormWrap>
                            <select name="mobilePhone">
                                <option value="010">010</option>
                                <option value="011">011</option>
                                <option value="016">016</option>
                                <option value="017">017</option>
                                <option value="018">018</option>
                                <option value="019">019</option>
                            </select>
                            <input 
                                type="text" 
                                name="mobilePhone2" 
                                placeholder="0000" 
                                maxLength={4}
                                ref={el => (inputRef.current[4] = el)} 
                            />
                            <input 
                                type="text"
                                name="mobilePhone3" 
                                placeholder="0000" 
                                maxLength={4}
                                ref={el => (inputRef.current[5] = el)} 
                            />
                        </PhoneTypeFormWrap>
                    </Line>

                    <Line>
                        <label htmlFor="phone">전화번호</label>
                        <PhoneTypeFormWrap>
                            <select name="phone">
                                <option value="02">02</option>
                                <option value="031">031</option>
                                <option value="032">032</option>
                                <option value="033">033</option>
                                <option value="041">041</option>
                                <option value="042">042</option>
                                <option value="043">043</option>
                                <option value="051">051</option>
                                <option value="052">052</option>
                                <option value="053">053</option>
                                <option value="054">054</option>
                                <option value="055">055</option>
                                <option value="061">061</option>
                                <option value="063">063</option>
                                <option value="062">062</option>
                                <option value="064">064</option>
                            </select>
                            <input 
                                type="text" 
                                name="phone2" 
                                placeholder="0000"
                                maxLength={4}
                                ref={el => (inputRef.current[6] = el)} 
                            />
                            <input 
                                type="text" 
                                name="phone3" 
                                placeholder="0000" 
                                maxLength={4}
                                ref={el => (inputRef.current[7] = el)} 
                            />
                        </PhoneTypeFormWrap>
                    </Line>
                    <EmailLine>
                        <label htmlFor="email" className="necessary">이메일</label>
                        <div>
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="이메일 ID" 
                                ref={el => (inputRef.current[8] = el)} 
                            />
                            <span>@</span>
                            <input 
                                type="text" 
                                name="emailAddress" 
                                placeholder="이메일 주소" 
                                value={emailAddress}
                                onChange={emailAddressHandler}
                                ref={el => (inputRef.current[9] = el)} 
                            />
                        </div>
                    </EmailLine>
                    <Line>
                        <label htmlFor="emailSel">
                            <span className="ir_so">
                                이메일 주소 선택
                            </span>
                        </label>
                        <FullSizeFormWrap>
                            <select 
                                name="emailSel"
                                onChange={emailSelectHandler}
                            >
                                <option value="1">직접입력</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="hanmail.net">hanmail.net</option>
                                <option value="hotmail.com">hotmail.com</option>
                            </select>
                        </FullSizeFormWrap>
                    </Line>
                </JoinBox>








                <BoxTitle>
                    <h4>
                        회사정보 입력
                    </h4>
                </BoxTitle>
                <JoinBox>
                    <Line>
                        <label htmlFor="company">회사명</label>
                        <FullSizeFormWrap>
                            <input 
                                type="text" 
                                id="company" 
                                name="company" 
                                placeholder="회사명"
                                ref={el => (inputRef.current[11] = el)} 
                            />
                        </FullSizeFormWrap>
                    </Line>
                    <Line>
                        <label htmlFor="part">부서명</label>
                        <FullSizeFormWrap>
                            <input 
                                type="text" 
                                id="part" 
                                name="part" 
                                placeholder="부서명"
                                ref={el => (inputRef.current[13] = el)} 
                            />
                        </FullSizeFormWrap>
                    </Line>
                    <Line>
                        <label htmlFor="position">직급</label>
                        <FullSizeFormWrap>
                            <input 
                                type="text" 
                                id="position" 
                                name="position" 
                                placeholder="직급"
                                ref={el => (inputRef.current[14] = el)} 
                            />
                        </FullSizeFormWrap>
                    </Line>
                    <Line>
                        <label htmlFor="zonecode">회사주소</label>
                        <FullSizeFormWrap>
                            <input 
                                type="text" 
                                id="zonecode" 
                                name="zonecode" 
                                placeholder="우편번호"
                                value={cmpnyAddress.zonecode}
                                readOnly={true}
                            />
                        </FullSizeFormWrap>
                        <IdButtonWrap>
                            <button
                                onClick={postHandler}
                            >
                                검색
                            </button>
                        </IdButtonWrap>
                    </Line>
                    <Line>
                        <label htmlFor="adress">
                            <span className="ir_so">
                                주소 입력 창
                            </span>
                        </label>
                        <FullSizeFormWrap>
                            <input 
                                type="text" 
                                id="adress" 
                                placeholder="주소" 
                                name="address" 
                                value={cmpnyAddress.address}
                                readOnly={true}
                            />
                        </FullSizeFormWrap>
                    </Line>
                    <Line>
                        <label htmlFor="adressDetail">
                            <span className="ir_so">
                                상세주소 입력 창
                            </span>
                        </label>
                        <FullSizeFormWrap>
                            <input 
                            type="text" 
                            id="adressDetail" 
                            placeholder="상세주소" 
                            name="adressDetail" 
                            />
                        </FullSizeFormWrap>
                    </Line>
                    
                </JoinBox>                
                <ButtonWrap>
                    <button
                        onClick={buttonHandler}
                    >
                        회원가입
                    </button>
                </ButtonWrap>
            </JoinWrap>
            {postPopup && 
                <div>
                    <PostPopup 
                        cmpnyAddress={cmpnyAddress} 
                        setcompany={setCmpnyAddress}
                        postClose={postHandler} 
                    />
                </div>
            }
        </Container>
    )
}

export default Join

const JoinWrap = styled.div`
    margin: 0 auto;
    max-width: 620px;
    @media screen and (max-width: 768px){
        max-width: 100%;
        padding: 0 20px;
    }
`
const JoinTitle = styled.div`
    margin-bottom: 55px;
    h3{
        font-size: 32px;
        font-weight: 700;
        color: #313131;
        text-align: center;
        padding: 5px 0;
    }
    @media screen and (max-width: 768px){
        margin-bottom: 50px;
        h3{
            font-size: 22px;
            margin-bottom: 50px;
        }
    }
`

const BoxTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 20px;
    h4{
        font-size: 24px;
        font-weight: 500;
        color: #4F4F4F;
    }
    p{
        font-size: 15px;
        font-weight: 400;
        color: #828282;
    }
    @media screen and (max-width: 768px){
        h4 {
            font-size: 20px;
        }
        p{
            font-size: 12px;
        }
    }
`

const JoinBox = styled.div`
    background-color: #F6F6F6;
    padding: 20px;
    margin-bottom: 25px;
`
const Line = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 113px 0 0;
    position: relative;
    margin-bottom: 20px;
    color: #828282;
    @media screen and (max-width: 768px){
        display: block;
        padding: 0;
    }
`

const FullSizeFormWrap = styled.div`
    width: calc(100% - 125px);
    position: relative;
    input{
        width: 100%;
        height: 50px;
        border: 1px solid #E0E0E0;
        border-radius: 5px;
        background-color: #fff;
        font-size: 16px;
        font-weight: 500;
        padding-left: 15px;
    }
    input::placeholder{color: #BDBDBD;}
    select{
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 50px;
        border: 1px solid #E0E0E0;
        border-radius: 5px;
        background-color: #fff;
        font-size: 16px;
        font-weight: 500;
        padding-left: 15px;
        background: #fff url(${iconSelect}) center right 15px no-repeat; 
        background-size: 18px; 
    }
    @media screen and (max-width: 768px){
        width: 100%;
        input, select{
            height: 40px;
            font-size: 14px;
        }
    }
`
const PhoneTypeFormWrap = styled.div`
    width: calc(100% - 125px);
    display: flex;
    justify-content: space-between;
    select{
        -webkit-appearance: none;
        appearance: none;
        width: 31%;
        height: 50px;
        border: 1px solid #E0E0E0;
        border-radius: 5px;
        background-color: #fff;
        font-size: 16px;
        font-weight: 500;
        padding-left: 15px;
        background: #fff url(${iconSelect}) center right 15px no-repeat; 
        background-size: 18px; 
    }
    input{
        width: 31%;
        height: 50px;
        border: 1px solid #E0E0E0;
        border-radius: 5px;
        background-color: #fff;
        font-size: 16px;
        font-weight: 500;
        padding-left: 15px;
    }
    input::placeholder{color: #BDBDBD;}
    @media screen and (max-width: 768px){
        width: 100%;
        select{
            
            height: 40px;
            font-size: 14px;
            
        }
        input{
            height: 40px;
            font-size: 14px;
        }
    }
`


const IdButtonWrap = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    button{
        width: 100px;
        height: 50px;
        background: #FFF;
        border: 1px solid var(--col_acc);
        border-radius: 5px;
        color: var(--col_acc);
        font-size: 16px;
        font-weight: 500;
        transition: all .3s ease;
    }
    button:hover {
        background: var(--col_acc);
        color: #fff;
        transition: all .3s ease;
    }
    @media screen and (max-width: 1200px){
        button:hover {
            background: #fff;
            color: var(--col_acc);
        }
    }
    @media screen and (max-width: 768px){
        position: relative;
        width: 100%;
        margin-top: 5px;
        button{
            width: 100%;
            height: 40px;
            font-size: 14px;
        }
    }
`


const PasswrodInput = styled.input`
    background: #fff url(${passwordIcon}) center right 15px no-repeat;
    background-size: 24px;
`

const PasswrodCheckInput = styled.input`
    background: #fff url(${passwordCheckIcon}) center right 15px no-repeat;
    background-size: 24px;
`


const EmailLine = styled(Line)`
    margin-bottom: 10px;
    div{
        width: calc(100% - 125px);
        display: flex;
        justify-content: space-between;
    }
    input{
        width: calc(50% - 15px);
        height: 50px;
        border: 1px solid #E0E0E0;
        border-radius: 5px;
        background-color: #fff;
        font-size: 16px;
        font-weight: 500;
        padding-left: 15px;
    }
    input::placeholder{color: #BDBDBD;}
    span{
        height: 50px;
        line-height: 50px;
        width: 30px;
        text-align: center;
    }
    @media screen and (max-width: 768px){
        div{
            width: 100%;
        }
        input{
            height: 40px;
            font-size: 14px;
        }
        span{
            height: 40px;
            line-height: 40px;
        }
    }
`








const ButtonWrap = styled.div`
    margin-top: 55px;
    text-align: center;
    button{
        width: 375px;
        height: 60px;
        text-align: center;
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
            background-color: var(--col_acc);
            color: #fff;
        }
    }
    @media screen and (max-width: 768px){
        margin-top: 50px;
        button{
            width: 100%;
            height: 50px;
            font-size: 16px;
        }
    }
`
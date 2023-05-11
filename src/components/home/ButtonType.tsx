import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../commons/SectionTitle';
import { Link } from 'react-router-dom';

const ButtonType = () => {
    return (
        <Wrap>
            <Row>
                <SectionTitle
                    title="버튼타입 예시"
                />
                <TextBox>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</TextBox>
                <ButtonBox>
                    <Link to="/">
                        문의
                    </Link>
                    <Link to="/">
                        자주하는 질문
                    </Link>
                    <button>
                        Lorem ipsum
                    </button>
                </ButtonBox>
            </Row>
        </Wrap>
    );
};
export default ButtonType; 

const Wrap = styled.section`
    padding: 100px 0 110px 0; background-color: #F1F3F5;

    @media screen and (max-width: 1200px) {
        padding: 80px 0;
    }
    @media screen and (max-width: 768px) {
        padding: 50px 0;
    }
`

const Row = styled.div`
    max-width: 744px; 
    margin: 0 auto;
    @media screen and (max-width: 1200px) {
        max-width: 1200px; padding: 0 20px;
    }
    @media screen and (max-width: 768px) {
        max-width: 100%; padding: 0 20px;
    }
`

const TextBox = styled.p`
    margin-top: 10px;
    font: var(--b2); 
    text-align: center; 
    color: #4F4F4F;
    @media screen and (max-width: 1200px) {
        font-size: 14px;
    }
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

const ButtonBox = styled.div`
    margin-top: 40px; 
    display: flex; 
    justify-content: space-between;
    a, button {
        display: block; 
        background-color: #fff; 
        color: var(--col_acc); 
        border: 1px solid var(--col_acc); 
        font:var(--b1);
        border-radius: 5px; 
        height: 60px; 
        line-height: 60px; 
        text-align: center; 
        width: 30.5%; 
        transition: all .2s ease;
    }
    a:hover, button:hover{
        color: #fff; 
        background-color: var(--col_acc); 
        transition: all .2s ease;
    }
    @media screen and (max-width: 1200px) {
        flex-direction: column; margin-top: 30px;
        a, button{
            width: 100%; font-size: 20px; margin-bottom: 20px;
        }
        a:hover, button:hover{
            color: var(--col_acc); background-color: #fff;
        }
    }
    @media screen and (max-width: 768px) {
        a, button{
            font-size: 18px; margin-bottom: 20px;
        }
    }
`

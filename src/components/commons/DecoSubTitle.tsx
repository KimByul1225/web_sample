import React from 'react';
import styled, {css} from 'styled-components';


interface IDecoSubTitle {
    underline?: boolean;
}

const DecoSubTitle = ({title, underline}: { title:string, underline?: boolean}) => {
    return (
        <Title underline={underline}>
            {title}
        </Title>
    );
};

export default DecoSubTitle;


const Title = styled.h4<IDecoSubTitle>`
    font-size: 22px;
    font-weight: 500;
    position: relative;
    padding-top: 18px;
    margin-bottom: 20px;
    line-height: 28px;
    height: 74px;
    word-break: keep-all;
    ::before{
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 8px;
        height: 8px;
        border-radius: 2px;
        background-color: var(--col_acc);
    }
    ${(props) => props.underline && css`
        border-bottom: 1px solid #F0F0F0; 
        padding-bottom: 20px;
    `}
    @media screen and (max-width: 1200px){
        height: auto;
    }
    @media screen and (max-width: 768px){
        font-size: 18px;
    }

`

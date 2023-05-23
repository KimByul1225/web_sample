import React from 'react';
import styled, { css } from 'styled-components';

interface DecorationTitleProps {
    underline?: boolean;
}
const DecoTitle = ({ text, underline }: { text: string | null, underline?: boolean }) => {
    return (
        <Title underline={underline}>
            {text ?? ""}
        </Title>
    );
};

export default DecoTitle;


const Title = styled.h3<DecorationTitleProps>`
    font-size: 28px; 
    font-weight: 700; 
    line-height: 48px; 
    position: relative; 
    margin-bottom: 40px; 
    padding-top: 20px; 
    letter-spacing: -0.005em;
    ${(props) => props.underline && css`
        margin-bottom: 0;
        padding-bottom: 20px;
        border-bottom: 1px solid #E0E0E0;               
    `}
    ::after{
        content: ''; 
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 20px; 
        height: 20px; 
        background-color: #FF4D15; 
        border-radius: 5px 0;
    }
    @media screen and (max-width: 1200px){
        margin: 0 0 0 20px;
    }
    @media screen and (max-width: 768px){
        font-size: 18px; line-height: 31px; padding-top: 18px;
        ::after{
            width: 18px; height: 18px;
        }
    }

`;
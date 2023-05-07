import React from 'react';
import styled from 'styled-components';

interface ISectionTitle {
    color?: string;
    title?: string;
}

const SectionTitle = ({color, title}: ISectionTitle) => {
    return (
        <Title color={color}>
            {title ? title : "Tilte이 필요합니다."}
        </Title>
    );
};

export default SectionTitle;


const Title = styled.h3<ISectionTitle>`
    font: var(--t3); text-align: center; position: relative;
    color:  ${(props) => props.color || "#000"};
    @media screen and (max-width:1200px) {
        font-size: 34px;
    }
    @media screen and (max-width:768px) {
        font-size: 22px;
    }
`
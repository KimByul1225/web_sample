import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../commons/SectionTitle';


const TabMenu = () => {
    return (
        <Wrap>
            <Row>
                <SectionTitle
                    title="탭메뉴 슬라이더 혼합 예시"
                    color="#fff"
                />
            </Row>
            
        </Wrap>
    );
};

export default TabMenu;

const Wrap = styled.section`
    padding: 100px 0; background-color: #000;
    
    @media screen and (max-width: 1200px) {
        padding: 80px 0;
    }
    @media screen and (max-width: 768px) {
        padding: 50px 0;
    }
`

const Row = styled.div`
    max-width: 1200px; margin: 0 auto;
    @media screen and (max-width: 1200px) {
        padding: 0 20px;
    }
    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
`

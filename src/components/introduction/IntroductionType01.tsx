import React from 'react';
import SubBanner from '../commons/SubBanner';
import styled from 'styled-components';
import Container from '../layout/Container';
import Row from '../layout/Row';
import DecoTitle from '../commons/DecoTitle';

const IntroductionType01 = () => {
    return (
        <>
            <SubBanner
                title="소개페이지 Type01"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                <Row>
                    <DecoTitle
                        text="소개 Type01"
                    />
                </Row>
            </Container>
            
        </>
    );
};

export default IntroductionType01;






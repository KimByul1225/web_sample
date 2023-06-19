import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import SubBanner from '../commons/SubBanner';
import Container from '../layout/Container';
import Row from '../layout/Row';
import MemberSliderSection from './MemberSliderSection';
import { MemberFaker } from '@/resources/faker/company/MemberFaker';

interface IMember{
    name: string;
    jobTitle: string;
    introduction: string;
    image: string;
}



const Member = () => {
    const [memberData, setMemberData] = useState<IMember[]>([]);

    useEffect(() => {
        const result = MemberFaker();
        const { resultMap } = result || {}
        if (resultMap.result) {
            setMemberData(resultMap.resultList);
        }
    }, []);

    return (
        <>
            <SubBanner
                title="구성원"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                <Row>
                    <MemberSliderSection
                        result={memberData}
                    />
                </Row>
            </Container>
            
            
        </>
    );
};

export default Member;

// const TestBg = styled.div<Test>`
//     margin: 0 auto;
//     width: 300px;
//     height: 400px;
//     border: 1px solid #000;
//     background: url(${(props) => props.img}) center no-repeat;
//     background-size: contain;
    

// `
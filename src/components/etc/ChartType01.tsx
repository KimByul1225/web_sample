import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import SubBanner from '../commons/SubBanner';
import Container from '../layout/Container';
import Row from '../layout/Row';
import DecoTitle from '../commons/DecoTitle';
import Pecentage01 from './chart/Pecentage01';



import { Pecentage01Faker } from '@/resources/faker/chart/Pecentage01Faker';

interface GradeDataInterface {
    AA: number | null,
    A: number | null,
    BB: number | null,
    B: number | null,
    C: number | null,
    D: number | null,
    E: number | null
}

const ChartType01 = () => {
    const [pecentage01Data, setPecentage01Data] = useState<GradeDataInterface>({} as GradeDataInterface);

    useEffect(() => {
        const result = Pecentage01Faker();
        const { resultMap } = result || {}
        if (resultMap.grade) {
            setPecentage01Data(resultMap.grade);
        }
    }, []);



    return (
        <>
            <SubBanner
                title="Bar Chart"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                <Row>
                    <DecoTitle
                        text="Pecentage Chart01"
                    />
                    
                    <ChartBox>
                        <Pecentage01
                            gradeData={pecentage01Data}
                        />
                    </ChartBox>

                    <DecoTitle
                        text="Pecentage Chart02"
                    />
                    <ChartBox>
                        <Pecentage01
                            gradeData={pecentage01Data}
                        />
                    </ChartBox>
                </Row>
            </Container>
        </>
    )
}

export default ChartType01


const ChartBox = styled.div`
    width: 100%;
    height: 300px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    margin-bottom: 100px;
`
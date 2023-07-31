import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import SubBanner from '../commons/SubBanner';
import Container from '../layout/Container';
import Row from '../layout/Row';
import DecoTitle from '../commons/DecoTitle';
import Pecentage01 from './chart/Pecentage01';
import Pecentage02 from './chart/Pecentage02';
import BasicBar from './chart/BasicBar';


import { Pecentage01Faker } from '@/resources/faker/chart/Pecentage01Faker';
import { Pecentage02Faker } from '@/resources/faker/chart/Pecentage02Faker';
import { BasicBarFaker } from '@/resources/faker/chart/BasicBarFaker';
import Horizontal from './chart/Horizontal';
import { HorizontalFaker } from '@/resources/faker/chart/HorizontalFaker';



interface GradeDataInterface {
    AA: number | null,
    A: number | null,
    BB: number | null,
    B: number | null,
    C: number | null,
    D: number | null,
    E: number | null
}
interface Pecentage02Interface {
    year: string,
    pecentage: number
}

interface BasciBarInterface {
    year: string,
    pecentage: number
}
interface HorizontalInterface{
    value: number,
    avg: number,
}

const ChartType02 = () => {
    const [pecentage01Data, setPecentage01Data] = useState<GradeDataInterface>({} as GradeDataInterface);
    const [pecentage02Data, setPecentage02Data] = useState<Pecentage02Interface[]>([] as Pecentage02Interface[]);
    const [basicBarData, setBasicBarData] = useState<BasciBarInterface[]>([] as Pecentage02Interface[]);

    const [horizontalData, setHorizontalData] = useState<HorizontalInterface[]>([] as HorizontalInterface[]);

    useEffect(() => {
        const result = Pecentage01Faker();
        const { resultMap } = result || {}
        if (resultMap.grade) {
            setPecentage01Data(resultMap.grade);
        }

        const result02 = Pecentage02Faker();
        const { resultMap : result02Map } = result02 || {}
        if (result02Map.resultList) {
            setPecentage02Data(result02Map.resultList);
        }

        const result03 = BasicBarFaker();
        const { resultMap : result03Map } = result03 || {}
        if (result03Map.resultList) {
            setBasicBarData(result03Map.resultList);
        }

        const result04 = HorizontalFaker();
        const { resultMap : result04Map } = result04 || {}
        if (result04Map.resultList) {
            setHorizontalData(result04Map.resultList);
        }



    }, []);



    return (
        <>
            <SubBanner
                title="ETC Chart"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                <Row>
                    <DecoTitle
                        text="ETC Chart"
                    />
                    <ChartBox>
                        <BasicBar
                            chartData={basicBarData}
                        />
                    </ChartBox>

                    <DecoTitle
                        text="Horizontal Chart"
                    />
                    <ChartBox>
                        <Horizontal
                            chartData={horizontalData}
                        />
                    </ChartBox>
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
                        <Pecentage02
                            chartData={pecentage02Data}
                        />
                    </ChartBox>
                </Row>
            </Container>
        </>
    )
}

export default ChartType02


const ChartBox = styled.div`
    width: 100%;
    height: 300px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    margin-bottom: 100px;
    padding: 20px;
`
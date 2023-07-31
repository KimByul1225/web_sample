import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SubBanner from '../commons/SubBanner';
import Container from '../layout/Container';
import Row from '../layout/Row';
import DecoTitle from '../commons/DecoTitle';
import { GradeFaker } from '@/resources/faker/chart/GradeFaker';
import { ComboFaker } from '@/resources/faker/chart/ComboFaker';
import Grade from './chart/Grade';
import Combo01 from './chart/Combo01';


interface IyearlyGradeData{
    year: string,
    rating: string,
}

interface IComboChartData {
	evaluationYear: string | null;
	average: string | null;
	value: string | null;
	max: string | null;
	min: string | null;
}

const ChartType02 = () => {
    const [gradeData, setGradeData] = useState<IyearlyGradeData[]>([] as IyearlyGradeData[])
    const [combo01Data, setCombo01Data] = useState<IComboChartData[]>([] as IComboChartData[])
    
    useEffect(() => {
        const result = GradeFaker();
        const { resultMap } = result || {}
        if (resultMap.resultList) {
            setGradeData(resultMap.resultList);
        }
        const resultCombo = ComboFaker();
        const { resultMap: comboResultMap } = resultCombo || {}
        if (comboResultMap.resultList) {
            setCombo01Data(comboResultMap.resultList);
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
                        text="Grade Chart"
                    />
                    <ChartBox>
                        <Grade
                            yearlyGradeData={gradeData}
                        />
                    </ChartBox>
                    <DecoTitle
                        text="Combo Chart01"
                    />
                    <ChartBox>
                        <Combo01 
                            companyName="Sample"
                            chartData={combo01Data}                           
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
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SubBanner from '../commons/SubBanner';
import Container from '../layout/Container';
import Row from '../layout/Row';
import DecoTitle from '../commons/DecoTitle';
import { DoughnutFaker } from '@/resources/faker/chart/DoughnutFaker';
import { DoughnutTableFaker } from '@/resources/faker/chart/DoughnutTableFaker';

import DoughnutChart from './chart/Doughnut';
import DoughnutTable from './chart/DoughnutTable';

interface IdoughnutChart {
    label: string,
    data: number,
    percentage?: number
}

const ChartType03 = () => {
    const [doughnutData, setDoughnutData] = useState<IdoughnutChart[]>([] as IdoughnutChart[]);
    const [doughnutTableData, setDoughnutTableData] = useState<IdoughnutChart[]>([] as IdoughnutChart[]);
    useEffect(() => {
        const result = DoughnutFaker();
        const { resultMap  } = result || {}
        function initList(el: IdoughnutChart[]) {
            const totalCount = el.reduce((acc, item) => (acc += item.data), 0);
            return el.map((item: IdoughnutChart) => {
                const percentageCal = (item.data / totalCount) * 100
                const pointCal = Number(percentageCal.toFixed(1));
                return {
                    label: item.label,
                    data: item.data,
                    percentage: pointCal
                }
            })
        }
        if (resultMap.resultList) {
            const pecenTageResult = initList(resultMap.resultList);
            setDoughnutData(pecenTageResult);
        }
        const resultDoughnutTable = DoughnutTableFaker();
        const { resultMap: resultDoughnutTableMap  } = resultDoughnutTable || {}
        if (resultDoughnutTableMap.resultList) {
            const pecenTageResult = initList(resultDoughnutTableMap.resultList);
            setDoughnutTableData(pecenTageResult);
        }
    }, []);

    return (
        <>
            <SubBanner
                title="Doughnut Chart"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                <Row>
                    <DecoTitle
                        text="Doughnut Chart"
                    />
                    <ChartBox>
                        <DoughnutChart
                            chartData={doughnutData}
                        />
                    </ChartBox>
                    
                    <DecoTitle
                        text="Doughnut Chart + Table"
                    />
                    <BorderBox>
                        <DoughnutTable
                            chartData={doughnutTableData}
                        />
                    </BorderBox>
                </Row>
            </Container>
        </>
    )
}

export default ChartType03

const ChartBox = styled.div`
    width: 100%;
    height: 600px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    margin-bottom: 100px;
    padding: 20px;
`
const BorderBox = styled.div`
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    margin-bottom: 100px;
    padding: 20px;

`
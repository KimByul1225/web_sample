import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import type { ChartData, ChartOptions } from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);
interface BarProps {
    options: ChartOptions<'bar'>;
    data: ChartData<'bar'>;
}
interface IyearlyGradeData{
    year: string,
    rating: string,
}

enum GradeType {
    aa = "AA",
    a = "A",
    bb = "BB",
    b = "B",
    c = "C",
    d = "D",
    e = "E",
    nodata = "-"
}

const Grade = ({ gridVisible, yearlyGradeData }: { gridVisible?: boolean, yearlyGradeData: IyearlyGradeData[] }) => {
    const GradeColors = {
        AA: "#2F80ED",
        A: "#2D9CDB",
        BB: "#219653",
        B: "#27AE60",
        C: "#F7CF46",
        D: "#F2994A",
        E: "#FF4D15",
        "-": "black"
    }


    // console.log("Year", yearlyGradeData)

    const labels = yearlyGradeData.map((element: IyearlyGradeData) => element.year);

    const gradeData = yearlyGradeData.map((element: IyearlyGradeData) => {
        if (element.rating === GradeType.aa) return [6, 7]
        if (element.rating === GradeType.a) return [5, 6]
        if (element.rating === GradeType.bb) return [4, 5]
        if (element.rating === GradeType.b) return [3, 4]
        if (element.rating === GradeType.c) return [2, 3]
        if (element.rating === GradeType.d) return [1, 2]
        if (element.rating === GradeType.e) return [0, 1]
        return [0, 0]
    })

    const data: BarProps["data"] = {
        labels: labels,
        datasets: [
            {
                type: 'bar',
                label: 'Dataset 1',
                backgroundColor: function (context) {
                    const index = context.dataIndex;
                    const value = JSON.stringify(context.dataset.data[index]);
                    if (value === JSON.stringify([0, 1])) return GradeColors.E
                    if (value === JSON.stringify([1, 2])) return GradeColors.D
                    if (value === JSON.stringify([2, 3])) return GradeColors.C
                    if (value === JSON.stringify([3, 4])) return GradeColors.B
                    if (value === JSON.stringify([4, 5])) return GradeColors.BB
                    if (value === JSON.stringify([5, 6])) return GradeColors.A
                    if (value === JSON.stringify([6, 7])) return GradeColors.AA
                    return '#fff'
                },
                borderWidth: 0,
                borderRadius: 4,
                //하단 보더 Radius 옵션
                borderSkipped: false,
                barPercentage: 0.5,
                barThickness: 36,
                //@ts-ignore
                data: gradeData,
            },
        ],
    };

    const options: BarProps["options"] = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            intersect: true,
            mode: 'index',
        },
        plugins: {
            title: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
            legend: {
                display: false,
            },
            datalabels: {
                align: 'center',
                // center, start, end, right, bottom, left, top, 'number' number일때는 3시 방향을 0도를 기준으로 시계방향으로 설정가능
                anchor: 'center',
                // start, end, center 

                color: '#fff',
                clamp: false,
                //앵커포인트가 차트영역밖으로 나갔을때 차트 내부에서 앵커포인트 기준을 줄것인지 결정 디폴트는 false / t - 차트 영역 안에서 앵커포인트가 위치 된다., f - 차트 영역 밖에도 앵커포인트가 위치 할 수 있음.

                clip: false,
                // cliping의 약자로 레이블이 차트 밖으로 나갔을때 레이블을 클리핑 할지 말지를 결정  t - 클리핑처리, f - 클리핑처리하지 않음.

                //offset : 6,
                // offset은 차트와 떨어진 거리를 나타내고 디폴트는 4, align이 center일 때는 적용되지 않는다.

                //display : false,
                // true, false, 'auto'가능 auto일때는 다른 레이블이랑 겹쳤을때 숨겨준다.
                font: {
                    size: 14,
                    weight: 'normal'
                },
                formatter: function (value) {
                    const greadeData = value[0];
                    if (greadeData === 0) return 'E'
                    if (greadeData === 1) return 'D'
                    if (greadeData === 2) return 'C'
                    if (greadeData === 3) return 'B'
                    if (greadeData === 4) return 'BB'
                    if (greadeData === 5) return 'A'
                    if (greadeData === 6) return 'AA'
                    return ''
                }
            },
        },

        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    color: "#BDBDBD",
                }
            },
            y: {
                grid: {
                    //borderColor: 'transparent'
                    display: gridVisible,
                    drawBorder: false,
                    color: "#F5F5F5",
                },
                ticks: {
                    display: false,
                    stepSize: 1,
                },
                beginAtZero: true,
                max: 7,

            },
        },
    }

    return (
        <>
            <Bar
                data={data}
                options={options}
            />
        </>
    );
};

export default Grade;


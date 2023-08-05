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

interface GradeDataInterface {
    AA: number | null,
    A: number | null,
    BB: number | null,
    B: number | null,
    C: number | null,
    D: number | null,
    E: number | null
}

/**
 * @description Pecentage차트 컴포넌트
 */

const Pecentage01 = ({gradeData}: {gradeData: GradeDataInterface}) => {
    const labels = Object.keys(gradeData);
    const values = Object.values(gradeData);

    const data: BarProps["data"] = {
        labels: labels,
        datasets: [
            {
                type: 'bar',
                label: 'Dataset 1',
                backgroundColor: ["#2F80ED", "#2D9CDB", "#219653", "#27AE60", "#F7CF46", "#F2994A", "#FF4D15"],
                borderWidth: 0,
                borderRadius: 4,
                borderSkipped: false,
                barPercentage: 0.5,
                barThickness: 36,
                //@ts-ignore
                // data: valuesFilter,
                data: values
            },
        ],
    };

    const options: BarProps["options"]  = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 25,
            }
        },
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
            legend:{
                display: false,
            },
            datalabels: {
                align: 'end', 
                anchor: 'end',
                color: '#313131',
                clamp: false, 
                clip: false,
                font:{
                        size: 14,
                        weight: 'normal'
                },
                formatter: function(value) {
                        if(value === " "){return "NA"}
                        return value + '%';
                }
            },
        },
            
            scales: {
                x: {
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks:{
                            color: "#BDBDBD",
                        }
                },
                y: {
                        grid:{
                            display: true,
                            drawBorder: false,
                            color: "#F5F5F5",
                        },
                        ticks:{
                            color: "#BDBDBD",
                        },
                        beginAtZero: true,
                        max: 100,

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


export default Pecentage01
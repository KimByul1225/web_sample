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

interface Pecentage02Interface {
    year: string,
    pecentage: number
}

/**
 * @description Pecentage차트 타입2 컴포넌트
 */

export default function Pecentage01({chartData}: {chartData: Pecentage02Interface[]}) {
    const labels = chartData.map((item)=> item.year);
    const values = chartData.map((item)=> item.pecentage);


    const data : BarProps["data"]  = {
        labels: labels,
        datasets: [
            {
                type: 'bar',
                label: 'Dataset 2',
                data: values,
                backgroundColor: function(context) {
                        const index = context.dataIndex;
                        const value = context.dataset.data[index];
                        return value > 0 ? '#FF4D15' : '#2F80ED';
                },
                barPercentage: 0.3,
                borderRadius: 5,
                borderSkipped: false,
            }
        ],
    };
    const options : BarProps["options"] = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 30,
            }
        },
        interaction: {
            intersect: false,
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
                align: 'top', 
                anchor: 'end',
                color: '#313131',
                clamp: true, 
                clip: false,
                font:{
                        size: 14
                },
                formatter: function(value) {
                        if(value === "-"){return "NA"}
                        return value + '%';
                }
            },

        },
        scales: {
            x: {
                stacked: true,
                grid: {
                        display: false,
                        drawBorder: false,
                },
                ticks: {
                        color: "#828282",
                        font: {
                            size: 14,
                        },
                },
                
            },
            y: {
                beginAtZero: true,
                grid:{
                        display: true,
                        drawBorder: false,
                },
                ticks:{
                        callback: function(val) {
                            return val + "%";
                        },
                        display: true,
                        color: '#BDBDBD',
                        font: {
                            size: 12,
                        },
                        stepSize: 50,

                },
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
}



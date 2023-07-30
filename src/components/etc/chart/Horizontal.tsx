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
interface IchartData{
    value: number,
    avg: number,
}

export default function Horizontal({chartData}: {chartData:IchartData[]}) {

    const avg = chartData.map((item)=> item.avg);
    const value = chartData.map((item)=> item.value);

    const data : BarProps["data"]  = {
        labels: ["2020","2021","2022"],
        datasets: [
            {
                type: 'bar',
                label: "value",
                //@ts-ignore
                data: value,
                backgroundColor: "#2B8EFF",
                borderColor: "#2B8EFF",
                //barThickness: 20,
                borderRadius: 5,
                borderSkipped: false,
                categoryPercentage: 1,
                barPercentage: 0.5,
            },
            {
                type: 'bar',
                label: "average",
                //@ts-ignore
                data: avg,
                backgroundColor: "#E0E0E0",
                borderColor: "#E0E0E0",
                borderRadius: 5,
                borderSkipped: false,
                categoryPercentage: 1,
                barPercentage: 0.5,
            }
        ],
    };
    
    const options : BarProps["options"] = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 50,
                bottom: 10,
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
                align: 'right', 
                anchor: 'end',
                color: '#313131',
                clamp: true, 
                clip: false,
                font:{
                        size: 14
                },
            },
            //@ts-ignore
            htmlLegend: {
                containerID: "horizontal_chart",
            },

        },
        scales: {
            x: {
                grid: {
                        display: true,
                        drawBorder: false,
                },
                ticks: {
                        display: false,
                        color: "#828282",
                        font: {
                            size: 14,
                        },
                },
                
            },
            y: {
                beginAtZero: true,
                grid:{
                        display: false,
                        drawBorder: false,
                },
                ticks:{
                        display: true,
                        color: '#828282',
                        font: {
                            size: 12,
                        },
                },
            },
        },
    }

    // 이하 차트 legend custom
    //@ts-ignore
    const getOrCreateLegendList = (chart, id) => {
        const legendContainer = document.getElementById(id);
        let listContainer = legendContainer && legendContainer.querySelector('ul');
        if (!listContainer && legendContainer) {
            listContainer = document.createElement('ul');
            listContainer.style.position = 'absolute';
            listContainer.style.top = '0';
            listContainer.style.right = '0';
            listContainer.style.display = 'flex';
            listContainer.style.flexDirection = 'row';
            listContainer.style.justifyContent = 'flex-end';
            listContainer.style.margin = "0";
            listContainer.style.padding = "0";
            legendContainer.appendChild(listContainer);
        }
        return listContainer;
    };
    const htmlLegendPlugin = {
        id: 'htmlLegend',
        //@ts-ignore
        afterUpdate(chart, args, options) {
        const ul = getOrCreateLegendList(chart, options.containerID);
        // Remove old legend items
        
        if(!ul){
            return
        }
        while (ul.firstChild) {
            ul.firstChild.remove();
        }
        // Reuse the built-in legendItems generator
        
        const items = chart.options.plugins.legend.labels.generateLabels(chart);
        //@ts-ignore

        items.forEach(item => {
            const li = document.createElement('li');
            li.style.alignItems = 'center';
            li.style.cursor = 'pointer';
            li.style.display = 'flex';
            li.style.flexDirection = 'row';
            li.style.border = '1px solid #E0E0E0';
            li.style.borderRadius = '5px';
            li.style.padding = '5px';
            li.style.marginLeft = '15px';
            li.onclick = () => {
                const {type} = chart.config;
                if (type === 'pie' || type === 'doughnut') {
                // Pie and doughnut charts only have a single dataset and visibility is per item
                chart.toggleDataVisibility(item.index);
                } else {
                chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
                }
                chart.update();
            };
            // Color box
            const boxSpan = document.createElement('span');
            boxSpan.style.background = item.strokeStyle;
            boxSpan.style.borderColor = item.strokeStyle;
            boxSpan.style.borderWidth = item.lineWidth + 'px';
            boxSpan.style.display = 'inline-block';
            boxSpan.style.height = '8px';
            boxSpan.style.marginRight = '5px';
            boxSpan.style.width = '8px';
            boxSpan.style.borderRadius = '4px';

            // Text
            const textContainer = document.createElement('p');
            textContainer.style.color = '#828282';
            textContainer.style.fontSize = '12px';
            textContainer.style.lineHeight = '12px';
            textContainer.style.margin = "0";
            textContainer.style.padding = "0";
            textContainer.style.userSelect = "none";
            textContainer.style.textDecoration = item.hidden ? 'line-through' : '';
            const text = document.createTextNode(item.text);
            textContainer.appendChild(text);
            li.appendChild(boxSpan);
            li.appendChild(textContainer);
            ul.appendChild(li);
            });
        }
    };
    return (
        <>
            <div 
                id="horizontal_chart"
                style={{position: "relative"}}
            >
            </div>
            <Bar 
                data={data} 
                options={options} 
                plugins={[htmlLegendPlugin]}
            />
        </>
    );
}


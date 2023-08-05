import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend,
    ChartDataLabels
);

interface IdoughnutChart {
    label: string,
    data: number,
    percentage?: number
}

/**
 * @description 도넛차트 컴포넌트
 */

export default function DoughnutChart ({chartData}: {chartData: IdoughnutChart[]}) {
    const sampleColor =["#2F80ED", "#2D9CDB", "#219653", "#27AE60", "#F7CF46", "#F2994A", "#FF4D15"];
    const labels = chartData.map((item) => item.label);
    const percentageMap = chartData.map((item) => item.percentage);
    const getOrCreateLegendList = (chart: any, id: string) => {
        const legendContainer = document.getElementById(id);
        let listContainer = legendContainer?.querySelector('ul')
        if (!listContainer) {
            listContainer = document.createElement('ul');
            listContainer.style.display = 'flex';
            listContainer.style.flexDirection = 'row';
            listContainer.style.justifyContent = 'flex-start';
            listContainer.style.flexWrap = 'wrap';
            listContainer.style.margin = "0";
            listContainer.style.padding = "0";
            listContainer.style.paddingRight = "30";
            legendContainer?.appendChild(listContainer);
        }
        return listContainer;
    };

    const htmlLegendPlugin = {
        id: 'htmlLegend',
        afterUpdate(chart: any, args: any, options: any) {
            const ul = getOrCreateLegendList(chart, options.containerID);
            while (ul.firstChild) {
                ul.firstChild.remove();
            }
            const items = chart.options.plugins.legend.labels.generateLabels(chart);
            for (const item of items) {
                if (item.text === "totalArea") {
                    continue;
                }
                if (item.text === "전체 최상위") {
                    continue;
                }
                const li = document.createElement('li');
                li.style.alignItems = 'center';
                li.style.cursor = 'pointer';
                li.style.display = 'flex';
                li.style.flexDirection = 'row';
                li.style.border = '1px solid #E0E0E0';
                li.style.borderRadius = '5px';
                li.style.padding = '5px';
                li.style.marginRight = '10px';
                li.style.marginBottom = '10px';
                li.onclick = () => {
                        // Pie and doughnut charts only have a single dataset and visibility is per item
                        chart.toggleDataVisibility(item.index);
                        chart.update();
                };
                // Color box
                const boxSpan = document.createElement('span');
                boxSpan.style.background = item.fillStyle;
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
            }
        }
    };


    const data = {
        labels: labels,
        datasets: [
            {
                label: '도넛차트',
                backgroundColor: sampleColor,
                hoverBackgroundColor: sampleColor,                    
                borderWidth: 0,
                hoverBorderWidth: 0,
                datalabels: {
                        color: '#000',
                        align: 'start',
                        offset: 30,
                        anchor: 'end',
                        font: {
                            size: 12,
                        },
                        formatter: function(value: any) {
                            if(value < 1) return ""
                            return value + '%';
                        }
                },
                data: percentageMap,
            },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        legend: {
            display: false
        },
        cutout: 70,
        layout: {
            padding: {
                top: 30,
                bottom: 30,
                left: 30,
                right: 30
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false,
            },
            htmlLegend: {
                // ID of the container to put the legend in
                containerID: "doughnut_chart",
            },
        },
        scales: {
            x: {
                grid: {
                        display: false,
                        drawBorder: false,
                },
                ticks: {
                        display: false,
                }
            },
            y: {
                grid: {
                        display: false,
                        drawBorder: false,
                },
                ticks: {
                        display: false,
                }

            },
        },
    }

    return (
        <>    
            <div
                id="doughnut_chart"
                style={{ position: "relative" }}
            >
            </div>
            <Doughnut 
                //@ts-ignore
                data={data}
                //@ts-ignore
                options={options}
                plugins={[htmlLegendPlugin]}
            />
        </>
    );
}

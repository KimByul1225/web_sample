import React from 'react';
import { Bar } from 'react-chartjs-2';
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

import ChartDataLabels from 'chartjs-plugin-datalabels';



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

interface IComboChartData {
	evaluationYear: string;
	average: number;
	value: number;
	max: number;
	min: number;
}

/**
 * @description 콤보차트 타입1(혼합) 컴포넌트
 */

export default function Combo01({
	chartData,
}: {
	chartData: IComboChartData[];
}) {
	// console.log("totalChartData", totalChartData);
	const labels = chartData.map(
		(element: IComboChartData) => element.evaluationYear
	);
	const averages = chartData.map((element: IComboChartData) =>
		element.average
	);
	const values = chartData.map((element: IComboChartData) =>
		element.value
	);
	const maxValues = chartData.map((element: IComboChartData) =>
		element.max
	);
	const minValues = chartData.map((element: IComboChartData) =>
		element.min
	);

	const maxMinValues = minValues.map((_, i) => [minValues[i], maxValues[i]]);
	const getOrCreateLegendList = (chart: any, id: string) => {
		const legendContainer = document.getElementById(id);
		let listContainer = legendContainer?.querySelector('ul');
		if (!listContainer) {
			listContainer = document.createElement('ul');
			listContainer.style.position = 'absolute';
			listContainer.style.top = '0';
			listContainer.style.right = '0';
			listContainer.style.display = 'flex';
			listContainer.style.flexDirection = 'row';
			listContainer.style.justifyContent = 'flex-end';
			listContainer.style.margin = '0';
			listContainer.style.padding = '0';
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
			const items =
				chart.options.plugins.legend.labels.generateLabels(chart);
			for (const item of items) {
				if (item.text === 'totalArea') {
					continue;
				}
				if (item.text === '전체 최상위') {
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
				li.style.marginLeft = '15px';
				li.onclick = () => {
					if (item.text === '전체 최상위/최하위') {
						// 최상위, 최하위, totalArea 한꺼번에 작동하도록 작업
						chart.setDatasetVisibility(
							0,
							!chart.isDatasetVisible(0)
						);
						chart.setDatasetVisibility(
							1,
							!chart.isDatasetVisible(1)
						);
						chart.setDatasetVisibility(
							4,
							!chart.isDatasetVisible(4)
						);
						chart.update();
						return;
					}
					chart.setDatasetVisibility(
						item.datasetIndex,
						!chart.isDatasetVisible(item.datasetIndex)
					);
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
				textContainer.style.margin = '0';
				textContainer.style.padding = '0';
				textContainer.style.userSelect = 'none';
				textContainer.style.textDecoration = item.hidden
					? 'line-through'
					: '';
				const text = document.createTextNode(item.text);
				textContainer.appendChild(text);
				li.appendChild(boxSpan);
				li.appendChild(textContainer);
				ul.appendChild(li);
			}
		},
	};
	const data = {
		labels: labels,
		datasets: [
			{
				type: 'line',
				label: "Sample",
				backgroundColor: '#2F80ED',
				datalabels: {
					color: '#2F80ED',
					align: 'right',
					anchor: 'center',
					offset: 10,
					font: {
						size: 12,
						weight: 'bold',
					},
				},
				borderWidth: 1,
				borderSkipped: false,
				pointStyle: 'circle',
				pointRadius: 7.5,
				pointHoverRadius: 7.5,
				borderColor: 'rgba(0,0,0,0)',
				data: values,
			},
			{
				type: 'line',
				label: '전체 최상위',
				backgroundColor: '#ACACAC',
				borderWidth: 1,
				borderSkipped: false,
				datalabels: {
					color: '#828282',
					align: 'left',
					anchor: 'center',
					offset: 10,
					font: {
						size: 12,
					},
				},
				pointStyle: 'circle',
				pointRadius: 7.5,
				pointHoverRadius: 7.5,
				borderColor: 'rgba(0,0,0,0)',
				data: maxValues,
			},
			{
				type: 'line',
				label: '전체 최상위/최하위',
				backgroundColor: '#ACACAC',
				borderWidth: 1,
				datalabels: {
					color: '#828282',
					align: 'left',
					anchor: 'center',
					offset: 10,
					font: {
						size: 12,
					},
				},
				borderSkipped: false,
				pointStyle: 'circle',
				pointRadius: 7.5,
				pointHoverRadius: 7.5,
				borderColor: 'rgba(0,0,0,0)',
				data: minValues,
			},
			{
				type: 'line',
				label: '전체 평균',
				backgroundColor: '#A8CAF9',
				datalabels: {
					color: '#828282',
					align: 'left',
					anchor: 'center',
					offset: 10,
					font: {
						size: 12,
					},
				},
				borderWidth: 1,
				borderSkipped: false,
				pointStyle: 'circle',
				pointRadius: 7.5,
				pointHoverRadius: 7.5,
				borderColor: 'rgba(0,0,0,0)',
				data: averages,
			},

			{
				type: 'bar',
				label: 'totalArea',
				datalabels: {
					display: false,
				},
				barThickness: 15,
				pointStyle: 'circle',
				backgroundColor: '#EAF3FF',
				data: maxMinValues,
				borderSkipped: false,
				borderRadius: 0,
				borderColor: 'rgba(0,0,0,0)',
			},
		],
	};
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		interaction: {
			intersect: true,
			mode: 'index',
		},
		legend: {
			display: false,
		},
		layout: {
			padding: {
				top: 60,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
			},
			htmlLegend: {
				containerID: "combo_chart01",
			},
			datalabels: {
				color: '#2F80ED',
				clamp: true,
				clip: false,
				display: true,
				font: {
					size: 10,
					weight: 'normal',
				},
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
					color: '#BDBDBD',
				},
			},
			y: {
				grid: {
					drawBorder: false,
				},
				beginAtZero: true,
				min: 0,
				ticks: {
					color: '#BDBDBD',
				},
			},
		},
	};
	return (
		<>
			<div id="combo_chart01" style={{ position: 'relative' }}></div>
			<Bar
				//@ts-ignore
				data={data}
				//@ts-ignore
				options={options}
				plugins={[htmlLegendPlugin]}
			/>
		</>
	);
}

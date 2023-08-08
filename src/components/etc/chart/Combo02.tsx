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
	LineController
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
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
	LineController,
	ChartDataLabels
);

interface BarProps {
	options: ChartOptions<'bar'|'line'>;
	data: ChartData<'bar'|'line'>;
}

interface IComboChart02Data {
	year: string,
	barData: number,
	lineData: number,
}

/**
 * @description 콤보차트 타입2(바,라인차트) 컴포넌트
 */


export default function EnvironmentChart({chartData}: {chartData: IComboChart02Data[]}) {
	const labels = chartData.map((element: IComboChart02Data) => element.year);

	const barData = chartData.map((element: IComboChart02Data) => element.barData);
	const lineData = chartData.map((element: IComboChart02Data) => element.lineData);

	// const units = chartData.map((element: IenviromentChartData) => element.unit);
	// const lineData = lineChartData ? lineChartData.map((element: IenviromentLineChartData) => element.value) : [];
	// const lineUnits = lineChartData?.map((element: IenviromentLineChartData) => element.unit) || [];

	const data : BarProps["data"]  = {
		labels: labels,
		datasets: [
			{
				type: 'line',
				label: "Line 라벨",
				borderColor: '#38B7FF',
				backgroundColor: '#38B7FF',
				borderWidth: 2,
				borderDash: [5, 5],
				pointStyle: 'circle',
				pointRadius: 5,
				pointHoverRadius: 5,
				data: lineData,
				datalabels: {
						align: 'top', 
						anchor: 'end',
						color: "#313131",
						clamp: true, 
						clip: false,
						font:{
							size: 12,
							weight: 'bold'
						},
						// formatter: function(value, context) {
						// 	return lineUnits ? `${value} ${lineUnits[context.dataIndex]}` : `${value}`
						// }
				}
			},
			{
				type: 'bar',
				label: "Bar라벨",
				backgroundColor: "#FF5F2D",
				data: barData,
				borderColor: "#FF5F2D",
				barThickness: 75,
				borderRadius: 5,
				borderSkipped: false,
				datalabels: {
						align: 'top', 
						anchor: 'end',
						color: "#313131",
						clamp: true, 
						clip: false,
						font:{
							size: 12,
							weight: 'bold'
						},
						// formatter: function(value, context) {
						// 	return `${value} ${units[context.dataIndex]}`
						// }
				}
			},
			
		],
	};
	const options : BarProps["options"] = {
		responsive: true,
		maintainAspectRatio: false,
		layout: {
			padding: {
				top: 50,
				left: 5,
				right: 5,
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
			//@ts-ignore
			htmlLegend: {
				containerID: "combo_chart02",
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
						font:{
							size: 14 
						},
				}
			},
			y: {
				//beginAtZero: true,
				// min: 0,
				// max: 100,
				grid:{
						display: true,
						drawBorder: false,
				},
				ticks:{
						display: true,
						color: "#828282",
						font:{
							size: 12 
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
			// if(!lineChartData) ul?.firstElementChild?.remove();
		}
	};
	return (
		<>
			<div 
				id="combo_chart02"
				style={{position: "relative"}}
			>
			</div>
			<Chart 
				data={data}
				options={options}
				plugins={[htmlLegendPlugin]} 
				type={'bar'}               
			/>
		</>
	);
}


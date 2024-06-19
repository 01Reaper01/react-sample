import { useState, useEffect, useMemo } from 'react'
import { Chart } from 'primereact/chart'
import { barChartData } from '../../dummyData.json'
import moment from 'moment'

const BarChart = ({ filterDateRange }) => {
	const [chartData, setChartData] = useState(null)
	const [chartOptions, setChartOptions] = useState(null)

	const dataSet = useMemo(() => {
		if (!filterDateRange || filterDateRange.length !== 2)
			return barChartData

		const [startDate, endDate] = filterDateRange
		const filteredData = Object.keys(barChartData).reduce((acc, date) => {
			if (moment(date).isBetween(startDate, endDate, 'days', '[]')) {
				acc[date] = barChartData[date]
			}
			return acc
		}, {})

		return filteredData
	}, [filterDateRange])

	useEffect(() => {
		const initializeChart = () => {
			const documentStyle = getComputedStyle(document.documentElement)
			const textColor = documentStyle.getPropertyValue('--text-color')
			const textColorSecondary = documentStyle.getPropertyValue(
				'--text-color-secondary'
			)
			const surfaceBorder =
				documentStyle.getPropertyValue('--surface-border')

			const labels = Object.keys(dataSet).map((date) =>
				moment(date).format('MMM YY')
			)
			const casualWearData = Object.values(dataSet).map(
				(data) => data.casual
			)
			const formalWearData = Object.values(dataSet).map(
				(data) => data.formal
			)
			const footwearData = Object.values(dataSet).map(
				(data) => data.footwear
			)

			const data = {
				labels: labels,
				datasets: [
					{
						label: 'Casual Wear',
						data: casualWearData,
						backgroundColor:
							documentStyle.getPropertyValue('--blue-500'),
						borderColor:
							documentStyle.getPropertyValue('--blue-500'),
						tension: 0.4,
					},
					{
						label: 'Formal Wear',
						data: formalWearData,
						backgroundColor:
							documentStyle.getPropertyValue('--pink-500'),
						borderColor:
							documentStyle.getPropertyValue('--pink-500'),
						tension: 0.4,
					},
					{
						label: 'Footwear',
						data: footwearData,
						backgroundColor:
							documentStyle.getPropertyValue('--green-500'),
						borderColor:
							documentStyle.getPropertyValue('--green-500'),
						tension: 0.4,
					},
				],
			}

			const options = {
				maintainAspectRatio: false,
				aspectRatio: 0.8,
				plugins: {
					legend: {
						labels: {
							color: textColor,
						},
					},
				},
				scales: {
					x: {
						ticks: {
							color: textColorSecondary,
							font: {
								weight: 500,
							},
						},
						grid: {
							display: false,
							drawBorder: false,
						},
					},
					y: {
						ticks: {
							color: textColorSecondary,
						},
						grid: {
							color: surfaceBorder,
							drawBorder: false,
						},
					},
				},
			}

			setChartData(data)
			setChartOptions(options)
		}

		// Delay initialization to ensure styles are loaded
		const timeoutId = setTimeout(initializeChart, 100)

		// Cleanup timeout on unmount
		return () => clearTimeout(timeoutId)
	}, [dataSet])

	if (!chartData || !chartOptions) {
		return <p>Loading chart...</p>
	}

	return (
		<Chart
			className={'h-[90%]'}
			type='bar'
			data={chartData}
			options={chartOptions}
		/>
	)
}

export default BarChart

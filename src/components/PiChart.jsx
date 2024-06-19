import { useState, useEffect, useMemo } from 'react'
import { Chart } from 'primereact/chart'
import moment from 'moment'
import { pieChartData } from '../../dummyData.json'

const PieChart = ({ selectedYear }) => {
	console.log(selectedYear)
	const [chartData, setChartData] = useState(null)
	const [chartOptions, setChartOptions] = useState(null)

	const dataSet = useMemo(() => {
		return pieChartData[selectedYear || moment().format('YYYY')]
	}, [selectedYear])

	useEffect(() => {
		const initializeChart = () => {
			const documentStyle = getComputedStyle(document.documentElement)
			console.log(dataSet)
			const labels = Object.keys(dataSet)
			const dataValues = Object.values(dataSet)

			// Define colors for each category
			const backgroundColors = [
				documentStyle.getPropertyValue('--blue-500'),
				documentStyle.getPropertyValue('--yellow-500'),
				documentStyle.getPropertyValue('--green-500'),
				documentStyle.getPropertyValue('--purple-500'),
				documentStyle.getPropertyValue('--orange-500'),
			]

			// Ensure there are enough colors for the categories
			const hoverBackgroundColors = backgroundColors.map(
				(color) => `${color}B3` // Adding transparency to hover colors
			)

			const data = {
				labels: labels,
				datasets: [
					{
						data: dataValues,
						backgroundColor: backgroundColors,
						hoverBackgroundColor: hoverBackgroundColors,
					},
				],
			}

			const options = {
				plugins: {
					legend: {
						position: 'right', // Position legend on the right-hand side
						labels: {
							usePointStyle: true,
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
	}, [selectedYear])

	if (!chartData || !chartOptions) {
		return <p>Loading chart...</p>
	}

	return (
		<Chart
			className={'h-[90%]'}
			type='pie'
			data={chartData}
			options={chartOptions}
		/>
	)
}

export default PieChart

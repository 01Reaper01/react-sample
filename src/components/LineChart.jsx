import { useState, useEffect, useMemo } from 'react'
import { Chart } from 'primereact/chart'
import moment from 'moment'
import { lineChartData } from '../../dummyData.json'

const LineChart = ({ filterDateRange }) => {
	const [chartData, setChartData] = useState(null)
	const [chartOptions, setChartOptions] = useState(null)

	const dataSet = useMemo(() => {
		if (!filterDateRange || filterDateRange.length !== 2)
			return lineChartData

		const [startDate, endDate] = filterDateRange
		const filteredData = Object.keys(lineChartData).reduce((acc, date) => {
			if (moment(date).isBetween(startDate, endDate, 'days', '[]')) {
				acc[date] = lineChartData[date]
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
			const contentMarketingData = Object.values(dataSet).map(
				(data) => data.content
			)
			const socialMediaMarketingData = Object.values(dataSet).map(
				(data) => data.social
			)
			const emailMarketingData = Object.values(dataSet).map(
				(data) => data.email
			)

			const data = {
				labels: labels,
				datasets: [
					{
						label: 'Content Marketing',
						data: contentMarketingData,
						fill: false,
						borderColor:
							documentStyle.getPropertyValue('--blue-500'),
						tension: 0.4,
					},
					{
						label: 'Social Media Marketing',
						data: socialMediaMarketingData,
						fill: false,
						borderColor:
							documentStyle.getPropertyValue('--pink-500'),
						tension: 0.4,
					},
					{
						label: 'Email Marketing',
						data: emailMarketingData,
						fill: false,
						borderColor:
							documentStyle.getPropertyValue('--green-500'),
						tension: 0.4,
					},
				],
			}

			const options = {
				maintainAspectRatio: false,
				aspectRatio: 0.6,
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
						},
						grid: {
							color: surfaceBorder,
						},
					},
					y: {
						ticks: {
							color: textColorSecondary,
						},
						grid: {
							color: surfaceBorder,
						},
					},
				},
			}

			setChartData(data)
			setChartOptions(options)
		}

		initializeChart()
	}, [dataSet])

	if (!chartData || !chartOptions) {
		return <p>Loading chart...</p>
	}

	return (
		<Chart
			className={'h-[90%]'}
			type='line'
			data={chartData}
			options={chartOptions}
		/>
	)
}

export default LineChart
